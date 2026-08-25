import { Button } from "@/components/ui/button";
import { Callout, H3, NoteCard, Pill, Reveal, Section, Verify } from "@/components/site/primitives";
import { FieldNote } from "@/components/site/EEAT";

/* ---------------------------------------------------------------- helpers */

function Head({ cols }: { cols: string[] }) {
  return (
    <thead>
      <tr>
        {cols.map((c) => (
          <th key={c} scope="col">
            {c}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function Table({ cols, rows, caption }: { cols: string[]; rows: string[][]; caption?: string }) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
      <table className="data-table min-w-[720px]">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <Head cols={cols} />
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <th scope="row" className="text-left font-medium">
                {r[0]}
              </th>
              {r.slice(1).map((c, i) => (
                <td key={i}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------ SECTION 9 — roles & pay */

const roleRows: string[][] = [
  ["GenAI / LLM Engineer", "LLMs, RAG, fine-tuning, evaluation", "Portfolio-driven", "[VERIFY: source, month/year]", "LogicMojo"],
  ["AI Agent Developer", "Agents, frameworks, MCP, orchestration", "Portfolio-driven, fast-growing", "[VERIFY: source, month/year]", "LogicMojo"],
  ["ML Engineer", "ML, DL, Python engineering, MLOps", "2+ yrs typical", "[VERIFY: source, month/year]", "LogicMojo, Scaler"],
  ["AI Engineer", "LLMs, APIs, deployment, evaluation", "1+ yr or strong portfolio", "[VERIFY: source, month/year]", "LogicMojo"],
  ["MLOps Engineer", "Docker, CI/CD, cloud, monitoring", "DevOps background helps", "[VERIFY: source, month/year]", "LogicMojo, Intellipaat"],
  ["Data Scientist", "ML, statistics, communication", "0–3 yrs + portfolio", "[VERIFY: source, month/year]", "upGrad, Scaler, LogicMojo"],
  ["NLP / CV Engineer", "Transformers, embeddings / CNNs, deployment", "2+ yrs typical", "[VERIFY: source, month/year]", "LogicMojo, Great Learning"],
  ["AI Product Manager", "AI literacy, evaluation thinking, product craft", "PM background", "[VERIFY: source, month/year]", "DeepLearning.AI, Great Learning"],
  ["AI Architect / Consultant", "Breadth, system design, communication", "Senior background", "[VERIFY: source, month/year]", "Simplilearn, upGrad"],
  ["Data Analyst (AI-augmented)", "SQL, Python, statistics, prompting", "Freshers welcome", "[VERIFY: source, month/year]", "GUVI, PW Skills, IBM"],
];

const interviewQuestions = [
  "Why did you optimise that metric and not accuracy?",
  "How did you handle class imbalance, and what did it cost you?",
  "Explain attention to a non-technical stakeholder in ninety seconds.",
  "Design a RAG system over 50,000 internal documents.",
  "How would you detect and reduce hallucination in that system?",
  "Prompting, RAG or fine-tuning for this case — and why not the other two?",
  "How would you serve this model to 10,000 users?",
  "What did your project get wrong, and what did you change?",
  "Walk me through the cost and latency trade-offs you made.",
  "How did you evaluate your agent, beyond 'it worked'?",
  "What breaks first when your retrieval corpus doubles?",
  "Show me the part of your code you are least happy with.",
];

export function SectionRoles() {
  return (
    <Section
      id="roles"
      eyebrow="Section 9 · Roles & pay"
      title="Highest-Paying AI Roles in India (2026) — Skills, Entry Bars and Salary Bands"
    >
      <p>
        The highest-paying AI roles in India in 2026 are GenAI/LLM engineering, agent development
        and ML engineering with production ownership — because those are the jobs where a mistake is
        expensive and the supply of people who can defend a design decision is thin.
      </p>
      <Callout tone="warn">
        Before the table: figures vary hugely by city, company type (product / services / GCC /
        startup), years of experience and negotiation. Every band here is indicative and
        median-oriented, attached to a role and never to a course, and carries a{" "}
        <Verify>VERIFY: source, month/year</Verify> marker because AI pay reprices faster than any
        page can.
      </Callout>

      <Table
        cols={["Role", "Core skills", "Entry bar", "Indicative band (₹ LPA)", "Best-mapped courses"]}
        rows={roleRows}
        caption="Highest-paying AI roles in India 2026 with core skills, entry bars and indicative salary bands"
      />

      <H3>Where high-salary AI hiring actually happens in India (2026)</H3>
      <ul>
        <li>
          <strong>GCCs</strong> in Bengaluru, Hyderabad, Pune, NCR and Chennai — the largest volume
          of genuine AI engineering seats, with structured bands and slower loops.
        </li>
        <li>
          <strong>Product companies shipping GenAI features</strong> — the top of the range, the
          hardest loops, and the strongest weighting on system design and evaluation.
        </li>
        <li>
          <strong>AI-native startups</strong> — equity-heavy, high variance; the cash component is
          often below a GCC offer at the same title.
        </li>
        <li>
          <strong>IT-services AI practices</strong> — volume hiring at lower bands, but genuinely
          fast internal mobility once you are inside a delivery account.
        </li>
        <li>
          <strong>Enterprise adopters</strong> in BFSI, healthcare, retail and manufacturing —
          domain knowledge is repriced here, which is why a domain professional adding AI often
          out-earns a generalist.
        </li>
      </ul>
      <p>
        The product-versus-services delta is real and large at the same title and years, and remote
        or hybrid hiring loosens geography without erasing that gap. I say this as someone who has
        sat on both sides of it.
      </p>

      <H3>What interviewers test before making a high offer</H3>
      <p>These are the question types I and my panel colleagues actually use:</p>
      <ol className="mt-3 grid gap-2 sm:grid-cols-2">
        {interviewQuestions.map((q, i) => (
          <li key={q} className="rounded-xl border border-border bg-card p-3 text-sm">
            <span className="mr-2 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
            {q}
          </li>
        ))}
      </ol>

      <NoteCard title="Honest counterpoints">
        <ul className="ml-4 list-disc space-y-1">
          <li>Entry-level AI hiring is competitive; the funnel is widest at 2–5 years of experience.</li>
          <li>"AI role" titles are applied inconsistently — read the JD, not the designation.</li>
          <li>Portfolios and interview performance move offers far more than certificates do.</li>
          <li>The same role pays materially differently across product, GCC, services and startups.</li>
        </ul>
      </NoteCard>
    </Section>
  );
}

/* ------------------------------------------------------- SECTION 10 — ROI */

export function SectionROI() {
  return (
    <Section
      id="roi"
      eyebrow="Section 10 · ROI"
      title="ROI Reality — Fees vs Salary, Payback Periods, and the Scenario Nobody Publishes"
    >
      <p>
        The honest return on an AI course is not fee versus package — it is the realistic salary
        delta you can achieve, discounted by the probability that you finish and convert, minus
        everything the course costs you including your hours.
      </p>
      <Callout tone="brass">
        <strong>ROI = (realistic salary delta over 24 months × probability of achieving it) − (fee
        + EMI interest + opportunity cost of hours).</strong>
      </Callout>
      <ul>
        <li><strong>Salary delta:</strong> the difference between your current band and the band your new capability level supports — role-attributed, never course-attributed.</li>
        <li><strong>Probability:</strong> your honest completion odds times your conversion odds; be pessimistic here, most people are not.</li>
        <li><strong>Fee + EMI interest:</strong> the total amount debited, not the sticker price.</li>
        <li><strong>Opportunity cost:</strong> 10 hours a week for 6 months is roughly 260 hours of your life priced at whatever else you'd do with it.</li>
      </ul>

      <H3>Three worked scenarios</H3>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            t: "A — engineer, mid-band program",
            b: "Software engineer, 4 years, pays roughly ₹80,000 [ILLUSTRATIVE], completes the program, ships a deployed capstone and switches into an AI role. Payback lands within the first few months of the new band on any plausible delta. What produced it: completion plus a defensible portfolio. The certificate contributed nothing in the loop I would have run.",
          },
          {
            t: "B — non-tech switcher, premium program",
            b: "Pays roughly ₹2,00,000 [ILLUSTRATIVE] for a credentialed program, targets an entry AI role. Payback is longer and variance is much higher; the credential mainly buys HR-screen clearance. Said plainly: this path is harder and slower than the marketing suggests, and 12–18 months is a realistic horizon.",
          },
          {
            t: "C — the dropout scenario",
            b: "Enrols in a ₹2,00,000 program [ILLUSTRATIVE], stops attending in month three when a release cycle eats the evenings. ROI is strongly negative: no capability gain, no portfolio, and the EMI keeps debiting on the 5th for another 21 months. This is the most common outcome in Indian ed-tech and almost no commercial page shows it.",
          },
        ].map((s) => (
          <Reveal as="div" key={s.t}>
            <div className="card-lift h-full rounded-2xl border border-border bg-card p-5">
              <p className="font-display text-lg">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-6">
        <strong>The EMI trap, restated.</strong> A no-cost EMI is a loan from a third-party lender
        with your credit score attached. It does not pause when you stop attending, most refund
        windows close before the syllabus gets hard, and cancelling the course rarely cancels the
        mandate. Read the lender terms before the brochure — Table 4 in the comparison set lists the
        fee and EMI structure per program.
      </p>

      <Callout>
        The course is roughly 40% of your outcome. What you build during it, and what you do in the
        three months after, is the other 60%. Any page that says otherwise is selling something.
      </Callout>

      <FieldNote title="The number I ask mentees to write down">
        <p>
          Before anyone pays, I make them write two figures on paper: the total amount that will
          leave their account including interest, and the number of weekly hours they have actually
          protected for four consecutive weeks — not planned, protected. In my mentee group the
          people who did that exercise finished at a visibly higher rate, because the ones who
          couldn't fill the second number chose a cheaper program instead of dropping out of an
          expensive one.
        </p>
      </FieldNote>

      <H3>Converting the course into an offer — the 90-day plan after finishing</H3>
      <ol>
        <li><strong>Polish 3–5 flagship projects</strong> with real READMEs, architecture notes and a live deployment link. One deployed system beats five notebooks.</li>
        <li><strong>Rehearse the project defence out loud</strong> — three questions deep on every design decision, especially evaluation and cost.</li>
        <li><strong>Targeted applications plus referrals</strong> over spray-and-pray; twenty considered applications with a referral beat two hundred cold ones.</li>
        <li><strong>Use the portfolio as negotiation leverage</strong> — demonstrated, specific capability is what justifies the top of a band rather than its floor.</li>
        <li><strong>Keep one build-in-public thread going</strong> so recruiters find evidence before they find your résumé.</li>
      </ol>
      <p className="text-sm text-muted-foreground">
        That is effort framing, not an income promise — no step here guarantees an offer.
      </p>
    </Section>
  );
}

/* -------------------------------------------------- SECTION 11 — red flags */

const redFlags = [
  "Guaranteed job or guaranteed salary claims — no provider controls a hiring decision.",
  "\"Highest CTC\" banners with no median published alongside them.",
  "Placement percentages with no denominator, or one filtered to \"eligible learners\".",
  "Role-title inflation in outcome lists — annotation and support roles counted as AI engineering.",
  "Hiring-partner logo walls with no verifiable placement into those companies.",
  "\"Live\" classes that turn out to be replays with a chat window.",
  "Undated curriculum pages — in AI, undated means outdated.",
  "No RAG, agents, fine-tuning or MLOps anywhere in a 2026 syllabus.",
  "ISA or bond fine print revealed only after enrolment.",
  "EMI routed through a lender whose terms you cannot read before signing.",
  "A refund window that closes before the first hard module.",
  "Manufactured scarcity — \"price rises tonight\", \"two seats left\".",
  "Testimonials without full names, companies or reachable LinkedIn profiles.",
  "Instructor names withheld until after payment.",
  "Alumni \"salary screenshots\" offered as proof of anything.",
];

export function SectionRedFlags() {
  return (
    <Section
      id="red-flags"
      eyebrow="Section 11 · Consumer protection"
      title="Red Flags in &quot;High Salary&quot; Course Marketing"
    >
      <p>
        The fastest way to filter Indian AI courses is to read the marketing for what it omits: a
        median, a denominator, a date and a named instructor. Fifteen flags, each of which I have
        personally seen on a live provider page in the last two years:
      </p>
      <ol className="mt-5 grid gap-2 md:grid-cols-2">
        {redFlags.map((f, i) => (
          <li
            key={f}
            className="card-lift flex gap-3 rounded-xl border border-border bg-card p-3 text-sm"
          >
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ol>
      <Callout tone="warn">
        <strong>The sales-call rule.</strong> Get every claim in writing over email. Never pay on
        the same call. Treat urgency as information about the seller, not about the offer.
      </Callout>
    </Section>
  );
}

/* ------------------------------------------- SECTION 12 — free vs paid + C */

const freeStack: string[][] = [
  ["DeepLearning.AI (audit)", "ML and Deep Learning specialisations", "Strongest conceptual base at ₹0", "Free to audit; certificate paid"],
  ["Fast.ai", "Practical Deep Learning for Coders", "Top-down, build-first pedagogy", "Free"],
  ["Hugging Face courses", "Transformers, NLP, diffusion, agents", "Closest free match to the 2026 stack", "Free"],
  ["Kaggle Learn + competitions", "Applied ML, feature work, real datasets", "Portfolio evidence recruiters can inspect", "Free"],
  ["NPTEL", "ML and AI courses from IITs/IISc", "Academic rigour and maths depth", "Free; paid exam optional"],
  ["Official docs", "PyTorch, LangChain, MLflow, FastAPI", "How practitioners actually learn tooling", "Free"],
];

const shorts = [
  ["Why \"highest CTC\" banners mislead learners", "YouTube Shorts"],
  ["RAG explained with one support-ticket example", "Instagram Reels"],
  ["Fine-tuning vs RAG — pick in 60 seconds", "YouTube Shorts"],
  ["What a deployed capstone actually looks like", "Instagram Reels"],
  ["Three questions to ask any counsellor", "YouTube Shorts"],
];

export function SectionFreeVsPaid() {
  return (
    <Section
      id="free-vs-paid"
      eyebrow="Section 12 · Free vs paid"
      title="Free vs Paid AI Courses — The Salary Lens"
    >
      <p>
        Free is genuinely enough when you are highly self-directed, already code, and have more time
        than money — the free stack below matches paid programs on information and loses only on
        structure.
      </p>

      <H3>The free stack, in the order I would work through it</H3>
      <Table
        cols={["Resource", "What it covers", "Why it earns its place", "Cost"]}
        rows={freeStack}
        caption="Free AI learning stack for Indian learners in 2026"
      />

      <H3>What free cannot give you</H3>
      <ul>
        <li>Accountability and completion pressure — the single biggest predictor of an outcome.</li>
        <li>Human code review that tells you your abstraction is wrong before an interviewer does.</li>
        <li>A curated sequence that saves you months of choosing what to learn next.</li>
        <li>Doubt resolution at 11pm IST when the retrieval pipeline returns nonsense.</li>
        <li>Portfolio design and interview-defence practice against someone who hires.</li>
        <li>A peer cohort, and career support at the end of it.</li>
      </ul>

      <Callout>
        Paid courses in 2026 don't sell information — the free stack matches them on content. They
        sell structure, feedback, sequence and accountability. If you can supply those yourself, free
        isn't a compromise; it's the rational choice. If you've started and stopped before, the
        structure is the product — and structure is what converts fees into salary outcomes.
      </Callout>

      {/* MODULE C — Reels / Shorts strip */}
      <div className="mt-8">
        <p className="eyebrow mb-2">Module C · Short explainers</p>
        <ul
          className="-mx-1 flex snap-x gap-4 overflow-x-auto px-1 pb-3"
          aria-label="Short video explainers from the LogicMojo channels"
        >
          {shorts.map(([caption, platform]) => (
            <li key={caption} className="w-[190px] shrink-0 snap-start">
              <a
                href="#author"
                className="card-lift block h-full rounded-2xl border border-border bg-card p-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={`${caption} — short video on ${platform} [INSERT: URL]`}
              >
                <div
                  className="aspect-[9/16] rounded-xl bg-[image:var(--gradient-blue)] opacity-90"
                  role="img"
                  aria-label="Video thumbnail placeholder"
                />
                <p className="mt-2 text-sm leading-snug">{caption}</p>
                <p className="mt-1 text-xs text-muted-foreground">{platform} · [INSERT: URL]</p>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground">
          Thumbnails load lazily and each card is keyboard-focusable; without JavaScript the strip
          degrades to this same list of links.
        </p>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------ SECTION 13 — FAQs */

type FaqGroup = { title: string; items: [string, string][] };

export const faqGroups: FaqGroup[] = [
  {
    title: "Salary & outcomes",
    items: [
      ["Which AI course gives the highest salary in 2026?", "No course gives a salary — the capability level you reach does, and the courses that reach the highest levels are the ones covering production RAG, fine-tuning, agents and MLOps with a deployed portfolio. On this list that is LogicMojo for depth per rupee and Scaler if access to product-company loops is your constraint. Ask any provider which capability level a committed learner leaves with, then check that against the roles you want. A syllabus that stops at prompting and a single API call cannot reach a premium engineering band regardless of the fee attached to it."],
      ["What salary can I expect after an AI course in India?", "Expect the band that matches your demonstrated capability, prior experience and company type — not the banner on the landing page. A fresher entering an analyst-tier role, an engineer switching to AI engineering, and a domain professional adding AI to existing expertise all land in different, role-attributed ranges [VERIFY: source, month/year]. The strongest predictors I see in interviews are a deployed project you can defend and years of prior engineering experience. Treat any course-attributed number as marketing until you see the median and the denominator behind it."],
      ["Which AI job has the highest salary in 2026?", "Roles that own production AI systems pay most: GenAI/LLM engineer, AI agent developer, and senior ML or MLOps engineers with deployment responsibility. Architecture and consulting roles pay comparably at senior levels but require a longer track record. The premium exists because these jobs combine scarce skills — retrieval design, evaluation, cost control — with expensive failure modes. Entry bars are portfolio-driven rather than credential-driven, which is genuinely good news for career switchers who build in public [VERIFY: source, month/year]."],
      ["Do AI certifications actually increase salary?", "Rarely on their own. In four years of interviewing I have never made an offer decision on a certificate; I have made many on a project defence. Certificates help in two narrow cases: clearing an HR filter that literally requires one, and internal promotion cases where a panel needs documentation. Otherwise the certificate is a by-product and the portfolio is the product. If a program's main selling point is the logo on the certificate, it is competing on the axis that matters least in a technical loop."],
      ["AI vs data science — which pays more?", "At the same experience level, AI/GenAI engineering roles currently sit above generalist data science in most Indian markets, because production ownership and scarcity both price in [VERIFY: source, month/year]. But the comparison is unstable: a senior data scientist driving business decisions in a product company can out-earn a junior AI engineer easily. Choose on the work you want to do daily — model building and analysis versus systems, retrieval and deployment — then optimise the band within that track."],
      ["Can a fresher get a high salary after an online AI course?", "A fresher can enter the market, but premium bands are unusual at zero experience regardless of course. Realistically, the strong outcome for a fresher is a first role that pays an entry band and gives production exposure, followed by a much larger jump at the 18–30 month mark. What separates freshers who get interviews from those who don't, in the funnels I've seen, is one deployed, original project with an honest evaluation section — not a longer certificate list."],
      ["How long after finishing a course does a salary jump take?", "Plan for three to six months after finishing, not zero. The pattern I observe repeatedly: one to two months polishing projects and rehearsing defence, one to three months of targeted applications and loops, then notice period. Switchers from non-tech backgrounds often need longer. Anyone promising an offer inside weeks of completion is describing an outlier as if it were the median."],
      ["Do employers pay more for GenAI and agent skills?", "Yes, at present, and the premium is concentrated where the skill is genuinely scarce — production RAG with evaluation, fine-tuning with a reason, and agent systems that fail gracefully. Prompting alone is now baseline literacy and carries no premium. That premium is also unstable: skills reprice every few quarters as tooling matures, which is why this page marks volatile figures rather than freezing them [VERIFY: source, month/year]."],
      ["What decides my salary more — course brand or portfolio?", "Portfolio, in every loop I have run. Brand can get your résumé opened; only demonstrated capability survives the technical rounds where the offer band is actually set. The one exception is HR-filtered environments — some large enterprises and promotion panels weight the credential formally. Know which environment you are targeting, because that determines whether you should buy a credential or buy depth."],
      ["Are course placement and salary statistics reliable?", "Treat them as unreliable until three things are disclosed: the denominator, the median (not just the highest), and the definition of a qualifying placement. Ask in writing and keep the reply. Then verify independently: search LinkedIn for alumni of that program who now hold genuine AI titles, and check whether the roles match the outcome list. The gap between the banner and that search result is the honest measure of the program's placement claim."],
    ],
  },
  {
    title: "Choosing & comparing",
    items: [
      ["Which is the best AI course with high salary potential overall?", "Under this page's weighting — salary-relevant capability gained per rupee and per hour, in a format a working Indian learner can finish — LogicMojo ranks first, with Scaler first for placement infrastructure and upGrad or Great Learning first where a university credential is the actual requirement. There is no single best course; there is a best fit for your target role, budget, hours and discipline. Re-weight the methodology table for your own priorities and the winner may legitimately change."],
      ["LogicMojo vs Scaler — which for salary outcomes?", "Buy LogicMojo if you want 2026-stack depth (production RAG, fine-tuning, agents, MCP, MLOps) at a mid-band price in a live IST format. Buy Scaler if the binding constraint is access — partner network, structured mock interviews and referrals — and you can commit 15+ hours a week and a multi-year EMI. Scaler's DSA and system-design weighting maps well to product-company loops; its GenAI depth trails specialists. Both are defensible purchases for different constraints."],
      ["University program or bootcamp for a higher salary?", "Bootcamps generally build more hiring-relevant capability per month; university-credentialed programs clear formal filters and support promotion cases. If your employer's promotion criteria mention a qualification, the credential is doing real financial work. If you are switching into a technical AI role at a product company, depth and portfolio move the offer. Choose the mechanism that actually operates in the environment you are targeting."],
      ["Live vs self-paced — which produces better outcomes?", "Live cohorts convert more reliably for most people because completion, not information, is the bottleneck. Self-paced wins for disciplined learners with unpredictable schedules — and loses badly for everyone else; public completion rates for self-paced online courses are low. Be honest about your own track record: if you have started and stopped before, you are buying accountability, and that is only available live."],
      ["How do I verify a course's placement and salary claims before paying?", "Five questions in writing: what is the denominator of that percentage, what disqualifies a learner from it, what is the median (not highest) outcome, which specific companies hired learners in the last two batches, and who teaches my batch. Then do the LinkedIn check — ten alumni profiles, sorted by recency. Ten minutes of that work is worth more than any review-site rating, and the quality of the written reply is itself the signal."],
      ["How current does a 2026 AI curriculum need to be?", "Current enough to include production RAG with evaluation, agent frameworks and MCP, parameter-efficient fine-tuning, and LLM observability. If a syllabus page carries no revision date, assume it is stale — in AI, undated means outdated. Ask when each advanced module was last rewritten and who maintains it. A provider that refreshes continuously will answer immediately; one that refreshes annually will not."],
      ["Short certification or long PG program?", "Short certifications work when you already have foundations and need one specific capability, such as RAG or MLOps. Long PG programs work when you need sequencing, accountability and a credential — but they also carry the highest dropout risk because they demand sustained hours for a year or more. A useful middle path is a focused six-month specialist program plus self-directed depth afterwards, which is cheaper on both money and hours."],
      ["Can I do two courses in parallel?", "Usually a mistake. Two programs halve the hours available to each and typically produce two unfinished syllabi rather than one portfolio. The exception that works is one paid structured program plus free reference material used on demand — official docs, a Hugging Face chapter, one Kaggle dataset. Sequence, don't stack: finish one thing you can defend before starting the next."],
    ],
  },
  {
    title: "Fees, EMI & ROI",
    items: [
      ["How much does a good AI course cost in India?", "Structured, current, mentor-led programs land roughly in the ₹40,000–₹1,20,000 band; university-credentialed premium programs run ₹1,20,000–₹2,50,000; placement-infrastructure bootcamps sit above that; and low-cost structured entry programs run ₹5,000–₹40,000 [VERIFY: provider pages, month/year]. Price correlates with brand, credential and placement operation far more strongly than with curriculum depth, which is why the price-band table on this page exists."],
      ["Are expensive AI courses better for salary outcomes?", "Not automatically. Higher fees usually buy brand recognition, a credential, or a placement operation — all legitimate purchases — rather than a higher capability ceiling. I have reviewed ₹2L syllabi thinner on production RAG and MLOps than programs at a third of the price. Decide which of the three things you are buying, then check whether the fee is priced fairly for that specific thing."],
      ["Is no-cost EMI genuinely free?", "No-cost EMI usually means the interest is discounted into the sticker price and financed by a third-party lender, with your credit score attached. Read the lender agreement, the processing fee, the foreclosure terms and the late-payment consequences before you read the brochure. It is a loan. That is not a reason to avoid it — it is a reason to know exactly what you signed."],
      ["What happens to my EMI if I stop attending?", "It continues. Withdrawing from a course does not usually cancel the loan, and most refund windows close before the syllabus gets genuinely difficult. This is the mechanism behind the dropout scenario in the ROI section: no capability, no portfolio, and 18–24 months of debits. Before enrolling, ask for the refund policy and the cancellation process in writing, and check whether either is tied to attendance thresholds."],
      ["How do I calculate the payback period on a course fee?", "Divide the total cash out — fee plus interest — by your realistic monthly salary delta, then multiply by your honest probability of completing and converting. If a ₹2,00,000 program has a 50% chance of producing a delta for you, price it as a ₹4,00,000 decision. Add the hours: 10 a week for six months is around 260 hours. That arithmetic changes most people's shortlist more than any ranking does."],
      ["Are free AI courses enough to get a high-paying job?", "They are enough to build the knowledge; they are rarely enough to build the habit. The free stack — DeepLearning.AI, Fast.ai, Hugging Face, Kaggle, NPTEL and official docs — matches paid content. What it cannot supply is sequence, code review, deadlines and interview-defence practice. Learners who can self-supply those get hired from free resources regularly, and they are a minority. Know honestly which group you are in."],
    ],
  },
  {
    title: "Eligibility & effort",
    items: [
      ["Can I get a high-paying AI job without a coding background?", "You can enter the field, but premium engineering bands require code — there is no route around it. Realistic non-coding-origin paths are AI-augmented analyst roles, AI product management and AI-adjacent domain roles, which pay well without demanding production engineering. If your target is GenAI engineering, plan four to six months of genuine Python and data work before the AI curriculum starts, and choose a program with prerequisite onboarding."],
      ["Do I need maths for high-paying AI roles?", "You need working intuition, not a research degree: linear algebra, probability, statistics and the logic of gradient descent, at the level where you can explain why a metric was chosen and what a model is optimising. Interviewers probe judgement, not proofs. Research and applied-science roles are the exception and genuinely require depth. For engineering roles, evaluation literacy matters more than derivations."],
      ["Can I do this while working full time?", "Yes — most people in AI roles in India did exactly that. It takes 10–15 protected hours a week for six to twelve months, evening and weekend batches in IST, and a tolerance for slow weeks. The failure mode is not intelligence, it is calendar collisions with release cycles. Choose a program with recordings, structured catch-up and batch deferral, and test your hours for four weeks before paying."],
      ["What's the minimum weekly commitment for real results?", "Below six hours a week, buy nothing premium — build foundations cheaply until your hours exist. Six to ten hours supports a steady, longer timeline. Ten to fifteen is where I see people finish a full program with a deployed capstone in a normal timeframe. Fifteen-plus accelerates it but is hard to sustain for a year alongside a demanding job; consistency beats intensity across every mentee cohort I've tracked."],
      ["Can a non-IT graduate reach premium AI pay bands?", "Yes, and I have mentored people who did — but the timeline is longer and the first role is usually a bridge rather than the destination. The pattern that works: build genuine engineering fundamentals, secure an AI-adjacent role that gives production exposure, then convert that experience into an engineering band at the 18–30 month mark. Domain expertise from your original field is an asset here, not a liability."],
      ["Is it too late to start AI in 2026?", "No — the field is early enough that the scarce profile is still someone who can build, evaluate and deploy, and that profile is created by work rather than tenure. What has changed is that shallow exposure no longer clears interviews the way it did in 2023. Start where the market is now: retrieval, evaluation, agents and deployment, with one original project you can defend three questions deep."],
    ],
  },
];

export function SectionFAQsFull() {
  return (
    <Section id="faq" eyebrow="Section 13 · FAQs" title="Frequently Asked Questions">
      <p>
        Thirty questions, each answered directly in the first sentence so the answer stands alone.
        Every salary reference is role-attributed, banded and marked for verification.
      </p>
      <div className="mt-6 space-y-10">
        {faqGroups.map((g) => (
          <div key={g.title}>
            <H3 id={`faq-${g.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>{g.title}</H3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {g.items.map(([q, a], i) => (
                <Reveal as="div" key={q}>
                  <details className="card-lift group h-full rounded-2xl border border-border bg-card p-5 shadow-card open:border-accent/40">
                    <summary className="flex cursor-pointer list-none items-start gap-3 font-display text-lg marker:hidden">
                      <span className="mt-0.5 font-mono text-xs text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {q}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------- SECTION 14 — final verdict */

export function SectionVerdict() {
  return (
    <Section
      id="verdict"
      eyebrow="Section 14 · Verdict"
      title="Final Verdict — The Best AI Course for High Salary Potential in 2026"
    >
      <p>
        If you want the shortest answer: <strong>LogicMojo</strong> for the deepest 2026 stack per
        rupee and per hour in a live format a working professional can finish;{" "}
        <strong>Scaler</strong> if what you are actually buying is placement infrastructure and you
        can fund and survive it; <strong>upGrad or Great Learning</strong> if a university credential
        is the mechanism that moves money in your organisation.
      </p>
      <p>
        Beyond that, the right answer genuinely depends on four variables only you can supply: the
        role you are targeting, the money you can lose without pain, the hours you can protect every
        week for six months, and your own honest completion history. Re-weight the methodology table
        for those and the ranking will reorder — that is a feature of an open rubric, not a flaw.
      </p>
      <p>
        The core insight, once more, because it is worth more than any ranking:{" "}
        <strong>completion and portfolio determine salary outcomes far more than course choice — but
        course choice heavily determines completion.</strong> That is the whole reason format,
        mentorship and cohort accountability are weighted so heavily on this page.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          "Take the course finder quiz and note the alternative, not just the winner.",
          "Audit any syllabus you are considering against the premium-skills table in Section 3.",
          "Ask the five placement-claim questions in writing before any call.",
          "Block 10 hours a week in your calendar for four weeks — before you pay anything.",
        ].map((s) => (
          <div key={s} className="rounded-2xl border border-border bg-card p-4 text-sm">
            <Pill>Next action</Pill>
            <p className="mt-2 text-muted-foreground">{s}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Button size="lg" className="h-12 px-6 text-base">
          Explore LogicMojo&apos;s AI Course — Full Curriculum, Live Batches &amp; Project Portfolio →
        </Button>
      </div>
    </Section>
  );
}
