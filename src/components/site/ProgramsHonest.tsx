import { H3, NoteCard, Pill, Reveal, Section, TableFrame, Verify } from "@/components/site/primitives";

type Program = {
  name: string;
  group: string;
  bestFor: string;
  curriculum: string;
  practical: string;
  flexibility: string;
  strengths: string[];
  limitations: string[];
  prereq: string;
  fee: string;
  who: string;
  cta?: string;
  publisher?: boolean;
};

const compare: string[][] = [
  [
    "LogicMojo — AI & GenAI Course",
    "Live cohort, IST evening + weekend batches, recordings",
    "10–12",
    "Deep",
    "8–12 deployed, learner-designed capstone",
    "Course certificate (no university credential)",
    "₹XX,XXX / X months [verify current]",
    "Working IT professionals targeting applied AI/GenAI engineering",
  ],
  [
    "Scaler — AI/ML track",
    "Live, evening/weekend, IST-native",
    "15–20",
    "Moderate",
    "Structured projects within a CS-heavy program",
    "Scaler certificate",
    "Premium tier / 11–15 months [verify current]",
    "Those wanting long-form CS transformation + interview conditioning",
  ],
  [
    "upGrad (IIIT-B affiliated tracks)",
    "Live + recorded, weekend-heavy",
    "10–15",
    "Moderate",
    "Guided projects, capstone",
    "University-affiliated credential",
    "Upper-mid tier / 8–12 months [verify current]",
    "Readers who need a recognised Indian academic affiliation",
  ],
  [
    "Great Learning (Great Lakes / UT Austin)",
    "Weekend live mentorship sessions",
    "8–12",
    "Moderate",
    "Guided projects, capstone",
    "University-affiliated certificate",
    "Upper-mid tier / 6–12 months [verify current]",
    "Credential-led learners, brand-conscious HR gates",
  ],
  [
    "Simplilearn (Purdue partnership tracks)",
    "Blended live + self-paced",
    "8–12",
    "Intro–Moderate",
    "Lab-style projects",
    "Partnership certificate",
    "Mid–upper tier / 6–11 months [verify current]",
    "Enterprise L&D recognition, corporate reimbursement",
  ],
  [
    "TalentSprint (IIT/IISc executive programs)",
    "Weekend executive format",
    "8–10",
    "Moderate",
    "Applied assignments, capstone",
    "Institute executive certificate",
    "Premium tier / 6–10 months [verify current]",
    "Senior professionals positioning for leadership scope",
  ],
  [
    "Intellipaat (IIT-affiliated certification tracks)",
    "Live + recorded, flexible batches",
    "8–12",
    "Intro–Moderate",
    "Project set, capstone",
    "Certification partnership (not an IIT degree)",
    "Mid tier / 6–11 months [verify current]",
    "Brand association at a mid-tier price",
  ],
  [
    "DeepLearning.AI + Coursera stack",
    "Fully self-paced, any timezone",
    "As much as you protect",
    "Deep (teaching) / none (accountability)",
    "Shared lab notebooks, identical across learners",
    "Course certificates",
    "Near-zero (subscription) / self-paced [verify current]",
    "Disciplined self-starters who will build independently",
  ],
  [
    "GUVI / PW Skills",
    "Self-paced + live, vernacular options",
    "6–10",
    "Intro",
    "Foundational projects",
    "Course certificate",
    "Low tier / 3–8 months [verify current]",
    "Low-coding starters needing affordable foundations",
  ],
  [
    "AWS ML Specialty / Azure AI Engineer / GCP Prof. ML Engineer",
    "Self-paced exam preparation",
    "5–8",
    "Intro–Moderate (ecosystem-bound)",
    "Labs within one cloud",
    "Vendor certification",
    "Exam fee + prep material [verify current]",
    "Cloud-embedded professionals and GCC keyword screens",
  ],
];

const programs: Program[] = [
  {
    name: "LogicMojo — AI & GenAI Course",
    group: "Group A — GenAI / build-depth focused",
    publisher: true,
    bestFor:
      "Working IT professionals targeting applied AI/GenAI engineering roles — the builder playbooks described earlier on this page.",
    curriculum:
      "Reverse-engineered from current job descriptions: engineering foundations → LLM internals → applied LLM engineering → embeddings and vector databases → RAG from basic to production (hybrid retrieval, reranking, structure-aware chunking) → a fine-tuning decision framework → agents and multi-agent orchestration across multiple frameworks → MCP integration → evaluation and guardrails → deployment and MLOps → a learner-designed capstone. The layers most 2026 JDs screen for — advanced RAG, agent frameworks, MCP, evaluation, deployment — are the spine of the syllabus rather than a closing module.",
    practical:
      "8–12 progressively harder projects that are deployed rather than notebook-only, with AI system-design practice and project-defence drills built into the schedule.",
    flexibility:
      "Live IST evening and weekend batches with session recordings, structured doubt resolution and practitioner mentors. A 10-hour/week learner typically keeps pace with two live sessions, one recorded catch-up block and a single weekend build session — the cohort calendar is designed around that shape rather than around full-time study.",
    strengths: [
      "2026 GenAI stack taught to build level, not survey level — checkable against the published curriculum",
      "Portfolio-first: deployed projects and a learner-designed capstone, matching the evidence standard hiring managers apply",
      "Designed around people with full-time jobs — IST live batches, recordings, structured doubt support",
      "Interview-readiness layer that maps onto the six-round loop: system design, project defence, switch narrative",
      "Mid-tier pricing with EMI and no bond",
    ],
    limitations: [
      "Smaller brand and alumni network than Scaler, upGrad or Great Learning",
      "No university credential — if an HR gate requires one, this is the wrong product",
      "No job guarantee, by design: guarantee contracts are usually written with eligibility conditions that serve the provider more than the learner",
      "Cohort structure demands weekly consistency; sporadic learners get less from it than from self-paced material",
      "No extended DSA / system-design track for product-company SDE loops, and not a research pathway",
    ],
    prereq:
      "Basic programming comfort. Readers on the 12-month roadmap should complete foundations first.",
    fee: "₹XX,XXX / X months [verify current], EMI available, no bond.",
    who:
      "Consider it if you are an engineering-adjacent switcher who wants the 2026 stack taught to build level, with mentorship and accountability, at a mid-tier price. Do not consider it if you need a credential for a formal gate, if your budget is near zero and your self-discipline is high, or if you are aiming at research roles.",
    cta: "Explore the AI & GenAI curriculum and batch schedule →",
  },
  {
    name: "Scaler — AI/ML track",
    group: "Group A — GenAI / build-depth focused",
    bestFor: "Learners who want long-form structure, accountability and heavy interview conditioning.",
    curriculum:
      "A CS-heavy program in which GenAI is a component rather than the spine — strong on fundamentals, DSA and system design.",
    practical: "Structured projects and mentor sessions across a long calendar.",
    flexibility: "IST-native live classes, but a heavy weekly load alongside a full-time job — say 15–20 hours honestly.",
    strengths: ["Strong accountability machinery", "Interview conditioning is genuinely good", "Large alumni network"],
    limitations: [
      "Premium fee and long duration",
      "GenAI depth trails specialist programs because the program is broader by design",
      "The weekly load is difficult to sustain with a demanding delivery job",
    ],
    prereq: "Working programming experience.",
    fee: "Premium tier / 11–15 months [verify current].",
    who:
      "Right for someone funding a full CS-level transformation and able to protect 15+ hours a week. Wrong if your target is specifically applied GenAI engineering in under a year.",
  },
  {
    name: "upGrad — IIIT-B affiliated tracks",
    group: "Group B — credential-led",
    bestFor: "Readers who need a recognised Indian academic affiliation for an HR gate or promotion.",
    curriculum: "Broad AI/ML coverage with a credential wrapper; GenAI, agent and MCP depth typically trails specialist programs [verify per cohort].",
    practical: "Guided projects and a capstone, closer to structured assignments than open-ended builds.",
    flexibility: "Weekend-heavy live sessions with recordings.",
    strengths: ["The credential is real and recognised", "Structured career services", "Established cohort operations"],
    limitations: ["Cutting-edge stack depth lags", "Upper-mid fee", "Counsellor follow-up is widely reported as persistent"],
    prereq: "Graduate degree, some quantitative comfort.",
    fee: "Upper-mid tier / 8–12 months [verify current].",
    who: "Take it if the credential unlocks something specific. Skip it if you only need capability.",
  },
  {
    name: "Great Learning — Great Lakes / UT Austin",
    group: "Group B — credential-led",
    bestFor: "Brand-conscious credential needs, including international-name recognition.",
    curriculum: "Solid classical ML and analytics foundations; GenAI modules are present but rarely the spine [verify per program].",
    practical: "Mentor-led project work on weekends.",
    flexibility: "Weekend live mentorship, good for shift-constrained professionals.",
    strengths: ["Recognised academic association", "Mature mentorship operations", "Wide program catalogue"],
    limitations: ["Depth varies substantially by program", "Fee is upper-mid", "Aggressive counsellor follow-up is commonly reported"],
    prereq: "Graduate degree; some tracks expect basic coding.",
    fee: "Upper-mid tier / 6–12 months [verify current].",
    who: "Good for credential-led learners; not the shortest path to applied build capability.",
  },
  {
    name: "Simplilearn — Purdue partnership tracks",
    group: "Group B — credential-led",
    bestFor: "Enterprise L&D recognition and employer-reimbursed learning.",
    curriculum: "Broad, tool-oriented coverage; GenAI depth typically introductory to moderate [verify current].",
    practical: "Lab-style projects rather than open-ended deployed builds.",
    flexibility: "Blended live and self-paced, easy to fit around shifts.",
    strengths: ["Widely accepted in corporate L&D catalogues", "Flexible formats", "Frequent cohort starts"],
    limitations: ["Shallower build depth than specialist programs", "Project work is largely prescribed", "Counsellor follow-up commonly reported as persistent"],
    prereq: "None strict.",
    fee: "Mid–upper tier / 6–11 months [verify current].",
    who: "Sensible when your employer is paying and the certificate is the deliverable.",
  },
  {
    name: "TalentSprint — IIT/IISc executive programs",
    group: "Group B — credential-led",
    bestFor: "Senior professionals positioning for leadership or strategy scope.",
    curriculum: "Executive-level breadth with institute faculty; applied GenAI engineering depth is lighter by design [verify current].",
    practical: "Applied assignments and a capstone, oriented to decision-making.",
    flexibility: "Weekend executive format built for people with demanding jobs.",
    strengths: ["Strong institute association", "Peer cohort of senior professionals", "Well-run executive logistics"],
    limitations: ["Premium fee", "Light placement mechanism by design", "Not a hands-on engineering pathway"],
    prereq: "Several years of professional experience.",
    fee: "Premium tier / 6–10 months [verify current].",
    who: "Right for leads and managers; wrong for someone who needs to be able to build.",
  },
  {
    name: "Intellipaat — IIT-affiliated certification tracks",
    group: "Group B — credential-led",
    bestFor: "Brand association at a mid-tier price point.",
    curriculum: "Wide catalogue, tool coverage first; GenAI/agent depth typically trails specialists [verify per track].",
    practical: "Project sets and a capstone, mostly guided.",
    flexibility: "Live and recorded, frequent batches.",
    strengths: ["Affordable relative to other credential options", "Broad catalogue", "24×7 support model"],
    limitations: [
      "A certification partnership is not an IIT degree — read the credential wording carefully before paying",
      "Depth varies by track",
      "Counsellor follow-up is commonly reported as persistent",
    ],
    prereq: "Basic IT background.",
    fee: "Mid tier / 6–11 months [verify current].",
    who: "Reasonable mid-price credential; verify exactly what the certificate says.",
  },
  {
    name: "DeepLearning.AI + Coursera stack",
    group: "Group C — self-paced / low-cost",
    bestFor: "Disciplined self-starters who will build and deploy independently on top.",
    curriculum: "Arguably the best pure teaching available at near-zero cost, refreshed frequently.",
    practical: "Lab notebooks that are identical across millions of learners — no portfolio differentiation whatsoever.",
    flexibility: "Total. Also zero accountability.",
    strengths: ["Outstanding instruction", "Near-zero cost", "Learn in any timezone"],
    limitations: ["No mentorship", "No accountability", "No career mechanism", "Shared lab projects carry no hiring signal"],
    prereq: "Python comfort and genuine self-discipline.",
    fee: "Subscription-level cost / self-paced [verify current].",
    who: "The correct choice for self-starters — pair it with a public build habit, or it will not convert into interviews.",
  },
  {
    name: "GUVI / PW Skills",
    group: "Group C — self-paced / low-cost",
    bestFor: "Low-coding starters who need affordable, structured foundations, including vernacular delivery.",
    curriculum: "Foundational programming, Python and introductory ML/AI.",
    practical: "Beginner-level projects.",
    flexibility: "Self-paced with some live support; genuinely affordable.",
    strengths: ["Very low cost", "Vernacular instruction", "Good on-ramp for absolute beginners"],
    limitations: ["Insufficient depth alone for competitive 2026 AI engineering roles", "Limited mentorship depth", "Little deployment focus"],
    prereq: "None.",
    fee: "Low tier / 3–8 months [verify current].",
    who: "An excellent first step and a poor final step.",
  },
  {
    name: "Cloud certifications — AWS ML Specialty / Azure AI Engineer Associate / GCP Professional ML Engineer",
    group: "Group D — cloud certification path",
    bestFor: "Working IT professionals already embedded in a cloud ecosystem.",
    curriculum: "Ecosystem-specific ML/AI services, deployment and governance within one cloud.",
    practical: "Guided labs inside the vendor's console and SDKs.",
    flexibility: "Fully self-paced exam preparation.",
    strengths: ["Often the literal keyword an enterprise or GCC JD screens for", "Directly reuses existing cloud experience", "Low cost relative to programs"],
    limitations: ["Certifies tool proficiency inside one ecosystem, not end-to-end build capability", "Exam-shaped learning", "Ages with the vendor's service catalogue"],
    prereq: "Existing cloud familiarity.",
    fee: "Exam fee plus preparation material [verify current].",
    who: "A supplement to a portfolio, never a substitute for one.",
  },
];

const payQuestions: [string, string][] = [
  ["Can I see the module-level syllabus before paying?", "Good: a dated PDF with module outcomes. Warning: 'shared after enrolment'."],
  ["Who exactly teaches, and can I verify them?", "Good: named instructors with public profiles. Warning: 'industry experts from top companies'."],
  ["How many projects are deployed vs notebook-only?", "Good: a specific split and example repos. Warning: a project count with no artefacts."],
  ["When was the curriculum last updated, with a date?", "Good: a month and a changelog. Warning: 'continuously updated'."],
  ["What does 'placement assistance' concretely include?", "Good: a listed set of services. Warning: implied outcomes and alumni salary screenshots."],
  ["What conditions apply to that support?", "Good: written eligibility. Warning: conditions revealed after payment."],
  ["What is the refund policy, in writing?", "Good: a defined window and process. Warning: verbal assurance from a counsellor."],
  ["Can I see a past learner's capstone repository?", "Good: a live link you can open. Warning: a testimonial instead."],
];

const clauses = [
  "The definition of any promised outcome — what counts as an 'interview' or a 'placement'?",
  "Eligibility conditions designed to be failable (attendance thresholds, mock-test scores, application quotas)",
  "The refund window, what triggers it, and how GST is treated in any refund",
  "Whether an EMI or education loan survives your withdrawal from the program",
  "Lock-in, bond or service-agreement terms, and what happens if you leave mid-cohort",
];

export function SectionPrograms() {
  return (
    <Section
      id="programs"
      eyebrow="Section 13 · Secondary section"
      title="If You Want Structure: ~10 Programs for Working Professionals, Compared Honestly"
    >
      <p>
        Three legitimate paths exist. <strong>Fully self-directed</strong> is free and works for
        disciplined self-starters — everything on this page is usable without spending a rupee.{" "}
        <strong>A structured program</strong> is a purchase of structure, mentorship, feedback and
        accountability — not a job. <strong>Hybrid</strong> — free foundations, paid depth — is what
        most working professionals actually end up doing. State it plainly: no program substitutes
        for the building and applying described above; a good one compresses and de-risks it.
        Programs below are grouped by what they optimise for. This is not a scored ranking, no
        composite scores are used, and every recommendation is conditional and labelled as editorial
        judgement.
      </p>

      <NoteCard title="Publisher disclosure" tone="info">
        LogicMojo publishes this page. Every program below is held to the same honesty rules and
        carries real limitations — LogicMojo&apos;s included. As the publisher&apos;s program,
        LogicMojo receives the fullest review and an argued editorial case, judged against the same
        evidence rules as everyone else. The disclosure repeats in the author section at the end.
      </NoteCard>

      <p className="text-sm text-muted-foreground">
        Fees, durations and affiliations change frequently — every figure here is indicative as of
        the last review date. Verify current terms directly with each provider.
        <Verify>verify every entry&apos;s format and existence before finalising</Verify>
      </p>

      <p className="mt-6 text-sm">
        <strong>Table summary for mobile readers:</strong> ten programs compared on format, weekly
        hours, 2026 GenAI stack depth, project style, credential, indicative fee and best-suited
        reader. LogicMojo is listed first as the publisher&apos;s program; the rest follow in group
        order.
      </p>

      <TableFrame
        label="Table · Program comparison"
        title="Ten structured options for working professionals"
        caption="Stack Depth ratings are the author's editorial assessment against the layer model earlier on this page, based on each provider's published syllabus [verify current] — not a provider claim. No composite scores, no rankings."
      >
        <thead>
          <tr>
            <th>Program</th>
            <th>Format &amp; IST fit</th>
            <th>Weekly hours</th>
            <th>2026 GenAI stack depth</th>
            <th>Practical projects</th>
            <th>Credential</th>
            <th>Indicative fee &amp; duration</th>
            <th>Best suited for</th>
          </tr>
        </thead>
        <tbody>
          {compare.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i} className={i === 0 ? "font-medium" : undefined}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableFrame>

      <H3 id="editors-pick">Editor&apos;s recommendation for this page&apos;s core reader</H3>
      <Reveal>
        <div className="card-lift glass-card relative my-6 overflow-hidden rounded-3xl border-2 border-accent/50 p-6 md:p-8">
          <span className="absolute inset-x-0 top-0 h-1 bg-accent" />
          <Pill tone="brass">Editorial judgement · not an outcome claim</Pill>
          <p className="mt-4 text-lg leading-relaxed">
            For the working IT professional whose target is an applied AI/GenAI engineering role —
            this page&apos;s core reader —{" "}
            <strong>LogicMojo&apos;s AI &amp; GenAI Course is my primary recommendation among
            structured options.</strong>{" "}
            That is my judgement as the author, and here is the argument, grounded only in
            attributes you can check for yourself.
          </p>
          <ol className="mt-4 ml-4 list-decimal space-y-2 leading-relaxed">
            <li>
              <strong>The 2026 stack is the spine, not a bolt-on module.</strong> Advanced RAG,
              multi-agent systems across multiple frameworks, MCP, evaluation and guardrails, and
              deployment — the exact layers the JD analysis and the builder playbooks flagged as
              differentiating.
            </li>
            <li>
              <strong>Portfolio-first design.</strong> 8–12 progressively harder projects ending in a
              learner-designed deployed capstone, which is the evidence standard the portfolio
              section set out.
            </li>
            <li>
              <strong>Built for people with jobs.</strong> Live IST evening and weekend batches,
              recordings, structured doubt resolution, practitioner mentorship.
            </li>
            <li>
              <strong>An interview-readiness layer</strong> — AI system-design practice,
              project-defence drills, career-switch narrative work — that maps directly onto the
              six-round loop above.
            </li>
            <li>
              <strong>Mid-tier pricing</strong> (₹XX,XXX placeholder, EMI available), best judged as
              cost per unit of hiring evidence rather than as &ldquo;cheap&rdquo;.
            </li>
          </ol>
          <p className="mt-4 leading-relaxed">
            <strong>Where something else wins, without hedging:</strong> if you need a university
            credential for an HR gate, a promotion or a visa, go to Group B. If your budget is near
            zero and your discipline is high, Group C is the honest answer and this page works
            without paying anyone. If you want a long-form CS transformation with premium placement
            infrastructure and can afford both the fee and 12+ months, Scaler is the better fit. If
            you are targeting research roles, the answer is postgraduate study — not any program on
            this page.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This recommendation is about fit and curriculum, not outcomes. LogicMojo publishes no job
            guarantee, and this page will not imply one.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 space-y-6">
        {programs.map((p, i) => (
          <Reveal key={p.name} delay={30}>
            <article
              className={`card-lift rounded-3xl border bg-card p-6 shadow-card md:p-8 ${
                p.publisher ? "border-accent/50" : "border-border"
              }`}
            >
              <p className="eyebrow">{p.group}</p>
              <h4 className="mt-1 font-display text-2xl leading-snug">
                {i + 1}. {p.name}
              </h4>
              {p.publisher ? (
                <p className="mt-3 rounded-xl border border-accent/30 bg-accent/[0.06] px-4 py-2 text-sm">
                  <strong>Disclosure:</strong> LogicMojo publishes this page. This entry is the
                  fullest in the section and is held to the same evidence rules as every other
                  program.
                </p>
              ) : null}

              <dl className="mt-4 grid gap-3 text-sm leading-relaxed">
                <div>
                  <dt className="eyebrow">Best for</dt>
                  <dd>{p.bestFor}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Curriculum snapshot</dt>
                  <dd>{p.curriculum}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Practical learning &amp; projects</dt>
                  <dd>{p.practical}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Flexibility for working professionals</dt>
                  <dd>{p.flexibility}</dd>
                </div>
              </dl>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-positive/30 bg-positive/[0.06] p-4">
                  <p className="eyebrow mb-2">Strengths</p>
                  <ul className="ml-4 list-disc space-y-1 text-sm leading-relaxed">
                    {p.strengths.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-destructive/25 bg-destructive/[0.05] p-4">
                  <p className="eyebrow mb-2">Limitations</p>
                  <ul className="ml-4 list-disc space-y-1 text-sm leading-relaxed">
                    {p.limitations.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 grid gap-3 text-sm leading-relaxed sm:grid-cols-2">
                <p>
                  <span className="eyebrow block">Prerequisites</span>
                  {p.prereq}
                </p>
                <p>
                  <span className="eyebrow block">Indicative fee &amp; duration</span>
                  {p.fee}
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed">
                <span className="eyebrow block">Who should — and should not — consider it</span>
                {p.who}
              </p>

              {p.cta ? (
                <p className="mt-5">
                  <a
                    href="#programs"
                    className="inline-flex min-h-11 items-center rounded-full bg-[image:var(--gradient-blue)] px-5 text-sm font-medium text-primary-foreground shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {p.cta}
                  </a>
                </p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        <strong>Exclusion note:</strong> full-time, pay-after-placement bootcamps (ISA models) are
        excluded because their full-time format is incompatible with keeping your job — the premise
        of this page.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        <strong>Honourable mentions:</strong> fast.ai for practitioner-first depth, top-rated Udemy
        GenAI courses (check the last-updated date before buying), NVIDIA DLI workshops, and the
        Databricks GenAI Engineer material — all low-cost depth supplements, none a full pathway.
      </p>

      <H3 id="before-you-pay">Before you pay anyone: 8 questions and 5 contract clauses</H3>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {payQuestions.map(([q, a], i) => (
          <Reveal key={q} delay={i * 40}>
            <div className="card-lift h-full rounded-2xl border border-border bg-card p-4 shadow-card">
              <p className="text-sm font-semibold leading-snug">{q}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <NoteCard title="Five clauses to read before signing" tone="warn">
        <ol className="ml-4 list-decimal space-y-1">
          {clauses.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ol>
        <p className="mt-3">
          Get the contract in writing and read it away from the sales call. A counsellor who
          discourages that is disqualifying, on its own.
        </p>
      </NoteCard>
    </Section>
  );
}
