"use client";
import { useState } from "react";

export default function GuestPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
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
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
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
          <strong>Packet Pushers</strong>. We'll be in touch if it's a fit.
        </p>
      </div>

      {status === "sent" ? (
        <div className="bg-white rounded-2xl border border-sky-blue/30 p-10 text-center">
          <div className="text-4xl mb-4">🎙️</div>
          <h2 className="text-xl font-bold text-navy mb-2">Application received!</h2>
          <p className="text-navy/60">
            We'll review your submission and reach out if it's a good fit.
            Thanks for sharing your story.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-sky-blue/30 p-8 flex flex-col gap-5">
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

          {status === "error" && (
            <p className="text-red-500 text-sm">
              Something went wrong. Try again or email us directly via Packet Pushers.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-full bg-navy text-white font-semibold text-sm hover:bg-navy/80 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      )}
    </div>
  );
}
