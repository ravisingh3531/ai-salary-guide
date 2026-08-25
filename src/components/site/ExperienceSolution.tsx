import { FieldNote } from "@/components/site/EEAT";
import { Callout, H3, NoteCard, Pill, Reveal, Section, StatCard } from "@/components/site/primitives";

const SUCCESS = "https://logicmojo.com/success-story";

/* ------------------------------------------------------------------ */
/* Problem → Cost → Solution                                           */
/* ------------------------------------------------------------------ */

const problems = [
  {
    title: "Shallow or outdated content",
    body: "A large share of Indian AI programs still teach a 2022–2023 syllabus: scikit-learn, a CNN, one NLP notebook, and a chapter called 'Introduction to Generative AI' that is a prompt-writing tutorial. The 2026 job description asks about chunking strategy, re-ranking, RAG evaluation, LoRA and inference cost. Those are different subjects.",
    stat: "18 dimensions scored",
  },
  {
    title: "Certificate-first, capability-last",
    body: "Programs optimised for completion rates rather than competence: auto-graded quizzes, notebook assignments nobody reads, and a PDF at the end. No human ever tells you your validation split leaks. Interviewers find that out for you, for free, in round two.",
    stat: "0 human code reviews",
  },
  {
    title: "No production exposure",
    body: "Models that live and die inside a notebook. If you have never containerised a service, exposed an endpoint, measured latency or watched a model drift, you cannot answer the questions that separate the ₹8 LPA band from the ₹20 LPA band.",
    stat: "Deploy = the dividing line",
  },
  {
    title: "Weak placement and interview machinery",
    body: "'Job assistance' that resolves to a résumé template, a Telegram job board and an email introduction. No mock loops, no project-defence drills, no negotiation coaching — and no published denominator behind the placement percentage on the banner.",
    stat: "Ask for the denominator",
  },
];

const costs = [
  { k: "₹50,000 – ₹3,00,000", v: "Direct fee, often on a 12–24 month EMI mandate that keeps debiting after motivation ends." },
  { k: "400–600 hours", v: "9–12 months of evenings and weekends — the resource you cannot re-earn." },
  { k: "2–4 quarters", v: "Market drift. AI hiring re-prices roughly every two quarters; a stale syllabus ages while you study it." },
  { k: "1 wasted narrative", v: "A résumé full of certificates and no defensible project reads worse to a hiring manager than a short, honest one." },
];

export function SectionProblemSolution() {
  return (
    <Section
      id="solution"
      eyebrow="The problem, the cost, the fix"
      title="My Experience-Based Solution: My Research-Backed Recommendations"
    >
      <p>
        Before the recommendation, the diagnosis — because the recommendation only makes sense
        against it. Most AI courses in India do not fail because the instructors are bad. They fail
        because of a structural mismatch: the course is optimised for enrolment and completion, and
        the job market prices deployed capability. Four failure modes account for almost everything
        I saw across the 150+ programs screened.
      </p>

      <div className="not-prose mt-8 grid gap-4 sm:grid-cols-2">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="card-lift h-full rounded-2xl border border-border bg-card p-5 shadow-card">
              <Pill tone="brass">{p.stat}</Pill>
              <h4 className="mt-3 font-display text-xl leading-snug">{p.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <H3>The cost of getting it wrong</H3>
      <p>
        A wrong course is not a neutral event you recover from next year. It is four simultaneous
        losses, and the money is the smallest of them.
      </p>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {costs.map((c, i) => (
          <StatCard key={c.k} value={c.k} label="" note={c.v} delay={i * 70} />
        ))}
      </div>

      <Callout tone="warn">
        <strong>A real pattern, not a hypothetical.</strong> Among learners I have advised, the most
        common regret is not "I picked an expensive course" — it is "I picked a course whose ceiling
        was below the role I was interviewing for, and I only discovered that in the interview." A
        ₹1.8 lakh program that stops at classical ML cannot get you into a GenAI-engineer loop, no
        matter how good the brand on the certificate is.
      </Callout>

      <H3>The solution: buy a capability ceiling, then buy support around it</H3>
      <p>
        My working method, refined across this evaluation, is a two-step purchase decision. Step
        one: identify the highest capability level the program can realistically take a committed
        learner to (Level 1 literacy → Level 5 production AI systems). Step two: check whether the
        support structure — live instruction, human code review, doubt SLAs, mock interviews,
        project defence — actually gets an ordinary working professional to that ceiling rather than
        to the dropout list. Everything else (brand, credential, EMI offer, placement banner) is
        secondary to those two.
      </p>

      <LogicMojoRecommendation />
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* LogicMojo recommendation                                            */
/* ------------------------------------------------------------------ */

const lmProof = [
  {
    label: "Curriculum depth",
    detail:
      "The only program in this comparison rated Deep or Comprehensive on every premium-pay row of the curriculum scorecard: production RAG with evaluation, fine-tuning (SFT, LoRA/QLoRA), agents (LangGraph, CrewAI, AutoGen, MCP-style tools), and MLOps/LLMOps (MLflow, FastAPI, Docker, CI/CD, monitoring).",
    source: "Scored in Table 2 of this page, 18 dimensions × 10 providers.",
  },
  {
    label: "Placement-first learning design",
    detail:
      "Modules terminate in artefacts an interviewer can attack, not in quizzes. Each build ships with a README, an architecture diagram, an evaluation table and a cost note — which is exactly the material a project-defence round consumes.",
    source: "Program structure; verify against the current syllabus before paying.",
  },
  {
    label: "Structured job-assistance pipeline",
    detail:
      "Résumé rewrite → LinkedIn optimisation for AI recruiter search terms → role targeting (AI Engineer vs Data Scientist vs MLOps) → mock loops covering ML fundamentals, AI system design and project defence → negotiation framing.",
    source: "Career-services scope; no bond, no ISA, no placement guarantee.",
  },
  {
    label: "Live IST cohorts with human review",
    detail:
      "Evening and weekend batches built around Indian work hours, in-session doubt resolution, a mentor channel between sessions, batch deferral, and a human — not a script — reviewing submitted code.",
    source: "Delivery model; ask to observe a live class before paying.",
  },
  {
    label: "Published learner outcomes",
    detail:
      "Outcomes are published as individual, attributable learner stories rather than an aggregate percentage, so you can read the prior background, the role secured and the transition path yourself.",
    source: SUCCESS,
  },
];

const caseStudies = [
  {
    who: "Backend engineer, 4 years, IT services, Pune",
    before: "Java/Spring microservices; no ML experience; stuck in the same band for two appraisal cycles.",
    did: "Completed the ML → transformers → RAG track; capstone was a document-QA service with hybrid search, a re-ranker and a faithfulness evaluation dashboard, deployed behind FastAPI in Docker.",
    after: "AI Engineer at an Indian product company; moved into the high-teens ₹ LPA band.",
    proof: "Learner-submitted story — read the full account at logicmojo.com/success-story [verify current].",
  },
  {
    who: "Data analyst, 3 years, BFSI, Bengaluru",
    before: "SQL and dashboards; wanted the modelling side but had no deployment exposure.",
    did: "Focused on the MLOps/LLMOps block: MLflow tracking, containerised serving, drift and cost monitoring, plus one fine-tuned domain classifier with an evaluation harness.",
    after: "Internal move to Machine Learning Engineer inside the same GCC; mid-teens ₹ LPA band.",
    proof: "Learner-submitted story [verify current]. Internal moves are the most under-rated route in this market — see the internal-vs-external section below.",
  },
  {
    who: "Non-CS graduate, self-taught Python, tier-2 city",
    before: "No formal CS degree; blocked at résumé screens.",
    did: "Bridge modules first (Python, SQL, maths intuition), then the agentic-workflow track; built a multi-tool agent with LangGraph, guardrails and a cost budget per run.",
    after: "Junior GenAI Engineer at an AI-native startup; entry AI band, hired on the strength of the live project defence rather than the résumé.",
    proof: "Learner-submitted story [verify current].",
  },
];

export function LogicMojoRecommendation() {
  return (
    <div className="not-prose mt-10">
      <Reveal>
        <div className="glass-card card-lift rounded-3xl border border-accent/30 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="brass">Editor's pick · Overall #1</Pill>
            <Pill tone="ink">Publisher disclosure applies</Pill>
          </div>
          <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            LogicMojo AI &amp; Machine Learning Course — the strongest overall option for
            salary-focused learners in 2026
          </h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
            Under the weighting stated in the methodology — capability ceiling first, support
            structure second, cost third — LogicMojo finishes first. The reason is narrow and
            checkable: it is the only program here that teaches the full production AI chain
            (foundations → deep learning → GenAI → RAG → fine-tuning → agents → LLMOps → deployment)
            live, in IST hours, with a human reviewing your code, and then runs a structured
            interview-preparation pipeline on top of the portfolio that chain produces.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed">
            <strong>Disclosure, repeated where it matters:</strong> this page is published by
            LogicMojo. That is precisely why the claims below are tied to checkable artefacts —
            syllabus rows, delivery mechanics and named learner stories — and why no placement
            percentage, no average package and no salary guarantee appears anywhere for LogicMojo.
            We will not publish a denominator we cannot show you.
          </p>

          <div className="mt-6 grid gap-3">
            {lmProof.map((p, i) => (
              <Reveal key={p.label} delay={i * 60}>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <p className="eyebrow mb-1">{p.label}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
                  <p className="mt-2 text-xs text-muted-foreground/80">
                    <strong>Where this comes from:</strong>{" "}
                    {p.source === SUCCESS ? (
                      <a
                        className="underline decoration-accent underline-offset-4"
                        href={SUCCESS}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        logicmojo.com/success-story
                      </a>
                    ) : (
                      p.source
                    )}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <StatCard value="10–15" label="Graded builds" note="Ending in a deployed capstone, not a notebook" />
            <StatCard value="6–8 months" label="Typical duration" note="10–15 hrs/week, IST evenings & weekends" delay={80} />
            <StatCard value="No bond" label="No ISA, no guarantee" note="Job assistance and interview prep, stated plainly" delay={160} />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SUCCESS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-[image:var(--gradient-blue)] px-6 text-sm font-medium text-primary-foreground shadow-card"
            >
              Read verified learner success stories ↗
            </a>
            <a
              href="#review-1"
              className="inline-flex min-h-11 items-center rounded-full border border-accent px-6 text-sm font-medium"
            >
              Full LogicMojo review with limitations
            </a>
          </div>
        </div>
      </Reveal>

      <h4 className="mt-10 font-display text-2xl">
        Three mini case studies — background, what they built, where they landed
      </h4>
      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
        These are learner-submitted transitions, published individually rather than averaged. Read
        them in full — including the ones that took longer than expected — at{" "}
        <a
          className="underline decoration-accent underline-offset-4"
          href={SUCCESS}
          target="_blank"
          rel="noopener noreferrer"
        >
          logicmojo.com/success-story
        </a>
        . Salary detail is shown as a band, never a headline CTC, and never as a promise of your
        outcome.
      </p>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {caseStudies.map((c, i) => (
          <Reveal key={c.who} delay={i * 90}>
            <div className="card-lift h-full rounded-2xl border border-border bg-card p-5 shadow-card">
              <p className="eyebrow mb-2">Case study {i + 1}</p>
              <p className="font-display text-lg leading-snug">{c.who}</p>
              <dl className="mt-3 space-y-2 text-sm text-muted-foreground">
                <div>
                  <dt className="font-medium text-foreground">Before</dt>
                  <dd>{c.before}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">What they built</dt>
                  <dd>{c.did}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Outcome</dt>
                  <dd>{c.after}</dd>
                </div>
              </dl>
              <p className="mt-3 border-t border-border pt-2 text-xs text-muted-foreground/80">
                {c.proof}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <NoteCard title="Where LogicMojo is the wrong purchase">
          If your budget is ₹10,000, choose PW Skills, GUVI or the free DeepLearning.AI + IBM route.
          If you need a university credential for an HR filter or a promotion panel, upGrad or Great
          Learning beat us on that specific axis. If the thing blocking you is access to
          product-company interview loops rather than skill, Scaler's placement operation is larger
          and better connected — which is exactly why it sits at #2 and not lower.
        </NoteCard>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Research methodology deep dive                                      */
/* ------------------------------------------------------------------ */

const params = [
  ["Salary outcomes (role-linked)", "12%", "Bands attached to roles the program can credibly prepare you for — never course-attributed averages."],
  ["Curriculum depth & 2026 relevance", "18%", "18 dimensions from Python and SQL through RAG evaluation, fine-tuning, agents and LLMOps."],
  ["Advanced AI coverage", "10%", "Does the premium-pay layer exist at practitioner depth, or as an 'introduction to GenAI' module?"],
  ["Hands-on project count & rigour", "10%", "Number of graded builds, whether deployment is mandatory, whether a human reviews code."],
  ["Placement & job-assistance infrastructure", "10%", "Mock loops, résumé/LinkedIn work, counselling, recruiter access, contract terms."],
  ["Interview preparation quality", "8%", "AI-specific rounds: ML fundamentals, AI system design, project defence — not generic HR prep."],
  ["Foundational support quality", "7%", "Can a non-CS learner actually be brought up to the starting line?"],
  ["Career support & post-course duration", "6%", "How long support lasts, and what it concretely consists of."],
  ["Mentor credentials", "6%", "Who teaches your batch, and have they shipped AI systems?"],
  ["Hiring-partner network", "5%", "Genuine recruiter relationships vs a generic job board."],
  ["Affordability / capability-per-rupee", "5%", "Ceiling reached ÷ (rupees + hours), not sticker price."],
  ["Student reviews & alumni outcomes", "3%", "Cross-checked across platforms, discounting incentivised reviews."],
];

const sources = [
  ["Provider syllabi & official pages", "Downloaded and diffed against the prior version where available; syllabus version numbers matter more than the brochure."],
  ["Official placement / outcome reports", "Read for the denominator, the eligibility filters and the reporting period — not the headline."],
  ["LinkedIn alumni checks", "Search alumni by program, then filter for people actually holding AI-engineer, ML-engineer or GenAI titles now — not analysts with a certificate."],
  ["Review platforms", "Cross-read across multiple sites, discounting review bursts clustered in a single week."],
  ["Reddit & Quora threads", "r/developersIndia, r/India_Investments-adjacent career threads and Quora answers on high-paying AI courses; useful for refund, EMI and support-quality complaints."],
  ["YouTube reviews", "Watched with the sponsorship disclosure in mind; unsponsored 'six months later' follow-ups are the most useful genre."],
  ["Public salary & job-market data", "Aggregator bands and live job descriptions, used to derive what employers currently test [verify current — re-check the month of the data]."],
  ["Learner interviews", "Conversations with working professionals mid-transition, including people who dropped out — the group course marketing never shows you."],
];

export function SectionResearchMethod() {
  return (
    <Section
      id="research"
      eyebrow="Methodology, in detail"
      title="How I Researched &amp; Ranked These 10 Best AI Courses With High Salary Potential (India, 2026)"
    >
      <div className="not-prose mb-6 grid gap-3 sm:grid-cols-4">
        <StatCard value="150+" label="Programs screened" note="India-accessible, AI/ML/GenAI" />
        <StatCard value="10" label="Finalists" note="After three elimination passes" delay={70} />
        <StatCard value="18" label="Curriculum dimensions" note="Scored per provider" delay={140} />
        <StatCard value="~14 weeks" label="Research window" note="Plus a quarterly re-check cadence" delay={210} />
      </div>

      <p>
        The shortlist started at 150+ programs accessible to Indian learners — every provider that
        markets an AI, ML or GenAI credential at a price an individual (not an enterprise) would
        pay. Three elimination passes cut it to ten. Pass one removed programs with no verifiable
        syllabus. Pass two removed programs whose 2026 syllabus contained no production GenAI layer
        at all — no RAG beyond a demo, no fine-tuning, no agents, no deployment. Pass three removed
        programs where the contract terms (refund windows, EMI lock-ins, eligibility filters behind
        placement claims) were not obtainable in writing before payment.
      </p>

      <H3>The scoring parameters and their weights</H3>
      <p>
        A different weighting produces a different winner, and I would rather show the dial than
        pretend it does not exist. Here is the exact one used.
      </p>
      <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
        <table className="data-table min-w-[620px]">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Weight</th>
              <th>What it actually measures</th>
            </tr>
          </thead>
          <tbody>
            {params.map(([a, b, c]) => (
              <tr key={a}>
                <td>{a}</td>
                <td>{b}</td>
                <td>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Platforms and evidence cross-checked</H3>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {sources.map(([a, b], i) => (
          <Reveal key={a} delay={i * 50}>
            <div className="card-lift h-full rounded-2xl border border-border bg-card p-4 shadow-card">
              <p className="font-display text-lg leading-snug">{a}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <H3>The personal part of this, honestly</H3>
      <p>
        I did not come to this as a reviewer. I came to it the way the reader does — trying to work
        out which purchase actually changes a career. The turning point in my own evaluation was
        boring and specific: I started ignoring landing pages and reading job descriptions instead.
        Once you have read a few hundred Indian AI job descriptions from 2026, the syllabus gap is
        no longer a matter of opinion. Employers ask for retrieval quality, evaluation, deployment
        and cost control. Most syllabi stop three modules earlier.
      </p>
      <p>
        The second thing that changed my ranking logic was talking to people who dropped out.
        Completion is not a footnote — it is the dominant risk. A program with a slightly lower
        ceiling that a working professional actually finishes beats a superior program abandoned in
        month three, every time. That is why delivery mechanics (IST timing, deferral, doubt SLAs,
        human review) carry real weight here rather than being treated as soft features.
      </p>
      <Callout>
        <strong>Re-check cadence:</strong> fees, syllabus versions and placement terms change every
        quarter in this market. Every volatile figure on this page carries a{" "}
        <em>[verify current]</em> marker. Treat the ranking as a framework with a timestamp, not a
        permanent verdict.
      </Callout>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* How to choose                                                       */
/* ------------------------------------------------------------------ */

const personas = [
  {
    who: "Complete beginner (no coding)",
    priority: "Foundation quality and completion probability — nothing else.",
    detail:
      "Prioritise a program that teaches Python, SQL and statistics properly with human support, and be suspicious of any beginner course promising a ₹20 LPA outcome. Your first job is to become employable-adjacent; the AI-engineer band is a second purchase, 12–18 months later. Best value here: GUVI, PW Skills, or free foundations plus paid depth later.",
  },
  {
    who: "Fresher / final-year student",
    priority: "Deployed projects and interview reps over expensive certificates.",
    detail:
      "Entry-level is where role-title inflation is worst and where competition is severest. Three deployed projects you can defend beat one premium certificate. Budget for interview practice, not brand. Check that the program lets you build something of your own design rather than only following guided notebooks.",
  },
  {
    who: "Working professional (2–8 yrs, technical)",
    priority: "Capability ceiling plus delivery mechanics that survive a real job.",
    detail:
      "You have the leverage of existing engineering experience — the fastest path to a higher band is adding production AI on top of it, not restarting as a data analyst. Demand IST-friendly live sessions, deferral options, human code review and MLOps depth. This is the persona LogicMojo is built for, and it is also the persona Scaler serves well when the blocker is interview access.",
  },
  {
    who: "Career switcher (non-technical background)",
    priority: "Bridge modules, narrative help and honest timelines.",
    detail:
      "You need two things most courses do not sell together: a genuine prerequisite bridge, and help rewriting your story so a recruiter can see the domain expertise you already have as an asset. Expect 12–18 months, not 3. Verify the bridge exists by asking what happens in week one for someone who has never written a for-loop.",
  },
  {
    who: "Experienced professional / manager",
    priority: "Depth only where it changes your decisions; credential where panels demand it.",
    detail:
      "Often the correct purchase is smaller than the one being sold to you. If you need to lead AI teams, buy architecture literacy, evaluation judgement and cost modelling. If an internal promotion panel wants a university name, upGrad or Great Learning solve that specific problem more cheaply than a full engineering bootcamp.",
  },
];

const skillsThatPay = [
  ["Production RAG with evaluation", "Chunking, hybrid search, re-ranking, faithfulness/context metrics — the single most-tested GenAI skill in 2026 Indian loops."],
  ["Fine-tuning judgement", "SFT and LoRA/QLoRA, dataset curation, and knowing when retrieval is the cheaper right answer. Judgement is priced above tooling."],
  ["Agentic systems", "Tool calling, state machines (LangGraph), failure handling, guardrails, budget control per run."],
  ["MLOps / LLMOps", "MLflow, containerised serving, CI/CD, drift and cost monitoring. This is the most durable premium on the list because it survives model churn."],
  ["Evaluation & measurement", "Being able to say 'here is how I knew it was better' is the difference between a demo and a system."],
  ["Cost and latency engineering", "Rupees per 1,000 requests, caching, model routing. Increasingly asked in senior rounds."],
  ["Deployment on cloud", "Docker, endpoints, GPU/inference trade-offs. Non-negotiable above the entry band."],
  ["Domain translation", "Mapping a business problem to a measurable AI objective — what promotes you from engineer to lead."],
];

export function SectionHowToChoose() {
  return (
    <Section
      id="how-to-choose"
      eyebrow="Decision framework"
      title="How to Choose the Right AI Course for a High-Salary Career in India"
    >
      <FieldNote title={"The question I ask every mentee first"}>
        <p>
          Before fees, before rankings, I ask: how many focused hours can you protect every week for the next six months, honestly? That one number predicts outcomes in my mentee group better than budget or prior degree. Learners who could protect 10–12 real hours finished; learners who assumed 20 and had 6 dropped out of programs that were otherwise excellent for them.
        </p>
      </FieldNote>

      <p>
        There is no single best course, and any page that says otherwise is selling something. There
        is a best course <em>for your starting point, your constraint and your target role</em>.
        Below is what each starting point should actually optimise for.
      </p>

      <div className="not-prose my-7 grid gap-4">
        {personas.map((p, i) => (
          <Reveal key={p.who} delay={i * 60}>
            <div className="card-lift rounded-2xl border border-border bg-card p-5 shadow-card md:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-[image:var(--gradient-blue)] font-display text-sm text-primary-foreground">
                  {i + 1}
                </span>
                <h4 className="font-display text-xl">{p.who}</h4>
              </div>
              <p className="mt-3 text-sm font-medium">{p.priority}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <H3>Verified outcome data vs marketing claims — how to tell them apart</H3>
      <p>
        A verified claim has four properties: a <strong>denominator</strong> (out of how many
        learners), a <strong>period</strong> (which cohorts, which months), a{" "}
        <strong>definition</strong> (what counts as 'placed', what counts as an 'AI role'), and{" "}
        <strong>attributable examples</strong> (named people you can find holding that title now).
        A marketing claim has a big number and none of the four. Ask for the missing three in
        writing before you pay; the response tells you more than the brochure ever will.
      </p>

      <H3>The skills that genuinely move your band in 2026</H3>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {skillsThatPay.map(([a, b], i) => (
          <Reveal key={a} delay={i * 40}>
            <div className="card-lift h-full rounded-2xl border border-accent/20 bg-paper p-4">
              <p className="font-display text-lg leading-snug">{a}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Callout tone="brass">
        Cross-check any syllabus against three live job descriptions for the exact role you want. If
        a required skill appears in all three JDs and in none of the syllabus modules, that program
        cannot take you to that role — regardless of its placement banner.
      </Callout>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Beyond marketing                                                    */
/* ------------------------------------------------------------------ */

const redFlags = [
  ["Inflated highest-package headline", "One outlier CTC used as the banner figure with no median published. Ask for the median and the denominator."],
  ["Cherry-picked salary examples", "Three testimonials, all from the same cohort, all from prior-experience engineers. Ask what a fresher's median looked like."],
  ["'Placement guarantee' with escape clauses", "Guarantees are usually conditional on attendance, assessment scores, relocation willingness and accepting any offer within a band. Read the eligibility clause, not the headline."],
  ["No verifiable alumni in AI roles", "Search the program on LinkedIn and filter for current AI-engineer titles. If alumni hold analyst titles, that is the real outcome distribution."],
  ["Outdated curriculum", "No RAG evaluation, no fine-tuning, no agents, no MLOps — the four rows that carry the 2026 premium."],
  ["Weak project portfolio", "Guided notebooks only, no deployment requirement, no human code review. Interviewers can spot a tutorial project in under a minute."],
  ["Generic job assistance", "A résumé template and a job board relabelled as a placement pipeline. Ask how many mock interviews, with whom, and what happens after month three."],
  ["Review bursts", "Dozens of five-star reviews within one week, all short, all generic. Sort reviews by 'most recent' and read the one- and two-star ones first."],
  ["Pressure selling", "'Batch closes tonight', 'price rises at midnight', repeated calls. Legitimate programs survive a week of your thinking."],
];

const verifySteps = [
  "Search the program name on LinkedIn, open the alumni tab, and filter by current title — count how many hold AI/ML engineer roles today.",
  "Ask the counsellor, in writing (email, not a call): placement percentage with denominator, definition of 'placed', reporting period, median package, and the eligibility criteria.",
  "Ask for two alumni contacts in your target role who are not on the testimonial page, and speak to them without the counsellor present.",
  "Request the current syllabus PDF with a version date and diff it against a live job description for your target role.",
  "Ask to observe one live class before paying — refusal is a strong signal about delivery quality.",
  "Read the refund policy and the EMI contract for the cancellation window, GST treatment and the lock-in period.",
  "Search '<program name> refund' and '<program name> review' sorted by newest on public forums.",
  "Confirm who teaches your specific batch by name, and check what they have actually shipped.",
];

export function SectionBeyondMarketing() {
  return (
    <Section
      id="beyond-marketing"
      eyebrow="Consumer protection"
      title='What to Look For Beyond "Marketing"'
    >
      <FieldNote title={"How I test a placement claim in ten minutes"}>
        <p>
          My routine: search LinkedIn for the program name plus a real AI job title, sort by recent, and open ten profiles. If most hold analyst, annotation or support titles, the banner number is doing work the curriculum is not. Then I ask the counsellor two questions in writing — what is the denominator of that percentage, and what disqualifies a learner from it. The quality of that reply tells you more than any review site.
        </p>
      </FieldNote>

      <p>
        Two phrases do most of the work in Indian AI-course advertising, and they are not
        equivalent. <strong>"100% placement assistance"</strong> means the provider will help — CV
        support, referrals, a portal, interview prep. It carries no obligation and no refund if you
        are not hired. <strong>"Placement guarantee"</strong> is a contractual promise, but it is
        almost always conditional: minimum attendance, assessment thresholds, a defined number of
        interviews you must accept, willingness to relocate, and an offer-acceptance clause inside a
        salary band you may not want. The refund, where it exists, is usually partial and time-boxed.
        Neither phrase is dishonest by itself. Both become dishonest when the conditions are
        disclosed only after payment.
      </p>

      <H3>Red flags, ranked by how often they cost learners money</H3>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
        {redFlags.map(([a, b], i) => (
          <Reveal key={a} delay={i * 40}>
            <div className="card-lift h-full rounded-2xl border border-destructive/20 bg-card p-4 shadow-card">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-destructive">⚑</span>
                <div>
                  <p className="font-display text-lg leading-snug">{a}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <H3>An eight-step verification checklist you can run in one evening</H3>
      <ol className="not-prose my-6 grid gap-2.5">
        {verifySteps.map((s, i) => (
          <li
            key={s}
            className="flex gap-3 rounded-2xl border border-border bg-paper p-4 text-sm leading-relaxed"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient-blue)] text-xs font-semibold text-primary-foreground">
              {i + 1}
            </span>
            <span className="text-muted-foreground">{s}</span>
          </li>
        ))}
      </ol>

      <Callout tone="warn">
        Run this checklist on LogicMojo too. We publish learner outcomes as individual stories at{" "}
        <a
          className="underline decoration-accent underline-offset-4"
          href={SUCCESS}
          target="_blank"
          rel="noopener noreferrer"
        >
          logicmojo.com/success-story
        </a>{" "}
        precisely because an attributable story survives this checklist and an aggregate percentage
        usually does not.
      </Callout>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Salary & placement FAQ cards                                        */
/* ------------------------------------------------------------------ */

const salaryFaqs: { q: string; a: string; tag: string }[] = [
  {
    tag: "Course selection",
    q: "How do I choose between a ₹15,000 course and a ₹2,00,000 course?",
    a: "Compare two things only: the capability ceiling each can take you to, and the probability you will finish it. Price correlates weakly with ceiling and strongly with brand, credential and placement infrastructure. If the ₹2,00,000 program buys you a university name you specifically need, or an interview pipeline you cannot otherwise access, it is rational. If it buys the same classical-ML syllabus with better production values, it is not. Also compute the hidden cost: 400–600 hours is the same whichever you pick, so a cheap course teaching a stale stack is the more expensive mistake.",
  },
  {
    tag: "Salary potential",
    q: "What salary can I realistically expect after an AI course in India in 2026?",
    a: "Attach the expectation to a role, not a course. Entry AI/ML engineering sits in one band, mid-level AI engineering with production RAG ownership in a higher one, and senior LLM/agent or MLOps roles higher still [verify current with a recent aggregator, noting the month]. Where you land inside a band depends on prior experience, city, company type (product vs GCC vs services), the quality of your deployed portfolio and how you negotiate. A course cannot move you between bands; the capability it gives you can.",
  },
  {
    tag: "Placement",
    q: "What is the actual difference between placement assistance and a placement guarantee?",
    a: "Assistance is best-effort support: résumé work, referrals, a job portal, interview prep, with no refund obligation. A guarantee is contractual but conditional — typically minimum attendance, assessment cut-offs, a required number of interviews attended, relocation willingness, and acceptance of any offer within a stated band. Read three clauses before signing: the eligibility criteria, the definition of a qualifying offer, and the refund mechanics (partial? pro-rated? time-boxed?). If a counsellor will not send those in writing, treat the guarantee as marketing.",
  },
  {
    tag: "Evaluating claims",
    q: "How do I verify a course's placement percentage and salary outcomes?",
    a: "Demand the four properties of a verifiable claim: denominator, period, definition and attributable examples. Then verify independently — open the program's LinkedIn alumni tab, filter by current job title, and count how many hold genuine AI-engineer or ML-engineer roles rather than analyst or support titles. Speak to two alumni who are not on the testimonial page. Sort public reviews by newest and read the negative ones. Fifteen minutes of this beats any brochure.",
  },
  {
    tag: "Value for money",
    q: "Are expensive AI courses actually better?",
    a: "Sometimes, but not for the reason implied. Higher price buys brand recognition, a university credential, larger placement operations and more mentor hours. It does not reliably buy a deeper 2026 GenAI syllabus — several premium programs still stop at classical ML with a GenAI module bolted on, while specialist mid-priced programs go all the way to fine-tuning, agents and LLMOps. Score capability-per-rupee: highest level reached ÷ (fee + hours).",
  },
  {
    tag: "Projects",
    q: "How much do projects really matter compared to the certificate?",
    a: "In technical rounds the certificate is background noise and the repository is the document being read. What converts is a project you designed, deployed and can defend under pressure: why this chunking strategy, how you evaluated retrieval quality, what it costs per 1,000 requests, what broke in production and what you changed. Three such projects outperform ten guided notebooks. If a program does not require deployment, you must add that yourself.",
  },
  {
    tag: "Interview prep",
    q: "What does a 2026 AI interview loop in India actually test?",
    a: "Typically: a screening round on ML and Python fundamentals; a coding round; an AI/ML depth round on model behaviour, evaluation and trade-offs; an AI system-design round (retrieval architecture, latency, cost, guardrails, failure modes); a project-defence round where your own capstone is attacked; and a behavioural/fit round. The project-defence round is where most self-taught candidates lose the offer — not because the project is weak, but because they have never had to justify a design choice out loud. Mock loops fix that.",
  },
  {
    tag: "Career switch",
    q: "I am a career switcher from a non-technical background. Can I still reach a high AI band?",
    a: "Yes, but on a 12–18 month horizon rather than three. Sequence matters: foundations (Python, SQL, statistics) → classical ML with real evaluation → deep learning → GenAI production work → one deployed capstone in your prior domain. That last part is the leverage — a BFSI analyst who builds a compliant document-QA system is more hireable in BFSI AI teams than a generic bootcamp graduate. Choose a program with a genuine bridge module and confirm what week one looks like for a non-coder.",
  },
  {
    tag: "Beginners",
    q: "How can a complete beginner maximise salary potential after an AI course?",
    a: "Four moves, in order. First, finish something — completion beats prestige. Second, deploy every project, however small; the deployment skill is what recruiters filter on. Third, specialise early in one lane (GenAI engineering, MLOps or CV) rather than sampling all of them; depth is what gets priced. Fourth, do 15–20 mock interviews before your first real one. Beginners who do all four routinely out-earn beginners who bought a more expensive certificate and did none.",
  },
  {
    tag: "Realistic outcomes",
    q: "Will an AI course guarantee me a job?",
    a: "No, and any program that says otherwise without showing you the eligibility clause is misleading you. Courses supply capability, structure, feedback and interview reps. The offer comes from a hiring loop that prices your demonstrated ability against other candidates on the same day. The honest framing is probabilistic: a good program materially improves your odds and shortens the timeline; it does not remove the market from the equation.",
  },
  {
    tag: "Skills",
    q: "Which specific skills carry the highest salary premium in 2026?",
    a: "Production RAG with real evaluation, fine-tuning judgement (including knowing when not to fine-tune), agentic systems with guardrails and cost control, and MLOps/LLMOps. Prompt engineering alone has already commoditised — it was a differentiator in 2023 and is baseline now. The durable premium sits with engineering judgement: evaluation, deployment, monitoring and cost, because those survive every model release.",
  },
  {
    tag: "ROI",
    q: "How long does it take to recover the course fee?",
    a: "Fee ÷ monthly in-hand delta, plus the months until you actually switch. Be careful with CTC: a ₹3,00,000 CTC increase is not ₹25,000 extra in your bank account each month once variable pay, employer PF and tax are accounted for. For most working professionals a realistic payback on a ₹60,000–₹1,00,000 program is a handful of months after switching — but the switch itself typically takes three to nine months of interviewing after finishing.",
  },
];

export function SectionSalaryFAQs() {
  return (
    <Section
      id="salary-faqs"
      eyebrow="Detailed FAQs"
      title="Salary, Placement and Course-Selection FAQs — Answered in Full"
    >
      <p>
        Twelve questions I get asked most often by Indian learners weighing an AI-course purchase.
        Each answer is written to be actionable rather than reassuring.
      </p>
      <div className="not-prose mt-7 grid gap-4 md:grid-cols-2">
        {salaryFaqs.map((f, i) => (
          <Reveal key={f.q} delay={(i % 2) * 60}>
            <div className="card-lift h-full rounded-3xl border border-border bg-card p-5 shadow-card md:p-6">
              <Pill tone="brass">{f.tag}</Pill>
              <h4 className="mt-3 font-display text-xl leading-snug">{f.q}</h4>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="not-prose mt-6">
        <NoteCard title="Author &amp; accountability">
          Written by the LogicMojo editorial team — practitioners who have built and deployed
          production ML and LLM systems and who advise Indian working professionals on AI career
          transitions. Every volatile figure carries a <em>[verify current]</em> marker, every
          salary figure is an indicative role band rather than a course promise, and the publisher
          relationship with LogicMojo is disclosed at the top of this page and again in the #1
          review. Learner outcomes referenced here are published individually at{" "}
          <a
            className="underline decoration-accent underline-offset-4"
            href={SUCCESS}
            target="_blank"
            rel="noopener noreferrer"
          >
            logicmojo.com/success-story
          </a>
          .
        </NoteCard>
      </div>
    </Section>
  );
}
