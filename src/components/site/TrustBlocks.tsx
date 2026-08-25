import { H3, NoteCard, Reveal, Section } from "@/components/site/primitives";
import { PathQuiz } from "@/components/site/PathQuiz";

/* Section 14 wrapper */
export function SectionPathQuiz() {
  return (
    <Section id="path-quiz" eyebrow="Section 14 · Interactive" title="Still Unsure? Answer These 6 Questions">
      <p>
        Six questions, eight result profiles. Each result gives you a target role, a roadmap horizon
        and a first project — and, only where it genuinely applies, a one-line pointer into the
        program comparison above. Nothing here is scored against you and no answer is wrong.
      </p>
      <div className="mt-6">
        <PathQuiz />
      </div>
    </Section>
  );
}

/* Section 15 — 20 FAQs */
const faqs: [string, string][] = [
  [
    "Can I transition from IT to AI in 2026 without a Master's degree?",
    "Yes, for applied roles. GenAI engineering, LLM application work, AI platform and evaluation roles are hired on demonstrated capability: a deployed portfolio, a clean system-design round and a coherent switch narrative. A postgraduate degree remains close to mandatory for research-track roles that publish or design novel architectures, and it helps at organisations with rigid HR bands. For everyone else, the degree is a tiebreaker at best. If a specific promotion, HR band or visa requires a credential, buy the credential deliberately — do not buy one hoping it substitutes for evidence.",
  ],
  [
    "How long does the transition realistically take for a working professional?",
    "For someone already writing code, three to six months of consistent evening and weekend work to become interview-ready, plus two to four months of searching — so roughly six to ten months end to end. For someone starting from little or no coding, plan twelve months to readiness. These are bands from tracked transitions, not promises, and the biggest variable is not intelligence but protected hours per week held steady over months. People who study intensely for three weeks and then stop for two months take far longer than the bands suggest.",
  ],
  [
    "Can I learn AI while working full-time, and how many hours a week do I need?",
    "Yes — and it is usually the better choice. Ten hours a week, protected and consistent, is the workhorse number: roughly two weekday evening blocks and one longer weekend session. Fifteen hours compresses the timeline meaningfully; under six stretches it toward the twelve-month horizon. Consistency beats intensity, because retrieval, agents and deployment are skills you build by repeatedly shipping, not by binge-watching. Employed learners also negotiate better and can afford a longer search.",
  ],
  [
    "Do I need advanced mathematics for an applied AI role?",
    "For applied roles you need working intuition rather than derivations: what a metric means, why precision changed, what latency a reranker costs, when a smaller model is sufficient. You should be comfortable reading a formula and reasoning about trade-offs. Be honest about the gradient — ML Engineer roles carry the most mathematics, GenAI Engineer roles noticeably less, and AI product roles least. Research roles are a different profession with different requirements.",
  ],
  [
    "Which AI role is easiest to move into from IT?",
    "The one adjacent to what you already do. Backend and full-stack developers move most smoothly into GenAI/LLM application engineering. DevOps, SRE and cloud engineers move into LLMOps and AI platform work with the least new learning of all, because the deployment, observability and cost discipline transfer wholesale. QA-automation engineers move into AI evaluation, which is an under-supplied and growing area. Manual QA, support and non-coding roles have the longest runway and should plan on the twelve-month horizon.",
  ],
  [
    "Will I have to take a salary cut to switch into AI?",
    "A switcher discount relative to your years of experience is common, because you are being priced against the new role's band rather than your old title's. An outright cut is less common when your experience is positioned as continuity, and it is most likely when you move from a high-paying but unrelated role into a junior AI position. Treat the first AI role as a positioning asset: the systems you touch in the next eighteen months usually matter more to your second AI role's band than a marginal difference in this one.",
  ],
  [
    "Is 35 (or 40) too late to move into AI?",
    "No. Age is not the filter; evidence is. AI-plus-domain roles actively reward experience — someone who understands insurance claims or telecom provisioning is more useful on a domain GenAI product than a fresher who does not. Tracked transitions include plenty of successful 35-plus switchers. Without sugar-coating it: ageism exists in pockets, particularly at some early-stage startups, and you may find those doors heavier. That is a subset of the market, not the market.",
  ],
  [
    "Should I quit my job to learn AI full-time?",
    "Almost never. Quitting adds financial pressure to a process that rewards patience, weakens your negotiating position, and creates an employment gap you then have to explain. An evenings-and-weekends plan carries essentially no downside beyond time. The rare exceptions: a genuinely toxic or 70-hour-week role that makes ten protected hours impossible, or a funded full-time program you have chosen with clear eyes. Even then, budget for a longer search than you expect.",
  ],
  [
    "Do I need a paid course, or can I self-study my way into an AI role?",
    "You can absolutely self-study — the best teaching material available costs almost nothing, and everything on this page works without spending. What you buy with a paid program is structure, mentorship, feedback and accountability, which are exactly what disorganised self-study lacks. Be honest with yourself about which one you are missing. If you have shipped things on your own before, self-study will probably work. If your last three attempts died at week four, structure is worth paying for — but it still is not a job.",
  ],
  [
    "How many projects do I need in my portfolio?",
    "Three deployed projects of increasing depth beat ten notebooks. A reasonable set: one retrieval system with measured quality, one agentic workflow with guardrails and a human handoff, and one production-flavoured piece with monitoring, cost tracking and an evaluation gate. Each needs a public repository, a live link where feasible, a README explaining the decisions and their trade-offs, and honest numbers. Quantity past four rarely adds interview conversion; depth does.",
  ],
  [
    "Can a manual tester really move into AI?",
    "Yes, with a longer runway and an honest sequence. The transferable core is genuine: test design, edge-case instinct, and the habit of asking how you would know a system is wrong — which is precisely what LLM evaluation work needs. The gap is coding. Plan twelve months: Python and automation fundamentals first, then evaluation harnesses and retrieval quality work, then agents. Target AI evaluation and applied AI QA roles rather than core model engineering for the first move.",
  ],
  [
    "Can a production-support engineer move into AI?",
    "Yes, and often faster than people expect. Support engineers already think in incidents, runbooks, monitoring and root cause — the operational spine of LLMOps. The move usually goes support → AI platform or LLMOps rather than support → model work. Build an inference service with real observability: latency and token-cost dashboards, alerting on quality regression, a rollback path. That artefact reads as directly relevant to hiring managers in a way that a chatbot demo does not.",
  ],
  [
    "How different is MLOps from DevOps?",
    "Less different than the acronym suggests, which is good news. Containers, CI/CD, infrastructure as code, observability and cost control transfer wholesale. What is new: models and data are versioned artefacts too, quality is probabilistic rather than binary, so you need evaluation gates rather than only unit tests, and you must manage token cost, context limits, prompt versioning and drift. Most DevOps engineers reach interview-readiness for LLMOps faster than any other source profile.",
  ],
  [
    "Should I try an internal move or switch companies?",
    "Run both from month three or four. The internal track is cheap to start and manufactures the one thing your applications lack — AI work with a company name attached — even when the move itself stalls. The external track prices better but screens harder. If, two to three months after asking clearly and volunteering for the unglamorous parts of a pilot, there is no budget and no sponsor at your company, treat the internal track as closed and put your energy externally.",
  ],
  [
    "Are AI jobs themselves safe from automation?",
    "Nobody can honestly promise any role's ten-year safety, and anyone who does is selling something. What is observable: tooling keeps compressing individual tasks, while demand shifts toward system design, evaluation, integration and cost governance — the judgement layers rather than the typing layers. Build transferable systems judgement rather than loyalty to one framework, and you stay employable through the next tooling shift as you did through the last.",
  ],
  [
    "What level of Python is enough for AI roles?",
    "Comfortable working fluency, not competitive-programming mastery. You should write clean functions and classes without reference, handle JSON and files, call and build APIs, use async where it matters, manage environments and dependencies, write tests, and read someone else's library code when the documentation is thin. Data structures at a light level appear in coding rounds. If you can build and debug a FastAPI service on your own, you are past the bar for most AI-specialist loops.",
  ],
  [
    "Is prompt engineering still a viable career in 2026?",
    "As a standalone job title it has been declining — the work has been absorbed into engineering roles that also own retrieval, evaluation and deployment. As a skill layer inside a real role it remains genuinely valuable, and structured prompting, evaluation and guardrail design are interviewed on directly. Target the role, not the layer: a GenAI engineer who prompts well is highly employable; a prompt specialist who cannot build the surrounding system is a narrowing bet.",
  ],
  [
    "What salary can an IT professional expect in their first AI role?",
    "Only bands are honest here, and they are role-based, not course-attributed: entry applied AI roles sit meaningfully above general IT entry levels but below what your current years alone would command elsewhere, mid-level applied GenAI and LLMOps roles band higher again, and senior or specialist roles higher still, with product companies and GCCs typically banding above services organisations. Location, company tier and the depth of your evidence move the number more than any credential. Verify current bands against live postings before planning around any figure.",
  ],
  [
    "How do I explain my career switch in an interview?",
    "Three parts, rehearsed to ninety seconds. Continuity: why your past work makes you better at this, specifically — 'my QA background is why my evaluation harnesses are strong'. Trigger: a concrete professional moment, a project or a problem you hit, never 'AI is the future'. Evidence: what you built over the last several months, what broke, and what you learned from the breakage. Never apologise for the earlier career; it is the reason you are not a fresher.",
  ],
  [
    "GenAI Engineer vs ML Engineer vs Data Scientist — which should I target?",
    "GenAI Engineer suits software engineers: LLM applications, retrieval, agents, deployment, lightest mathematics load, currently the widest entry surface for switchers. ML Engineer suits people who enjoy modelling and pipelines and are willing to carry more mathematics and classical ML depth. Data Scientist suits analysts and statisticians and skews toward experimentation and inference rather than shipping systems. Pick by what you want your day to look like, then check ten live job descriptions for that title in your city before committing.",
  ],
];

export function SectionFAQs() {
  return (
    <Section id="transition-faqs" eyebrow="Section 15 · FAQs" title="Frequently Asked Questions">
      <p className="text-sm text-muted-foreground">
        Twenty questions answered honestly, including where the honest answer discourages spending.
      </p>
      <div className="mt-6 space-y-3">
        {faqs.map(([q, a]) => (
          <details
            key={q}
            className="card-lift group rounded-2xl border border-border bg-card p-5 shadow-card open:border-accent/40"
          >
            <summary className="min-h-11 cursor-pointer list-none pr-6 font-display text-lg leading-snug marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <span className="mr-2 text-accent">?</span>
              {q}
            </summary>
            <p className="mt-3 leading-relaxed text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* Section 16 — Author, reviewers, trust, footer */
const reviewers = [
  { role: "GenAI / AI engineer at an Indian product company", note: "Reviewed the stack layers and interview-loop rounds." },
  { role: "Technical hiring manager / recruiter for AI roles", note: "Reviewed résumé, screening and funnel claims." },
  { role: "IT-to-AI career switcher now in an AI role", note: "Reviewed timelines and the switch narrative." },
  { role: "MLOps / platform engineer", note: "Reviewed deployment, cost and observability guidance." },
  { role: "AI educator / curriculum designer", note: "Reviewed the program comparison methodology." },
];

export function SectionAuthorTrust() {
  return (
    <Section id="author" eyebrow="Section 16 · Trust" title="About the Author, Reviewers and LogicMojo">
      <Reveal>
        <div className="card-lift glass-card rounded-3xl p-6 md:p-8">
          <div className="flex flex-wrap items-start gap-5">
            <div
              className="grid size-20 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-blue)] font-display text-2xl text-primary-foreground"
              role="img"
              aria-label="Placeholder portrait of the author, to be replaced with a real photograph before publishing"
            >
              A
            </div>
            <div className="min-w-[240px] flex-1">
              <p className="font-display text-2xl">[Author name placeholder]</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Credentials line: the evaluation work behind this page — IT-to-AI transitions tracked
                over multiple cohorts, job descriptions analysed across Indian product companies, GCCs
                and services organisations, hiring managers and recruiters consulted, and internal
                mobility pathways studied inside large Indian employers. [LinkedIn profile placeholder]
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                <strong>Methodology and disclosure.</strong> This page was researched from live job
                descriptions, published provider syllabi, conversations with practitioners and hiring
                managers, and tracked transitions. <strong>LogicMojo publishes this page.</strong> All
                recommendations reflect the author&apos;s assessment under the stated framework,
                every number is banded, attributed or marked for verification, and no outcome is
                guaranteed anywhere on this page.
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Last updated: [date placeholder] · Next review: [date placeholder]
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <H3 id="reviewers">Reviewed by — expert panel</H3>
      <p className="text-sm text-muted-foreground">
        Placeholders only. No names, photographs or affiliations are invented; the publishing team
        fills these with real, consenting reviewers or removes the block.
      </p>
      <ul className="mt-4 -mx-1 flex snap-x gap-4 overflow-x-auto px-1 pb-3" aria-label="Expert reviewer panel">
        {reviewers.map((r, i) => (
          <li key={r.role} className="w-[260px] shrink-0 snap-start">
            <Reveal delay={i * 50} className="h-full">
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-5 shadow-card">
                <div
                  className="size-12 rounded-full bg-secondary"
                  role="img"
                  aria-label="Placeholder avatar for a reviewer whose photograph is added before publishing"
                />
                <p className="mt-3 text-sm font-semibold leading-snug">[Name placeholder]</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{r.note}</p>
                <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  [LinkedIn placeholder]
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <NoteCard title="Trust signals" tone="info">
        <ul className="ml-4 list-disc space-y-1">
          <li>Last reviewed: [date placeholder].</li>
          <li>
            All figures are indicative — verify current fees, durations, affiliations and salary
            bands directly with providers and against live job postings.
          </li>
          <li>
            This page is reviewed on a fixed schedule and after any material market or curriculum
            change; every update is stamped with a new review date.
          </li>
          <li>Spotted something wrong? Corrections: [feedback contact placeholder].</li>
        </ul>
      </NoteCard>

      <Reveal>
        <div className="card-lift mt-10 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
          <h3 className="font-display text-2xl">LogicMojo — about &amp; contact</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            About LogicMojo — advanced AI &amp; ML training for working professionals, from classical
            ML to GenAI and Agentic AI, with dedicated career transition support.
          </p>
          <p className="mt-4 text-sm">
            <strong>Contact</strong> 📧 [email placeholder] | 📞 [phone placeholder] | 📍 [address
            placeholder]
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-2">Quick links</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                {["Home", "AI & ML Course", "Curriculum", "Batch Details", "Success Stories", "Blog", "Contact"].map(
                  (l) => (
                    <li key={l}>{l}</li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-2">Follow us</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                {["LinkedIn", "YouTube", "Instagram", "Twitter/X"].map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 border-t border-border pt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            © 2026 LogicMojo. All rights reserved.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
