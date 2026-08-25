import { FieldNote } from "@/components/site/EEAT";
import { Callout, H3, NoteCard, Pill, Reveal, Section, StatCard, TableFrame, Verify } from "@/components/site/primitives";

/* ------------------------------------------------------------------ */
/* Section 9 — Resume, LinkedIn, career-switch narrative               */
/* ------------------------------------------------------------------ */

const bulletRewrites: { role: string; before: string; after: string }[] = [
  {
    role: "QA / test automation",
    before: "Wrote and maintained Selenium regression suites for a retail web app.",
    after:
      "Built a 400-case regression harness and adapted the same pass/fail discipline into an LLM evaluation suite (faithfulness, answer relevance, refusal rate) scored on a 120-question golden set.",
  },
  {
    role: "Production support",
    before: "Handled L2 tickets and escalations for a payments platform, 24x7 rota.",
    after:
      "Owned incident triage on a high-volume payments platform; reused that runbook thinking to instrument a RAG service with latency, token-cost and retrieval-hit-rate dashboards plus alerting on degraded answers.",
  },
  {
    role: "Backend developer",
    before: "Developed REST APIs in Java Spring Boot for order management.",
    after:
      "Shipped production REST services under load; ported the same API design to a FastAPI retrieval service serving an agentic workflow, with streaming responses, request-level tracing and a cost ceiling per call.",
  },
  {
    role: "Data / ETL engineer",
    before: "Built nightly ETL jobs in Informatica and SQL for reporting.",
    after:
      "Designed idempotent batch pipelines over ~2 TB/month; reapplied that to a document ingestion pipeline — chunking, dedup, metadata enrichment, embedding refresh — that keeps a vector index current without full rebuilds.",
  },
];

export function SectionResume() {
  return (
    <Section
      id="positioning"
      eyebrow="Section 9 · Positioning"
      title="Positioning: How to Present 5 Years of IT + 6 Months of AI"
    >
      <FieldNote title={"Rewriting résumés I would actually shortlist"}>
        <p>
          I have screened AI CVs from both sides: as the interviewer skimming 60 profiles in an afternoon, and as a mentor rewriting them line by line. The single change that moved callbacks most in my mentee group was replacing tool lists with outcome sentences — "built a RAG assistant over 12k support tickets; cut retrieval errors from 31% to 9% with hybrid search and re-ranking" beats "LangChain, FAISS, OpenAI" every time, because it gives me something to interrogate.
        </p>
      </FieldNote>

      <p>
        A switcher's résumé is not a history document. It is an argument that your existing
        engineering judgement plus your new AI capability already clears the bar for the role you
        are applying to. The people reading it spend well under a minute on the first pass, so the
        argument has to be visible from the top third of page one.
      </p>

      <div className="my-8 grid gap-4 sm:grid-cols-3">
        <StatCard value="Top ⅓" label="Where the argument must live" note="Headline, 3-line summary, projects — before anyone scrolls." />
        <StatCard value="10 JDs" label="Your keyword source" note="Mirror literal strings from ten real target postings." delay={80} />
        <StatCard value="3 parts" label="The interview narrative" note="Continuity → trigger → evidence, rehearsed aloud." delay={160} />
      </div>

      <H3 id="resume-switchers">The résumé for switchers</H3>
      <p>
        Four structural changes do most of the work. First, the{" "}
        <strong>headline states the target role, not the past one</strong> — "GenAI / LLM Engineer"
        with your years of software experience underneath, never "Senior QA Analyst" at the top of
        an AI application. Second, a <strong>three-line summary</strong> that connects the two
        halves: what you have shipped in IT, what you have built in AI, what you are targeting.
        Third, for switchers the <strong>Projects section sits above or beside Experience</strong>,
        because the projects are the evidence and the experience is the context. Fourth, every
        experience bullet is reframed toward AI-relevant outcomes using the transfer map — same
        truth, different emphasis.
      </p>

      <TableFrame
        label="Table · Bullet rewrites"
        title="Four before → after rewrites from real IT profiles"
        caption="Nothing here invents work. Each rewrite keeps the original fact and adds the AI-relevant outcome that was always adjacent to it. Never claim a system you did not build."
      >
        <thead>
          <tr>
            <th>Profile</th>
            <th>Before</th>
            <th>After</th>
          </tr>
        </thead>
        <tbody>
          {bulletRewrites.map((b) => (
            <tr key={b.role}>
              <td className="whitespace-nowrap font-medium">{b.role}</td>
              <td className="text-muted-foreground">{b.before}</td>
              <td>{b.after}</td>
            </tr>
          ))}
        </tbody>
      </TableFrame>

      <H3 id="resume-keywords">Keyword alignment without stuffing</H3>
      <p>
        Recruiters search literal strings. "LangGraph" and "agent frameworks" are not the same
        query, and a résumé that only says the abstract version never surfaces. Open ten target job
        descriptions, list the exact tool and concept names that repeat across at least three of
        them, and make sure each one appears once, in a true sentence about something you actually
        built. That is alignment. Repeating "LangGraph" eleven times in white text is stuffing, and
        it fails the human read even when it passes the filter.
      </p>

      <NoteCard title="ATS myth-buster (80 seconds)" tone="warn">
        Most Indian hiring for AI roles does not run a mysterious AI that silently rejects you. In
        practice a recruiter runs a Boolean search on job titles and skills inside Naukri or
        LinkedIn Recruiter, then reads the shortlist manually. So: skip the graphics, columns and
        headshots that break parsing, submit a single-column PDF, use conventional section names,
        and put the real keywords in real sentences. There is no magic score to game and no
        "ATS-optimised template" worth paying for.
      </NoteCard>

      <H3 id="linkedin">LinkedIn</H3>
      <p>
        The headline formula that works for switchers is{" "}
        <strong>current strength → target direction</strong>, for example{" "}
        <em>"Backend Engineer → GenAI Systems | RAG, Agents, LLMOps"</em>. It is honest about where
        you are and unambiguous about where you are going, and it carries the exact keywords a
        recruiter searches. Rewrite the About section around the three-part narrative below rather
        than as a job history. Use Featured to carry live demos — a deployed app link outperforms a
        certificate image every time.
      </p>
      <ul>
        <li>
          <strong>Cadence:</strong> one project write-up or genuine learning post per fortnight is
          enough. Consistency beats volume, and nobody is scored on posting daily.
        </li>
        <li>
          <strong>Open to work:</strong> the recruiters-only setting is visible to LinkedIn Recruiter
          seat holders and does not show a photo frame to your network — the usual worry about your
          current employer seeing it. The public green frame gets more inbound and less privacy.
          Pick deliberately.
        </li>
        <li>
          <strong>Visibility mechanics:</strong> recruiter search weights the headline, the skills
          list and recent activity. Adding the target skills explicitly to the Skills section is a
          five-minute change with outsized effect.
        </li>
      </ul>

      <H3 id="narrative">The career-switch narrative (the interview version)</H3>
      <p>
        Every switcher gets asked some version of "why the change?" in round one and round six. The
        answer needs three parts, rehearsed until it runs in ninety seconds without notes:{" "}
        <strong>continuity</strong> (your past is an asset, not a detour),{" "}
        <strong>trigger</strong> (specific and professional — a project, a problem, a system you
        touched — never "AI is the future"), and <strong>evidence</strong> (what you built, what
        broke, what you learned).
      </p>

      <Callout tone="brass">
        <p className="not-italic">
          <Pill tone="brass">Template — adapt, do not copy</Pill>
        </p>
        <p className="mt-3 not-italic">
          "I have spent five years in test automation, mostly building regression suites for a
          retail platform — which means my instinct is to ask how you would know a system is wrong,
          before asking how to make it work. That is the continuity.{" "}
          <strong>The trigger</strong> was a support-chatbot pilot at work last year: it demoed
          beautifully and then failed on real tickets, and nobody on the project could tell me
          whether retrieval or the prompt was at fault, because there was no evaluation harness.
          That gap was recognisably mine to fill.{" "}
          <strong>So over the last seven months</strong>, evenings and weekends, I built three
          things: a document Q&amp;A service with hybrid retrieval and reranking, an eval harness
          over a 120-question golden set that scores faithfulness and refusal behaviour, and an
          agent that triages tickets and hands off to a human on low confidence. All three are
          deployed and public. What broke: my first version chunked by fixed token count and
          destroyed every table in the corpus — table extraction and structure-aware chunking fixed
          the retrieval quality. That failure is why I would ask about your document mix before
          proposing an architecture here."
        </p>
      </Callout>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 10 — Internal move vs external switch                       */
/* ------------------------------------------------------------------ */

const internalExternal: [string, string, string][] = [
  ["Speed to real AI work", "Faster — weeks to a few months once a pilot exists", "Slower to start, but the role is AI from day one"],
  ["Typical comp change (banded, typical)", "Flat to a modest in-band correction; large jumps are uncommon", "The larger jump when it lands; also where switcher discounts appear"],
  ["Risk level", "Low — you keep the job if it stalls", "Higher — notice period, probation, unfamiliar org"],
  ["Evidence bar", "Lower — your track record inside the org is part of the evidence", "Higher — portfolio and interviews carry everything"],
  ["Dependence on org politics", "High — sponsor, staffing, budget cycles", "Low — you are judged by strangers on artefacts"],
  ["Role purity (real AI vs AI-adjacent)", "Mixed — often part-time AI on top of your current work", "Usually purer, but check the JD for annotation-in-disguise"],
  ["Fallback if it fails", "Your current role, plus new AI experience on the CV", "Continue searching; nothing lost but time"],
];

export function SectionInternalExternal() {
  return (
    <Section
      id="internal-external"
      eyebrow="Section 10 · The decision"
      title="The Decision Nobody Writes About: Change Roles Inside, or Change Companies?"
    >
      <FieldNote title={"Two switchers, two very different routes"}>
        <p>
          A test-automation engineer I mentored moved internally in seven months by volunteering for an internal document-search pilot — lower risk, smaller hike, real production exposure. A support engineer with no internal AI work to attach to switched externally in eleven months for roughly double the increment, but interviewed through nine loops to get there. Both were right for their situation; the matrix below is the reasoning I walked them through.
        </p>
      </FieldNote>

      <p className="text-lg">
        Most transition advice assumes you are leaving. In practice the fastest route to your first
        line of paid AI experience is often the pilot already running two floors away.
      </p>

      <TableFrame
        label="Table · Internal vs external"
        title="Seven dimensions, compared honestly"
        caption="Comp figures are deliberately unnumbered here: the honest answer is banded and situational. Treat this table as a shape, not a forecast."
      >
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Internal move</th>
            <th>External switch</th>
          </tr>
        </thead>
        <tbody>
          {internalExternal.map(([d, i, e]) => (
            <tr key={d}>
              <td className="font-medium">{d}</td>
              <td>{i}</td>
              <td>{e}</td>
            </tr>
          ))}
        </tbody>
      </TableFrame>

      <NoteCard title="The default recommendation: run both tracks in parallel from month 3–4" tone="good">
        By month three or four you have enough capability to be useful on an internal pilot and
        enough portfolio to survive an external screen. Open both. The internal track is cheap to
        run — a manager conversation and a volunteered work-stream — and it manufactures the one
        thing your external applications lack: <strong>AI work with a company's name attached to
        it</strong>. Even when the internal move itself stalls on budget or headcount, six months of
        "evaluation and data prep on our GenAI support pilot" changes how external interviewers read
        your résumé. The reverse is also true: an external process in flight gives your internal
        conversation a quiet seriousness it otherwise lacks. Running one track only is the most
        common self-inflicted delay in this entire transition.
      </NoteCard>

      <H3 id="internal-playbook">The internal playbook</H3>
      <p>
        Start by finding where AI budget actually lives in your organisation, because interest
        without budget goes nowhere. In Indian IT there are usually three pools: client-funded AI
        pilots inside delivery accounts, internal automation and productivity programmes, and a
        central AI practice or centre of excellence — most services majors run a branded AI practice
        and an internal academy <Verify>verify current names before publishing</Verify>. Find out
        which of the three has a live project, and who staffs it.
      </p>
      <p>
        Then make your interest legible. The conversation with your manager should be framed around
        a business need, not an escape: "the client keeps asking about document automation, I have
        been building retrieval systems in my own time, I would like to take the evaluation piece."
        Managers block escapes and staff solutions.
      </p>
      <p>
        Volunteer for the unglamorous parts of a GenAI pilot — evaluation, data preparation,
        integration plumbing, prompt regression testing. Everyone wants the model work; nobody wants
        the eval harness, which is exactly why it is available and exactly what hiring managers
        later respect. That is the entry wedge. Alongside it, use the formal machinery: internal job
        boards, transfer policies and internal mobility windows are real, and GCCs in particular run
        structured internal mobility with published eligibility. Typical gates involve a minimum
        tenure in your current role and a clean last appraisal, so time your ask shortly after an
        appraisal cycle closes rather than in the middle of one.
      </p>
      <NoteCard title="The honest limits of the internal track" tone="warn">
        Internal moves are slower, they raise less, and they depend entirely on your organisation
        actually doing AI work. If, two to three months after you have asked clearly and offered to
        do the unglamorous parts, there is still no pilot, no budget and no named sponsor — the
        internal track is a dead end at this company. That is useful information, not a failure.
        Put your energy into the external track and stop waiting.
      </NoteCard>

      <H3 id="external-playbook">The external playbook — notice period and timing reality</H3>
      <p>
        The 60–90 day notice period is the single biggest practical friction in Indian switching,
        and it is handled with disclosure rather than cleverness. State your notice period early in
        the process — first recruiter call, not after the offer — so that timelines are planned
        around it instead of collapsing at the end. Where a company wants you sooner, buyout is a
        normal, negotiable line item: ask for it as part of the offer conversation, in writing,
        along with who pays and when. Time your application waves deliberately too: starting a
        process three months before appraisal or bonus vesting usually means walking away from
        money that a joining bonus may or may not cover.
      </p>
      <p>
        External switches price better but screen harder. Nobody at the new company has seen you
        work, so the portfolio, the system-design round and the project defence carry the entire
        argument. Expect the switcher discount to appear as a first number pitched against your
        years of experience rather than the role's band. The productive posture is to trade title
        flexibility for the right work — a slightly junior title on a team doing real retrieval,
        agents and deployment is worth far more in eighteen months than a senior title on an
        AI-adjacent team — and to negotiate the <strong>review timeline in writing</strong> ("role
        and compensation reviewed at six months against these deliverables") rather than fighting
        the first number to a standstill.
      </p>
      <NoteCard title="Non-negotiable" tone="warn">
        No dual employment, no overlapping payrolls, no absconding, no fake experience letters, no
        moonlighting in breach of your contract. Beyond the ethics, Indian employers increasingly
        cross-check PF and UAN records, and a discovered overlap ends the new job and the reference.
        Serve your notice.
      </NoteCard>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 11 — Job search and AI interviews                            */
/* ------------------------------------------------------------------ */

const channels: [string, string, string][] = [
  ["Referrals", "Consistently the strongest channel in tracked transitions", "Warm intro from an ex-colleague already in an AI team; send the project link, not the résumé, first"],
  ["LinkedIn", "High volume, high noise, good for inbound", "Recruiter search finds you if headline + skills match; apply within 48 hours of posting"],
  ["Naukri", "Still where most Indian services and GCC roles are sourced", "Keep the profile refreshed weekly — recency ranks in recruiter search"],
  ["Instahyre / Cutshort", "Curated, product-company leaning, lower volume", "Good signal-to-noise for mid-size product firms"],
  ["Wellfound", "Startups, earliest access to genuinely new AI work", "Expect broader scope, tighter cash, more ESOP paper"],
  ["Company career pages (GCCs)", "Slowest, but the roles are real and the process is structured", "Set alerts on 8–12 target GCCs rather than browsing"],
];

const interviewLoop: [string, string, string, string][] = [
  [
    "1 · Recruiter screen + résumé keyword match",
    "Role fit, notice period, comp expectation, whether your CV literally contains the JD's terms",
    "Have a 60-second version of the narrative and a band-based comp answer ready",
    "Leading with the old title; quoting a number before understanding the band",
  ],
  [
    "2 · Coding round",
    "Python fluency, data structures at a light level, string/JSON/API manipulation",
    "Two to three weeks of consistent Python practice; write code that runs, not pseudocode",
    "Rusty syntax after years in Java or in non-coding roles; freezing on basic list/dict work",
  ],
  [
    "3 · AI/ML and LLM fundamentals",
    "Conceptual command of embeddings, retrieval, context handling, fine-tuning trade-offs, evaluation",
    "Be able to explain each concept twice: once in one sentence, once with the trade-off",
    "Tutorial-level answers that name tools but cannot justify choices",
  ],
  [
    "4 · AI system design",
    "Whether you can shape an ambiguous system: requirements → retrieval/model choices → evaluation → cost/latency → failure modes",
    "Practise the five-step framework aloud on two prompts a week",
    "Jumping to a tool ('I'd use Pinecone') before clarifying scale, latency budget and quality bar",
  ],
  [
    "5 · Project deep-dive / defence",
    "Whether you actually built and understood the thing on your CV",
    "The 30-minute attack drill below; know your own numbers",
    "Cannot explain a decision they copied from a tutorial; no cost or latency figures",
  ],
  [
    "6 · Behavioural + career-switch narrative",
    "Coherence of the switch, collaboration, how you handle being wrong",
    "The Section 9 three-part narrative, plus two honest failure stories",
    "Apologising for the past career instead of using it as continuity",
  ],
];

const fundamentalsQuestions = [
  "What actually happens when you increase chunk size — and what breaks first?",
  "Why does cosine similarity sometimes return confidently wrong passages, and what do you add?",
  "When would you fine-tune instead of improving retrieval? Give the cost and the maintenance argument.",
  "How do you measure whether a RAG answer is faithful to its sources, without a human in the loop?",
  "What is the difference between a tool-calling loop and an agent, in engineering terms?",
  "How do you stop an agent from looping forever or spending unbounded tokens?",
  "Explain temperature, top-p and why deterministic evaluation runs matter.",
  "What are your guardrails against prompt injection when documents come from users?",
];

const attackQuestions = [
  "Your retrieval quality drops on tables — why, and what did you change?",
  "What does this cost at 100× today's load, per 1,000 queries?",
  "Why this vector database and not Postgres with pgvector?",
  "What breaks first if the corpus goes from 5,000 to 5 million documents?",
  "Show me a query where your system is confidently wrong. What did you do about it?",
  "Your eval set — who wrote it, and how do you know it is not overfitted to your own system?",
  "What is your p95 latency, and where is the time actually spent?",
  "How do you handle a document update — full re-index or incremental, and why?",
  "What happens when the model provider deprecates the version you built on?",
  "If I gave you one week to improve this, what would you fix and how would you prove it worked?",
];

export function SectionJobSearch() {
  return (
    <Section
      id="job-search"
      eyebrow="Section 11 · Search & loop"
      title="From Portfolio to Offer: The Search and the Loop"
    >
      <FieldNote title={"What I ask in the rounds I run"}>
        <p>
          In the GenAI loops I have run through 2025–26, the round that eliminates most candidates is not coding — it is the project defence. I pick one line off the CV and go three questions deep: why that chunk size, how you measured retrieval quality, what happens when the vector store returns nothing relevant. Candidates who built the thing answer in seconds; candidates who followed a tutorial stall on question two.
        </p>
      </FieldNote>

      <H3 id="channels">Where the roles are (and how to apply)</H3>
      <TableFrame
        label="Table · Channels"
        title="Application channels ranked for switchers"
        caption="Ranking reflects what has consistently converted best in tracked transitions, not a measured conversion rate. No percentages are claimed because none can be verified here."
      >
        <thead>
          <tr>
            <th>Channel</th>
            <th>Why it ranks here</th>
            <th>How to work it</th>
          </tr>
        </thead>
        <tbody>
          {channels.map(([c, w, h]) => (
            <tr key={c}>
              <td className="whitespace-nowrap font-medium">{c}</td>
              <td>{w}</td>
              <td className="text-muted-foreground">{h}</td>
            </tr>
          ))}
        </tbody>
      </TableFrame>

      <NoteCard title="Referral outreach — a script pattern, not a template to paste" tone="info">
        <p className="mb-2">
          Four lines: <strong>context</strong> (where you know them from, honestly — "we overlapped
          on the Vodafone account in 2023"), <strong>specific ask</strong> ("you're on the GenAI
          platform team — is the LLM engineer role on your team or another?"),{" "}
          <strong>evidence</strong> (one link to a deployed project, one sentence on what it does),{" "}
          <strong>easy exit</strong> ("no problem at all if it's not your area"). No résumé
          attachment in the first message, no life story, no request to "guide me".
        </p>
      </NoteCard>

      <p>
        Application discipline matters more than volume. Ten to twenty <em>quality</em> applications
        a week — read the JD, tailor the top third of the résumé, apply within days of posting —
        beats 200 sprayed, which mostly teaches you that spraying does not work. Maintain a tracking
        sheet with these columns: company · role · date applied · channel · JD keywords matched ·
        résumé variant used · referral (Y/N) · status · round reached · reason for rejection · next
        follow-up date. Tailor per application <em>cluster</em> (GCC platform roles, product-company
        LLM roles, services AI practice roles), not per application — three résumé variants is the
        right amount of work.
      </p>

      <H3 id="rejection-math">The rejection math</H3>
      <p>
        This is the part that ends most transitions, so read it before you need it. In tracked
        transitions the funnel for switchers is wide: many applications per interview, and several
        interviews per offer. <strong>50–150 total applications spread over two to four months is a
        normal, healthy funnel</strong> — not a signal that you are unemployable, and not a signal
        that the market is dead. What matters is not the count but the pattern. Keep a rejection log
        and review it monthly, because <strong>the round that eliminates you tells you exactly what
        to fix</strong>: screened out before a human call means the résumé keywords are wrong;
        eliminated at the coding round means Python practice; eliminated at system design means the
        framework is not rehearsed; eliminated at the project defence means the portfolio is
        thinner than it reads. Diffuse discouragement is useless. A pattern is actionable.
      </p>

      <H3 id="loop">The 2026 AI interview loop — round by round</H3>
      <TableFrame
        label="Table · Interview loop"
        title="Six rounds, what each assesses, and where switchers typically fail"
        caption="Scope note: this is the AI-specialist loop. Product-company SDE loops carry a heavier DSA and distributed-systems component and are out of scope here."
      >
        <thead>
          <tr>
            <th>Round</th>
            <th>What&apos;s assessed</th>
            <th>How to prepare</th>
            <th>Where switchers typically fail</th>
          </tr>
        </thead>
        <tbody>
          {interviewLoop.map(([r, a, p, f]) => (
            <tr key={r}>
              <td className="font-medium">{r}</td>
              <td>{a}</td>
              <td>{p}</td>
              <td className="text-muted-foreground">{f}</td>
            </tr>
          ))}
        </tbody>
      </TableFrame>

      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card-lift glass-card h-full rounded-2xl p-6">
            <p className="eyebrow mb-3">Round 3 · Eight real fundamentals questions</p>
            <ol className="ml-4 list-decimal space-y-2 text-sm leading-relaxed text-foreground/85">
              {fundamentalsQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="card-lift glass-card h-full rounded-2xl p-6">
            <p className="eyebrow mb-3">Round 4 · The answer framework</p>
            <p className="text-sm leading-relaxed text-foreground/85">
              Prompts look like <em>"design document Q&amp;A over 10 million files"</em> or{" "}
              <em>"design an agent that files support tickets"</em>. Answer in the same five moves
              every time:
            </p>
            <ol className="mt-3 ml-4 list-decimal space-y-2 text-sm leading-relaxed text-foreground/85">
              <li>
                <strong>Requirements:</strong> who asks what, how often, how fresh, how wrong is
                unacceptable.
              </li>
              <li>
                <strong>Retrieval and model choices:</strong> chunking, index, hybrid + rerank,
                model tier per step — each with a reason.
              </li>
              <li>
                <strong>Evaluation:</strong> golden set, offline metrics, online feedback, regression
                gate before deploy.
              </li>
              <li>
                <strong>Cost and latency:</strong> per-query token maths, caching, p95 budget.
              </li>
              <li>
                <strong>Failure modes:</strong> stale index, injection, hallucinated citations,
                provider outage — and the fallback for each.
              </li>
            </ol>
          </div>
        </Reveal>
      </div>

      <H3 id="defence-drill">The project-defence drill</H3>
      <p>
        The single highest-return interview preparation for a switcher costs nothing: have a peer or
        mentor spend thirty minutes attacking your own project while you defend it out loud. Not
        reviewing it — attacking it. You will discover in the first ten minutes which decisions you
        made deliberately and which you inherited from a tutorial. Then go and fix the second group,
        or at least be able to say plainly why they are still there. If you cannot be surprised
        about your own system, round five belongs to you.
      </p>
      <Reveal>
        <div className="card-lift my-6 rounded-2xl border border-border bg-card p-6 shadow-card">
          <p className="eyebrow mb-3">Ten attack questions to hand your reviewer</p>
          <ol className="ml-4 grid list-decimal gap-2 text-sm leading-relaxed text-foreground/85 sm:grid-cols-2">
            {attackQuestions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
        </div>
      </Reveal>

      <H3 id="offer">Evaluating the offer</H3>
      <p>
        Decode the CTC before celebrating it: fixed pay is what you can plan on, variable is
        conditional on company and individual performance, and ESOPs at a private company are paper
        with a strike price, a vesting schedule and a liquidity question — value them at zero when
        comparing offers and treat any upside as a bonus. Beyond the number, your first AI role is
        primarily a <strong>positioning asset</strong>: the systems you touch in the next eighteen
        months determine your second AI role's band far more than a marginal difference in fixed pay
        determines this one. Optimise for the work.
      </p>
      <NoteCard title="Red flags: 'AI roles' that are not AI roles" tone="warn">
        Read the JD for what is missing. No mention of deployment, models, retrieval or evaluation —
        but a lot about "reviewing outputs", "quality checks", "prompt templates" or "supporting the
        AI team" — usually describes annotation, moderation or support work with an AI label. Ask
        directly in the interview: what does the team ship, who owns the evaluation, and what did
        the last person in this role build?
      </NoteCard>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 12 — Mistakes and myths                                      */
/* ------------------------------------------------------------------ */

const mistakes: [string, string][] = [
  ["The tutorial / certificate loop", "Consuming forever, shipping never. Eleven completed courses and zero deployed URLs is a portfolio of nothing."],
  ["Hiding IT experience instead of repositioning it", "Switchers who bury five years of delivery experience compete as freshers against actual freshers, and lose the one advantage they had."],
  ["Learning breadth-first across all of AI", "Reading about computer vision, RL and diffusion when your ten target JDs all ask for retrieval, agents and deployment. Learn gap-first, against real postings."],
  ["Notebook-only portfolios", "A .ipynb proves you ran cells. A deployed endpoint with a cost figure and an eval score proves you can ship."],
  ["Running only one track", "Applying externally for eight months while ignoring the AI pilot inside your own company — or waiting on an internal move that has no budget."],
  ["Spraying 200 identical applications", "Then concluding the market is dead. The market did not see a tailored top third of your résumé even once."],
  ["Quitting to study full-time", "Almost always unnecessary when an evenings-and-weekends plan carries zero financial downside and better negotiating position."],
  ["Stopping at rejection #30", "Inside the normal funnel range, often right before the pattern-fix that converts. Review the log, fix the round, keep going."],
];

const myths: [string, string][] = [
  [
    "You need a Master's or PhD",
    "True for Tier 3 research roles — model research, novel architectures, publication-track work. False for applied Tier 2 engineering roles, where a deployed portfolio and a clean system-design round outrank a degree. Plenty of tracked transitions into applied roles carry no postgraduate qualification at all.",
  ],
  [
    "You need heavy mathematics",
    "Applied roles need working intuition for metrics and trade-offs — why precision@k moved, what latency a rerank costs, when a smaller model is fine — not derivations from scratch. Be honest about the gradient: ML Engineer carries the most maths, GenAI Engineer noticeably less, AI Product Manager least of all.",
  ],
  [
    "35 (or 40) is too late",
    "Age is not the filter; evidence is. AI-plus-domain roles actively reward the years — a banking BA who understands reconciliation is more useful on a finance GenAI product than a fresher who does not. No sugar-coating: ageism exists in pockets, particularly at some startups. It is not the market.",
  ],
  [
    "You will restart at fresher salary",
    "A switcher discount relative to your years is common; a reset to fresher pay is not, when experience is positioned as continuity rather than hidden. Your delivery track record, domain knowledge and production instincts are priced — just not at your old title's band.",
  ],
  [
    "Certificates get jobs",
    "They satisfy an HR gate at best, and only where one exists. No hiring manager in an AI loop has ever been convinced by a certificate image; they are convinced by a project defence. Buy structure and feedback if you need it — do not buy a certificate expecting it to do the work.",
  ],
  [
    "Prompt engineering is the easy way in",
    "As a standalone job title it has been declining, absorbed into engineering roles that also own retrieval, evaluation and deployment. As a skill layer inside a real role it remains genuinely valuable. Target the role, not the layer.",
  ],
  [
    "You must quit to learn properly",
    "The tracked transitions say otherwise: employed switchers negotiate better, interview from strength, and burn nothing if the search takes four months instead of two. Quitting adds financial pressure to a process that already rewards patience.",
  ],
  [
    "AI roles will themselves be automated soon",
    "The nuanced answer: tooling keeps compressing individual tasks, and demand keeps shifting toward system design, evaluation and integration — the layers this page teaches. Nobody can promise any role's ten-year safety, and anyone who does is selling something. Build transferable systems judgement, not tool loyalty.",
  ],
];

const shorts = [
  { title: "Myth: you need a Master's for AI", meta: "Short · 0:52", id: "[shorts id placeholder]" },
  { title: "The evenings-only 10-hour week", meta: "Short · 1:04", id: "[shorts id placeholder]" },
  { title: "Notebook vs deployed: what hiring managers see", meta: "Short · 0:47", id: "[shorts id placeholder]" },
  { title: "How to answer 'why the switch?'", meta: "Short · 1:12", id: "[shorts id placeholder]" },
  { title: "Is prompt engineering still a job in 2026?", meta: "Short · 0:58", id: "[shorts id placeholder]" },
];

export function SectionMistakesMyths() {
  return (
    <Section
      id="mistakes-myths"
      eyebrow="Section 12 · Reality check"
      title="The Mistakes That Stall Transitions — and the Myths Behind Them"
    >
      <FieldNote title={"Mistakes I have watched cost real money"}>
        <p>
          The two most expensive patterns I keep seeing in my inbox: paying a premium fee for content the learner never had the weekly hours to finish, and treating a certificate as the deliverable instead of a defensible project. I have never once been asked, in any loop I sat on, to look at a certificate.
        </p>
      </FieldNote>

      <H3 id="mistakes">Eight mistakes I keep seeing</H3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {mistakes.map(([t, d], i) => (
          <Reveal key={t} delay={i * 50}>
            <div className="card-lift h-full rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-blue)] font-mono text-xs text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold leading-snug">{t}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <H3 id="myths">Eight myths, answered straight</H3>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {myths.map(([m, r], i) => (
          <Reveal key={m} delay={i * 50}>
            <div className="card-lift h-full rounded-2xl border border-border bg-card p-5 shadow-card">
              <p className="flex items-start gap-2 text-sm font-semibold">
                <Pill tone="caution">Myth</Pill>
              </p>
              <p className="mt-2 font-display text-lg leading-snug">&ldquo;{m}&rdquo;</p>
              <p className="mt-3 flex items-center gap-2">
                <Pill tone="positive">Reality</Pill>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">{r}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <H3 id="shorts">Myth-busting shorts</H3>
      <p className="text-sm text-muted-foreground">
        Placeholders for the publishing team — tap to play, no autoplay. Any short that is not live
        on the channel should be removed rather than linked.
      </p>
      <Reveal>
        <ul className="mt-4 -mx-1 flex snap-x gap-4 overflow-x-auto px-1 pb-3" aria-label="LogicMojo myth-busting shorts">
          {shorts.map((s) => (
            <li key={s.title} className="w-[220px] shrink-0 snap-start">
              <button
                type="button"
                className="card-lift group w-full min-h-11 rounded-2xl border border-border bg-card p-3 text-left shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={`Play short: ${s.title}`}
              >
                <span className="grid aspect-[9/16] w-full place-items-center rounded-xl bg-[image:var(--gradient-blue)]/90 text-primary-foreground">
                  <span className="grid size-11 place-items-center rounded-full bg-background/25 text-lg">▶</span>
                </span>
                <span className="mt-3 block text-sm font-medium leading-snug">{s.title}</span>
                <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  {s.meta} · {s.id}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
