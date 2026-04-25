import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";
import { transcripts, type EpisodeTranscript } from "@/lib/transcripts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return transcripts.map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const ep = transcripts.find((e) => e.slug === slug);
  if (!ep) return { title: "Episode Not Found | Life in Uptime" };

  const guestPart = ep.guest ? ` with ${ep.guest}` : "";
  return {
    title: `${ep.title} | Life in Uptime`,
    description: ep.description.slice(0, 160),
    openGraph: {
      title: `${ep.title}${guestPart}`,
      description: ep.description.slice(0, 200),
      type: "article",
    },
  };
}

/** Parse a transcript line and render with bold speaker name and subtle timestamp */
function TranscriptLine({ line }: { line: string }) {
  // Standard format: "Speaker Name (0:04 - 0:15) Text..."
  // Also handle bracket format: "[Kevin]" or "[Alexis]"
  
  // Match "Name Name (timestamp) text"
  const speakerTimestampMatch = line.match(
    /^([A-Z][a-zA-ZÀ-ÿ\s'.-]+?)\s+(\(\d+:\d+(?:\s*-\s*\d+:\d+)?\))\s+([\s\S]*)$/
  );
  if (speakerTimestampMatch) {
    const [, speaker, timestamp, content] = speakerTimestampMatch;
    return (
      <p className="mb-3 leading-relaxed">
        <span className="font-bold text-navy">{speaker}</span>{" "}
        <span className="text-xs text-navy/40 font-mono">{timestamp}</span>{" "}
        <span className="text-navy/80">{content}</span>
      </p>
    );
  }

  // Match bracket speaker: "[Kevin]" or "[Alexis]" on its own line
  const bracketSpeakerMatch = line.match(/^\[([^\]]+)\]$/);
  if (bracketSpeakerMatch) {
    return (
      <p className="mt-4 mb-1">
        <span className="font-bold text-navy">{bracketSpeakerMatch[1]}</span>
      </p>
    );
  }

  // Empty line
  if (!line.trim()) return <></>;

  // Regular text
  return <p className="mb-3 leading-relaxed text-navy/80">{line}</p>;
}

function Transcript({ text }: { text: string }) {
  if (!text.trim()) {
    return (
      <p className="text-navy/40 italic">
        Transcript not yet available for this episode.
      </p>
    );
  }

  const lines = text.split("\n");
  return (
    <div className="font-serif text-[15px] leading-7">
      {lines.map((line, i) => (
        <TranscriptLine key={i} line={line} />
      ))}
    </div>
  );
}

export default async function EpisodePage({ params }: Props) {
  const { slug } = await params;
  const ep = transcripts.find((e) => e.slug === slug);
  if (!ep) notFound();

  return (
    <div className="min-h-screen" style={{ background: "#f0f4f8" }}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/episodes"
            className="text-sm font-semibold text-sky-500 hover:underline flex items-center gap-1"
            style={{ color: "var(--sky-blue-mid)" }}
          >
            ← All Episodes
          </Link>
        </div>

        {/* Episode header card */}
        <div className="bg-white rounded-2xl p-8 border border-sky-200/50 shadow-sm mb-8">
          {/* Badge row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-black text-white flex-shrink-0"
              style={{ background: "var(--sky-blue-mid, #7ec8e3)" }}
            >
              {ep.episodeNumber}
            </span>
            {ep.airDate && (
              <span className="text-sm text-navy/50">{ep.airDate}</span>
            )}
          </div>

          {/* Title */}
          <h1
            className="text-3xl font-black leading-tight mb-4"
            style={{ color: "#1a2b4a" }}
          >
            {ep.title}
          </h1>

          {/* Guest info */}
          {ep.guest && (
            <div className="mb-4 flex flex-col gap-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-bold text-lg" style={{ color: "#1a2b4a" }}>
                  {ep.guest}
                </span>
                {ep.guestLinkedIn && (
                  <a
                    href={ep.guestLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-2 py-0.5 rounded-full border transition-colors"
                    style={{
                      color: "var(--sky-blue-mid, #7ec8e3)",
                      borderColor: "var(--sky-blue-mid, #7ec8e3)",
                    }}
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
              {(ep.guestTitle || ep.guestCompany) && (
                <p className="text-sm text-navy/60">
                  {[ep.guestTitle, ep.guestCompany].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>
          )}

          {/* Description */}
          {ep.description && (
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#1a2b4a", opacity: 0.75 }}
            >
              {ep.description}
            </p>
          )}

          {/* Listen / Watch buttons */}
          <div className="flex flex-wrap gap-3">
            {ep.packetPushersUrl && (
              <a
                href={ep.packetPushersUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--sky-blue-mid, #7ec8e3)" }}
              >
                🎧 Listen on Packet Pushers
              </a>
            )}
            {ep.youtubeUrl && (
              <a
                href={ep.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                style={{
                  background: "#fff",
                  color: "#1a2b4a",
                  border: "1.5px solid #e5e7eb",
                }}
              >
                ▶ Watch on YouTube
              </a>
            )}
          </div>
        </div>

        {/* Transcript */}
        <div className="bg-white rounded-2xl p-8 border border-sky-200/50 shadow-sm">
          <h2
            className="text-xl font-black mb-6"
            style={{ color: "#1a2b4a" }}
          >
            Transcript
          </h2>
          <Transcript text={ep.transcript} />
        </div>

        {/* Bottom back link */}
        <div className="mt-10 text-center">
          <Link
            href="/episodes"
            className="text-sm font-semibold hover:underline"
            style={{ color: "var(--sky-blue-mid, #7ec8e3)" }}
          >
            ← Back to all episodes
          </Link>
        </div>
      </div>
    </div>
  );
}
