import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40">
                LIFE IN
              </span>
              <span
                className="font-black text-2xl tracking-tight"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #7ec8e3",
                }}
              >
                UPTIME
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Real stories from the people who build and run the backbone of the
              internet. Part of the{" "}
              <a
                href="https://packetpushers.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-blue-mid hover:text-white transition-colors"
              >
                Packet Pushers
              </a>{" "}
              network.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
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
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Listen */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Listen On
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                {
                  href: "https://podcasts.apple.com/us/podcast/life-in-uptime/id1840914445",
                  label: "Apple Podcasts",
                },
                {
                  href: "https://open.spotify.com/search/life%20in%20uptime%20packet%20pushers",
                  label: "Spotify",
                },
                {
                  href: "https://packetpushers.net/podcast/life-in-uptime/feed/",
                  label: "RSS Feed",
                },
                {
                  href: "https://overcast.fm/search#q=life+in+uptime",
                  label: "Overcast",
                },
                {
                  href: "https://pocketcasts.com/podcasts/search/?q=life+in+uptime",
                  label: "Pocket Casts",
                },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>
            © {new Date().getFullYear()} Life in Uptime. Part of Packet Pushers.
          </span>
          <span>Biweekly — every other Thursday</span>
        </div>
      </div>
    </footer>
  );
}
