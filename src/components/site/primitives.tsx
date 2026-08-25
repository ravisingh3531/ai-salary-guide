import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
      <div className="rule-top">
        {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
        <h2 className="text-3xl leading-tight md:text-[2.6rem]">{title}</h2>
      </div>
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
    <blockquote
      className={cn(
        "my-6 border-l-4 bg-paper px-5 py-4 text-[0.98rem] italic leading-relaxed",
        tone === "brass" && "border-l-brass",
        tone === "warn" && "border-l-destructive",
        tone === "neutral" && "border-l-ink",
      )}
    >
      {children}
    </blockquote>
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
    <figure className="my-8">
      <figcaption className="mb-3">
        <span className="eyebrow">{label}</span>
        <h3 className="mt-1 text-xl md:text-2xl">{title}</h3>
      </figcaption>
      <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-card">
        <table className="data-table min-w-[720px]">{children}</table>
      </div>
      {caption ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{caption}</p>
      ) : null}
    </figure>
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
    brass: "bg-brass text-brass-foreground",
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
