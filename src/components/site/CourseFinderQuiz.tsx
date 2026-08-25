import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pill } from "./primitives";

type Key = "stage" | "budget" | "time" | "goal" | "language";

const questions: { key: Key; q: string; options: { label: string; value: string }[] }[] = [
  {
    key: "stage",
    q: "Where are you right now?",
    options: [
      { label: "Student or fresher", value: "fresher" },
      { label: "Working engineer or analyst (2–12 yrs)", value: "working" },
      { label: "IT-services engineer on single-digit increments", value: "services" },
      { label: "Non-tech career switcher", value: "switcher" },
    ],
  },
  {
    key: "budget",
    q: "What can you spend without straining your finances?",
    options: [
      { label: "Under ₹10,000", value: "tiny" },
      { label: "₹10,000 – ₹40,000", value: "small" },
      { label: "₹40,000 – ₹1,20,000", value: "mid" },
      { label: "Above ₹1,50,000 (or employer-funded)", value: "large" },
    ],
  },
  {
    key: "time",
    q: "Realistically, how many hours a week — for months, not weeks?",
    options: [
      { label: "Under 6 hours", value: "low" },
      { label: "6–10 hours", value: "medium" },
      { label: "10–15 hours", value: "high" },
      { label: "15+ hours", value: "veryhigh" },
    ],
  },
  {
    key: "goal",
    q: "What is the actual outcome you are buying?",
    options: [
      { label: "Production AI engineering capability", value: "capability" },
      { label: "A placement pipeline into product companies", value: "placement" },
      { label: "A credential for HR filters or a promotion case", value: "credential" },
      { label: "First tech job / testing my interest", value: "entry" },
    ],
  },
  {
    key: "language",
    q: "How comfortable are you learning technical content in English?",
    options: [
      { label: "Completely comfortable", value: "en" },
      { label: "I'd learn faster in my first language", value: "vernacular" },
    ],
  },
];

function recommend(a: Partial<Record<Key, string>>) {
  const { budget, time, goal, language } = a;
  if (language === "vernacular" && budget !== "large")
    return {
      pick: "GUVI",
      why: "Instruction language is your biggest lever right now. Clear the first tech role in a language you think in, then invest in depth.",
      next: "Plan a deeper second program once you can read technical English comfortably.",
    };
  if (budget === "tiny")
    return {
      pick: "DeepLearning.AI (audit) + PW Skills",
      why: "At this budget the right move is world-class free foundations plus a low-risk structured track — not a loan.",
      next: "Ship two original projects before spending anything. That portfolio, not a certificate, is what changes your band.",
    };
  if (goal === "placement" && budget === "large" && (time === "high" || time === "veryhigh"))
    return {
      pick: "Scaler",
      why: "You are buying the placement machine, and you can afford the fee and the hours it demands.",
      next: "Before signing: ask for placement percentages on enrolled learners, median (not average) salary, and the window.",
    };
  if (goal === "credential")
    return {
      pick: "upGrad (IIIT-Bangalore) or Great Learning (UT Austin)",
      why: "Your pay mechanism is HR-filter clearance and promotion documentation, which a university-affiliated credential serves better than frontier depth.",
      next: "Check whether your employer reimburses — if so, Simplilearn also becomes reasonable.",
    };
  if (goal === "entry" || budget === "small")
    return {
      pick: "PW Skills, then a deeper program",
      why: "The lowest-risk structured entry. Prove to yourself you'll finish before committing real money.",
      next: "Budget for a second, deeper investment — this one has an entry-level ceiling.",
    };
  return {
    pick: "LogicMojo",
    why: "You want capability that high-paying AI roles interview for, and you have the hours for a live cohort. This is the deepest 2026 stack per rupee on the list.",
    next: "Ask to observe a live class and confirm who teaches your batch before you pay.",
  };
}

export function CourseFinderQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<Key, string>>>({});
  const done = step >= questions.length;
  const result = done ? recommend(answers) : null;

  return (
    <div className="my-8 overflow-hidden rounded-3xl border border-accent/20 bg-card shadow-lift">
      <div className="flex items-center justify-between gap-4 bg-[image:var(--gradient-blue)] px-5 py-4 text-primary-foreground">
        <div>
          <p className="eyebrow !text-primary-foreground/80">Interactive tool</p>
          <p className="font-display text-xl">AI Course Finder Quiz</p>
        </div>
        <span className="font-mono text-xs opacity-70">
          {done ? "Result" : `${step + 1} / ${questions.length}`}
        </span>
      </div>

      <div className="h-1 w-full bg-secondary">
        <div
          className="h-full bg-[image:var(--gradient-blue)] transition-all duration-500"
          style={{ width: `${(Math.min(step, questions.length) / questions.length) * 100}%` }}
        />
      </div>

      <div className="p-5 md:p-7">
        {!done && questions[step] && (
          <>
            <p className="font-display text-2xl">{questions[step]!.q}</p>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {questions[step]!.options.map((o) => (
                <button
                  key={o.value}
                  onClick={() => {
                    setAnswers((p) => ({ ...p, [questions[step]!.key]: o.value }));
                    setStep((s) => s + 1);
                  }}
                  className={cn(
                    "rounded-xl border border-border bg-background px-4 py-3.5 text-left text-sm transition-all",
                    "hover:-translate-y-0.5 hover:border-accent hover:bg-accent/[0.06] hover:shadow-card focus-visible:outline-2 focus-visible:outline-ring",
                  )}
                >
                  {o.label}
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="mt-5 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                ← Back
              </button>
            )}
          </>
        )}

        {done && result && (
          <div>
            <Pill tone="brass">Closest fit</Pill>
            <p className="mt-3 font-display text-3xl">{result.pick}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{result.why}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Do this next:</strong> {result.next}
            </p>
            <p className="mt-5 rounded-r-xl border-l-4 border-l-accent bg-paper px-4 py-3 text-sm italic">
              This is a fit suggestion based on budget, time and goal — not a salary projection. No course
              on this page can promise a package; roles and markets set pay, and outcomes concentrate
              among learners who finish and build a portfolio.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setStep(0);
                  setAnswers({});
                }}
              >
                Retake the quiz
              </Button>
              <Button asChild>
                <a href="#reviews">Read the full review of {result.pick.split(" ")[0]}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
