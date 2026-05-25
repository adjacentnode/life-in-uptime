import Image from "next/image";
import Link from "next/link";
import { getEpisodes, formatDate } from "@/lib/episodes";
import { transcripts } from "@/lib/transcripts";

const HOSTS = [
  {
    name: "Alexis Bertholf",
    photo: "/alexis-bertholf.jpg",
    role: "Co-host, creator, and the voice of the curious newcomer",
    quote: "Alexis asks the questions people are thinking but rarely say out loud.",
    bio: "Content creator, technologist, and podcast co-host. Alexis brings curiosity, warmth, and sharp questions to every conversation.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/digital.byte_/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/alexisbertholf" },
    ],
  },
  {
    name: "Kevin Nanns",
    photo: "/kevin-nanns.jpg",
    role: "Co-host, network engineer, and career-path translator",
    quote: "Kevin connects the story back to the real work behind the network.",
    bio: "Network engineer with 15+ years of enterprise experience. CCNA, Cisco Champion, Juniper AI Innovator, and the voice behind Adjacentnode.",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/adjacentnode" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/kevinnanns" },
      { label: "YouTube", href: "https://www.youtube.com/@adjacentnode" },
    ],
  },
];

const COVER_ART =
  "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/f4/44/87/f44487a9-561e-3473-ba40-43ebaa2b975e/mza_11280545770999497642.jpg/600x600bb.jpg";

const PATHWAYS = [
  "First job in IT",
  "Career pivots",
  "Certs and self-study",
  "Building credibility",
];

const REVIEW_QUOTES = [
  {
    quote: "This is one I could remember years from now.",
    author: "Classic Side",
  },
  {
    quote: "Valuable tidbits in the first full episode.",
    author: "Techsavyell",
  },
  {
    quote: "Worth listening to if you work in the IT space.",
    author: "mikejbou",
  },
];

const FORMAT_POINTS = [
  {
    title: "How they got in",
    desc: "The first job, the lucky break, the bad decision, and the moment the career started to make sense.",
  },
  {
    title: "What changed them",
    desc: "The outages, mentors, layoffs, pivots, and weird assignments that shaped how they work now.",
  },
  {
    title: "What listeners can use",
    desc: "Specific lessons for people trying to build a career in tech without pretending there is one correct path.",
  },
];

const FEATURED_EPISODE_NUMBERS = ["002", "003", "004"];

const LISTEN_LINKS = [
  {
    label: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/life-in-uptime/id1840914445",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c2.071 0 3.757 1.686 3.757 3.757 0 2.07-1.686 3.756-3.757 3.756-2.07 0-3.756-1.686-3.756-3.756C8.244 6.186 9.93 4.5 12 4.5zm5.25 13.657a.75.75 0 01-.64.343H7.39a.75.75 0 01-.64-1.143C7.716 15.545 9.75 14.25 12 14.25s4.284 1.295 5.25 3.107a.75.75 0 010 .8z" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/7yjZxObg2Q5LKBwikJwGl5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    label: "Overcast",
    href: "https://overcast.fm/itunes1840914445",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 6a6 6 0 110 12A6 6 0 0112 6zm0 3a3 3 0 100 6 3 3 0 000-6zm0 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-7.5 1.5a.75.75 0 010 1.5.75.75 0 010-1.5zm15 0a.75.75 0 010 1.5.75.75 0 010-1.5zM12 4.5a.75.75 0 010 1.5.75.75 0 010-1.5zm0 13.5a.75.75 0 010 1.5.75.75 0 010-1.5z" />
      </svg>
    ),
  },
  {
    label: "Pocket Casts",
    href: "https://pca.st/zr4y1219",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 110 16A8 8 0 0112 4zm0 3a5 5 0 100 10A5 5 0 0012 7zm0 3a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    ),
  },
  {
    label: "RSS Feed",
    href: "https://feeds.packetpushers.net/life-in-uptime/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.18 15.64a2.18 2.18 0 010 4.36 2.18 2.18 0 010-4.36M4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 006.18 7.27V4.44M4 10.1a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 006.18 12.93v-2.83z" />
      </svg>
    ),
  },
];

export default async function Home() {
  const episodes = await getEpisodes();
  const latest = episodes.slice(0, 3);
  const startEpisode = latest[0];
  const episodeCount = Number.parseInt(startEpisode?.episodeNumber || "0", 10) || episodes.length;
  const featuredEpisodes = FEATURED_EPISODE_NUMBERS
    .map((episodeNumber) => transcripts.find((episode) => episode.episodeNumber === episodeNumber))
    .filter((episode): episode is (typeof transcripts)[number] => Boolean(episode));

  return (
    <>
      {/* HERO */}
      <section className="watercolor-bg min-h-[90vh] flex items-center relative">
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div className="min-w-0">
              {/* Packet Pushers badge */}
              <a
                href="https://packetpushers.net"
                target="_blank"
                rel="noopener noreferrer"
                className="pp-badge inline-flex mb-6"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Packet Pushers
              </a>

              {/* Title lockup matching cover art */}
              <h1 className="mb-2 max-w-full overflow-hidden" aria-label="Life in Uptime">
                <span aria-hidden="true" className="life-in-text block">LIFE IN</span>
                <span aria-hidden="true" className="uptime-text block">UPTIME</span>
              </h1>

              <p className="text-navy/70 text-lg leading-relaxed mt-6 max-w-lg">
                Real stories from the engineers, IT leaders, and technologists
                who build and run the internet. Because the road in is never
                one-size-fits-all.
              </p>

              <p className="text-navy/50 text-sm mt-2">
                Hosted by{" "}
                <span className="font-semibold text-navy">Alexis Bertholf</span>{" "}
                &amp;{" "}
                <span className="font-semibold text-navy">Kevin Nanns</span>, biweekly, every other Thursday.
              </p>

              {/* Primary CTA */}
              <div className="flex w-full flex-wrap gap-3 mt-8">
                <a
                  href={startEpisode?.link || "https://packetpushers.net/podcast/life-in-uptime/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="home_latest_hero"
                  className="w-full px-6 py-3 rounded-full bg-navy text-white text-center text-sm font-semibold hover:bg-navy/80 transition-colors shadow-lg shadow-navy/10 sm:w-auto"
                >
                  Start with the Latest Episode
                </a>
                <Link
                  href="/episodes"
                  data-track-event="home_browse_hero"
                  className="w-full px-6 py-3 rounded-full border-2 border-navy text-navy text-center text-sm font-semibold hover:bg-navy/5 transition-colors sm:w-auto"
                >
                  Browse Episodes
                </Link>
              </div>

              {/* Listen links */}
              <div className="flex max-w-full flex-wrap gap-3 mt-5">
                {LISTEN_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-event={`home_listen_${l.label.toLowerCase().replaceAll(" ", "_")}`}
                    className="listen-badge bg-white text-navy"
                  >
                    {l.icon}
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-5 text-sm font-semibold">
                <Link href="/guest" data-track-event="home_guest_hero" className="text-[#3f7186] hover:text-navy transition-colors">
                  Apply to be a guest →
                </Link>
                <Link href="/advertise" data-track-event="home_advertise_hero" className="text-navy/55 hover:text-navy transition-colors">
                  Advertise with us →
                </Link>
              </div>
            </div>

            {/* Right: cover art */}
            <div className="flex min-w-0 justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px]">
                {/* Glow behind cover */}
                <div className="absolute inset-0 rounded-2xl blur-3xl opacity-40 bg-sky-blue scale-105" />
                <Image
                  src={COVER_ART}
                  alt="Life in Uptime podcast cover art"
                  width={380}
                  height={380}
                  className="relative w-full max-w-[380px] rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* START HERE */}
      {startEpisode && (
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-6">
          <div className="bg-navy text-off-white rounded-[2rem] p-8 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 items-center overflow-hidden relative">
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-sky-blue/20 blur-3xl" />
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-sky-blue-light/80 mb-3">
                Start here
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                New to the show? Listen to the latest conversation first.
              </h2>
              <p className="text-off-white/75 leading-relaxed max-w-xl mb-6">
                Each episode is a real career map, how someone got in, what changed, and what they learned the hard way.
              </p>
              <a
                href={startEpisode.link}
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="home_start_latest"
                className="inline-flex px-6 py-3 rounded-full bg-off-white text-navy text-sm font-semibold hover:bg-sky-blue-light transition-colors"
              >
                Listen to {startEpisode.title.replace(/^LIU\d+:\s*/, "")}
              </a>
            </div>
            <div className="relative z-10 bg-off-white/8 rounded-2xl border border-off-white/15 p-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-sky-blue-light/70 mb-4">
                Paths we cover
              </p>
              <div className="grid grid-cols-2 gap-3">
                {PATHWAYS.map((path) => (
                  <div key={path} className="rounded-xl bg-off-white/10 px-4 py-3 text-sm font-semibold text-off-white">
                    {path}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {featuredEpisodes.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col gap-3 mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-[#3f7186] mb-2">
                Best places to start
              </p>
              <h2 className="text-3xl font-bold text-navy">
                Pick the story that fits what you are wrestling with.
              </h2>
            </div>
            <Link
              href="/episodes"
              data-track-event="home_featured_all_episodes"
              className="text-sm font-semibold text-[#3f7186] hover:text-navy transition-colors"
            >
              Browse all episodes →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredEpisodes.map((episode) => (
              <Link
                key={episode.slug}
                href={`/episodes/${episode.slug}`}
                data-track-event={`home_featured_${episode.episodeNumber}`}
                className="episode-card bg-white rounded-2xl p-6 border border-sky-blue/30 flex flex-col gap-3"
              >
                <span className="text-xs font-semibold tracking-widest uppercase text-[#3f7186]">
                  LIU{episode.episodeNumber}
                </span>
                <h3 className="text-base font-bold text-navy leading-snug">
                  {episode.title.replace(/^LIU\d+:\s*/, "")}
                </h3>
                {episode.guest && (
                  <p className="text-sm font-semibold text-navy/75">
                    {episode.guest}
                    {episode.guestCompany ? `, ${episode.guestCompany}` : ""}
                  </p>
                )}
                <p className="text-sm text-navy/60 leading-relaxed flex-1">
                  {episode.description.slice(0, 170)}
                  {episode.description.length > 170 ? "..." : ""}
                </p>
                <span className="text-xs font-semibold text-[#3f7186]">Read transcript →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FORMAT */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#3f7186] mb-2">
              Why it works
            </p>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Career stories with the useful parts left in.
            </h2>
            <p className="text-navy/65 leading-relaxed">
              Life in Uptime is not a product demo and it is not a cert lecture.
              It is the part of tech careers people usually skip: the messy path
              into the work, the tradeoffs, and the lessons that stick.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {FORMAT_POINTS.map((point) => (
              <div key={point.title} className="bg-white rounded-2xl p-5 border border-sky-blue/30">
                <h3 className="text-base font-bold text-navy mb-3">{point.title}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST EPISODES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-navy">Latest Episodes</h2>
          <Link
            href="/episodes"
            data-track-event="home_latest_view_all"
            className="text-sm font-semibold text-[#3f7186] hover:text-navy transition-colors"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((ep) => (
            <a
              key={ep.link}
              href={ep.link}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event={`home_latest_episode_${ep.episodeNumber || "unknown"}`}
              className="episode-card bg-white rounded-2xl p-6 border border-sky-blue/30 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#3f7186]">
                  {ep.episodeNumber ? `Ep. ${ep.episodeNumber}` : ""}
                </span>
                {ep.duration && <span className="text-xs text-navy/40">{ep.duration}</span>}
              </div>
              <h3 className="text-base font-bold text-navy leading-snug">
                {ep.title}
              </h3>
              <p className="text-sm text-navy/60 leading-relaxed flex-1">
                {ep.description}
              </p>
              <span className="text-xs text-navy/40">{formatDate(ep.pubDate)}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT THE SHOW */}
      <section className="watercolor-bg py-20">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                About the Show
              </h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                Life in Uptime goes beyond the config and the command line. Every
                episode, Alexis and Kevin sit down with someone who has built a
                career in technology and ask the question that matters most: how
                did you actually get here?
              </p>
              <p className="text-navy/70 leading-relaxed mb-4">
                From garbage truck driver to vCISO. From college athlete to AWS
                Technical Account Manager. From 12 years old running a BBS to
                founding an MSP and donating a million dollars in infrastructure
                to communities in need.
              </p>
              <p className="text-navy/70 leading-relaxed">
                Every path into tech is valid. This show is proof.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: `${episodeCount}+`, label: "Episodes" },
                { stat: "5.0★", label: "Apple Podcasts" },
                { stat: "Biweekly", label: "Every other Thursday" },
                { stat: "2025", label: "Launched" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl p-6 border border-sky-blue/30 text-center"
                >
                  <div className="text-2xl font-black text-navy">{s.stat}</div>
                  <div className="text-xs font-medium text-navy/50 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOSTS */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#3f7186] mb-2">
            Two sides of the conversation
          </p>
          <h2 className="text-3xl font-bold text-navy mb-3">Your Hosts</h2>
          <p className="text-navy/60 leading-relaxed">
            Alexis brings the outside-looking-in curiosity. Kevin brings the scars and context from years in the field. Together they make technical careers feel human.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOSTS.map((host) => (
            <div
              key={host.name}
              className="bg-white rounded-[1.75rem] p-6 border border-sky-blue/30 flex flex-col sm:flex-row gap-5 items-start shadow-sm shadow-navy/5"
            >
              <Image
                src={host.photo}
                alt={host.name}
                width={160}
                height={160}
                className="rounded-2xl object-cover w-full sm:w-36 aspect-square"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold leading-snug text-[#3f7186] mb-2">
                  {host.role}
                </p>
                <h3 className="text-xl font-bold text-navy">{host.name}</h3>
                <p className="text-navy/65 text-sm leading-relaxed mt-2">{host.bio}</p>
                <blockquote className="mt-4 text-sm leading-relaxed text-navy/70 border-t border-sky-blue/30 pt-4">
                  “{host.quote}”
                </blockquote>
                <div className="flex flex-wrap gap-3 mt-4">
                  {host.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#3f7186] hover:text-navy transition-colors"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="max-w-5xl mx-auto px-6 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REVIEW_QUOTES.map((item) => (
            <figure key={item.author} className="rounded-2xl bg-sky-blue-light/45 border border-sky-blue/30 p-5">
              <blockquote className="text-navy text-lg font-semibold leading-snug">
                “{item.quote}”
              </blockquote>
              <figcaption className="text-xs font-semibold tracking-widest uppercase text-navy/45 mt-4">
                {item.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* LISTENER REVIEWS */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-3xl font-bold text-navy">Listener Reviews</h2>
        </div>
        <p className="text-navy/50 text-sm mb-10 flex items-center gap-2">
          <span>★★★★★</span>
          <span>5.0 on Apple Podcasts</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Great conversation great topics",
              author: "Classic Side",
              body: "I've tried many podcasts in the past. And couldn't tell you the names today. This is one I could years from now. They know the industry. And this one's super insightful. All have been. Great work!",
            },
            {
              title: "Worth the listen!",
              author: "Techsavyell",
              body: "These two are awesome! I have already found valuable tidbits in the first full episode! Can't wait to see what comes next!",
            },
            {
              title: "Making Networking Cool Again",
              author: "mikejbou",
              body: "Kevin and Alexis really work hard in all their content creation and giving back knowledge and tips to the community. Super excited to see what comes from them doing this podcast, definitely worth listening to if you work in the IT space.",
            },
          ].map((r) => (
            <div
              key={r.author}
              className="bg-white rounded-2xl p-6 border border-sky-blue/30 flex flex-col gap-3"
            >
              <div className="text-[#3f7186] text-sm tracking-widest">★★★★★</div>
              <h3 className="font-bold text-navy text-base leading-snug">{r.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed flex-1">{r.body}</p>
              <p className="text-xs text-navy/50 font-medium">{r.author}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://podcasts.apple.com/us/podcast/life-in-uptime/id1840914445"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#3f7186] hover:text-navy transition-colors"
          >
            Leave a review on Apple Podcasts →
          </a>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="watercolor-bg py-20">
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Your story belongs on this show
          </h2>
          <p className="text-navy/60 mb-8">
            Have a non-traditional path into tech? Work on interesting problems?
            Know someone who does? We want to hear from you.
          </p>
          <Link
            href="/guest"
            data-track-event="home_guest_bottom"
            className="inline-block px-8 py-3 rounded-full bg-navy text-white font-semibold hover:bg-navy/80 transition-colors"
          >
            Apply to Be a Guest
          </Link>
        </div>
      </section>
    </>
  );
}
