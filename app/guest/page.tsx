"use client";
import { useState } from "react";

export default function GuestPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/guest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMessage(json.error || "Something went wrong. Try again later.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Try again later.");
      setStatus("error");
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest uppercase text-sky-blue-mid mb-2">
          Be a Guest
        </p>
        <h1 className="text-4xl font-black text-navy">Your story belongs here.</h1>
        <p className="text-navy/60 mt-4 leading-relaxed">
          We interview engineers, IT leaders, and technologists who have
          interesting paths, perspectives, or projects to share. Non-traditional
          backgrounds especially welcome.
        </p>
        <p className="text-navy/50 text-sm mt-3">
          Guest inquiries are reviewed by the Life in Uptime team at{" "}
          <strong>Packet Pushers</strong>. We&apos;ll be in touch if it&apos;s a fit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="bg-white rounded-2xl border border-sky-blue/30 p-6">
          <h2 className="text-lg font-bold text-navy mb-4">Good fit</h2>
          <div className="space-y-3 text-sm text-navy/65">
            {[
              "A real career turn, setback, mentor, outage, or decision point.",
              "A path into tech that was not perfectly linear.",
              "Useful lessons someone else can apply without copying your exact route.",
            ].map((item) => (
              <p key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-blue-mid" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-sky-blue/30 p-6">
          <h2 className="text-lg font-bold text-navy mb-4">Probably not a fit</h2>
          <div className="space-y-3 text-sm text-navy/65">
            {[
              "A product pitch with a personal story stapled to it.",
              "A technical webinar topic without a human arc.",
              "A vague bio that does not give us a conversation to build around.",
            ].map((item) => (
              <p key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-navy/30" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      {status === "sent" ? (
        <div className="bg-white rounded-2xl border border-sky-blue/30 p-10 text-center max-w-2xl mx-auto">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-blue/20 text-[#3f7186]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.5 11 14.5 15.5 9.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-navy mb-2">Application received!</h2>
          <p className="text-navy/60">
            We&apos;ll review your submission and reach out if it&apos;s a good fit.
            Thanks for sharing your story.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} data-track-event="guest_form_submit" className="bg-white rounded-2xl border border-sky-blue/30 p-8 flex flex-col gap-5 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">
                First Name <span className="text-red-400">*</span>
              </label>
              <input name="firstName" required className="form-input" placeholder="Alex" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">
                Last Name <span className="text-red-400">*</span>
              </label>
              <input name="lastName" required className="form-input" placeholder="Smith" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">
              Email <span className="text-red-400">*</span>
            </label>
            <input name="email" type="email" required className="form-input" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">
              Current Title / Role <span className="text-red-400">*</span>
            </label>
            <input name="title" required className="form-input" placeholder="Senior Network Engineer at Acme Corp" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">
              LinkedIn or Website
            </label>
            <input name="linkedin" className="form-input" placeholder="https://linkedin.com/in/yourprofile" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">
              What would you talk about? <span className="text-red-400">*</span>
            </label>
            <textarea
              name="topic"
              required
              minLength={40}
              rows={4}
              className="form-input resize-none"
              placeholder="Tell us about your path, your work, or a story you'd want to share on the show."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">
              How did you hear about us?
            </label>
            <input name="referral" className="form-input" placeholder="Apple Podcasts, Packet Pushers, LinkedIn..." />
          </div>

          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {status === "error" && (
            <p className="text-red-500 text-sm">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-full bg-navy text-white font-semibold text-sm hover:bg-navy/80 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Submitting..." : "Submit Application"}
          </button>

          <p className="text-xs text-navy/40 text-center">
            If the form is down, use the{" "}
            <a
              href="https://packetpushers.net/hello/"
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="guest_packetpushers_fallback"
              className="font-semibold text-[#3f7186] hover:text-navy transition-colors"
            >
              Packet Pushers contact page
            </a>{" "}
            and mention Life in Uptime.
          </p>
        </form>
      )}
    </div>
  );
}
