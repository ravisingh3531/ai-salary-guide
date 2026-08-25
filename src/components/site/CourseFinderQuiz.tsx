import { useMemo, useState } from "react";
import { FieldNote } from "@/components/site/EEAT";

/**
 * Section 8 — AI Course Finder Quiz.
 * 8 single-select questions, progress indicator, back navigation,
 * inline result (no email gate), honesty microcopy on every result.
 */

type Q = { id: string; q: string; options: string[] };

const QUESTIONS: Q[] = [
  {
    id: "goal",
    q: "What is your career goal right now?",
    options: [
      "Switch into an AI role",
      "Raise pay in my current track",
      "Land my first job",
      "Credential for a promotion",
      "Just exploring",
    ],
  },
  {
    id: "exp",
    q: "What best describes your current experience?",
    options: [
      "Non-tech background",
      "Some coding",
      "Software engineer (2+ yrs)",
      "Data analyst",
      "Student or fresher",
    ],
  },
  {
    id: "budget",
    q: "What is your realistic budget?",
    options: ["Free only", "Under ₹15K", "₹15K–₹60K", "₹60K–₹1.5L", "₹1.5L+"],
  },
  {
    id: "mode",
    q: "Which learning mode suits your life?",
    options: ["Live cohort", "Weekend mentor-led", "Fully self-paced", "Mixed"],
  },
  {
    id: "hours",
    q: "How many hours can you protect every week?",
    options: ["Under 6 hrs", "6–10 hrs", "10–15 hrs", "15+ hrs"],
  },
  {
    id: "role",
    q: "Which AI role are you targeting?",
    options: [
      "GenAI / LLM engineer",
      "ML engineer",
      "Data scientist",
      "AI-augmented version of my current role",
      "Not sure yet",
    ],
  },
  {
    id: "salary",
    q: "What is your salary expectation from this move?",
    options: ["Entry band", "Meaningful hike", "Premium band", "Long-term growth"],
  },
  {
    id: "placement",
    q: "How much does placement infrastructure matter to you?",
    options: [
      "Must-have infrastructure",
      "Helpful",
      "Portfolio-first, I'll apply myself",
      "Not needed",
    ],
  },
];

type Result = {
  course: string;
  reason: string;
  alternative: string;
  note?: string;
  href: string;
};

const HREFS: Record<string, string> = {
  LogicMojo: "#review-1",
  "DeepLearning AI": "#review-2",
  "DataCamp": "#review-3",
  "Great Learning": "#review-4",
  Intellipaat: "#review-5",
  Simplilearn: "#review-6",
  "DeepLearning.AI": "#review-7",
  "IBM AI Engineering": "#review-8",
  GUVI: "#review-9",
  "PW Skills": "#review-10",
};

function decide(a: Record<string, string>): Result {
  const budget = a['budget'] ?? "";
  const hours = a['hours'] ?? "";
  const mode = a['mode'] ?? "";
  const goal = a['goal'] ?? "";
  const role = a['role'] ?? "";
  const exp = a['exp'] ?? "";
  const placement = a['placement'] ?? "";
  const codes = exp === "Software engineer (2+ yrs)" || exp === "Data analyst" || exp === "Some coding";

  const R = (course: string, reason: string, alternative: string, note?: string): Result => ({
    course,
    reason,
    alternative,
    ...(note ? { note } : {}),
    href: HREFS[course] ?? "#at-a-glance",
  });

  // 1 — free only
  if (budget === "Free only") {
    return R(
      "DeepLearning.AI",
      "Your budget rules out paid structure, and the strongest free conceptual foundation available is Andrew Ng's ML and Deep Learning specialisations on audit — pair them with Hugging Face courses and Kaggle Learn as your free stack.",
      "IBM AI Engineering (also free to audit) if you already code and want lab practice instead of theory.",
      a['salary'] === "Premium band"
        ? "Reality check, respectfully: a premium band from a free-only route is possible but slower — it depends on an independently built, deployed portfolio over 9–15 months."
        : undefined,
    );
  }
  // 10 — under 6 hrs/week
  if (hours === "Under 6 hrs") {
    return R(
      "DeepLearning.AI",
      "With under six hours a week, foundations first is the only honest recommendation. Build the base cheaply, then buy structure when your hours exist — a premium program bought now is the classic dropout scenario.",
      "PW Skills, once you can protect 8+ hours a week and want a low-risk structured entry.",
      "Defer any premium purchase until you have run four consecutive weeks at your intended study hours.",
    );
  }
  // 2 — under ₹15K
  if (budget === "Under ₹15K") {
    if (codes)
      return R(
        "IBM AI Engineering",
        "You already code, so guided applied labs in Keras, TensorFlow and PyTorch are better value than beginner theory at this budget.",
        "PW Skills if you want live doubt sessions and a cohort rather than solo labs.",
        "Extend the labs into original work — guided notebooks show exposure, not engineering judgement.",
      );
    return R(
      "PW Skills",
      "At this budget it is the lowest-risk structured entry in Indian AI education: recorded-first with live doubt sessions, a large Hindi-English community and an entry-level ceiling that is honest about itself.",
      "GUVI if you would rather learn in Tamil, Telugu, Kannada or Hindi with mobile-first delivery.",
      "Plan a second, deeper investment later — this tier reaches Level 2–3, not premium AI engineering bands.",
    );
  }
  // 3 — placement must-have, premium budget, high hours
  if (placement === "Must-have infrastructure" && budget === "₹1.5L+" && hours === "15+ hrs") {
    return R(
      "DeepLearning AI",
      "You are buying placement infrastructure, and DeepLearning AI runs the strongest structured operation on this list — partner network, mock interviews and referrals — with DSA and system design weighted the way product-company loops interview.",
      "DataCamp if a university credential matters as much as the hiring pipeline.",
      "It is a multi-year EMI commitment; value collapses if you exit around month five.",
    );
  }
  // 4 — credential goal
  if (goal === "Credential for a promotion" && budget === "₹1.5L+") {
    if (mode === "Weekend mentor-led")
      return R(
        "Great Learning",
        "A weekend mentor-led format with a recognised university tag is the most reliably completable premium option for a working professional buying a credential.",
        "DataCamp if the promotion panel specifically values a longer PG-style program.",
      );
    return R(
      "DataCamp",
      "For HR-filter clearance and internal promotion cases, the university-credentialed PGP is the mechanism that actually moves pay in your situation — not frontier skill depth.",
      "Simplilearn if your employer will reimburse the fee.",
    );
  }
  // 5 — employer-funded / corporate credential context
  if (goal === "Credential for a promotion" && budget === "₹60K–₹1.5L") {
    return R(
      "Simplilearn",
      "It is the most commonly employer-reimbursed platform, and the pay mechanism you need is internal mobility plus credential recognition rather than deep engineering capability.",
      "Great Learning if you want live mentor contact rather than a self-paced core with masterclasses.",
      "Self-funded, its value for engineering capability is mediocre — ask your employer first.",
    );
  }
  // 9 — fully self-paced and already codes
  if (mode === "Fully self-paced" && codes) {
    return R(
      "IBM AI Engineering",
      "Self-paced suits you and you already code, so applied labs plus current GenAI and RAG components give you practice without paying for structure you won't use.",
      "DeepLearning.AI for stronger conceptual grounding at the same price point.",
      "Self-paced completion rates are famously low — if your goal is an offer rather than knowledge, a mentor-led cohort converts more reliably.",
    );
  }
  // 6/7 — engineer-track depth lanes
  const midBudget = budget === "₹15K–₹60K" || budget === "₹60K–₹1.5L";
  const goodHours = hours === "10–15 hrs" || hours === "15+ hrs";
  const liveish = mode === "Live cohort" || mode === "Mixed";
  if (
    (role === "GenAI / LLM engineer" || role === "ML engineer") &&
    goodHours &&
    midBudget &&
    liveish
  ) {
    return R(
      "LogicMojo",
      "Your target role is scored on 2026-stack depth — production RAG, fine-tuning, agents, MCP and MLOps — and this is the program on the list rated deepest across those rows at a mid-band price, in a live IST format you can attend.",
      "DeepLearning AI if you would rather buy a placement pipeline than curriculum depth.",
    );
  }
  if (exp === "Software engineer (2+ yrs)" && goal === "Switch into an AI role" && goodHours && midBudget) {
    return R(
      "LogicMojo",
      "You can already engineer; what you're missing is the AI layer plus a deployed portfolio to defend in a loop. A live mid-band specialist program is the shortest path from your existing skills to that.",
      "DeepLearning.AI first if you'd rather test your commitment for a month before spending.",
    );
  }
  // 8 — non-tech switcher, mid budget, live mode
  if (exp === "Non-tech background" && midBudget && liveish) {
    return R(
      "LogicMojo",
      "A non-tech switch needs prerequisite onboarding, live doubt resolution and human code review — the three things that decide whether you finish. This lane is where the live format earns its fee.",
      "Great Learning if weekend-only mentor sessions fit your calendar better.",
      "Expect 10–15 hours a week for several months; this path is slower than marketing suggests.",
    );
  }
  // Fallbacks
  if (mode === "Weekend mentor-led")
    return R(
      "Great Learning",
      "Weekend live mentor sessions with a recorded core is one of the most completable premium formats for a working professional adding AI to existing domain expertise.",
      "Intellipaat if you want more deployment exposure at a lower price.",
    );
  if (budget === "₹60K–₹1.5L")
    return R(
      "Intellipaat",
      "At this budget you get hybrid live and self-paced delivery with better deployment exposure than several pricier peers, plus an IIT-affiliated tag that helps in services and enterprise screens. [VERIFY: current affiliation]",
      "LogicMojo if 2026 GenAI-stack depth matters more than the institutional tag.",
      "Module and mentor quality varies — you will need to drive your own support.",
    );
  return R(
    "DeepLearning.AI",
    "Your answers don't point strongly at any paid lane yet, so start with the strongest free conceptual foundation and re-take this quiz once your goal, hours and budget are settled.",
    "PW Skills for a low-cost structured start with a cohort around you.",
  );
}

export function CourseFinderQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const current = QUESTIONS[step];
  const result = useMemo(() => (done ? decide(answers) : null), [done, answers]);
  const progress = Math.round(((done ? QUESTIONS.length : step) / QUESTIONS.length) * 100);

  function choose(value: string) {
    if (!current) return;
    const next = { ...answers, [current.id]: value };
    setAnswers(next);
    if (step === QUESTIONS.length - 1) setDone(true);
    else setStep(step + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setDone(false);
  }

  return (
    <>
    <FieldNote title="The logic behind this quiz is my own counselling script">
      <p>
        These eight questions are the ones I ask every mentee before I say a single course name,
        in the order I ask them — and hours-per-week sits early on purpose, because in my own
        tracking it predicts whether someone finishes better than budget, background or motivation
        does. The result deliberately names an alternative alongside the match, because I have been
        wrong about people before: twice I recommended a live cohort to someone whose rotational
        shifts made it impossible, and both dropped out. No email is asked for, nothing is sold on
        the result screen, and no answer combination produces a salary projection — I will not
        promise a number that depends on your interviews, not on my rubric.
      </p>
    </FieldNote>
    <div className="card-lift glass-card mt-6 rounded-3xl p-5 md:p-7">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow">
          {done ? "Your result" : `Question ${step + 1} of ${QUESTIONS.length}`}
        </p>
        {!done && step > 0 ? (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="min-h-11 rounded-full px-4 text-sm text-muted-foreground underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ← Back
          </button>
        ) : null}
      </div>

      <div
        className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Quiz progress"
      >
        <div
          className="h-full rounded-full bg-[image:var(--gradient-blue)] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div aria-live="polite">
        {!done && current ? (
          <fieldset className="mt-5">
            <legend className="font-display text-xl md:text-2xl">{current.q}</legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {current.options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => choose(opt)}
                  className="min-h-12 rounded-2xl border border-border bg-card px-4 py-3 text-left text-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {opt}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        {done && result ? (
          <div className="mt-5 rounded-3xl border border-accent/30 bg-paper p-5 md:p-6">
            <p className="eyebrow">Best fit for your answers</p>
            <h3 className="mt-1 font-display text-2xl md:text-3xl">{result.course}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{result.reason}</p>
            <p className="mt-3 text-sm leading-relaxed">
              <strong>Worth also considering:</strong>{" "}
              <span className="text-muted-foreground">{result.alternative}</span>
            </p>
            {result.note ? (
              <p className="mt-3 rounded-xl border-l-4 border-l-accent bg-secondary/60 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                {result.note}
              </p>
            ) : null}
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              This matches your inputs to the best-fit program on this list. No course guarantees a
              salary — completion, portfolio and interviews decide outcomes.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={result.href}
                className="inline-flex min-h-11 items-center rounded-full bg-[image:var(--gradient-blue)] px-5 text-sm font-medium text-primary-foreground shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Read the full {result.course} review →
              </a>
              <button
                type="button"
                onClick={reset}
                className="inline-flex min-h-11 items-center rounded-full border border-border px-5 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Retake the quiz
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
    </>
  );
}
