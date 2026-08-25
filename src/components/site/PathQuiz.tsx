import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/primitives";

type ProfileKey =
  | "adjacent"
  | "pipeline"
  | "quality"
  | "groundwork"
  | "data"
  | "domain"
  | "leader"
  | "credential";

type Option = { label: string; weights: Partial<Record<ProfileKey, number>>; credential?: boolean };

const questions: { q: string; options: Option[] }[] = [
  {
    q: "1. Which best describes your current role family?",
    options: [
      { label: "Software developer / backend / full-stack", weights: { adjacent: 3 } },
      { label: "DevOps, SRE, cloud or platform engineering", weights: { pipeline: 3 } },
      { label: "QA — automation or manual testing", weights: { quality: 2, groundwork: 2 } },
      { label: "Support, ERP, BA, consulting, analytics or team lead", weights: { domain: 2, data: 2, leader: 1, groundwork: 1 } },
    ],
  },
  {
    q: "2. How comfortable are you writing code today?",
    options: [
      { label: "I write production code most weeks", weights: { adjacent: 3, pipeline: 2 } },
      { label: "I script confidently — Python, Bash, SQL", weights: { pipeline: 2, quality: 2, data: 2 } },
      { label: "I read code and make small changes", weights: { quality: 1, domain: 2, leader: 1 } },
      { label: "Almost none — I'd be starting from basics", weights: { groundwork: 4 } },
    ],
  },
  {
    q: "3. How many hours a week can you genuinely protect?",
    options: [
      { label: "15+ hours", weights: { adjacent: 2, pipeline: 2, quality: 1 } },
      { label: "10–14 hours", weights: { quality: 2, data: 2, pipeline: 1 } },
      { label: "6–9 hours", weights: { domain: 2, leader: 2, groundwork: 1 } },
      { label: "Under 6 hours", weights: { groundwork: 2, leader: 2 } },
    ],
  },
  {
    q: "4. How much timeline pressure are you under to switch?",
    options: [
      { label: "High — I need to move within 3–4 months", weights: { adjacent: 2, pipeline: 2 } },
      { label: "Moderate — within 6 months", weights: { quality: 2, data: 2, domain: 1 } },
      { label: "Low — a year is fine if the move is solid", weights: { groundwork: 2, leader: 1 } },
      { label: "None — I'm exploring seriously but not urgently", weights: { leader: 2, domain: 1 } },
    ],
  },
  {
    q: "5. Does your current employer have real AI work you could join?",
    options: [
      { label: "Yes — live pilots I could realistically get onto", weights: { leader: 2, domain: 2, quality: 1 } },
      { label: "Some, but it sits in another business unit", weights: { data: 1, pipeline: 1, adjacent: 1 } },
      { label: "Talked about, nothing running", weights: { adjacent: 1, quality: 1 } },
      { label: "No, and honestly it isn't coming", weights: { adjacent: 2, pipeline: 1, groundwork: 1 } },
    ],
  },
  {
    q: "6. Do you need a formal credential for a specific gate?",
    options: [
      { label: "Yes — promotion, HR band or visa requires one", weights: {}, credential: true },
      { label: "Possibly, for an internal band change", weights: { leader: 1 }, credential: true },
      { label: "No — capability and portfolio are enough", weights: { adjacent: 1, pipeline: 1, quality: 1 } },
      { label: "No idea yet", weights: {} },
    ],
  },
];

const profiles: Record<
  ProfileKey,
  { name: string; target: string; horizon: string; project: string; pointer?: string }
> = {
  adjacent: {
    name: "The Adjacent Builder",
    target: "GenAI / LLM Application Engineer",
    horizon: "90-day roadmap",
    project: "A deployed document Q&A service with hybrid retrieval, reranking and a 100-question eval set.",
    pointer: "If you want structure and accountability rather than self-direction, LogicMojo's AI & GenAI course fits this profile — editorial fit, not a promise.",
  },
  pipeline: {
    name: "The Pipeline Pro",
    target: "LLMOps / AI Platform Engineer",
    horizon: "90-day roadmap",
    project: "An inference service with autoscaling, token-cost dashboards, prompt-regression gating in CI and alerting on quality drift.",
    pointer: "A cloud AI certification in your existing ecosystem is a cheap keyword win alongside the portfolio.",
  },
  quality: {
    name: "The Quality Guardian",
    target: "AI Evaluation / Applied AI Engineer",
    horizon: "6-month roadmap",
    project: "An open-source LLM evaluation harness — golden set, faithfulness and refusal scoring, regression report per model version.",
    pointer: "LogicMojo's evaluation and guardrails modules map directly onto this profile if you want taught structure.",
  },
  groundwork: {
    name: "The Groundwork Builder",
    target: "AI-adjacent engineering, then applied AI",
    horizon: "12-month roadmap",
    project: "Start smaller: a Python CLI that summarises and tags a folder of documents, deployed as a simple web app.",
    pointer: "Affordable foundations first (Group C — GUVI / PW Skills or the DeepLearning.AI stack), then depth. An excellent first step is not a final step.",
  },
  data: {
    name: "The Data Upgrader",
    target: "Applied AI / ML Engineer with a data spine",
    horizon: "6-month roadmap",
    project: "A retrieval system over your own structured + unstructured corpus, with measured precision@k before and after reranking.",
  },
  domain: {
    name: "The Domain Translator",
    target: "AI Product / Solutions Engineer in your domain",
    horizon: "6-month roadmap",
    project: "A domain-specific agent — claims triage, reconciliation checks, order exceptions — with a human handoff on low confidence.",
    pointer: "Your domain knowledge is the differentiator; buy build depth, not more domain training.",
  },
  leader: {
    name: "The People Leader",
    target: "AI Delivery Lead / Engineering Manager for AI teams",
    horizon: "6-month roadmap, internal track first",
    project: "Sponsor and ship one internal GenAI pilot end-to-end, owning evaluation and cost governance personally.",
    pointer: "Executive formats (Group B) suit this profile better than a hands-on cohort — if scope, not code, is the goal.",
  },
  credential: {
    name: "The Credential-Gated Professional",
    target: "Same AI target as your role family, with a formal credential attached",
    horizon: "6–12 month roadmap",
    project: "Whatever your role-family profile suggests — the credential does not replace the portfolio.",
    pointer: "Group B (university-affiliated programs) exists for exactly this gate. Confirm in writing that the specific credential satisfies it before paying.",
  },
};

export function PathQuiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);

  const complete = answers.every((a) => a !== null);

  const result = useMemo(() => {
    const scores: Record<ProfileKey, number> = {
      adjacent: 0, pipeline: 0, quality: 0, groundwork: 0, data: 0, domain: 0, leader: 0, credential: 0,
    };
    let credentialGate = false;
    answers.forEach((ai, qi) => {
      if (ai === null) return;
      const opt = questions[qi]?.options[ai];
      if (!opt) return;
      if (opt.credential) credentialGate = true;
      for (const [k, v] of Object.entries(opt.weights)) {
        scores[k as ProfileKey] += v ?? 0;
      }
    });
    if (credentialGate) scores.credential += 6;
    const best = (Object.keys(scores) as ProfileKey[]).reduce((a, b) =>
      (scores[b] ?? 0) > (scores[a] ?? 0) ? b : a,
    );
    return profiles[best];
  }, [answers]);

  return (
    <Reveal>
      <div className="card-lift glass-card rounded-3xl p-6 md:p-8">
        <div className="space-y-6">
          {questions.map((q, qi) => (
            <fieldset key={q.q}>
              <legend className="font-display text-lg leading-snug">{q.q}</legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {q.options.map((o, oi) => {
                  const active = answers[qi] === oi;
                  return (
                    <button
                      key={o.label}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        setAnswers((prev) => prev.map((v, i) => (i === qi ? oi : v)))
                      }
                      className={`min-h-11 rounded-2xl border px-4 py-3 text-left text-sm leading-snug transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                        active
                          ? "border-transparent bg-[image:var(--gradient-blue)] text-primary-foreground shadow-card"
                          : "border-border bg-card hover:border-accent/50"
                      }`}
                    >
                      {o.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={!complete}
            onClick={() => setSubmitted(true)}
            className="min-h-11 rounded-full bg-[image:var(--gradient-blue)] px-6 text-sm font-medium text-primary-foreground shadow-card disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Show my path
          </button>
          <button
            type="button"
            onClick={() => {
              setAnswers(questions.map(() => null));
              setSubmitted(false);
            }}
            className="min-h-11 rounded-full border border-border px-5 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Reset
          </button>
          {!complete ? (
            <span className="text-sm text-muted-foreground">
              {answers.filter((a) => a === null).length} question(s) left
            </span>
          ) : null}
        </div>

        <div aria-live="polite" className="mt-6">
          {submitted && complete ? (
            <div className="rounded-2xl border border-accent/40 bg-accent/[0.06] p-5">
              <p className="eyebrow">Your closest profile</p>
              <p className="mt-1 font-display text-2xl">{result.name}</p>
              <dl className="mt-4 grid gap-3 text-sm leading-relaxed sm:grid-cols-3">
                <div>
                  <dt className="eyebrow">Primary target role</dt>
                  <dd>{result.target}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Roadmap horizon</dt>
                  <dd>{result.horizon}</dd>
                </div>
                <div>
                  <dt className="eyebrow">First project</dt>
                  <dd>{result.project}</dd>
                </div>
              </dl>
              {result.pointer ? (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  <strong>Editorial fit note:</strong> {result.pointer}
                </p>
              ) : null}
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                This is a fit indicator based on six answers, not an assessment of your ability and
                not a prediction of any outcome.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
