const baseUrl = process.env.OG_CHECK_BASE_URL || "http://127.0.0.1:3101";
const paths = (process.env.OG_CHECK_PATHS || "/")
  .split(",")
  .map((path) => path.trim())
  .filter(Boolean);

const failures = [];

function extractMeta(html, property) {
  const pattern = new RegExp(
    `<meta\\s+(?:property|name)=["']${property}["']\\s+content=["']([^"']+)["'][^>]*>|<meta\\s+content=["']([^"']+)["']\\s+(?:property|name)=["']${property}["'][^>]*>`,
    "i",
  );
  const match = pattern.exec(html);
  return match ? match[1] || match[2] : "";
}

async function checkImage(imageUrl, sourcePath, label) {
  const url = new URL(imageUrl, baseUrl);
  const response = await fetch(url, { method: "GET", redirect: "follow" });
  const contentType = response.headers.get("content-type") || "";

  if (!response.ok) {
    failures.push(`${sourcePath}: ${label} returned ${response.status} at ${url.href}`);
  } else if (!contentType.startsWith("image/")) {
    failures.push(`${sourcePath}: ${label} is not an image at ${url.href}, got ${contentType || "unknown"}`);
  }
}

for (const path of paths) {
  const pageUrl = new URL(path, baseUrl);
  const response = await fetch(pageUrl, { redirect: "follow" });

  if (!response.ok) {
    failures.push(`${path}: page returned ${response.status}`);
    continue;
  }

  const html = await response.text();
  const ogImage = extractMeta(html, "og:image");
  const twitterImage = extractMeta(html, "twitter:image");

  if (!ogImage) failures.push(`${path}: missing og:image`);
  if (!twitterImage) failures.push(`${path}: missing twitter:image`);

  if (ogImage) await checkImage(ogImage, path, "og:image");
  if (twitterImage) await checkImage(twitterImage, path, "twitter:image");
}

if (failures.length > 0) {
  console.error(`OG check failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Checked OG images for ${paths.length} page(s).`);
