import { useMemo, useState } from "react";
import { deepDiveByRank } from "@/data/deepdive";
import { reviews } from "@/data/reviews";

type Opt = { label: string; scores: Partial<Record<number, number>>; tag?: string };
type Q = { id: string; q: string; help?: string; options: Opt[] };

/** Ranks map to the 10 reviewed courses (1 = LogicMojo … 10 = PW Skills). */
const QUESTIONS: Q[] = [
  {
    id: "level",
    q: "What is your current experience level?",
    help: "This decides how much foundation-building the program must carry.",
    options: [
      { label: "Complete beginner — no coding", scores: { 9: 3, 10: 3, 4: 2, 3: 1 } },
      { label: "Beginner — basic Python", scores: { 10: 2, 9: 2, 8: 2, 1: 2, 4: 1 } },
      { label: "Some AI / ML knowledge", scores: { 1: 3, 7: 2, 2: 2, 5: 1 } },
      { label: "Working professional — looking to transition", scores: { 1: 3, 2: 3, 3: 2, 4: 2 } },
      { label: "Experienced professional — upskilling", scores: { 1: 3, 6: 2, 3: 2, 7: 1 } },
    ],
  },
  {
    id: "background",
    q: "What is your educational background?",
    options: [
      { label: "Engineering / CS", scores: { 1: 2, 2: 3, 7: 1 } },
      { label: "Non-engineering (general)", scores: { 4: 2, 3: 2, 9: 1 } },
      { label: "Commerce", scores: { 4: 2, 9: 2, 10: 1 } },
      { label: "Science", scores: { 1: 1, 4: 2, 8: 1 } },
      { label: "Arts / other", scores: { 9: 2, 10: 2, 4: 1 } },
    ],
  },
  {
    id: "goal",
    q: "What is your primary goal?",
    options: [
      { label: "Get a high-paying AI job", scores: { 1: 3, 2: 3 } },
      { label: "Switch career into AI", scores: { 1: 3, 2: 2, 3: 2, 4: 2 } },
      { label: "Upskill for a raise or promotion", scores: { 6: 3, 3: 2, 1: 2 } },
      { label: "Become an AI/ML Engineer", scores: { 1: 3, 2: 3, 8: 1 } },
      { label: "Become a GenAI / LLM Engineer", scores: { 1: 4, 7: 2 } },
      { label: "Build AI products & solutions", scores: { 1: 3, 7: 2, 2: 1 } },
    ],
  },
  {
    id: "salary",
    q: "What salary band are you targeting?",
    help: "Bands belong to roles and markets, never to a course. This only tells us the capability ceiling you need.",
    options: [
      { label: "₹4–8 LPA", scores: { 9: 3, 10: 3, 8: 2 } },
      { label: "₹8–15 LPA", scores: { 5: 2, 4: 2, 6: 2, 1: 2, 8: 1 } },
      { label: "₹15–25 LPA", scores: { 1: 3, 2: 3, 3: 2, 4: 1 } },
      { label: "₹25 LPA+", scores: { 1: 4, 2: 4 } },
    ],
  },
  {
    id: "budget",
    q: "What is your budget range?",
    options: [
      { label: "Under ₹15,000", scores: { 7: 4, 8: 4, 10: 3, 9: 2 } },
      { label: "₹15,000 – ₹50,000", scores: { 10: 3, 9: 3, 1: 2 } },
      { label: "₹50,000 – ₹1,00,000", scores: { 1: 4, 5: 2 } },
      { label: "₹1,00,000+", scores: { 2: 3, 3: 3, 4: 3, 6: 2, 1: 2 } },
    ],
  },
  {
    id: "placement",
    q: "How important is placement support to you?",
    options: [
      { label: "Must-have", scores: { 2: 4, 3: 2, 5: 2, 1: 1 } },
      { label: "Very important", scores: { 2: 3, 1: 2, 4: 2 } },
      { label: "Nice-to-have", scores: { 1: 3, 4: 1 } },
      { label: "Not important — I want skills", scores: { 1: 3, 7: 3, 8: 2 } },
    ],
  },
  {
    id: "mode",
    q: "Preferred learning mode?",
    options: [
      { label: "Live online", scores: { 1: 4, 2: 3, 5: 2 } },
      { label: "Self-paced", scores: { 7: 4, 8: 3, 10: 2, 6: 1 } },
      { label: "Hybrid", scores: { 3: 2, 4: 3, 6: 2 } },
      { label: "Classroom", scores: { 2: 2, 5: 1 } },
    ],
  },
  {
    id: "time",
    q: "How much time can you dedicate weekly?",
    options: [
      { label: "5–10 hours", scores: { 6: 3, 7: 2, 8: 2, 4: 2 } },
      { label: "10–20 hours", scores: { 1: 3, 3: 2, 4: 2, 2: 1 } },
      { label: "20+ hours", scores: { 2: 3, 1: 3 } },
    ],
  },
  {
    id: "foundations",
    q: "Do you need Python, SQL, statistics and ML from scratch before advanced AI?",
    options: [
      { label: "Yes — from scratch", scores: { 9: 3, 10: 3, 4: 3, 1: 2, 3: 2 } },
      { label: "Partial — I know the basics", scores: { 1: 3, 2: 2, 5: 2 } },
      { label: "No — already comfortable", scores: { 1: 3, 7: 3, 2: 2 } },
    ],
  },
  {
    id: "path",
    q: "Which AI career path interests you most?",
    options: [
      { label: "AI/ML Engineer", scores: { 1: 3, 2: 3 } },
      { label: "Data Scientist", scores: { 2: 3, 4: 3, 3: 2 } },
      { label: "Generative AI Engineer", scores: { 1: 4, 7: 1 } },
      { label: "LLM Engineer", scores: { 1: 4 } },
      { label: "Machine Learning Engineer", scores: { 1: 3, 2: 3, 8: 1 } },
      { label: "AI Product / Business Analyst", scores: { 6: 3, 4: 2, 3: 2 } },
      { label: "Computer Vision Engineer", scores: { 1: 3, 4: 2, 8: 2 } },
    ],
  },
];

const CTA: Record<number, { label: string; href: string }> = {
  1: { label: "See LogicMojo success stories", href: "https://logicmojo.com/success-story" },
};

function why(rank: number, answers: Record<string, number>) {
  const salary = QUESTIONS[3]?.options[answers["salary"] ?? 1]?.label ?? "";
  const goal = QUESTIONS[2]?.options[answers["goal"] ?? 0]?.label ?? "";
  const dd = deepDiveByRank[rank];
  return `For your goal (“${goal}”) and target band (${salary}), this program's capability ceiling is the closest match. ${dd?.thesis ?? ""}`;
}

export function SalaryQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);

  const total = QUESTIONS.length;
  const current = QUESTIONS[step];

  const result = useMemo(() => {
    const totals: Record<number, number> = {};
    for (const q of QUESTIONS) {
      const idx = answers[q.id];
      if (idx === undefined) continue;
      const opt = q.options[idx];
      if (!opt) continue;
      for (const [rank, pts] of Object.entries(opt.scores)) {
        const k = Number(rank);
        totals[k] = (totals[k] ?? 0) + (pts ?? 0);
      }
    }
    const ordered = Object.entries(totals)
      .map(([r, s]) => ({ rank: Number(r), score: s }))
      .sort((a, b) => b.score - a.score);
    return ordered;
  }, [answers]);

  const top = result[0];
  const runnerUps = result.slice(1, 3);
  const topReview = top ? reviews.find((r) => r.rank === top.rank) : undefined;
  const topDeep = top ? deepDiveByRank[top.rank] : undefined;

  function pick(idx: number) {
    if (!current) return;
    const next = { ...answers, [current.id]: idx };
    setAnswers(next);
    if (step + 1 < total) setStep(step + 1);
    else setOpen(true);
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setOpen(false);
  }

  const pct = Math.round((Object.keys(answers).length / total) * 100);

  return (
    <div className="not-prose">
      <div className="glass-card card-lift rounded-3xl border border-accent/20 p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">
            Question {Math.min(step + 1, total)} of {total}
          </p>
          <button
            type="button"
            onClick={restart}
            className="text-xs font-medium text-muted-foreground underline underline-offset-4"
          >
            Reset
          </button>
        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-[image:var(--gradient-blue)] transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>

        <h3 className="mt-6 font-display text-2xl leading-snug md:text-3xl">{current?.q}</h3>
        {current?.help ? (
          <p className="mt-2 text-sm text-muted-foreground">{current.help}</p>
        ) : null}

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {current?.options.map((o, i) => {
            const selected = answers[current.id] === i;
            return (
              <button
                key={o.label}
                type="button"
                onClick={() => pick(i)}
                className={`group flex min-h-14 items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-glow ${
                  selected ? "border-accent bg-accent/10" : "border-border bg-card"
                }`}
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient-blue)] text-xs font-semibold text-primary-foreground">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="leading-snug">{o.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="min-h-11 rounded-full border border-border px-5 text-sm disabled:opacity-40"
          >
            ← Back
          </button>
          {Object.keys(answers).length === total ? (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="min-h-11 rounded-full bg-[image:var(--gradient-blue)] px-6 text-sm font-medium text-primary-foreground shadow-card"
            >
              Show my recommendation
            </button>
          ) : null}
          <span className="text-xs text-muted-foreground">
            No email required. No salary is promised — only a capability fit.
          </span>
        </div>
      </div>

      {open && topReview ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-foreground/50 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Your recommended AI course"
          onClick={() => setOpen(false)}
        >
          <div
            className="rise-in relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-accent/25 bg-card p-6 shadow-glow md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-secondary"
            >
              ✕
            </button>

            <p className="eyebrow">Your best-fit match</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-blue)] font-display text-2xl text-primary-foreground shadow-glow">
                {topReview.rank}
              </span>
              <h3 className="font-display text-2xl leading-tight md:text-3xl">{topReview.name}</h3>
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-paper p-4">
              <p className="eyebrow mb-1">Why this fits you</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {top ? why(top.rank, answers) : null}
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border p-4">
                <p className="eyebrow mb-2">Key AI modules</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {(topDeep?.stack ?? []).slice(0, 6).map((s) => (
                    <li key={s.area}>
                      <strong className="text-foreground">{s.area}</strong> — {s.depth}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border p-4">
                <p className="eyebrow mb-2">Indicative role bands</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {(topDeep?.salary ?? []).map((s) => (
                    <li key={s.role}>
                      <strong className="text-foreground">{s.role}</strong>: {s.band}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-[11px] leading-snug text-muted-foreground">
                  Bands are attached to roles and the Indian market, never to a course, and are
                  indicative only.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-border p-4">
              <p className="eyebrow mb-2">Placement &amp; career support reality</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {(topDeep?.placementFacts ?? []).slice(0, 4).map((p) => (
                  <li key={p.label}>
                    <strong className="text-foreground">{p.label}:</strong> {p.detail}
                  </li>
                ))}
              </ul>
            </div>

            {runnerUps.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-muted-foreground">Also worth shortlisting:</span>
                {runnerUps.map((r) => {
                  const rev = reviews.find((x) => x.rank === r.rank);
                  return rev ? (
                    <a
                      key={r.rank}
                      href={`#review-${r.rank}`}
                      onClick={() => setOpen(false)}
                      className="rounded-full border border-border px-3 py-1 text-xs hover:border-accent"
                    >
                      {rev.name.split("—")[0]?.trim()}
                    </a>
                  ) : null;
                })}
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`#review-${topReview.rank}`}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center rounded-full bg-[image:var(--gradient-blue)] px-6 text-sm font-medium text-primary-foreground shadow-card"
              >
                Read the full review →
              </a>
              {CTA[topReview.rank] ? (
                <a
                  href={CTA[topReview.rank]!.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-accent px-6 text-sm font-medium"
                >
                  {CTA[topReview.rank]!.label} ↗
                </a>
              ) : null}
              <button
                type="button"
                onClick={restart}
                className="inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm"
              >
                Retake quiz
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
