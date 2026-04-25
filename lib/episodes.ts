export interface Episode {
  title: string;
  description: string;
  pubDate: string;
  duration: string;
  link: string;
  audioUrl: string;
  episodeNumber: string;
  guest?: string;
}

const RSS_URL = "https://packetpushers.net/podcast/life-in-uptime/feed/";

function extractText(xml: string, tag: string): string {
  const cdataMatch = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, "i").exec(xml);
  if (cdataMatch) return cdataMatch[1].trim();
  const match = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i").exec(xml);
  return match ? match[1].replace(/<[^>]+>/g, "").trim() : "";
}

function extractAttr(xml: string, tag: string, attr: string): string {
  const match = new RegExp(`<${tag}[^>]+${attr}="([^"]*)"`, "i").exec(xml);
  return match ? match[1] : "";
}

export async function getEpisodes(): Promise<Episode[]> {
  try {
    const res = await fetch(RSS_URL, {
      next: { revalidate: 3600 }, // cache 1 hour
    });
    const xml = await res.text();

    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const episodes: Episode[] = [];
    let match;
    let i = 0;

    while ((match = itemRegex.exec(xml)) !== null) {
      const item = match[1];
      const title = extractText(item, "title");
      const rawDesc = extractText(item, "description") || extractText(item, "itunes:summary");
      // strip HTML tags from description
      const description = rawDesc.replace(/<[^>]+>/g, "").trim().slice(0, 300) + (rawDesc.length > 300 ? "…" : "");
      const pubDate = extractText(item, "pubDate");
      const duration = extractText(item, "itunes:duration");
      const link = extractText(item, "link") || extractAttr(item, "link", "href");
      const audioUrl = extractAttr(item, "enclosure", "url");
      const epNum = extractText(item, "itunes:episode") || String(episodes.length + 1);

      if (title) {
        episodes.push({
          title,
          description,
          pubDate,
          duration: formatDuration(duration),
          link,
          audioUrl,
          episodeNumber: epNum,
        });
      }
      i++;
      if (i > 50) break;
    }

    return episodes;
  } catch (e) {
    console.error("Failed to fetch episodes:", e);
    return [];
  }
}

function formatDuration(raw: string): string {
  if (!raw) return "";
  // already formatted like "1h 5m"
  if (raw.includes("h") || raw.includes("m")) return raw;
  // seconds
  const secs = parseInt(raw, 10);
  if (isNaN(secs)) return raw;
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

export function formatDate(raw: string): string {
  try {
    const d = new Date(raw);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return raw;
  }
}
