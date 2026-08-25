import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "figure" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref as React.Ref<never>}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </As>
  );

}

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-12 md:py-16", className)}>
      <Reveal>
        <div className="rule-top relative">
          <span className="absolute -top-[3px] left-0 h-[3px] w-24 bg-accent" />
          {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">{title}</h2>
        </div>
      </Reveal>
      <div className="mt-6 prose-body">{children}</div>
    </section>
  );
}

export function Callout({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "brass" | "warn";
}) {
  return (
    <Reveal>
      <blockquote
        className={cn(
          "card-lift my-6 rounded-r-xl border-l-4 bg-paper px-5 py-4 text-[0.98rem] italic leading-relaxed shadow-card",
          tone === "brass" && "border-l-accent",
          tone === "warn" && "border-l-destructive",
          tone === "neutral" && "border-l-ink",
        )}
      >
        {children}
      </blockquote>
    </Reveal>
  );
}

export function TableFrame({
  label,
  title,
  caption,
  children,
}: {
  label: string;
  title: string;
  caption?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Reveal as="figure" className="my-8">
      <figcaption className="mb-3">
        <span className="eyebrow">{label}</span>
        <h3 className="mt-1 text-xl md:text-2xl">{title}</h3>
      </figcaption>
      <div className="card-lift overflow-x-auto rounded-xl border border-border bg-card shadow-card">
        <table className="data-table min-w-[720px]">{children}</table>
      </div>
      {caption ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{caption}</p>
      ) : null}
    </Reveal>
  );
}

export function Verify({ children = "verify: source, month/year" }: { children?: string }) {
  return (
    <span className="ml-1 whitespace-nowrap rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">
      [{children}]
    </span>
  );
}

export function Pill({ children, tone = "muted" }: { children: ReactNode; tone?: string }) {
  const tones: Record<string, string> = {
    muted: "bg-secondary text-secondary-foreground",
    brass: "bg-accent text-accent-foreground",
    ink: "bg-ink text-ink-foreground",
    positive: "bg-positive/15 text-positive",
    caution: "bg-caution/15 text-caution",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider",
        tones[tone] ?? tones['muted'],
      )}
    >
      {children}
    </span>
  );
}

export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3 id={id} className="mt-10 scroll-mt-24 text-2xl md:text-[1.75rem]">
      {children}
    </h3>
  );
}

export function StatCard({
  value,
  label,
  note,
  delay = 0,
}: {
  value: string;
  label: string;
  note?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="card-lift glass-card h-full rounded-2xl p-5">
        <p className="font-display text-3xl leading-none text-gradient">{value}</p>
        <p className="mt-2 text-sm font-semibold">{label}</p>
        {note ? <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{note}</p> : null}
      </div>
    </Reveal>
  );
}

export function NoteCard({
  title,
  tone = "info",
  children,
}: {
  title: string;
  tone?: "info" | "warn" | "good";
  children: ReactNode;
}) {
  const tones: Record<string, string> = {
    info: "border-accent/40 bg-accent/[0.06]",
    warn: "border-destructive/35 bg-destructive/[0.05]",
    good: "border-positive/40 bg-positive/[0.06]",
  };
  const dot: Record<string, string> = {
    info: "bg-accent",
    warn: "bg-destructive",
    good: "bg-positive",
  };
  return (
    <Reveal>
      <div className={cn("card-lift my-6 rounded-2xl border p-5 shadow-card", tones[tone])}>
        <p className="flex items-center gap-2 text-sm font-semibold">
          <span className={cn("inline-block size-2 rounded-full", dot[tone])} />
          {title}
        </p>
        <div className="mt-2 text-sm leading-relaxed text-foreground/85">{children}</div>
      </div>
    </Reveal>
  );
}
