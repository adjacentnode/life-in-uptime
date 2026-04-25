import Image from "next/image";
import Link from "next/link";
import { getEpisodes, formatDate } from "@/lib/episodes";

const COVER_ART =
  "https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/f4/44/87/f44487a9-561e-3473-ba40-43ebaa2b975e/mza_11280545770999497642.jpg/600x600bb.jpg";

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
    href: "https://open.spotify.com/search/life%20in%20uptime%20packet%20pushers",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    label: "Overcast",
    href: "https://overcast.fm/search#q=life+in+uptime",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 6a6 6 0 110 12A6 6 0 0112 6zm0 3a3 3 0 100 6 3 3 0 000-6zm0 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-7.5 1.5a.75.75 0 010 1.5.75.75 0 010-1.5zm15 0a.75.75 0 010 1.5.75.75 0 010-1.5zM12 4.5a.75.75 0 010 1.5.75.75 0 010-1.5zm0 13.5a.75.75 0 010 1.5.75.75 0 010-1.5z" />
      </svg>
    ),
  },
  {
    label: "RSS Feed",
    href: "https://packetpushers.net/podcast/life-in-uptime/feed/",
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

  return (
    <>
      {/* HERO */}
      <section className="watercolor-bg min-h-[90vh] flex items-center relative">
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
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
              <div className="mb-2">
                <p className="life-in-text">LIFE IN</p>
                <h1 className="uptime-text">UPTIME</h1>
              </div>

              <p className="text-navy/70 text-lg leading-relaxed mt-6 max-w-lg">
                Real stories from the engineers, IT leaders, and technologists
                who build and run the internet. Because the road in is never
                one-size-fits-all.
              </p>

              <p className="text-navy/50 text-sm mt-2">
                Hosted by{" "}
                <span className="font-semibold text-navy">Alexis Bertholf</span>{" "}
                &amp;{" "}
                <span className="font-semibold text-navy">Kevin Nanns</span>
                {" "}&mdash; biweekly, every other Thursday.
              </p>

              {/* Listen links */}
              <div className="flex flex-wrap gap-3 mt-8">
                {LISTEN_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="listen-badge bg-white text-navy"
                  >
                    {l.icon}
                    {l.label}
                  </a>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="/guest"
                  className="px-5 py-2.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy/80 transition-colors"
                >
                  Apply to Be a Guest
                </Link>
                <Link
                  href="/advertise"
                  className="px-5 py-2.5 rounded-full border-2 border-navy text-navy text-sm font-semibold hover:bg-navy/5 transition-colors"
                >
                  Advertise With Us
                </Link>
              </div>
            </div>

            {/* Right: cover art */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow behind cover */}
                <div className="absolute inset-0 rounded-2xl blur-3xl opacity-40 bg-sky-blue scale-105" />
                <Image
                  src={COVER_ART}
                  alt="Life in Uptime podcast cover art"
                  width={380}
                  height={380}
                  className="relative rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST EPISODES */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-navy">Latest Episodes</h2>
          <Link
            href="/episodes"
            className="text-sm font-semibold text-sky-blue-mid hover:text-navy transition-colors"
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
              className="episode-card bg-white rounded-2xl p-6 border border-sky-blue/30 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest uppercase text-sky-blue-mid">
                  {ep.episodeNumber ? `Ep. ${ep.episodeNumber}` : ""}
                </span>
                <span className="text-xs text-navy/40">{ep.duration}</span>
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
                { stat: "13+", label: "Episodes" },
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
        <h2 className="text-3xl font-bold text-navy mb-10 text-center">
          Your Hosts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Alexis Bertholf",
              bio: "Content creator, technologist, and podcast co-host. Alexis brings curiosity, warmth, and sharp questions to every conversation.",
            },
            {
              name: "Kevin Nanns",
              bio: "Network engineer with 15+ years of enterprise experience. CCNA, Cisco Champion, Juniper AI Innovator, and the voice behind Adjacentnode.",
            },
          ].map((host) => (
            <div
              key={host.name}
              className="bg-white rounded-2xl p-8 border border-sky-blue/30 flex flex-col gap-3"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-black text-white"
                style={{ background: "var(--sky-blue-mid)" }}
              >
                {host.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-navy">{host.name}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{host.bio}</p>
            </div>
          ))}
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
            className="inline-block px-8 py-3 rounded-full bg-navy text-white font-semibold hover:bg-navy/80 transition-colors"
          >
            Apply to Be a Guest
          </Link>
        </div>
      </section>
    </>
  );
}
