import { useEffect, useState } from "react";

/** Dismissible bottom-bar CTA (mobile) + back-to-top affordance. */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 1200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 px-4 py-3 backdrop-blur md:px-6">
      <div className="mx-auto flex max-w-4xl items-center gap-3">
        <a
          href="#quiz"
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[image:var(--gradient-blue)] px-4 text-sm font-medium text-primary-foreground shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Find your best-fit AI course — 8 questions →
        </a>
        <a
          href="#top"
          className="hidden min-h-11 items-center rounded-full border border-border px-4 text-sm sm:inline-flex"
          aria-label="Back to top of page"
        >
          ↑ Top
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss this bar"
          className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
