import Image from "next/image";
import Link from "next/link";
import { formatDate, getEpisodes } from "@/lib/episodes";
import { transcripts } from "@/lib/transcripts";

const HOSTS = [
  {
    name: "Alexis Bertholf",
    photo: "/alexis-bertholf-podcast.jpg",
    role: "Co-host and IT leadership advocate",
    bio: "Alexis brings an IT leadership lens to network engineering, career storytelling, and marketing yourself well.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/digital.byte_/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/alexisbertholf" },
    ],
  },
  {
    name: "Kevin Nanns",
    photo: "/kevin-nanns-podcast.jpg",
    role: "Co-host, Network Architect, and career-path translator",
    quote: "Kevin connects the story back to the real work behind the network.",
    bio: "Network architect with 15+ years of enterprise experience. CCNA, Cisco Champion, Juniper AI Innovator, and the voice behind Adjacentnode.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/adjacentnode" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kevinnanns" },
      { label: "YouTube", href: "https://www.youtube.com/@adjacentnode" },
    ],
  },
];

const COVER_ART =
  "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/f4/44/87/f44487a9-561e-3473-ba40-43ebaa2b975e/mza_11280545770999497642.jpg/600x600bb.jpg";

const LISTEN_LINKS = [
  {
    label: "Apple",
    href: "https://podcasts.apple.com/us/podcast/life-in-uptime/id1840914445",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/7yjZxObg2Q5LKBwikJwGl5",
  },
  {
    label: "Overcast",
    href: "https://overcast.fm/itunes1840914445",
  },
  {
    label: "Pocket Casts",
    href: "https://pca.st/zr4y1219",
  },
  {
    label: "RSS",
    href: "https://feeds.packetpushers.net/life-in-uptime/",
  },
];

const STORY_LANES = [
  "First jobs",
  "Career pivots",
  "Certs and study",
  "Mentors",
  "Outages",
  "Leadership",
];

const FEATURED_EPISODE_NUMBERS = ["002", "003", "004"];

function cleanTitle(title: string) {
  return title.replace(/^LIU\d+:\s*/, "");
}

function getTranscriptForEpisode(episodeNumber: string | undefined) {
  if (!episodeNumber) return null;
  return transcripts.find((episode) => episode.episodeNumber === episodeNumber.padStart(3, "0")) || null;
}

export default async function Home() {
  const episodes = await getEpisodes();
  const latest = episodes.slice(0, 4);
  const startEpisode = latest[0];
  const episodeCount =
    Number.parseInt(startEpisode?.episodeNumber || "0", 10) || episodes.length;
  const featuredEpisodes = FEATURED_EPISODE_NUMBERS
    .map((episodeNumber) =>
      transcripts.find((episode) => episode.episodeNumber === episodeNumber),
    )
    .filter((episode): episode is (typeof transcripts)[number] => Boolean(episode));

  return (
    <>
      <section className="hero-grid relative overflow-hidden bg-ink text-paper">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper/55">
              <a
                href="https://packetpushers.net"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-paper/12 px-3 py-2 transition-colors hover:border-signal/60 hover:text-paper"
              >
                Packet Pushers network
              </a>
              <span className="on-air-pill">
                <span aria-hidden="true" />
                On air biweekly
              </span>
            </div>

            <h1 className="max-w-[680px] text-[clamp(4.4rem,11vw,9.6rem)] font-black uppercase leading-[0.82] tracking-normal text-paper">
              Life in
              <span className="block text-outline">Uptime</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-paper/72 md:text-2xl md:leading-9">
              Career stories from the engineers, IT leaders, and technologists
              who build and run the internet.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={startEpisode?.link || "https://packetpushers.net/podcast/life-in-uptime/"}
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="home_latest_hero"
                className="inline-flex items-center justify-center rounded-full bg-signal px-6 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
              >
                Play the latest episode
              </a>
              <Link
                href="/episodes"
                data-track-event="home_browse_hero"
                className="inline-flex items-center justify-center rounded-full border border-paper/20 px-6 py-3 text-sm font-bold text-paper transition-colors hover:border-signal/70 hover:text-signal"
              >
                Browse the archive
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {LISTEN_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event={`home_listen_${link.label.toLowerCase().replaceAll(" ", "_")}`}
                  className="rounded-full border border-paper/14 bg-paper/5 px-4 py-2 text-sm font-semibold text-paper/70 transition-colors hover:border-signal/70 hover:text-paper"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="signal-card mt-8 max-w-xl">
              <div className="eq-bars" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <p>Career signal from outages, mentors, pivots, and the real network floor.</p>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-[520px]">
              <div className="media-stack">
                <Image
                  src={COVER_ART}
                  alt="Life in Uptime podcast cover art"
                  width={600}
                  height={600}
                  priority
                  className="aspect-square w-full rounded-[1.5rem] object-cover shadow-2xl shadow-black/35"
                />
              </div>
              {startEpisode && (
                <div className="latest-panel mt-5 rounded-[1.5rem] border border-paper/12 bg-paper/8 p-5 backdrop-blur">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-signal">
                      Latest episode
                    </p>
                    {startEpisode.duration && (
                      <p className="text-xs font-semibold text-paper/45">
                        {startEpisode.duration}
                      </p>
                    )}
                  </div>
                  <h2 className="font-sans text-xl font-black leading-tight text-paper">
                    {cleanTitle(startEpisode.title)}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-paper/64">
                    {startEpisode.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {startEpisode && (
        <section className="border-y border-ink/10 bg-paper">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate">
                Start here
              </p>
              <h2 className="mt-3 max-w-lg text-4xl font-black leading-tight text-ink">
                The show is a career map, not a lecture.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href={startEpisode.link || "https://packetpushers.net/podcast/life-in-uptime/"}
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="home_start_latest"
                className="group rounded-[1.25rem] bg-ink p-6 text-paper transition-transform hover:-translate-y-1"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-signal">
                  Latest
                </p>
                <h3 className="mt-3 text-xl font-black leading-tight">
                  {cleanTitle(startEpisode.title)}
                </h3>
                <p className="mt-5 text-sm font-bold text-paper/55 group-hover:text-signal">
                  Listen now
                </p>
              </a>
              <div className="rounded-[1.25rem] border border-ink/10 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate">
                  Common paths
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {STORY_LANES.map((lane) => (
                    <span
                      key={lane}
                      className="rounded-full bg-mist px-3 py-2 text-sm font-bold text-ink/75"
                    >
                      {lane}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {featuredEpisodes.length > 0 && (
        <section className="bg-ink px-6 py-20 text-paper lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-signal">
                  Listener entry points
                </p>
                <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight md:text-5xl">
                  Pick the story that matches where you are.
                </h2>
              </div>
              <Link
                href="/episodes"
                data-track-event="home_featured_all_episodes"
                className="text-sm font-bold text-paper/60 transition-colors hover:text-signal"
              >
                All episodes
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {featuredEpisodes.map((episode) => (
                <Link
                  key={episode.slug}
                  href={`/episodes/${episode.slug}`}
                  data-track-event={`home_featured_${episode.episodeNumber}`}
                  className="group flex min-h-[320px] flex-col justify-between rounded-[1.5rem] border border-paper/10 bg-paper/[0.06] p-6 transition-colors hover:border-signal/60 hover:bg-paper/[0.09]"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-signal">
                      LIU{episode.episodeNumber}
                    </p>
                    <h3 className="mt-5 text-2xl font-black leading-tight text-paper">
                      {cleanTitle(episode.title)}
                    </h3>
                    {episode.guest && (
                      <p className="mt-4 text-sm font-bold text-paper/55">
                        {episode.guest}
                        {episode.guestCompany ? `, ${episode.guestCompany}` : ""}
                      </p>
                    )}
                  </div>
                  <p className="mt-8 text-sm font-bold text-paper/45 group-hover:text-signal">
                    Read transcript
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-paper px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate">
              Recent conversations
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-ink md:text-5xl">
              Browse by story, guest, and transcript.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-ink/62">
              Episode pages are built for people who want more than a play
              button: show notes, guest context, and searchable transcripts.
            </p>
          </div>

          <div className="grid gap-3">
            {latest.map((episode, index) => {
              const transcript = getTranscriptForEpisode(episode.episodeNumber);
              const href =
                transcript
                  ? `/episodes/${transcript.slug}`
                  : episode.link || "https://packetpushers.net/podcast/life-in-uptime/";

              return (
                <Link
                  key={`${episode.link}-${index}`}
                  href={href}
                  target={transcript ? undefined : "_blank"}
                  rel={transcript ? undefined : "noopener noreferrer"}
                  data-track-event={`home_recent_${episode.episodeNumber || "unknown"}`}
                  className="group grid gap-4 rounded-[1.25rem] border border-ink/10 bg-white p-5 transition-transform hover:-translate-y-0.5 md:grid-cols-[5rem_1fr_auto] md:items-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-lg font-black text-signal">
                    {episode.episodeNumber || String(index + 1)}
                  </div>
                  <div>
                    <h3 className="text-lg font-black leading-tight text-ink">
                      {cleanTitle(episode.title)}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/55">
                      {episode.description}
                    </p>
                  </div>
                  <div className="text-sm font-bold text-slate group-hover:text-ink">
                    {formatDate(episode.pubDate)}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate">
                The format
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-ink md:text-5xl">
                Human stories from technical people.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-ink/62">
              Life in Uptime goes beyond the config and the command line. Alexis
              and Kevin ask how people actually got here, what changed them, and
              what listeners can use.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["The break in", "First job, lucky break, bad decision, and the moment the path started to make sense."],
              ["The turning point", "Outages, mentors, layoffs, pivots, and weird assignments that changed the work."],
              ["The useful part", "Specific lessons for building a tech career without pretending there is one correct path."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[1.25rem] border border-ink/10 bg-paper p-6">
                <h3 className="text-xl font-black text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/58">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate">
              Hosts
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-ink md:text-5xl">
              Two sides of the conversation.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {HOSTS.map((host) => (
              <article
                key={host.name}
                className="grid gap-5 rounded-[1.5rem] border border-ink/10 bg-white p-5 sm:grid-cols-[10rem_1fr]"
              >
                <Image
                  src={host.photo}
                  alt={host.name}
                  width={240}
                  height={240}
                  className="aspect-square w-full rounded-[1rem] object-cover"
                />
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate">
                    {host.role}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-ink">{host.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{host.bio}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {host.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-slate transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-paper lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-signal">
              Be part of it
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight md:text-6xl">
              Your path into tech probably helps someone else.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-paper/65">
              Non-traditional background? Interesting problems? Hard lessons
              from the field? Bring the story.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/guest"
                data-track-event="home_guest_bottom"
                className="inline-flex items-center justify-center rounded-full bg-signal px-6 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
              >
                Apply to be a guest
              </Link>
              <Link
                href="/advertise"
                data-track-event="home_advertise_bottom"
                className="inline-flex items-center justify-center rounded-full border border-paper/20 px-6 py-3 text-sm font-bold text-paper transition-colors hover:border-signal/70 hover:text-signal"
              >
                Advertise
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
