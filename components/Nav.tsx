"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
  { href: "/guest", label: "Be a Guest" },
  { href: "/advertise", label: "Advertise" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-paper/45">
            LIFE IN
          </span>
          <span
            className="text-xl font-black tracking-tight"
            style={{
              color: "transparent",
              fontFamily: '"Arial Black", Impact, system-ui, sans-serif',
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1.5px var(--signal)",
            }}
          >
            UPTIME
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-sm ${
                pathname === l.href ? "active" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://packetpushers.net/podcast/life-in-uptime/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-signal px-4 py-2 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
          >
            Listen Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="p-2 text-paper md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path
                d="M4 4l14 14M18 4L4 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-paper/10 bg-ink px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium text-paper"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://packetpushers.net/podcast/life-in-uptime/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-signal px-4 py-2 text-center text-sm font-bold text-ink"
          >
            Listen Now
          </a>
        </div>
      )}
    </header>
  );
}
