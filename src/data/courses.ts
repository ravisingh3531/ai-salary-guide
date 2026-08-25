export type Depth =
  | "Comprehensive"
  | "Deep"
  | "Good"
  | "Moderate"
  | "Basic"
  | "Limited"
  | "Not Covered";

export const COURSE_NAMES = [
  "LogicMojo",
  "Scaler",
  "upGrad",
  "Great Learning",
  "Intellipaat",
  "Simplilearn",
  "DeepLearning.AI",
  "IBM (Coursera)",
  "GUVI",
  "PW Skills",
] as const;

export const capabilityLadder = [
  {
    level: "0 — AI Aware",
    can: "Read about AI, used ChatGPT",
    market: "Baseline literacy, not a skill",
    band: "No premium",
    stops: "Free webinars, 2-day workshops",
  },
  {
    level: "1 — AI User",
    can: "Use AI tools well; strong prompting",
    market: "Useful in any job; not an AI role",
    band: "Marginal",
    stops: '"GenAI in 7 days", prompt workshops',
  },
  {
    level: "2 — AI Literate",
    can: "Understand training, embeddings, transformers, evaluation",
    market: "Passes a screening conversation",
    band: "Entry analyst bands [VERIFY]",
    stops: "MOOC intro tracks, survey programs",
  },
  {
    level: "3 — AI Builder",
    can: "Train models, build RAG apps, write real pipelines",
    market: "Entry bar for junior AI/ML roles",
    band: "[VERIFY: entry AI band]",
    stops: "Good bootcamps, strong self-paced tracks",
  },
  {
    level: "4 — AI Engineer",
    can: "Architect, fine-tune, evaluate, deploy, monitor",
    market: "Where competitive AI offers begin",
    band: "[VERIFY: mid AI band]",
    stops: "Programs with MLOps + deployment",
  },
  {
    level: "5 — AI Professional",
    can: "Own AI systems in production; make trade-off calls",
    market: "Mid/senior roles, premium territory",
    band: "[VERIFY: senior AI band]",
    stops: "Experience built on a Level 4 foundation",
  },
];

export const skillPremium = [
  ["Prompting & LLM API calls", "Baseline literacy — assumed", "None by itself"],
  ["Classical ML + evaluation rigour", "Assumed foundation", "Gatekeeper — its absence disqualifies"],
  ["Deep learning & transformers", "Expected for AI roles", "Qualifier for the band"],
  ["Production RAG (chunking, re-ranking, eval)", "Standard interview topic", "Differentiator"],
  ["Fine-tuning (LoRA/QLoRA, when-and-why)", "Scarce, in demand", "Premium"],
  ["AI agents, frameworks, MCP", "Fastest-growing requirement", "Premium"],
  ["MLOps/LLMOps + deployment", "The hired-vs-not line", "Strong premium"],
  ["Evaluation, guardrails, responsible AI", "Emerging expectation", "Differentiator, senior-band signal"],
];

export const methodology = [
  {
    weight: "25%",
    name: "Career Outcomes & Salary Potential",
    detail:
      "The highest role band the course can realistically unlock (its capability ceiling), the quality of outcome support, and how transparently any published outcome data is calculated.",
  },
  {
    weight: "20%",
    name: "Curriculum Depth & 2026 Relevance",
    detail:
      "Full stack through GenAI, RAG, agents and MLOps — and whether the content is genuinely current or 2023 material in a 2026 wrapper.",
  },
  {
    weight: "15%",
    name: "Hands-On Project Rigour",
    detail:
      "Build versus follow. Human code review, a deployed capstone, and a portfolio you can defend line-by-line in an interview.",
  },
  {
    weight: "15%",
    name: "Placement & Job Assistance Quality",
    detail:
      "AI-role-specific support versus generic career services: interview prep depth, portfolio review, and how placement claims are computed.",
  },
  {
    weight: "15%",
    name: "Value for Money & ROI",
    detail:
      "Capability per rupee and per hour, EMI and refund safety, and a realistic payback framing rather than a marketing one.",
  },
  {
    weight: "10%",
    name: "Delivery Quality & Flexibility",
    detail:
      "Live versus replay, mentorship access, IST fit, recordings, deferral options, and the odds a working professional actually finishes.",
  },
];

export const ranked = [
  {
    rank: 1,
    name: "LogicMojo — AI & Machine Learning Course",
    tag: "Best overall: deepest 2026 stack + live mentorship + strongest capability-per-rupee",
  },
  {
    rank: 2,
    name: "Scaler — Data Science, ML & AI Program",
    tag: "Best placement infrastructure for product-company pay bands",
  },
  {
    rank: 3,
    name: "upGrad — PGP in ML & AI (IIIT-Bangalore)",
    tag: "Best university credential for HR filters and internal mobility",
  },
  {
    rank: 4,
    name: "Great Learning — PGP-AIML (UT Austin / Great Lakes)",
    tag: "Best mentor-led weekend format for working professionals",
  },
  {
    rank: 5,
    name: "Intellipaat — Advanced Certification in AI & ML (IIT-affiliated)",
    tag: "Best IIT-tagged credential at mid-tier pricing",
  },
  {
    rank: 6,
    name: "Simplilearn — PGP in AI & ML (Purdue/IBM)",
    tag: "Best for employer-funded corporate upskilling",
  },
  {
    rank: 7,
    name: "DeepLearning.AI (Coursera)",
    tag: "Best foundations at near-zero cost; salary impact depends on what you build after",
  },
  {
    rank: 8,
    name: "IBM AI Engineering Certificate (Coursera)",
    tag: "Best low-cost applied engineering track",
  },
  {
    rank: 9,
    name: "GUVI (IIT-Madras incubated)",
    tag: "Best vernacular, Tier-2/3-accessible route into first tech roles",
  },
  {
    rank: 10,
    name: "PW Skills — Data Science with GenAI",
    tag: "Best ultra-affordable structured entry point",
  },
];

/* TABLE 1 */
export const overview = [
  ["1", "LogicMojo — AI & ML", "Live online (IST)", "₹XX,XXX [VERIFY]", "6–8 months", "Level 4–5", "Production GenAI + MLOps depth", "Working engineers targeting AI-engineer bands"],
  ["2", "Scaler — DS, ML & AI", "Live + structured cohort", "₹3,00,000–₹4,00,000 [VERIFY]", "11–18 months", "Level 4", "Product-company placement engine", "Product/GCC aspirants who can commit 15–20 hrs/wk"],
  ["3", "upGrad — PGP ML & AI", "Live + recorded, academic cadence", "₹1,50,000–₹3,50,000 [VERIFY]", "12–18 months", "Level 3–4", "Credential for HR screens", "Enterprise professionals needing a degree-adjacent tag"],
  ["4", "Great Learning — PGP-AIML", "Weekend live mentor + recorded core", "₹1,50,000–₹2,75,000 [VERIFY]", "7–12 months", "Level 3–4", "Completable premium format", "Domain experts adding AI to existing expertise"],
  ["5", "Intellipaat — AI & ML", "Hybrid live/self-paced", "₹80,000–₹2,00,000 [VERIFY]", "9–11 months", "Level 3–4", "IIT tag at mid-tier price", "Services engineers wanting a recognised certificate"],
  ["6", "Simplilearn — PGP AI & ML", "Self-paced core + live masterclasses", "₹1,50,000–₹2,50,000 [VERIFY]", "11 months", "Level 3–4", "Employer-reimbursed credential", "Corporate learners with company funding"],
  ["7", "DeepLearning.AI", "Self-paced (Coursera)", "Free to audit / ~₹3,000–₹4,000 per month [VERIFY]", "3–6 months", "Level 2–3", "World-class conceptual foundation", "Self-directed learners with discipline"],
  ["8", "IBM AI Engineering", "Self-paced labs (Coursera)", "Free to audit / ~₹3,000–₹4,000 per month [VERIFY]", "3–6 months", "Level 2–3", "Applied lab practice, cheap", "People who already code"],
  ["9", "GUVI", "Vernacular live + recorded, mobile-first", "₹10,000–₹80,000 [VERIFY]", "4–9 months", "Level 2–3", "Language-barrier removal", "Tier-2/3 learners entering tech"],
  ["10", "PW Skills — DS with GenAI", "Recorded-first + live doubt sessions", "₹5,000–₹30,000 [VERIFY]", "6–10 months", "Level 2–3", "Lowest-risk structured entry", "Budget-first beginners"],
];

/* TABLE 2 — curriculum depth matrix */
export const curriculumRows: { skill: string; values: Depth[] }[] = [
  { skill: "Python / pandas / SQL", values: ["Comprehensive", "Deep", "Good", "Good", "Good", "Good", "Moderate", "Good", "Good", "Good"] },
  { skill: "Classical ML", values: ["Comprehensive", "Deep", "Deep", "Deep", "Good", "Good", "Comprehensive", "Good", "Moderate", "Moderate"] },
  { skill: "Model evaluation rigour", values: ["Deep", "Good", "Good", "Good", "Moderate", "Moderate", "Deep", "Moderate", "Basic", "Basic"] },
  { skill: "Deep learning fundamentals", values: ["Deep", "Good", "Good", "Good", "Good", "Good", "Comprehensive", "Deep", "Moderate", "Moderate"] },
  { skill: "Transformers & attention", values: ["Deep", "Moderate", "Moderate", "Moderate", "Moderate", "Basic", "Deep", "Good", "Basic", "Basic"] },
  { skill: "Applied NLP", values: ["Deep", "Good", "Good", "Good", "Good", "Moderate", "Deep", "Good", "Moderate", "Moderate"] },
  { skill: "PyTorch / TensorFlow", values: ["Deep", "Good", "Good", "Good", "Good", "Moderate", "Deep", "Deep", "Basic", "Moderate"] },
  { skill: "LLM fundamentals", values: ["Comprehensive", "Good", "Moderate", "Moderate", "Moderate", "Moderate", "Good", "Good", "Basic", "Moderate"] },
  { skill: "Advanced prompt engineering", values: ["Deep", "Good", "Good", "Good", "Good", "Good", "Good", "Good", "Moderate", "Good"] },
  { skill: "Embeddings & vector databases", values: ["Deep", "Moderate", "Moderate", "Moderate", "Moderate", "Basic", "Moderate", "Moderate", "Basic", "Basic"] },
  { skill: "RAG (basic → production)", values: ["Comprehensive", "Moderate", "Basic", "Moderate", "Moderate", "Basic", "Moderate", "Moderate", "Basic", "Basic"] },
  { skill: "Fine-tuning (SFT, LoRA, QLoRA)", values: ["Deep", "Basic", "Basic", "Basic", "Basic", "Not Covered", "Limited", "Limited", "Not Covered", "Not Covered"] },
  { skill: "AI agents & agentic patterns", values: ["Deep", "Moderate", "Basic", "Basic", "Moderate", "Basic", "Moderate", "Limited", "Not Covered", "Basic"] },
  { skill: "Agent frameworks (LangGraph, CrewAI, AutoGen)", values: ["Deep", "Basic", "Limited", "Limited", "Basic", "Limited", "Limited", "Not Covered", "Not Covered", "Limited"] },
  { skill: "MCP & tool integration", values: ["Good", "Limited", "Not Covered", "Not Covered", "Limited", "Not Covered", "Limited", "Not Covered", "Not Covered", "Not Covered"] },
  { skill: "Open-weight models (Llama, Mistral, Qwen, Gemma)", values: ["Deep", "Basic", "Basic", "Basic", "Basic", "Limited", "Moderate", "Basic", "Not Covered", "Basic"] },
  { skill: "MLOps (tracking, CI/CD, monitoring)", values: ["Deep", "Moderate", "Moderate", "Basic", "Moderate", "Basic", "Limited", "Moderate", "Basic", "Basic"] },
  { skill: "Deployment (Docker, FastAPI)", values: ["Deep", "Good", "Moderate", "Basic", "Good", "Basic", "Not Covered", "Moderate", "Basic", "Moderate"] },
  { skill: "Portfolio-grade projects (count)", values: ["Deep", "Good", "Good", "Good", "Good", "Moderate", "Basic", "Moderate", "Moderate", "Moderate"] },
];

/* TABLE 3 */
export const placement = [
  ["LogicMojo", "Career guidance + interview prep", "Yes — AI/ML role specific", "Deep, AI-role mock rounds", "Human review of code & capstone", "None claimed (honest)", "No bond, no ISA"],
  ["Scaler", "Full placement operation", "Partly — tech-broad, ML included", "Extensive mocks + referrals", "Yes, structured", "Provider-reported only", "No ISA; long EMI tenure"],
  ["upGrad", "Career services + hiring drives", "Generic tech/analytics", "Moderate", "Limited", "Provider-reported only", "No bond"],
  ["Great Learning", "Career support + job board", "Partly", "Moderate", "Mentor feedback, not code review", "Provider-reported only", "No bond"],
  ["Intellipaat", "Job assistance", "Generic", "Basic to moderate", "Limited", "Provider-reported only", "No bond"],
  ["Simplilearn", "Career services (light)", "Generic", "Basic", "No", "Provider-reported only", "No bond"],
  ["DeepLearning.AI", "None", "No", "No", "No", "None claimed (honest)", "None"],
  ["IBM (Coursera)", "None", "No", "No", "No", "None claimed (honest)", "None"],
  ["GUVI", "Regional placement support", "Entry tech roles", "Basic", "Limited", "Provider-reported only", "No bond"],
  ["PW Skills", "Job portal + community", "No", "Basic", "No", "Provider-reported only", "No bond"],
];

/* TABLE 4 */
export const fees = [
  ["LogicMojo", "₹XX,XXX [VERIFY]", "Yes", "Check current offer [VERIFY]", "[VERIFY: window]", "GST, batch-deferral terms", "Very high"],
  ["Scaler", "₹3,00,000–₹4,00,000 [VERIFY]", "Yes, 12–36 mo", "Partly [VERIFY]", "Cooling-off period [VERIFY]", "NBFC loan interest, GST, extension fees", "Moderate"],
  ["upGrad", "₹1,50,000–₹3,50,000 [VERIFY]", "Yes", "Often, on select tenures", "[VERIFY: window]", "GST, admission fee, re-attempt fees", "Moderate"],
  ["Great Learning", "₹1,50,000–₹2,75,000 [VERIFY]", "Yes", "Often", "[VERIFY: window]", "GST, alumni/campus module costs", "Moderate"],
  ["Intellipaat", "₹80,000–₹2,00,000 [VERIFY]", "Yes", "Often", "[VERIFY: window]", "GST, exam/certification fees", "Good"],
  ["Simplilearn", "₹1,50,000–₹2,50,000 [VERIFY]", "Yes", "Often", "[VERIFY: window]", "GST, upsell to add-on tracks", "Low if self-funded"],
  ["DeepLearning.AI", "Free to audit / ~₹3,000–₹4,000 per month [VERIFY]", "N/A", "N/A", "Cancel anytime", "Subscription creep across months", "Exceptional per rupee"],
  ["IBM (Coursera)", "Free to audit / ~₹3,000–₹4,000 per month [VERIFY]", "N/A", "N/A", "Cancel anytime", "Subscription creep, cloud credits", "Exceptional per rupee"],
  ["GUVI", "₹10,000–₹80,000 [VERIFY]", "Yes", "Sometimes", "[VERIFY: window]", "GST, placement-track add-ons", "Good"],
  ["PW Skills", "₹5,000–₹30,000 [VERIFY]", "Yes", "Sometimes", "[VERIFY: window]", "GST, paid mentorship add-ons", "Good at entry level"],
];

/* TABLE 5 */
export const roleMap = [
  ["LogicMojo", "AI Engineer, GenAI/LLM Engineer, ML Engineer, AI Agent Developer", "[VERIFY]", "Portfolio depth, deployment evidence, interview defence"],
  ["Scaler", "SDE-ML, ML Engineer at product/GCC", "[VERIFY]", "DSA + system design performance, placement-loop conversion"],
  ["upGrad", "Data Scientist, ML Engineer (enterprise)", "[VERIFY]", "Credential + domain fit, internal-mobility timing"],
  ["Great Learning", "Data Scientist, ML roles in domain/enterprise", "[VERIFY]", "Domain expertise + applied portfolio"],
  ["Intellipaat", "ML Engineer, Data Scientist (services/enterprise)", "[VERIFY]", "Deployment exposure, self-driven depth"],
  ["Simplilearn", "Internal AI/analytics mobility, AI-literate management", "[VERIFY]", "Employer context, promotion cycle"],
  ["DeepLearning.AI", "Foundation layer for any AI role", "[VERIFY]", "What you build independently after"],
  ["IBM (Coursera)", "Junior applied ML/AI roles", "[VERIFY]", "Portfolio extension beyond guided labs"],
  ["GUVI", "First tech/analyst roles, regional entry AI roles", "[VERIFY]", "English technical ramp, follow-on depth"],
  ["PW Skills", "Entry data/AI-adjacent roles", "[VERIFY]", "Second, deeper investment afterward"],
];

/* TABLE 6 */
export const prereqs = [
  ["LogicMojo", "Basic coding helpful; bridge available", "School-level maths; intuition taught", "Yes — Python + maths onboarding", "Live IST evenings/weekends", "10–15 hrs", "Yes, batch deferral"],
  ["Scaler", "Required — coding test to enter", "Comfortable with maths", "Partial", "Live IST, fixed cadence", "15–20 hrs", "Limited pause"],
  ["upGrad", "Preferred, not strict", "Basic statistics", "Yes", "Live weekends + recorded", "10–15 hrs", "Yes, cohort deferral [VERIFY]"],
  ["Great Learning", "Preferred", "Basic statistics", "Yes", "Weekend live mentor sessions (IST)", "8–12 hrs", "Yes [VERIFY]"],
  ["Intellipaat", "Basic coding", "Basic maths", "Partial", "Hybrid live/self-paced (IST)", "8–12 hrs", "Yes [VERIFY]"],
  ["Simplilearn", "Basic coding", "Basic maths", "Limited", "Self-paced + live masterclasses", "6–10 hrs", "Self-paced, so flexible"],
  ["DeepLearning.AI", "Python required for the DL track", "Linear algebra & calculus helpful", "No", "Fully self-paced, any timezone", "5–10 hrs", "Fully flexible"],
  ["IBM (Coursera)", "Python required", "Basic maths", "No", "Fully self-paced", "5–10 hrs", "Fully flexible"],
  ["GUVI", "None — beginner friendly", "None", "Yes", "Vernacular live + recorded (IST)", "8–12 hrs", "Yes [VERIFY]"],
  ["PW Skills", "None", "None", "Yes", "Recorded-first + live doubt (IST)", "8–12 hrs", "Flexible"],
];

/* Visual 2 */
export const gapTable = [
  ["Classical ML", "Algorithms demoed on clean toy datasets", "Can you justify model choice, leakage checks and metric selection?", "Built end-to-end with evaluation rigour enforced in code review"],
  ["Model evaluation", "Accuracy score printed at the end", "Precision/recall trade-offs, drift, offline vs online eval", "Evaluation treated as a first-class module, not a footnote"],
  ["Transformers", "One slide on attention", "Explain attention, tokenisation and context limits from memory", "Implemented and debugged in PyTorch"],
  ["Prompt engineering", "Marketed as the headline GenAI skill", "Assumed baseline; never the differentiator", "Covered fast, then treated as a foundation for systems"],
  ["RAG", "One notebook: embed, store, query", "Chunking strategy, hybrid search, re-ranking, RAG evaluation", "Production RAG built, measured and defended"],
  ["Fine-tuning", "Mentioned in a recorded lecture", "When to fine-tune vs prompt vs retrieve, and at what cost", "SFT and LoRA/QLoRA runs with DPO concepts"],
  ["Agents & frameworks", "A LangChain demo from 2023", "Reliability, tool use, failure handling, cost control", "LangGraph, CrewAI, AutoGen with reliability patterns"],
  ["MCP", "Absent", "Increasingly asked in tool-integration rounds", "Covered as part of tool integration"],
  ["MLOps & deployment", "Out of scope", "Can you run this as a monitored service?", "MLflow, FastAPI, Docker, CI/CD, LLM observability"],
  ["Portfolio defence", "Certificate issued", "Line-by-line interrogation of your own repo", "Human code review plus project-defence practice"],
];
