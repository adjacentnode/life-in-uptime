import Link from "next/link";
import { getEpisodes, formatDate } from "@/lib/episodes";
import { transcripts } from "@/lib/transcripts";

export const metadata = {
  title: "Episodes | Life in Uptime",
  description: "All episodes of Life in Uptime — real stories from engineers, IT leaders, and technologists.",
};

/**
 * Given an RSS episode number string (e.g. "1", "12"), find the matching
 * transcript slug. Transcripts store zero-padded numbers ("001", "012").
 */
function getSlugForEpisode(episodeNumber: string): string | null {
  const padded = episodeNumber.padStart(3, "0");
  const match = transcripts.find((t) => t.episodeNumber === padded);
  return match ? match.slug : null;
}

export default async function EpisodesPage() {
  const episodes = await getEpisodes();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-sky-blue-mid mb-2">
          All Episodes
        </p>
        <h1 className="text-4xl font-black text-navy">Every conversation.</h1>
        <p className="text-navy/60 mt-3 max-w-xl">
          New episodes drop every other Thursday on the Packet Pushers network.
        </p>
      </div>

      {episodes.length === 0 ? (
        <p className="text-navy/40">Could not load episodes. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {episodes.map((ep, i) => {
            const slug = getSlugForEpisode(ep.episodeNumber || String(i + 1));
            const internalHref = slug ? `/episodes/${slug}` : null;

            return (
              <div
                key={ep.link || i}
                className="episode-card bg-white rounded-2xl p-6 border border-sky-blue/30 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                {/* Episode number bubble */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black text-white"
                  style={{ background: "var(--sky-blue-mid)" }}
                >
                  {ep.episodeNumber || String(episodes.length - i)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    {internalHref ? (
                      <Link
                        href={internalHref}
                        className="text-base font-bold text-navy hover:text-sky-blue-mid transition-colors"
                      >
                        {ep.title}
                      </Link>
                    ) : (
                      <span className="text-base font-bold text-navy">
                        {ep.title}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-navy/55 leading-relaxed mb-2">
                    {ep.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-navy/40">
                    <span>{formatDate(ep.pubDate)}</span>
                    {ep.duration && <span>{ep.duration}</span>}
                    {internalHref && (
                      <Link
                        href={internalHref}
                        className="text-sky-blue-mid font-semibold hover:underline"
                      >
                        Read transcript →
                      </Link>
                    )}
                    {ep.link && (
                      <a
                        href={ep.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy/40 hover:text-sky-blue-mid font-semibold transition-colors"
                      >
                        Listen on Packet Pushers ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
