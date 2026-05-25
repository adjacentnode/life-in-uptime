const baseUrl = process.env.LINK_CHECK_BASE_URL || "http://127.0.0.1:3101";
const checkExternal = process.env.CHECK_EXTERNAL === "1";
const maxPages = Number(process.env.LINK_CHECK_MAX_PAGES || 80);
const startPaths = (process.env.LINK_CHECK_PATHS || "/")
  .split(",")
  .map((path) => path.trim())
  .filter(Boolean);

const visitedPages = new Set();
const checkedUrls = new Set();
const pageQueue = [...startPaths.map((path) => new URL(path, baseUrl).href)];
const failures = [];

function shouldSkip(rawHref) {
  return (
    !rawHref ||
    rawHref.startsWith("#") ||
    rawHref.startsWith("mailto:") ||
    rawHref.startsWith("tel:") ||
    rawHref.startsWith("javascript:")
  );
}

function normalizeUrl(rawHref, pageUrl) {
  try {
    const url = new URL(rawHref, pageUrl);
    url.hash = "";
    return url;
  } catch {
    return null;
  }
}

async function checkUrl(url, sourcePage) {
  if (checkedUrls.has(url.href)) return;
  checkedUrls.add(url.href);

  if (url.origin !== new URL(baseUrl).origin && !checkExternal) return;

  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      headers: { "user-agent": "life-in-uptime-link-check/1.0" },
    });

    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: { "user-agent": "life-in-uptime-link-check/1.0" },
      });
    }

    if (response.status >= 400) {
      failures.push(`${response.status} ${url.href} linked from ${sourcePage}`);
    }
  } catch (error) {
    failures.push(`${url.href} linked from ${sourcePage}: ${error.message}`);
  }
}

function extractLinks(html) {
  return [...html.matchAll(/\bhref=["']([^"']+)["']/g)].map((match) => match[1]);
}

while (pageQueue.length > 0 && visitedPages.size < maxPages) {
  const pageUrl = pageQueue.shift();
  if (!pageUrl || visitedPages.has(pageUrl)) continue;
  visitedPages.add(pageUrl);

  const response = await fetch(pageUrl, { redirect: "follow" });
  if (!response.ok) {
    failures.push(`${response.status} ${pageUrl}`);
    continue;
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) continue;

  const html = await response.text();
  const links = extractLinks(html);

  for (const rawHref of links) {
    if (shouldSkip(rawHref)) continue;
    const url = normalizeUrl(rawHref, pageUrl);
    if (!url) continue;

    await checkUrl(url, pageUrl);

    if (url.origin === new URL(baseUrl).origin && !visitedPages.has(url.href)) {
      const pathname = url.pathname;
      const looksLikePage =
        !pathname.startsWith("/_next/") &&
        !pathname.includes(".") &&
        pageQueue.length + visitedPages.size < maxPages;

      if (looksLikePage) pageQueue.push(url.href);
    }
  }
}

if (failures.length > 0) {
  console.error(`Broken links found (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Checked ${visitedPages.size} pages and ${checkedUrls.size} links. No broken links found.`);
