"use client";

import { useEffect } from "react";

type TrackableElement = HTMLElement & {
  dataset: DOMStringMap & { trackEvent?: string };
};

function sendEvent(element: TrackableElement, type: "click" | "submit") {
  const event = element.dataset.trackEvent;
  if (!event || typeof navigator === "undefined" || typeof window === "undefined") return;

  const payload = JSON.stringify({
    event,
    type,
    path: window.location.pathname,
    href: element instanceof HTMLAnchorElement ? element.href : undefined,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/events", new Blob([payload], { type: "application/json" }));
    return;
  }

  void fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  });
}

export default function EventTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const element = target.closest<TrackableElement>("[data-track-event]");
      if (element) sendEvent(element, "click");
    }

    function handleSubmit(event: SubmitEvent) {
      const target = event.target;
      if (!(target instanceof HTMLElement) || !target.dataset.trackEvent) return;
      sendEvent(target as TrackableElement, "submit");
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
