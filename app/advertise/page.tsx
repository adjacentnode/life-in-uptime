export const metadata = {
  title: "Advertise | Life in Uptime",
  description: "Reach network engineers, IT leaders, and tech professionals. Advertising on Life in Uptime is handled through Packet Pushers.",
};

export default function AdvertisePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-sky-blue-mid mb-2">
          Advertise
        </p>
        <h1 className="text-4xl font-black text-navy">
          Reach the people who run the internet.
        </h1>
        <p className="text-navy/60 mt-4 leading-relaxed max-w-xl">
          Life in Uptime is part of the{" "}
          <a
            href="https://packetpushers.net"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy hover:text-sky-blue-mid transition-colors underline underline-offset-2"
          >
            Packet Pushers
          </a>{" "}
          network. All advertising and sponsorship is handled directly through
          Packet Pushers, giving you access to a deeply engaged audience of
          network engineers, IT professionals, and technical leaders.
        </p>
      </div>

      {/* Audience stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { stat: "IT Pros", label: "Core audience" },
          { stat: "5.0★", label: "Listener rating" },
          { stat: "Biweekly", label: "Consistent cadence" },
          { stat: "2025+", label: "Growing network" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-xl p-5 border border-sky-blue/30 text-center"
          >
            <div className="text-xl font-black text-navy">{s.stat}</div>
            <div className="text-xs font-medium text-navy/50 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Who listens */}
      <div className="bg-white rounded-2xl border border-sky-blue/30 p-8 mb-8">
        <h2 className="text-xl font-bold text-navy mb-4">Who listens</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Network engineers and architects",
            "IT leaders and managers",
            "Cloud and security professionals",
            "Career changers breaking into tech",
            "Aspiring technologists",
            "DevOps and infrastructure teams",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-navy/70">
              <span
                className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: "var(--sky-blue-mid)", minWidth: "1rem" }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Ad formats */}
      <div className="bg-white rounded-2xl border border-sky-blue/30 p-8 mb-10">
        <h2 className="text-xl font-bold text-navy mb-4">Formats available</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              title: "Host-Read Mid-Roll",
              desc: "Delivered by Alexis and Kevin during the episode. Authentic, conversational, trusted by listeners.",
            },
            {
              title: "Pre-Roll Spot",
              desc: "30-second read at the top of the episode. High attention, maximum reach.",
            },
            {
              title: "Show Sponsorship",
              desc: "Episode-level or season-level branding across all placements, show notes, and social promotion.",
            },
          ].map((f) => (
            <div key={f.title} className="flex gap-4 items-start">
              <div
                className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                style={{ background: "var(--sky-blue-mid)" }}
              />
              <div>
                <p className="font-semibold text-navy text-sm">{f.title}</p>
                <p className="text-navy/60 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA through Packet Pushers */}
      <div className="watercolor-bg rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-navy mb-3">
          Ready to get in front of this audience?
        </h2>
        <p className="text-navy/60 text-sm mb-6 max-w-md mx-auto">
          All advertising inquiries go through Packet Pushers. Click below to
          reach their partnerships team and mention Life in Uptime.
        </p>
        <a
          href="https://packetpushers.net/advertise/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-navy text-white font-semibold hover:bg-navy/80 transition-colors"
        >
          Contact Packet Pushers &rarr;
        </a>
      </div>
    </div>
  );
}
