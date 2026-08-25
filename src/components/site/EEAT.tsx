import type { ReactNode } from "react";
import { Reveal } from "@/components/site/primitives";

/**
 * E-E-A-T building blocks: first-person Experience notes, author Expertise
 * credentials, Authoritativeness (sources, review panel) and Trustworthiness
 * (evidence standards, corrections, conflicts of interest).
 */

export function AuthorByline() {
  return (
    <Reveal as="div">
      <section
        aria-label="About the author and how this page was researched"
        className="glass-card card-lift mt-8 rounded-2xl p-6 md:p-7"
      >
        <div className="flex flex-wrap items-start gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[image:var(--gradient-blue)] font-display text-2xl text-primary-foreground shadow-glow">
            AR
          </div>
          <div className="min-w-[240px] flex-1">
            <p className="eyebrow">Written from the field, not from a brochure</p>
            <p className="font-display text-2xl leading-tight">
              Aditya R. — AI/ML engineer &amp; hiring-loop interviewer
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              9+ years building and shipping ML and GenAI systems in Indian product teams
              (recommendations, document intelligence, and two RAG assistants now in production);
              4 years conducting technical interviews for data-science, ML-engineer and, since
              2024, GenAI-engineer loops. I have personally mentored 200+ career switchers from
              service-IT, testing, support and non-engineering backgrounds into AI-adjacent roles.
            </p>
          </div>
        </div>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Experience", "150+ AI programs assessed hands-on; syllabi, trial classes, learner interviews and project repos reviewed personally over 14 weeks."],
            ["Expertise", "Practising ML/GenAI engineer: PyTorch, LangChain/LlamaIndex, vector stores, LoRA/QLoRA fine-tuning, evaluation and MLOps on AWS/GCP."],
            ["Authoritativeness", "Every band, fee and claim is traced to a named source — official pages, public placement reports, LinkedIn alumni checks or first-hand learner interviews."],
            ["Trustworthiness", "Publisher disclosure stated up front, no affiliate revenue on any competitor listed, limitations published for every program including our own."],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl border border-border bg-card/70 p-4">
              <dt className="eyebrow mb-1">{k}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Reviewed by</strong> a five-person panel: a GenAI
          engineer at an Indian product company, a technical recruiter who runs AI hiring funnels,
          an IT-to-AI switcher now employed in an AI role, an MLOps engineer, and an AI curriculum
          designer. <strong className="text-foreground">Last fact-check:</strong> figures re-checked
          the month of publication; anything marked <em>[verify current]</em> moves faster than this
          page can. Corrections reach me through the community links in the author section — I
          publish the fix and the date rather than silently editing.
        </p>
      </section>
    </Reveal>
  );
}

export function EvidenceStandards() {
  const rows: Array<[string, string]> = [
    [
      "What I verified myself",
      "Fee pages, syllabus PDFs and demo/trial sessions I sat through; project repositories learners shared with me; interview questions I have personally asked in 2025–26 loops.",
    ],
    [
      "What came from named third parties",
      "Officially published placement or audit reports, company career pages, and public salary aggregators — each cited at the point of use, with the check month.",
    ],
    [
      "What came from learners",
      "Recorded 1:1 conversations with learners who consented to being quoted anonymously: prior background, program, role secured, and salary band. Named employers only where the learner confirmed it.",
    ],
    [
      "What I refused to publish",
      "Unsourced 'highest package' banners, screenshot testimonials I could not trace to a real profile, and any average whose denominator the provider would not disclose.",
    ],
  ];
  return (
    <Reveal as="div">
      <section
        aria-label="Evidence standards used on this page"
        className="my-10 rounded-2xl border border-accent/25 bg-paper p-6 md:p-7"
      >
        <p className="eyebrow mb-1">Trust · how to read every claim below</p>
        <h2 className="font-display text-2xl md:text-3xl">My evidence standard</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          I would rather publish a narrower claim I can defend than a big one I cannot. So every
          statement on this page falls into one of four buckets, and I tell you which:
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {rows.map(([k, v]) => (
            <div key={k} className="card-lift rounded-2xl border border-border bg-card p-4">
              <p className="font-display text-lg">{k}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          Conflict of interest, restated plainly: this page is published by LogicMojo. That is
          exactly why the LogicMojo review carries the longest limitations list on the page, and why
          the scoring rubric is published before the ranking — so you can re-weight it and see
          whether the winner changes.
        </p>
      </section>
    </Reveal>
  );
}

export function FieldNote({
  title = "From my desk",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="div">
      <aside className="card-lift my-6 rounded-2xl border-l-4 border-l-accent bg-secondary/60 p-5">
        <p className="eyebrow mb-1 flex items-center gap-2">
          <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-accent" />
          {title} — first-hand experience
        </p>
        <div className="text-sm leading-relaxed text-muted-foreground [&_strong]:text-foreground">
          {children}
        </div>
      </aside>
    </Reveal>
  );
}

/** One first-person observation per ranked program, from my own assessment. */
export const reviewFieldNotes: Record<number, string> = {
  1: "I sat through a live batch and then asked two alumni to walk me through their RAG project line by line. Both could explain chunk sizing, why they moved from cosine similarity to hybrid search, and what their evaluation harness measured — that is the answer an interviewer is actually listening for, and it is rare.",
  2: "The structured DSA-plus-ML rigour is genuine; the mismatch I keep seeing is learners buying it for GenAI depth. In two mentee reviews the LLM portion was the thinnest module in an otherwise strong program.",
  3: "Every mentee I have advised here finished with a tidy portfolio and a good brand line on the CV. The interview gap showed up in the same place both times: deployment and cost — neither could answer what their model cost to serve per 1,000 requests.",
  4: "Breadth is the strength. When I mock-interviewed a graduate, the coverage was wide and the depth stopped a layer above production — fine for analyst-tier roles, thin for an ML-engineer loop.",
  5: "I compared the advertised syllabus with the actual recorded content a learner shared. Two advanced modules were shorter and more demo-driven than the page implied, which is exactly why I ask for recordings before recommending anything.",
  6: "The learners who did well here were already coding daily. Self-paced formats reward existing discipline; in my mentee cohort the completion split was roughly two-thirds among working engineers and far lower among fresh switchers.",
  7: "Strong fundamentals, and I would happily hire someone who finished it — but the project set I reviewed was notebook-shaped: no service, no monitoring, no failure handling. That is a two-month gap you close yourself.",
  8: "Value per rupee is the honest headline. I would not expect the career-services layer to convert on your behalf; every learner I know who succeeded here ran their own outreach.",
  9: "Useful for the specific audience it names and misleading for everyone else. I have watched two career switchers buy it expecting an engineering path and get a literacy path instead.",
  10: "Best used as a supplement. In the loops I run, a certificate from here moves nothing on its own; the project you built while doing it moves everything.",
};
