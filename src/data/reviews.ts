export type Review = {
  rank: number;
  name: string;
  positioning: string;
  overview: string;
  curriculum: string;
  depthVerdict: string;
  money: string;
  prereq: string;
  projects: string;
  placement: string;
  outcomes: string;
  roi: string;
  strengths: string[];
  limitations: string[];
  bestFor: string[];
  avoidIf: string[];
  ratings: { label: string; score: number }[];
  overall: number;
  ceiling: string;
  cta: string;
};

const r = (
  outcomes: number,
  curriculum: number,
  projects: number,
  placement: number,
  value: number,
  delivery: number,
) => [
  { label: "Career outcomes & salary potential", score: outcomes },
  { label: "Curriculum depth & 2026 relevance", score: curriculum },
  { label: "Project rigour", score: projects },
  { label: "Placement & job assistance", score: placement },
  { label: "Value & ROI", score: value },
  { label: "Delivery & flexibility", score: delivery },
];

export const reviews: Review[] = [
  {
    rank: 1,
    name: "LogicMojo — AI & Machine Learning Course",
    positioning: "Specialist AI provider, live IST cohorts",
    overview:
      "LogicMojo is a specialist rather than a marketplace: one flagship AI and machine learning track, taught live to Indian working professionals, with the curriculum revised as the stack moves. What it is really selling is capability density — the shortest credible path from working engineer to someone who can architect, fine-tune, deploy and monitor an AI system. Disclosure repeated: this page is published by LogicMojo, and it is scored on the same rubric as the other nine.",
    curriculum:
      "Python, data and SQL foundations; maths intuition and classical ML with evaluation rigour; deep learning and transformers in PyTorch; GenAI and LLMs including open-weight models and local inference; embeddings, vector databases and production RAG; fine-tuning with SFT and LoRA/QLoRA plus agents, LangGraph, CrewAI, AutoGen and MCP; MLOps and LLMOps with MLflow, FastAPI, Docker, CI/CD and monitoring.",
    depthVerdict:
      "The only program on this list rated Deep or Comprehensive across every premium-pay row of Table 2 — fine-tuning, agents, frameworks, MCP, MLOps and deployment.",
    money:
      "Fee ₹XX,XXX [VERIFY: current fee]. Duration roughly 6–8 months. EMI available; confirm whether no-cost EMI is running this month, the GST treatment and the exact refund cut-off date in writing.",
    prereq:
      "Basic coding helps but a Python and maths bridge is provided; live IST evening and weekend batches; 10–15 hours a week; batch deferral available.",
    projects:
      "10–15 progressive builds culminating in a learner-designed capstone that must be deployed, not merely notebooked. Human code review throughout, everything documented for GitHub.",
    placement:
      "Career guidance, portfolio review, AI-role-specific interview preparation and project-defence practice. No bond, no ISA. It is explicitly not a guaranteed-placement program.",
    outcomes:
      "Credibly prepares for AI Engineer, GenAI/LLM Engineer, ML Engineer and AI Agent Developer roles; indicative bands for those roles [VERIFY]. Those bands belong to the roles and the market, not to the course.",
    roi: "Mid-band fee against the highest capability ceiling here gives the strongest payback framing on this list — but only if you finish. Ten to fifteen hours a week for months is the real price.",
    strengths: [
      "Deepest coverage of the exact skills where 2026 pay premiums sit",
      "Genuinely live IST instruction with in-session doubt resolution",
      "Human code review rather than auto-graded notebooks",
      "Mandatory deployed capstone — deployment is the hired-vs-not line",
      "No bond or ISA, and no salary claims attached to the program",
    ],
    limitations: [
      "Not the cheapest — PW Skills, GUVI and free tracks exist",
      "No university credential for HR filters or promotion cases",
      "Not a large placement machine; Scaler is the honest pick if that is the purchase",
      "Live format punishes unpredictable schedules",
      "Smaller brand recognition than the ₹2L+ platforms",
    ],
    bestFor: [
      "Working engineers targeting AI-engineer role bands",
      "IT-services engineers wanting production depth, not a certificate",
      "ROI buyers weighing capability per rupee",
    ],
    avoidIf: [
      "You need a university tag to clear an internal promotion panel",
      "Your schedule cannot support live sessions",
      "You want a research or PhD pathway",
    ],
    ratings: r(9, 9.5, 9, 7.5, 9.5, 8.5),
    overall: 9.1,
    ceiling: "Level 4–5",
    cta: "Explore the LogicMojo AI course curriculum and live batches →",
  },
  {
    rank: 2,
    name: "Scaler — Data Science, ML & AI Program",
    positioning: "Premium tech bootcamp with the strongest placement operation here",
    overview:
      "Scaler sells an outcome pipeline more than a syllabus. The product is a structured cohort, a hiring-partner network, mock interview volume and referral machinery aimed squarely at product companies and GCCs. Fees of ₹3,00,000–₹4,00,000 [VERIFY] buy access to that machine as much as to the teaching.",
    curriculum:
      "Strong DSA and system design alongside data science and machine learning, with a growing but still catching-up GenAI component. Deployment coverage is respectable; agents, MCP and production RAG are behind the specialists.",
    depthVerdict:
      "Deep on the fundamentals product interviews test, moderate to basic on the 2026 GenAI premium rows.",
    money:
      "₹3,00,000–₹4,00,000 [VERIFY]; 11–18 months; EMI tenures of 12–36 months, frequently through an NBFC loan that keeps debiting whether or not you attend.",
    prereq:
      "An entrance coding test gates admission. Live IST cadence, 15–20 hours a week. Pausing is possible but limited.",
    projects:
      "Substantial and reviewed, weighted toward engineering fundamentals rather than GenAI systems.",
    placement:
      "The most complete operation on this list: partner network, mock interviews, referrals, dedicated career coaches. Outcome data is provider-reported — ask for the denominator and the median.",
    outcomes:
      "SDE-ML and ML Engineer roles at product companies and GCCs; indicative bands [VERIFY]. The DSA and system-design weighting is precisely what those pay bands interview for.",
    roi: "Payback depends on converting through the placement loop. Exit at month five and you have a multi-year EMI against a partial skill set — the single largest downside risk on this page.",
    strengths: [
      "Best structured placement infrastructure among Indian providers",
      "DSA and system design taught to product-interview standard",
      "High cohort accountability and peer quality",
      "Mock interview volume that genuinely changes conversion",
    ],
    limitations: [
      "GenAI, agents and production RAG depth trails specialists",
      "Long tenure means a multi-year financial commitment",
      "Value collapses if you drop out midway",
      "Weekly hours are unrealistic for some full-time roles",
    ],
    bestFor: ["Product-company aspirants", "Learners who need external structure", "Those who can fund the premium"],
    avoidIf: ["You want frontier GenAI depth first", "You cannot give 15–20 hours a week", "A long EMI would strain you"],
    ratings: r(8.5, 7.5, 8, 9.5, 6.5, 7.5),
    overall: 8.2,
    ceiling: "Level 4",
    cta: "Compare Scaler's current fee, tenure and placement methodology →",
  },
  {
    rank: 3,
    name: "upGrad — PGP in ML & AI (IIIT-Bangalore)",
    positioning: "University-credentialed program on an academic cadence",
    overview:
      "upGrad's proposition is institutional legitimacy. The IIIT-Bangalore association gives the certificate weight in HR screens, appraisal documentation and internal promotion cases — which is a real pay mechanism, just not the same one as frontier skills.",
    curriculum:
      "Broad and well-structured across statistics, classical ML, deep learning and NLP, with GenAI modules that refresh more slowly than specialist providers. Deployment and MLOps are covered at a moderate level.",
    depthVerdict:
      "Good on foundations, moderate on GenAI, basic on production RAG, fine-tuning and agents.",
    money: "₹1,50,000–₹3,50,000 [VERIFY]; 12–18 months; EMI widely available, often with no-cost tenures.",
    prereq:
      "Coding preferred but not strict, basic statistics assumed, bridge content provided. Live weekend sessions plus recordings, 10–15 hours a week.",
    projects:
      "Numerous, but academic in flavour — few are deployment-grade artefacts you would put at the top of a GitHub profile.",
    placement:
      "Career services and hiring drives that are generic across tech and analytics rather than AI-role specific. Outcome data is provider-reported.",
    outcomes:
      "Data Scientist and enterprise ML Engineer roles; indicative bands [VERIFY]. Be clear about what IIIT-B affiliation means: the program is delivered with academic involvement, not an IIIT-B degree.",
    roi: "Justifiable when your employer or target employer weights credentials; weak if you are buying engineering capability alone.",
    strengths: [
      "Credential that clears HR filters and promotion panels",
      "Well-structured academic progression",
      "Strong support infrastructure and cohort management",
      "Useful alumni and hiring-drive access",
    ],
    limitations: [
      "GenAI and agent content refreshes slowly",
      "Projects rarely deployment-grade",
      "Fee is high relative to capability ceiling",
      "Career services not AI-role specific",
    ],
    bestFor: ["Enterprise professionals", "Internal mobility candidates", "Learners who value a formal tag"],
    avoidIf: ["You want frontier GenAI depth", "You are optimising capability per rupee", "You already have solid ML foundations"],
    ratings: r(7.5, 7, 6.5, 7, 6, 8),
    overall: 7.2,
    ceiling: "Level 3–4",
    cta: "Check upGrad's current fee, cohort dates and refund window →",
  },
  {
    rank: 4,
    name: "Great Learning — PGP-AIML (UT Austin / Great Lakes)",
    positioning: "Mentor-led weekend format built for completion",
    overview:
      "Great Learning has optimised for the thing most premium programs fail at: finishing. Weekend live mentor sessions over a recorded core, with small-group discussion, makes it one of the most reliably completable formats at this price point.",
    curriculum:
      "Solid statistics, ML, deep learning, NLP and computer vision, with applied GenAI added. MLOps is light and production RAG, fine-tuning and agents are treated at introductory depth.",
    depthVerdict: "Applied rather than deep — good for role upgrades, thin on the premium-pay rows.",
    money: "₹1,50,000–₹2,75,000 [VERIFY]; 7–12 months; EMI and frequent no-cost tenures.",
    prereq:
      "Coding preferred, basic statistics assumed, bridge content available. Weekend live IST sessions, 8–12 hours a week, deferral generally possible [VERIFY].",
    projects:
      "Eight to twelve projects with mentor feedback. Feedback is conversational rather than line-by-line code review.",
    placement:
      "Career support and a job board, partly AI-aware. Outcome data is provider-reported.",
    outcomes:
      "Data Scientist and applied ML roles in domain-heavy enterprises; indicative bands [VERIFY]. The pay mechanism here is a role upgrade inside a domain you already know.",
    roi: "Reasonable for domain professionals whose salary jump comes from combining existing expertise with applied AI; poor if you want to be hired as a production AI engineer.",
    strengths: [
      "One of the highest realistic completion rates at this tier",
      "Genuine mentor interaction in small groups",
      "Strong applied breadth across ML, NLP and CV",
      "Weekend-only load suits 10-hour workdays",
    ],
    limitations: [
      "MLOps and deployment coverage is light",
      "Production RAG, fine-tuning and agents stay introductory",
      "Mentor quality varies by cohort",
      "Premium price for a Level 3–4 ceiling",
    ],
    bestFor: ["Domain experts adding AI", "Weekend-only learners", "Mid-career professionals protecting increments"],
    avoidIf: ["You want deployment depth", "You are budget constrained", "You want an AI-native startup role"],
    ratings: r(7, 6.5, 6.5, 6.5, 6, 8.5),
    overall: 7.0,
    ceiling: "Level 3–4",
    cta: "Review Great Learning's current batch schedule and fee →",
  },
  {
    rank: 5,
    name: "Intellipaat — Advanced Certification in AI & ML (IIT-affiliated)",
    positioning: "IIT-tagged credential at mid-tier pricing",
    overview:
      "Intellipaat's pitch is a recognisable institutional tag without the ₹2L+ ticket. [VERIFY: current affiliation and exact program name — these change between cohorts.] The delivery is hybrid: live sessions over a large recorded library, with 24/7 support that is real but variable.",
    curriculum:
      "Broad ML and deep learning coverage with better deployment exposure than several pricier peers. GenAI depth is moderate; agents and MCP are touched rather than taught.",
    depthVerdict: "Good on fundamentals and deployment, moderate on GenAI, basic on the premium rows.",
    money: "₹80,000–₹2,00,000 [VERIFY]; 9–11 months; EMI available, no-cost tenures common.",
    prereq: "Basic coding and maths. Hybrid live/self-paced IST, 8–12 hours a week.",
    projects:
      "Numerous with some deployment work, though review quality depends on which mentor you draw.",
    placement: "Job assistance that is generic rather than AI-role specific. Outcome data is provider-reported.",
    outcomes:
      "ML Engineer and Data Scientist roles in services and enterprise settings; indicative bands [VERIFY]. The IIT tag helps most at services and enterprise screening stages.",
    roi: "Decent capability per rupee if you drive your own depth; the program rewards self-starters and under-serves passive learners.",
    strengths: [
      "Institutional tag at roughly half the premium price",
      "Better deployment exposure than several costlier programs",
      "Large recorded library for revision",
      "Responsive support channels",
    ],
    limitations: [
      "Module and mentor quality varies noticeably",
      "GenAI depth is moderate; agents barely covered",
      "Job assistance is generic",
      "Aggressive sales follow-up reported by learners",
    ],
    bestFor: ["Services engineers wanting a recognised tag", "Self-driven mid-budget learners"],
    avoidIf: ["You need consistent mentor quality", "You want frontier GenAI depth", "You want hands-on placement support"],
    ratings: r(6.5, 6.5, 6.5, 5.5, 7, 7),
    overall: 6.6,
    ceiling: "Level 3–4",
    cta: "Verify Intellipaat's current affiliation, fee and module list →",
  },
  {
    rank: 6,
    name: "Simplilearn — PGP in AI & ML (Purdue/IBM)",
    positioning: "Corporate-friendly credential, usually employer-funded",
    overview:
      "Simplilearn is the platform most often reimbursed by Indian employers, and that fact largely defines its value. State the format plainly: the core is self-paced video with live masterclasses layered on top — it is not a live cohort program.",
    curriculum:
      "Wide coverage of ML, deep learning and analytics tooling with GenAI modules added. Production RAG, agents and MCP are not meaningful components.",
    depthVerdict: "Moderate throughout; weakest of the premium-priced options on the 2026 premium rows.",
    money: "₹1,50,000–₹2,50,000 [VERIFY]; around 11 months; EMI available.",
    prereq: "Basic coding and maths. Self-paced with scheduled masterclasses, 6–10 hours a week.",
    projects: "Guided and structured; limited human review, few deployment-grade artefacts.",
    placement: "Light career services, generic across roles. Outcome data is provider-reported.",
    outcomes:
      "Internal AI and analytics mobility, and AI-literate management positions; indicative bands [VERIFY]. The pay mechanism is promotion and internal movement, not external AI-engineer hiring.",
    roi: "Sound when the employer pays. Mediocre value self-funded if your goal is engineering capability.",
    strengths: [
      "Widely accepted for corporate reimbursement",
      "Recognisable Purdue/IBM branding on the certificate",
      "Flexible for unpredictable work schedules",
      "Broad curriculum breadth for managers",
    ],
    limitations: [
      "Self-paced core sold with live-sounding language",
      "Thin on production RAG, agents and MCP",
      "Limited code review or project defence",
      "Poor capability per rupee when self-funded",
    ],
    bestFor: ["Employer-funded learners", "Managers buying AI literacy", "Internal mobility candidates"],
    avoidIf: ["You are paying yourself", "You want production engineering skills", "You need accountability to finish"],
    ratings: r(6, 5.5, 5, 5, 4.5, 7.5),
    overall: 5.8,
    ceiling: "Level 3–4",
    cta: "Ask your employer about reimbursement before paying for Simplilearn →",
  },
  {
    rank: 7,
    name: "DeepLearning.AI (Coursera)",
    positioning: "The best conceptual foundation available at any price",
    overview:
      "Andrew Ng's Machine Learning and Deep Learning Specializations, plus a growing library of short GenAI courses, remain the clearest explanations of the fundamentals anywhere. Free to audit; roughly ₹3,000–₹4,000 per month [VERIFY] if you subscribe for certificates.",
    curriculum:
      "Outstanding on classical ML, evaluation, deep learning and transformers. Short courses cover RAG, agents and evaluation at an introductory-to-moderate depth. Deployment and MLOps are largely absent.",
    depthVerdict: "Comprehensive on theory, limited on production engineering.",
    money: "Free to audit; ~₹3,000–₹4,000 per month subscribed [VERIFY]. Watch subscription creep across months.",
    prereq: "Python required for the deep learning track; linear algebra and calculus help. Fully self-paced.",
    projects: "Guided notebooks. Excellent teaching artefacts, weak portfolio artefacts.",
    placement: "None, and it makes no claim to any — which is more honest than most.",
    outcomes:
      "A foundation layer under any AI role; indicative bands [VERIFY] depend entirely on what you build afterwards.",
    roi: "Unbeatable per rupee — with the caveat that self-paced completion rates are famously low and there is no accountability structure.",
    strengths: [
      "Clearest explanations of ML and deep learning available",
      "Free to audit, so financial risk is near zero",
      "Frequently refreshed short courses on GenAI topics",
      "Globally recognised instructor credibility",
    ],
    limitations: [
      "No placement, mentorship or code review",
      "Very low completion rates without external accountability",
      "No MLOps or deployment path",
      "Certificates carry little weight with Indian HR filters",
    ],
    bestFor: ["Disciplined self-learners", "Anyone building foundations before paying for a bootcamp", "Budget-zero starters"],
    avoidIf: ["You need structure to finish", "You want placement support", "You need a hiring-recognised credential"],
    ratings: r(5.5, 8, 5, 1, 10, 8],
    ) as never,
    overall: 7.0,
    ceiling: "Level 2–3 alone",
    cta: "Audit the DeepLearning.AI specializations free before buying anything →",
  },
  {
    rank: 8,
    name: "IBM AI Engineering Professional Certificate (Coursera)",
    positioning: "Applied, lab-driven, very cheap",
    overview:
      "Where DeepLearning.AI explains, IBM makes you type. The certificate is lab-heavy across Keras, TensorFlow and PyTorch, with GenAI and RAG components added in recent revisions [VERIFY: current module list]. Free to audit.",
    curriculum:
      "Applied deep learning and model building with reasonable deployment touchpoints; GenAI coverage moderate; agents and fine-tuning limited.",
    depthVerdict: "Good applied practice, moderate conceptual depth, limited on premium rows.",
    money: "Free to audit; ~₹3,000–₹4,000 per month subscribed [VERIFY].",
    prereq: "Python required. Fully self-paced, 5–10 hours a week.",
    projects: "Guided labs. They demonstrate exposure, not engineering judgement — extend them into original work.",
    placement: "None claimed.",
    outcomes: "Junior applied ML and AI roles; indicative bands [VERIFY], contingent on portfolio extension.",
    roi: "The best ₹0–₹5,000 applied option for someone who already codes.",
    strengths: [
      "Hands-on from the first week",
      "Recognisable IBM name at negligible cost",
      "Covers both TensorFlow and PyTorch",
      "Low risk — audit first, pay only for the certificate",
    ],
    limitations: [
      "Guided labs are not portfolio-defensible as-is",
      "No mentorship, review or career support",
      "Fine-tuning and agents barely present",
      "Module currency varies [VERIFY]",
    ],
    bestFor: ["Existing coders", "Learners pairing it with a deeper program", "Cost-constrained practitioners"],
    avoidIf: ["You are a complete beginner", "You want interview or placement help", "You need a deployed capstone"],
    ratings: r(5, 6.5, 5.5, 1, 9.5, 8),
    overall: 6.3,
    ceiling: "Level 2–3",
    cta: "Audit IBM AI Engineering and extend the labs into your own project →",
  },
  {
    rank: 9,
    name: "GUVI (IIT-Madras incubated)",
    positioning: "Vernacular, mobile-first, Tier-2/3 access",
    overview:
      "GUVI teaches in Tamil, Hindi, Telugu, Kannada and English, mobile-first, at ₹10,000–₹80,000 [VERIFY]. For a large group of capable learners the barrier was never ability — it was instruction language. Removing that barrier is a genuine pay unlock.",
    curriculum:
      "Programming, data and introductory ML with some GenAI. Depth on transformers, RAG, fine-tuning and agents is basic to absent.",
    depthVerdict: "Solid entry-level teaching; not a route to premium AI engineering bands on its own.",
    money: "₹10,000–₹80,000 [VERIFY]; 4–9 months; EMI available on higher tracks.",
    prereq: "None — genuinely beginner friendly. Live vernacular plus recordings, 8–12 hours a week.",
    projects: "Guided, entry-level, useful for first-job portfolios.",
    placement: "Regional placement support aimed at first tech roles. Outcome data is provider-reported.",
    outcomes:
      "First tech and analyst roles, plus regional entry AI roles; indicative bands [VERIFY]. Realistically a first-rung, not a premium-band, outcome.",
    roi: "Excellent for the first rung if English instruction was your blocker; budget for a deeper second program afterwards.",
    strengths: [
      "Instruction in five languages removes a real barrier",
      "Mobile-first delivery suits Tier-2/3 connectivity",
      "Affordable with low financial risk",
      "IIT-Madras incubation adds screening credibility",
    ],
    limitations: [
      "Little transformer, RAG or fine-tuning depth",
      "Placement support is entry-level and regional",
      "English technical vocabulary still has to be built",
      "Not sufficient for AI-engineer bands alone",
    ],
    bestFor: ["Tier-2/3 beginners", "Vernacular-first learners", "First tech role seekers"],
    avoidIf: ["You already work in tech", "You are targeting GenAI engineering roles", "You want deep MLOps"],
    ratings: r(4.5, 4.5, 5, 5.5, 8, 8),
    overall: 5.8,
    ceiling: "Level 2–3",
    cta: "Check GUVI's language options, fee and regional placement terms →",
  },
  {
    rank: 10,
    name: "PW Skills — Data Science with GenAI",
    positioning: "The lowest-risk structured entry in Indian AI education",
    overview:
      "At ₹5,000–₹30,000 [VERIFY], PW Skills is recorded-first with live doubt sessions and an unusually large peer community in Hindi and English. Its honest description is the best first ₹10,000 you can spend on AI, not the last.",
    curriculum:
      "Python, data analysis, introductory ML and a GenAI module covering prompting and basic LLM application work. Fine-tuning, agent frameworks and MLOps are effectively absent.",
    depthVerdict: "Entry level throughout; the premium-pay rows of Table 2 are not covered.",
    money: "₹5,000–₹30,000 [VERIFY]; 6–10 months; EMI available but rarely necessary at this price.",
    prereq: "None. Recorded-first with live doubt sessions on IST evenings, 8–12 hours a week.",
    projects: "Guided projects suitable for a first portfolio; no human code review at scale.",
    placement: "A job portal and community referrals rather than a placement operation.",
    outcomes:
      "Entry data and AI-adjacent roles; indicative bands [VERIFY]. Treat a second, deeper investment as part of the plan.",
    roi: "The financial risk is small enough that the main cost is your time — which is exactly why the curriculum's currency matters.",
    strengths: [
      "Lowest financial risk of any structured option here",
      "Large, active peer community",
      "Hindi-English delivery lowers the entry barrier",
      "Good for testing whether you enjoy the work at all",
    ],
    limitations: [
      "No fine-tuning, agents or MLOps",
      "Doubt-session quality varies with batch size",
      "No meaningful placement or interview support",
      "Requires a follow-on program to reach hiring-grade AI bands",
    ],
    bestFor: ["Budget-first beginners", "Students testing interest", "Anyone unsure about a ₹2L commitment"],
    avoidIf: ["You need production depth now", "You want placement support", "You already code professionally"],
    ratings: r(4, 4, 4.5, 3.5, 8.5, 7.5),
    overall: 5.2,
    ceiling: "Level 2–3",
    cta: "Start with PW Skills only if you plan a deeper second step →",
  },
];
