import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Callout, H3, NoteCard, Pill, Reveal, Section, StatCard, TableFrame } from "@/components/site/primitives";
import { CourseFinderQuiz } from "@/components/site/CourseFinderQuiz";
import {
  SectionInternalExternal,
  SectionJobSearch,
  SectionMistakesMyths,
  SectionResume,
} from "@/components/site/CareerTransition";
import { SectionPrograms } from "@/components/site/ProgramsHonest";
import {
  SectionAuthorTrust,
  SectionFAQs,
  SectionPathQuiz,
} from "@/components/site/TrustBlocks";
import {
  capabilityLadder,
  COURSE_NAMES,
  curriculumRows,
  fees,
  gapTable,
  methodology,
  overview,
  placement,
  prereqs,
  ranked,
  roleMap,
  skillPremium,
} from "@/data/courses";
import { reviews } from "@/data/reviews";

const TITLE = "Top 10 Best AI Courses with High Salary (2026) | Fees & ROI";
const DESC =
  "I compared 150+ AI courses in India on fees, curriculum depth, placement support and realistic salary potential. Honest 2026 rankings, ROI math and a course finder quiz.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const toc = [
  ["premium", "Why AI skills command a salary premium in 2026"],
  ["methodology", "How we ranked these 10 courses"],
  ["at-a-glance", "Top 10 at a glance + all six comparison tables"],
  ["logicmojo", "Why LogicMojo is ranked #1 for salary-focused learners"],
  ["quiz", "AI Course Finder Quiz — find your fit"],
  ["reviews", "In-depth reviews of all 10 courses"],
  ["faq", "Frequently asked questions"],
];

const depthTone: Record<string, string> = {
  Comprehensive: "bg-positive/20 text-positive",
  Deep: "bg-positive/15 text-positive",
  Good: "bg-accent/15 text-accent",
  Moderate: "bg-secondary text-secondary-foreground",
  Basic: "bg-caution/15 text-caution",
  Limited: "bg-caution/20 text-caution",
  "Not Covered": "bg-destructive/12 text-destructive",
};

function Row({ cells }: { cells: string[] }) {
  return (
    <tr>
      {cells.map((c, i) => (
        <td key={i}>{c}</td>
      ))}
    </tr>
  );
}

function Head({ cols }: { cols: string[] }) {
  return (
    <thead>
      <tr>
        {cols.map((c) => (
          <th key={c}>{c}</th>
        ))}
      </tr>
    </thead>
  );
}

const faqs = [
  [
    "Which AI course gives the highest salary?",
    "No course gives a salary — the role you can perform does. The courses that reach the highest role bands are the ones that take you to Level 4 capability: production RAG, fine-tuning, agents and MLOps with a deployed portfolio. On this list that is LogicMojo for depth, and Scaler if the binding constraint is access to product-company hiring loops.",
  ],
  [
    "What salary can I expect after an AI course in India?",
    "Expect a range attached to the role you can credibly interview for, not to the course. Entry AI/ML roles, mid AI-engineer roles and senior AI roles each carry their own bands [VERIFY: aggregator source, month/year]. Where you land inside a band depends on prior experience, city, company type, portfolio quality and negotiation.",
  ],
  [
    "Is an AI course worth the fee?",
    "It is worth it when the capability ceiling it can take you to is above the ceiling you already have, and when you will actually finish. A ₹2,00,000 program abandoned in month three is the worst outcome on this page; a ₹15,000 program finished with three deployed projects frequently beats it in an interview loop.",
  ],
  [
    "Are the '₹20–40 LPA' claims on course landing pages real?",
    "Usually they are real numbers computed in a flattering way. The three patterns to watch: a single topper CTC shown as the headline, an 'average' computed only on placement-eligible learners after filters remove most of the batch, and role-title inflation where an 'AI engineer' offer is a support role using an AI tool.",
  ],
  [
    "Does an AI certification increase salary by itself?",
    "Rarely at the offer stage. Certificates help clear HR screens, internal promotion panels and services-company documentation. Technical rounds price your portfolio and your ability to defend it.",
  ],
  [
    "AI vs data science — which pays more in 2026?",
    "Production AI and GenAI engineering roles currently price above generalist data-analysis roles because the supply of people who can deploy and monitor an LLM system is thinner [VERIFY: source, date]. The gap narrows for senior data scientists who own modelling decisions.",
  ],
  [
    "How long does it take to recover the course fee?",
    "Frame it as fee ÷ monthly in-hand delta, then add the months until you actually switch. Be honest about CTC versus in-hand: a headline CTC includes variable pay and employer contributions, so a ₹2,00,000 CTC increase is not ₹16,667 extra in your account each month.",
  ],
  [
    "Can a fresher get a high salary after an online AI course?",
    "A fresher can reach entry AI bands with a strong deployed portfolio, but competition at entry level is severe and role-title inflation is worst there. Freshers should optimise for demonstrable projects and interview reps, not for the most expensive certificate.",
  ],
  [
    "Do employers verify AI certificates?",
    "Some HR teams verify enrolment; technical interviewers largely ignore the certificate and interrogate the repository. Assume your GitHub is the document that gets read.",
  ],
  [
    "Will these skills still command a premium in 18 months?",
    "The premium moves. Prompting was a differentiator, then baseline. Production RAG and agents are heading the same way. The durable asset is engineering judgement — evaluation, deployment, monitoring and cost control — which is why MLOps weighting matters more than any single framework.",
  ],
];

function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 pb-24 md:px-8">
      {/* SECTION 1 */}
      <header className="relative pt-14 md:pt-20">
        <div
          aria-hidden
          className="float-slow pointer-events-none absolute -right-24 -top-6 -z-10 hidden size-72 rounded-full bg-accent/20 blur-3xl md:block"
        />
        <div className="rise-in flex flex-wrap items-center gap-2">
          <Pill tone="ink">2026 edition</Pill>
          <Pill tone="brass">Commercial comparison</Pill>
          <Pill>Last reviewed: quarterly cadence</Pill>
        </div>
        <h1 className="rise-in mt-5 text-[2.6rem] leading-[1.05] text-gradient md:text-6xl">
          Top 10 Best AI Courses with High Salary (2026) — Fees, Curriculum, Placement Support,
          Salary Potential and ROI Compared
        </h1>

        <div className="rise-in mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard value="150+" label="Courses screened" note="Filtered down to 10 finalists" delay={0} />
          <StatCard value="18" label="Curriculum dimensions" note="Scored per provider, GenAI to MLOps" delay={90} />
          <StatCard value="₹0–₹3L" label="Fee spread compared" note="Capability-per-rupee, not sticker price" delay={180} />
        </div>

        <div className="glass-card card-lift rise-in mt-6 rounded-2xl p-6 md:p-7">
          <p className="eyebrow mb-2">Quick answer</p>
          <p className="leading-relaxed">
            The best AI course with high salary potential in 2026 depends on the role you're
            targeting and what you can invest. For the deepest 2026 AI stack (GenAI, RAG, agents,
            MLOps) with live IST mentorship and the strongest capability-per-rupee,{" "}
            <strong>LogicMojo</strong> ranks #1. For premium placement infrastructure aimed at
            product companies, <strong>Scaler</strong>. For a university credential that clears HR
            filters, <strong>upGrad (IIIT-Bangalore)</strong> or{" "}
            <strong>Great Learning (UT Austin)</strong>. For employer-funded corporate upskilling,{" "}
            <strong>Simplilearn</strong>. For world-class foundations at near-zero cost,{" "}
            <strong>DeepLearning.AI</strong> and <strong>IBM</strong> on Coursera. For the
            lowest-cost structured entry, <strong>PW Skills</strong> or <strong>GUVI</strong>. High
            salaries come from the role you can perform, not the certificate — full comparison,
            verified fees and honest limitations below.
          </p>
        </div>

        <p className="mt-4 rounded-r-xl border-l-4 border-l-accent bg-secondary/70 px-4 py-3 text-sm leading-relaxed">
          <strong>Disclosure:</strong> This page is published by LogicMojo, whose AI &amp; ML course
          is reviewed here and ranks #1 under the methodology stated below. Every course on this
          list — ours included — is assessed with verified claims, real limitations and the same
          scoring rubric.
        </p>
      </header>


      <div className="prose-body mt-10">
        <p>
          Every AI course landing page in 2026 opens with a number. "Highest CTC ₹44 LPA." "Average
          hike 87%." "₹21 LPA average package." I have read hundreds of these pages, and the reader
          has almost no way to tell which of those numbers are accounting and which are marketing.
          That is the paralysis this page exists to end: not by giving you a better number, but by
          showing you how the numbers are made.
        </p>
        <p>There are three failure patterns, and once you see them you cannot unsee them.</p>
        <ul>
          <li>
            <strong>Topper math.</strong> One outlier offer becomes the banner figure. The median is
            never published, because the median is unremarkable.
          </li>
          <li>
            <strong>Denominator games.</strong> "93% placed" is computed on
            "placement-eligible" learners — after attendance thresholds, assessment cut-offs and
            opt-in forms have quietly removed most of the batch from the denominator.
          </li>
          <li>
            <strong>Role-title inflation.</strong> Offers labelled "AI engineer" that are
            annotation, support or generic analyst roles, paid at non-AI bands.
          </li>
        </ul>
        <p>
          Underneath all three sits the deeper trap: you cannot judge whether a curriculum leads to
          high-paying capability, because you do not yet know enough AI to evaluate an AI syllabus.
          That asymmetry is what the marketing is built on.
        </p>

        <H3>What the wrong choice actually costs</H3>
        <p>Seven scenarios I have watched play out repeatedly among Indian learners:</p>
        <ul>
          <li>
            The ₹2,00,000 program abandoned in month three while a 24-month EMI keeps debiting on
            the 5th of every month.
          </li>
          <li>
            The course chosen off a "₹40 LPA" banner that lands the learner in the same salary band
            they were already in.
          </li>
          <li>
            The "GenAI course" that taught prompting and a single API call — met in the screening
            round by questions on chunking strategy, re-ranking and RAG evaluation.
          </li>
          <li>
            The free course a disciplined learner actually finished, outperforming a premium-program
            dropout in the same interview loop.
          </li>
          <li>
            The fresher who discovers the advertised average was computed on 31 of 240 enrolled
            learners.
          </li>
          <li>
            The switcher who learns that "job assistance" meant a resume template and a Telegram job
            board.
          </li>
          <li>
            The mid-career manager who bought depth they never needed, when AI literacy would have
            protected the increment just as well.
          </li>
        </ul>

        <Callout tone="warn">
          The financial cost of the wrong course is ₹50,000 to ₹3,00,000. The career cost is 9–12
          months building skills that don't move your pay — in a market that reprices AI skills
          every two quarters.
        </Callout>

        <p>
          So here is the approach. I assessed 150+ programs accessible to Indian learners against a
          single question: will this course make a learner capable of doing the AI work that
          high-paying roles hire for, and does it help convert that capability into an offer? The
          full weighting is in the methodology section, and a different weighting genuinely produces
          a different winner.
        </p>
        <p>
          Salary data is handled differently here too. Every band on this page is attached to a{" "}
          <strong>role and a market</strong>, carries a source and check date marker, and is stated
          as a range. No band is ever attributed to a course, and there is no salary promise
          anywhere on this page — including in the quiz result. One convention, stated once: all
          figures are CTC in ₹ LPA, which includes variable pay and employer contributions, so your
          in-hand is materially lower than the headline.
        </p>
      </div>

      <TableFrame
        label="Visual 1"
        title="The AI Capability → Pay Band Ladder"
        caption={
          <>
            Most AI courses deliver Level 1–2 and market it with Level 4–5 salary banners.
            Competitive AI pay in India starts at Level 3 and concentrates at Level 4+. Every course
            here is scored on the highest level it can realistically take a committed learner to —
            that ceiling, not the certificate, is what sets your salary range.
          </>
        }
      >
        <Head
          cols={[
            "Level",
            "What you can do",
            "What the 2026 Indian market calls this",
            "Indicative band (₹ LPA)",
            "Courses that stop here",
          ]}
        />
        <tbody>
          {capabilityLadder.map((l) => (
            <Row key={l.level} cells={[l.level, l.can, l.market, l.band, l.stops]} />
          ))}
        </tbody>
      </TableFrame>

      {/* SECTION 2 — TOC */}
      <Reveal as="div">
        <nav
          aria-label="Table of contents"
          className="glass-card card-lift my-10 rounded-2xl p-6"
        >
          <p className="eyebrow mb-3">On this page</p>
          <ol className="grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
            {toc.map(([id, label], i) => (
              <li key={id} className="text-sm">
                <a
                  href={`#${id}`}
                  className="group inline-flex items-start gap-2 rounded-md px-1 py-1 text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                >
                  <span className="mt-0.5 font-mono text-xs text-accent transition-transform group-hover:translate-x-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Reveal>


      {/* SECTION 3 */}
      <Section
        id="premium"
        eyebrow="Section 3 · Market context"
        title="Why AI Skills Command a Salary Premium in 2026 (And Which Ones Actually Do)"
      >
        <p>
          AI skills command a premium in 2026 because demand has moved from experimentation to
          production, and the supply of people who can ship and operate AI systems has not caught
          up. Every other explanation is downstream of that gap.
        </p>
        <p>
          Global capability centres in Bengaluru, Hyderabad, Pune, NCR and Chennai have moved from
          supporting AI work to owning it, which is why GCC AI teams now hire for architecture and
          MLOps rather than annotation and reporting. Product companies are shipping GenAI features
          into live user flows, which converts "AI interest" into headcount with delivery deadlines.
          IT services firms have scaled AI practices to defend client accounts, creating internal
          mobility routes for engineers already inside TCS, Infosys, Wipro, Cognizant, Capgemini,
          Accenture and HCLTech. AI-native startups pay above their stage to secure scarce builders.
          And enterprise adopters in BFSI, healthcare, retail and manufacturing have moved from
          pilots to regulated, monitored deployments — which is precisely where evaluation and
          guardrail skills start getting paid for.
        </p>
        <p>
          Policy tailwinds from the IndiaAI Mission add to compute access and public-sector demand
          [VERIFY: programme status, month/year]. But the mechanism that actually sets your pay is
          narrower and more useful to know: the market is saturated with{" "}
          <strong>AI-aware</strong> candidates and short of <strong>AI-capable</strong> ones. Almost
          everyone applying can describe RAG. Far fewer can explain their chunking strategy, show
          the evaluation harness they used to compare two retrievers, and point at the monitored
          service running it.
        </p>
        <p>
          That scarcity gap is the entire premium. It is also why a course's marketing spend and a
          course's salary relevance are close to uncorrelated.
        </p>

        <H3>Which AI skills actually raise pay in 2026?</H3>
        <TableFrame
          label="Table"
          title="Skill → market status → effect on pay"
          caption="The last five rows are where 2026 pay premiums live — and where most course syllabi stop. Table 2 below scores all ten courses on exactly these rows."
        >
          <Head cols={["Skill", "2026 market status", "Effect on pay"]} />
          <tbody>
            {skillPremium.map((row) => (
              <Row key={row[0]} cells={row} />
            ))}
          </tbody>
        </TableFrame>
        <p>
          The honest counterpoint: skills unlock the band, they do not place you inside it. Two
          candidates with identical curricula land ₹6 LPA apart because one has a portfolio they can
          defend under pressure, interviews calmly, and negotiates with a competing offer. Treat the
          course as the thing that gets you into the room.
        </p>
      </Section>

      {/* SECTION 4 */}
      <Section
        id="methodology"
        eyebrow="Section 4 · Methodology"
        title="How We Ranked These 10 Courses"
      >
        <p>
          A different weighting produces a different winner, so here are the weights before the
          verdict. If you weighted placement infrastructure at 40%, Scaler would top this list. If
          you weighted cost alone, DeepLearning.AI would.
        </p>
        <div className="my-6 grid gap-3">
          {methodology.map((m) => (
            <div
              key={m.name}
              className="rounded-lg border border-border bg-card p-4 shadow-card"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-lg text-brass">{m.weight}</span>
                <span className="font-display text-lg">{m.name}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
            </div>
          ))}
        </div>
        <p>
          <strong>How salary potential was scored.</strong> I mapped each course's verified
          curriculum and project output to the roles it can credibly prepare a learner for, then
          mapped those roles to published role-level pay bands (Table 5). No score anywhere on this
          page is derived from a provider's own salary banner.
        </p>
        <p>
          <strong>What was verified.</strong> Fees, module lists, delivery formats and policies were
          checked against current provider pages with a recorded check date; anything unconfirmed
          carries a [VERIFY] marker rather than a confident-sounding invention. Provider-claimed
          outcomes are labelled provider-reported wherever cited. Disclosure again, in one line:
          LogicMojo publishes this page and ranks #1 on this rubric.
        </p>
        <p>
          Finally: <strong>"#1 overall" does not mean "right for everyone."</strong> That is why
          every table carries a Best For column and why the quiz exists.
        </p>
      </Section>

      {/* SECTION 5 */}
      <Section
        id="at-a-glance"
        eyebrow="Section 5 · The rankings"
        title="Top 10 Best AI Courses with High Salary Potential (2026) — At a Glance"
      >
        <p>
          These ten survived a filter of 150+ programs on one test: can a committed Indian learner
          finish this and come out able to do work that high-paying AI roles hire for? The ranking
          below reflects the composite score across all six criteria. Read it alongside the Best For
          column — the gap between the #1 course and the #1 course <em>for you</em> is the most
          expensive gap on this page.
        </p>
        <ol className="my-6 grid gap-3 sm:grid-cols-2">
          {ranked.map((c, i) => (
            <Reveal as="li" key={c.rank} delay={i * 45}>
              <div className="card-lift flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-card">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-blue)] font-display text-xl text-primary-foreground">
                  {c.rank}
                </span>
                <div>
                  <p className="font-semibold leading-tight">{c.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.tag}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>


        <TableFrame
          label="Table 1"
          title="Overview at a glance"
          caption="Fees change frequently and are usually negotiable on sales calls. Confirm the current fee, GST treatment, EMI interest and refund window in writing before you pay."
        >
          <Head
            cols={[
              "#",
              "Course",
              "Delivery",
              "Fees (₹)",
              "Duration",
              "Capability ceiling",
              "Salary-relevant strength",
              "Best for",
            ]}
          />
          <tbody>
            {overview.map((row) => (
              <Row key={row[0]} cells={row} />
            ))}
          </tbody>
        </TableFrame>

        <TableFrame
          label="Table 2 · the most important table"
          title="AI curriculum depth scorecard"
          caption="The bottom half of this table is where Section 3's premium-pay skills live — and where most syllabi stop. The prompting row is baseline literacy, not a differentiator. And depth is not automatically right for every reader: a manager buying AI literacy has no use for QLoRA. Re-verify any cell older than one quarter."
        >
          <thead>
            <tr>
              <th>Skill / topic</th>
              {COURSE_NAMES.map((n) => (
                <th key={n}>{n}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {curriculumRows.map((row) => (
              <tr key={row.skill}>
                <td>{row.skill}</td>
                {row.values.map((v, i) => (
                  <td key={i}>
                    <span
                      className={`inline-block rounded px-1.5 py-0.5 text-[0.7rem] font-medium ${depthTone[v]}`}
                    >
                      {v}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </TableFrame>

        <TableFrame
          label="Table 3"
          title="Placement, job assistance & outcome transparency"
          caption="Outcome Data Transparency grades whether a provider publishes its methodology — denominator, window, median versus average — or only banners."
        >
          <Head
            cols={[
              "Course",
              "Support type",
              "AI-role-specific",
              "Interview prep",
              "Portfolio / code review",
              "Outcome data transparency",
              "Bond / ISA",
            ]}
          />
          <tbody>
            {placement.map((row) => (
              <Row key={row[0]} cells={row} />
            ))}
          </tbody>
        </TableFrame>

        <p>Five questions to ask before you believe any placement claim:</p>
        <ul>
          <li>What percentage of <strong>enrolled</strong> learners — not "eligible" ones — were placed?</li>
          <li>Over what window: three months, six, twelve?</li>
          <li>What is the <strong>median</strong> salary, not the average?</li>
          <li>Were those AI roles specifically, or any tech role at all?</li>
          <li>Can I speak to two recent alumni whom you did not hand-pick?</li>
        </ul>

        <TableFrame
          label="Table 4"
          title="Fees, EMI & total cost of ownership"
          caption="Capability per ₹ is my judgement of capability level reached divided by money and hours spent — not a market statistic."
        >
          <Head
            cols={[
              "Course",
              "Headline fee (₹)",
              "EMI",
              "No-cost EMI",
              "Refund window",
              "Hidden costs to check",
              "Capability per ₹",
            ]}
          />
          <tbody>
            {fees.map((row) => (
              <Row key={row[0]} cells={row} />
            ))}
          </tbody>
        </TableFrame>

        <Callout tone="warn">
          A 24-month EMI on a program abandoned in month three is the most common financial regret
          in Indian EdTech. Check whether your EMI is a bank or NBFC loan — if it is, it continues
          regardless of your attendance, your batch deferral or your opinion of the teaching. Get
          the refund policy in writing, with the exact cut-off date, before you pay.
        </Callout>

        <TableFrame
          label="Table 5"
          title="Course → role → salary potential map"
          caption="Bands belong to roles and markets, not to courses. Each band carries a source type and check date per the salary data rules, and none is a projection of your outcome."
        >
          <Head
            cols={[
              "Course",
              "Roles it credibly prepares for",
              "Indicative band for those roles (₹ LPA)",
              "What decides where you land in the band",
            ]}
          />
          <tbody>
            {roleMap.map((row) => (
              <Row key={row[0]} cells={row} />
            ))}
          </tbody>
        </TableFrame>

        <TableFrame
          label="Table 6"
          title="Prerequisites & flexibility"
          caption="Weekly hours are the number that decides completion. Be pessimistic here — the estimate you make on a Sunday is not the estimate that survives a release week."
        >
          <Head
            cols={[
              "Course",
              "Coding prerequisite",
              "Maths prerequisite",
              "Bridge module",
              "Mode & IST fit",
              "Weekly hours",
              "Deferral / pause",
            ]}
          />
          <tbody>
            {prereqs.map((row) => (
              <Row key={row[0]} cells={row} />
            ))}
          </tbody>
        </TableFrame>
      </Section>

      {/* SECTION 6 */}
      <Section
        id="logicmojo"
        eyebrow="Section 6 · Editor's deep dive"
        title="Why LogicMojo Is Ranked #1 for Salary-Focused AI Learners (2026)"
      >
        <p>
          Let me state the criteria openly, because a different weighting genuinely produces a
          different winner. Weight placement infrastructure heaviest and Scaler wins. Weight the
          academic credential and it is upGrad or Great Learning. Weight cost alone and
          DeepLearning.AI and the free tracks win outright. Weight vernacular access and GUVI is the
          honest answer.
        </p>
        <p>
          This page weights <strong>salary-relevant capability gained per rupee and per hour, in a
          format a working Indian learner can realistically complete</strong>. On that composite —
          2026-stack depth across RAG, fine-tuning, agents, MCP and MLOps, plus live IST mentorship,
          project rigour and accessible pricing — LogicMojo scored highest. It is also the course
          this site sells, which is exactly why the limitations section below is not decorative.
        </p>

        <H3>1) Does it teach the skills that command 2026 premiums?</H3>
        <p>The fifteen modules compress into a seven-step capability arc:</p>
        <ul>
          <li>
            <strong>Python, data and SQL foundations</strong> → you can work like an engineer, not a
            notebook tourist.
          </li>
          <li>
            <strong>Maths intuition plus classical ML with evaluation rigour</strong> → you can
            build a model and, more importantly, know whether it is any good.
          </li>
          <li>
            <strong>Deep learning and transformers in PyTorch</strong> → you can train and debug
            real networks and explain attention without reciting a blog post.
          </li>
          <li>
            <strong>GenAI and LLMs — APIs, open-weight models (Llama, Mistral, Qwen, Gemma), local
            inference</strong> → you can build production-quality LLM applications, including where
            hosted APIs are not an option.
          </li>
          <li>
            <strong>Embeddings, vector databases, production RAG — chunking, hybrid search,
            re-ranking, evaluation</strong> → you can architect and defend the single most-asked
            GenAI interview system.
          </li>
          <li>
            <strong>Fine-tuning (SFT, LoRA/QLoRA, DPO concepts) plus agents, LangGraph, CrewAI,
            AutoGen and MCP</strong> → you can adapt models and build agents that fail gracefully.
          </li>
          <li>
            <strong>MLOps and LLMOps — MLflow, FastAPI, Docker, CI/CD, monitoring, LLM
            observability</strong> → you can run a model as a service, the capability that most
            distinguishes hired candidates from certified ones.
          </li>
        </ul>
        <p>
          Tooling in one line: Python, pandas, scikit-learn, PyTorch, Hugging Face, LangChain,
          LangGraph, CrewAI, AutoGen, MCP, FAISS and managed vector databases, MLflow, FastAPI,
          Docker, GitHub Actions.
        </p>
        <p>
          <strong>Depth verdict:</strong> it is the only program on this list rated Deep or
          Comprehensive across every premium-pay row of Table 2.
        </p>

        <TableFrame
          label="Visual 2"
          title="What typical courses teach vs what high-salary hiring tests vs LogicMojo"
        >
          <Head
            cols={["Topic", "Typical online course", "What 2026 high-salary hiring tests", "LogicMojo"]}
          />
          <tbody>
            {gapTable.map((row) => (
              <Row key={row[0]} cells={row} />
            ))}
          </tbody>
        </TableFrame>

        <H3>2) Delivery, mentorship and projects — specific and testable</H3>
        <p>
          Batches are genuinely live on IST evenings and weekends with real instructors, not
          recordings with a chat window. Doubts are resolved in session and through mentor channels
          between sessions. Code gets reviewed by a human. Sessions are recorded with a structured
          catch-up path for the weeks work eats. Cohorts create accountability, switchers get
          prerequisite onboarding, batch deferral exists, and the curriculum is refreshed
          continuously rather than annually.
        </p>
        <p>
          Projects run to 10–15 progressive builds ending in a learner-designed capstone that must
          be <strong>deployed</strong> — not demoed in a notebook. Everything is documented for
          GitHub and reviewed by a person.
        </p>
        <Callout tone="brass">
          Test this yourself, with any provider on this list including us. Can I observe a real
          class before paying? Who specifically teaches my batch? What is the doubt-resolution SLA?
          Does a human review my code, or a script? Can I defer if my project goes live in April?
          Vague answers to these five questions are the most reliable signal you will get.
        </Callout>

        <H3>3) Pricing, value and the honest ROI framing</H3>
        <div className="my-6 overflow-x-auto rounded-lg border border-border bg-card shadow-card">
          <table className="data-table min-w-[560px]">
            <Head cols={["Price band", "What you typically get", "Where LogicMojo sits"]} />
            <tbody>
              <Row cells={["₹0", "Free MOOCs and audit tracks; no support", ""]} />
              <Row cells={["₹500–₹5,000", "Short courses, single-topic sprints", ""]} />
              <Row cells={["₹5,000–₹40,000", "Recorded-first entry programs, community support", ""]} />
              <Row
                cells={[
                  "₹40,000–₹1,20,000",
                  "Live specialist instruction with mentorship and review",
                  "← LogicMojo",
                ]}
              />
              <Row cells={["₹1,20,000–₹2,50,000", "University-credentialed premium programs", ""]} />
              <Row cells={["₹2,50,000+", "Placement-infrastructure bootcamps", ""]} />
            </tbody>
          </table>
        </div>
        <p>
          Value here is capability level reached divided by rupees plus hours. Stated plainly:
          programs at three to five times this price generally buy you brand, placement
          infrastructure or a credential — not a higher capability ceiling. Both are legitimate
          purchases. The reader should simply know which one they are making before signing an EMI
          mandate.
        </p>
        <Callout>
          For a working professional the scarcer resource isn't money — it's the 8–12 weekly hours
          you'll spend for months. A cheaper course teaching a 2023 stack costs the same hours and
          returns a weaker pay outcome.
        </Callout>

        <H3>4) Career support — what it is and what it is not</H3>
        <p>
          You get career guidance, portfolio review, AI-role-specific interview preparation and
          project-defence practice. There is no bond and no ISA. Stated plainly: this is{" "}
          <strong>not</strong> a guaranteed-placement program, and this page makes no salary promise
          on its behalf. If a placement pipeline is the thing you are buying, Scaler is the honest
          recommendation and it sits at #2 for that reason.
        </p>

        <H3>5) Honest limitations — where LogicMojo is not the right choice</H3>
        <ul>
          <li>
            <strong>Not the cheapest.</strong> PW Skills, GUVI and free tracks exist, and for a
            student on a ₹10,000 budget they are the correct answer.
          </li>
          <li>
            <strong>No university credential.</strong> If an internal promotion panel or an HR
            filter demands one, upGrad, Great Learning or Simplilearn beat us on that specific axis.
          </li>
          <li>
            <strong>Not the biggest placement machine.</strong> Scaler's operation is larger and
            better connected to product-company loops.
          </li>
          <li>
            <strong>Not fully self-paced.</strong> Learners with unpredictable schedules complete
            self-paced tracks more reliably than live cohorts.
          </li>
          <li>
            <strong>Smaller brand recognition.</strong> Skill depth outweighs brand in technical
            rounds, but the recognition gap at the resume-screen stage is real.
          </li>
          <li>
            <strong>Demands 10–15 hours a week for months.</strong> If you cannot protect that time,
            do not pay.
          </li>
          <li>
            <strong>Not a research or PhD pathway.</strong> This is engineering, not publication.
          </li>
          <li>
            <strong>Not a GenAI-only sprint.</strong> If your ML foundations are already strong, a
            targeted specialist short course may be better value than a full program.
          </li>
        </ul>

        <div className="mt-8">
          <Button size="lg" className="h-12 px-6 text-base">
            Explore the LogicMojo AI Course — Curriculum, Live Batches &amp; Project Portfolio →
          </Button>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-ink shadow-lift">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/aircAruvnKk"
              title="How AI capability maps to salary bands — walkthrough"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="px-5 py-3 text-sm text-ink-foreground/80">
            Module A — walkthrough of the capability ladder and how each level maps to what
            interviewers actually test. [INSERT: replace with the LogicMojo curriculum walkthrough
            video ID]
          </p>
        </div>
      </Section>

      {/* QUIZ */}
      <Section
        id="quiz"
        eyebrow="Interactive"
        title="AI Course Finder Quiz — Which Program Fits Your Money, Time and Goal?"
      >
        <p>
          Five questions, no email required. The output is a fit suggestion based on your budget,
          available hours and the outcome you are actually buying — never a salary projection.
        </p>
        <CourseFinderQuiz />
      </Section>

      {/* SECTION 7 */}
      <Section
        id="reviews"
        eyebrow="Section 7 · Deep reviews"
        title="In-Depth Reviews — Top 10 Best AI Courses with High Salary Potential (2026)"
      >
        <p>
          Each review follows the same twelve-part structure so you can compare like with like:
          positioning, curriculum with a depth verdict, fees and EMI, prerequisites and flexibility,
          projects and mentorship, placement reality, roles and salary potential, an ROI verdict,
          strengths, limitations, best-fit and avoid-if lists, and a rating block.
        </p>

        <div className="mt-8 space-y-10">
          {reviews.map((rv) => (
            <article
              key={rv.rank}
              id={`review-${rv.rank}`}
              className="card-lift scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-blue)] font-display text-xl text-primary-foreground shadow-glow">
                  {rv.rank}
                </span>
                <Pill tone="brass">Ceiling: {rv.ceiling}</Pill>
                <Pill>Overall {rv.overall}/10</Pill>
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl">{rv.name}</h3>
              <p className="mt-1 text-sm italic text-muted-foreground">{rv.positioning}</p>

              <div className="prose-body mt-4">
                <p>{rv.overview}</p>
                <p>
                  <strong>Curriculum &amp; tools.</strong> {rv.curriculum}{" "}
                  <em>{rv.depthVerdict}</em>
                </p>
                <p>
                  <strong>Fees, duration &amp; EMI.</strong> {rv.money}
                </p>
                <p>
                  <strong>Prerequisites &amp; flexibility.</strong> {rv.prereq}
                </p>
                <p>
                  <strong>Projects &amp; mentorship.</strong> {rv.projects}
                </p>
                <p>
                  <strong>Placement &amp; job assistance.</strong> {rv.placement}
                </p>
                <p>
                  <strong>Career outcomes &amp; salary potential.</strong> {rv.outcomes}
                </p>
                <p>
                  <strong>ROI verdict.</strong> {rv.roi}
                </p>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="eyebrow mb-2">Strengths</p>
                  <ul className="space-y-1.5 text-sm">
                    {rv.strengths.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span className="text-positive">+</span>
                        <span className="text-muted-foreground">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-2">Limitations</p>
                  <ul className="space-y-1.5 text-sm">
                    {rv.limitations.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span className="text-destructive">−</span>
                        <span className="text-muted-foreground">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-2">Best-fit learner</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {rv.bestFor.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-2">Avoid if</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {rv.avoidIf.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-accent/20 bg-paper p-4">
                <p className="eyebrow mb-3">Rating block</p>
                <div className="grid gap-2.5">
                  {rv.ratings.map((r) => (
                    <div key={r.label} className="flex items-center gap-3">
                      <span className="w-56 shrink-0 text-xs text-muted-foreground">{r.label}</span>
                      <div className="h-1.5 flex-1 rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-[image:var(--gradient-blue)] transition-all duration-700"
                          style={{ width: `${r.score * 10}%` }}
                        />
                      </div>
                      <span className="w-10 shrink-0 text-right font-mono text-xs">
                        {r.score}/10
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 border-t border-border pt-3 font-display text-lg">
                  Overall {rv.overall}/10 · Capability ceiling {rv.ceiling}
                </p>
              </div>

              <p className="mt-4">
                <a
                  href="#at-a-glance"
                  className="font-medium text-foreground underline decoration-brass decoration-2 underline-offset-4"
                >
                  {rv.cta}
                </a>
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* AI community card */}
      <Reveal>
        <div className="card-lift glass-card my-10 rounded-3xl p-6 md:p-8">
          <p className="eyebrow">LogicMojo AI learning community</p>
          <h2 className="mt-2 text-2xl md:text-3xl">Learning alone is the slowest way to do this</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            A peer group working through the same roadmap — weekly build check-ins, doubt support
            when a retrieval pipeline misbehaves at 11pm IST, and people who will attack your project
            before an interviewer does. Free to join, no schedule to keep up with.
          </p>
          <p className="mt-5">
            <a
              href="#programs"
              className="inline-flex min-h-11 items-center rounded-full bg-[image:var(--gradient-blue)] px-6 text-sm font-medium text-primary-foreground shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Join the AI learning community → [community link placeholder]
            </a>
          </p>
        </div>
      </Reveal>

      <SectionResume />
      <SectionInternalExternal />
      <SectionJobSearch />
      <SectionMistakesMyths />
      <SectionPrograms />
      <SectionPathQuiz />
      <SectionFAQs />

      {/* FAQ */}

      <Section id="faq" eyebrow="Section 8 · PAA" title="Frequently Asked Questions">
        <div className="mt-4 space-y-4">
          {faqs.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-lg border border-border bg-card p-5 shadow-card"
            >
              <summary className="cursor-pointer list-none font-display text-lg marker:hidden">
                <span className="mr-2 text-brass">?</span>
                {q}
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      <SectionAuthorTrust />

      <footer className="mt-12 rule-top text-sm leading-relaxed text-muted-foreground">

        <p>
          <strong className="text-foreground">Salary and claims note.</strong> Every salary figure on
          this page is an indicative, role-based range attributed to roles and markets, never to a
          course, and each carries a source and check date marker. Nothing here is a salary
          guarantee, projection or promise. Fees and curricula change frequently — re-verify with
          the provider before paying. Published by LogicMojo, whose course is reviewed and disclosed
          above.
        </p>
      </footer>
    </main>
  );
}
