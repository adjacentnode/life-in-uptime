import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.7fr_0.7fr]">
          {/* Brand */}
          <div>
            <div className="mb-4 flex flex-col leading-none">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-paper/40">
                LIFE IN
              </span>
              <span
                className="text-2xl font-black tracking-tight"
                style={{
                  color: "transparent",
                  fontFamily: '"Arial Black", Impact, system-ui, sans-serif',
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "2px var(--signal)",
                }}
              >
                UPTIME
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-paper/58">
              Real stories from the people who build and run the backbone of the
              internet. Part of the{" "}
              <a
                href="https://packetpushers.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal transition-colors hover:text-paper"
              >
                Packet Pushers
              </a>{" "}
              network.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-paper/40">
              Show
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/episodes", label: "Episodes" },
                { href: "/guest", label: "Be a Guest" },
                { href: "/advertise", label: "Advertise" },
                {
                  href: "https://packetpushers.net/podcast/life-in-uptime/",
                  label: "Packet Pushers Page",
                  external: true,
                },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-paper/58 transition-colors hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Listen */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-paper/40">
              Listen On
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                {
                  href: "https://podcasts.apple.com/us/podcast/life-in-uptime/id1840914445",
                  label: "Apple Podcasts",
                },
                {
                  href: "https://open.spotify.com/show/7yjZxObg2Q5LKBwikJwGl5",
                  label: "Spotify",
                },
                {
                  href: "https://overcast.fm/itunes1840914445",
                  label: "Overcast",
                },
                {
                  href: "https://pca.st/zr4y1219",
                  label: "Pocket Casts",
                },
                {
                  href: "https://feeds.packetpushers.net/life-in-uptime/",
                  label: "RSS Feed",
                },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper/58 transition-colors hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-6 text-xs text-paper/35 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Life in Uptime. Part of Packet Pushers.
          </span>
          <span>Biweekly, every other Thursday</span>
        </div>
      </div>
    </footer>
  );
}
