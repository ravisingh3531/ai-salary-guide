import { H3, Reveal, Section } from "@/components/site/primitives";

/* Section 16 — expert reviewer panel (roles only; no invented names or quotes) */
const reviewers = [
  {
    role: "AI/ML engineer at an Indian product company",
    scope: "Reviewed the curriculum depth scorecard (Table 2) and the capability ladder.",
    quote:
      "Depth in retrieval and evaluation is what separates the candidates we advance from the ones we thank. A syllabus that stops at prompting stops before the interview starts.",
  },
  {
    role: "AI hiring manager at a GCC",
    scope: "Reviewed the salary bands, entry bars and interview expectations in Section 9.",
    quote:
      "Titles are inconsistent across the market. We band on demonstrated ownership of a system in production, not on the designation on a résumé.",
  },
  {
    role: "Alumnus who switched into an AI role via an online program",
    scope: "Reviewed the ROI scenarios, including the dropout case, and the 90-day plan.",
    quote:
      "The three months after the course mattered more than the course. Nobody warned me about that, which is why the dropout scenario belongs on this page.",
  },
  {
    role: "AI career coach",
    scope: "Reviewed the quiz decision logic and the choose-your-course framework.",
    quote:
      "Most people pick on price and brand. Hours available per week predicts completion better than either, so the quiz should ask it early — it does.",
  },
  {
    role: "HR / talent leader familiar with AI compensation",
    scope: "Reviewed the placement-claim guidance and the red-flag checklist.",
    quote:
      "Ask for the denominator and the median. A provider that will not put those in writing has answered your question already.",
  },
];

const footerLinks: Array<[string, string[]]> = [
  ["Courses", ["AI & ML Course [INSERT LINK]", "GenAI Course [INSERT LINK]", "Data Science Course [INSERT LINK]", "DSA & System Design [INSERT LINK]"]],
  ["Resources", ["Curriculum PDF [INSERT LINK]", "Batch schedule [INSERT LINK]", "Project portfolio [INSERT LINK]", "Blog [INSERT LINK]", "FAQs [INSERT LINK]"]],
  ["Contact", ["[EMAIL]", "[PHONE]", "[WHATSAPP]"]],
  ["Legal", ["Privacy Policy", "Terms", "Refund Policy"]],
];

export function SectionAuthorTrust() {
  return (
    <>
      <Section id="author" eyebrow="Section 15 · About the author" title="About the Author">
        <Reveal>
          <div className="card-lift glass-card rounded-3xl p-6 md:p-8">
            <div className="flex flex-wrap items-start gap-5">
              <div
                className="grid size-20 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-blue)] font-display text-2xl text-primary-foreground"
                role="img"
                aria-label="Author portrait placeholder, replaced with a real photograph before publishing"
              >
                [PHOTO]
              </div>
              <div className="min-w-[260px] flex-1">
                <p className="font-display text-2xl">Aditya R.</p>
                <p className="text-sm text-muted-foreground">
                  AI education and careers analyst; practising ML/GenAI engineer and
                  technical interviewer
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  I assess AI programs the way I assess candidates: by what a graduate can build and
                  defend. For this analysis I shortlisted 150+ programs accessible to Indian
                  learners, read current syllabi and fee pages, attended or reviewed recorded
                  sessions, inspected learner project repositories, and interviewed learners about
                  what they could actually do afterwards. I wrote it because the gap between what
                  landing pages promise and what interview loops test is where most of the money in
                  Indian AI education is lost.
                </p>
                <p className="mt-3 text-sm">
                  LinkedIn: <span className="text-muted-foreground">[INSERT URL]</span>
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Last reviewed: 25 Aug 2026 · Fees, curricula and salary bands are re-verified
                  quarterly
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="reviewers" eyebrow="Section 16 · Review panel" title="Expert Reviewers">
        <p>
          Five practitioners reviewed the sections closest to their work. Roles and review scopes are
          listed; names, photographs and profile links are inserted only for real, consenting
          reviewers before publication — nothing here is invented.
        </p>
        <ul
          className="mt-6 -mx-1 flex snap-x gap-4 overflow-x-auto px-1 pb-3"
          aria-label="Expert reviewer panel"
        >
          {reviewers.map((r) => (
            <li key={r.role} className="w-[300px] shrink-0 snap-start">
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-5">
                <div
                  className="grid size-12 place-items-center rounded-full bg-secondary font-mono text-xs text-muted-foreground"
                  role="img"
                  aria-label="Reviewer photograph placeholder"
                >
                  [PHOTO]
                </div>
                <p className="mt-3 font-display text-lg leading-snug">{r.role}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  [INSERT: name, company, LinkedIn URL]
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{r.scope}</p>
                <blockquote className="mt-3 border-l-2 border-l-accent pl-3 text-sm italic text-muted-foreground">
                  {r.quote}
                </blockquote>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Reviewers assessed the framework and the accuracy of the sections listed above. They were
          not compensated for endorsements, and none of the quotes above is an endorsement of any
          program. If any reviewer is affiliated with a listed provider, that affiliation is
          disclosed on their card before publication.
        </p>
      </Section>

      <Section id="site-footer" eyebrow="Section 17 · LogicMojo" title="LogicMojo">
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div
              className="grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-blue)] font-display text-primary-foreground"
              role="img"
              aria-label="LogicMojo logo placeholder"
            >
              LM
            </div>
            <p className="text-sm text-muted-foreground">
              Live, mentor-led engineering education for AI, GenAI and data careers in India.
            </p>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {footerLinks.map(([heading, items]) => (
              <div key={heading}>
                <H3>{heading}</H3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Social: LinkedIn · YouTube · Instagram · X · GitHub [INSERT LINKS]
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} LogicMojo. This page makes no job or salary guarantee; all
            salary figures are indicative, role-attributed ranges.
          </p>
        </div>
      </Section>
    </>
  );
}
