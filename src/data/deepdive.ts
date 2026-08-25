export type DeepDive = {
  rank: number;
  /** One-line answer to "why this course for a high-paying AI career in India". */
  thesis: string;
  /** Role → indicative market band. Bands belong to the role, never to the course. */
  salary: { role: string; band: string; note: string }[];
  prerequisites: string;
  /** Curriculum depth across the 2026 hiring stack. */
  stack: { area: string; detail: string; depth: "Deep" | "Good" | "Moderate" | "Basic" | "Not covered" }[];
  projects: { label: string; detail: string }[];
  support: { label: string; detail: string }[];
  teaching: string;
  mentorship: string;
  placementFacts: { label: string; detail: string }[];
  feedback: { background: string; role: string; company: string; band: string; note: string }[];
  industryReadiness: string;
};

const V = "[verify current — provider-published, re-check before paying]";

export const deepDives: DeepDive[] = [
  {
    rank: 1,
    thesis:
      "The deepest end-to-end 2026 AI stack on this list — classical ML through fine-tuning, agents and LLMOps — delivered live in IST cohorts with human code review, which is the combination that lets a working engineer interview credibly for AI Engineer and GenAI Engineer roles rather than analyst roles.",
    salary: [
      { role: "AI/ML Engineer (0–2 yrs relevant)", band: "₹6–14 LPA", note: "Entry band, metro product + services mix [verify current]" },
      { role: "AI Engineer / GenAI Engineer (3–6 yrs)", band: "₹18–35 LPA", note: "Production RAG + evaluation ownership [verify current]" },
      { role: "LLM / Agent Engineer (senior)", band: "₹30–55 LPA", note: "Thin supply; product companies and AI-native startups [verify current]" },
      { role: "MLOps / Platform Engineer", band: "₹16–32 LPA", note: "Deployment, monitoring, cost control [verify current]" },
    ],
    prerequisites:
      "Any engineering or quantitative background; non-CS graduates are onboarded through a Python + SQL + maths-intuition bridge before the ML block. No prior ML required. Comfortable with 10–15 hours a week for 6–8 months is the real prerequisite.",
    stack: [
      { area: "Python & software foundations", detail: "Python for data work, OOP, testing basics, Git/GitHub workflow, environment and dependency management.", depth: "Deep" },
      { area: "SQL & data engineering basics", detail: "Joins, window functions, query tuning, working with warehouses and Pandas/Polars pipelines.", depth: "Good" },
      { area: "Statistics & maths intuition", detail: "Distributions, hypothesis testing, linear algebra and calculus intuition tied directly to model behaviour rather than exam-style proofs.", depth: "Good" },
      { area: "Machine Learning", detail: "Regression, trees, boosting (XGBoost/LightGBM), clustering, feature engineering, leakage, cross-validation and metric selection — with evaluation rigour, the part interviews actually probe.", depth: "Deep" },
      { area: "Deep Learning", detail: "PyTorch, CNNs, RNNs, attention and transformer internals implemented rather than described.", depth: "Deep" },
      { area: "NLP", detail: "Tokenisation, embeddings, sequence models, transfer learning with Hugging Face, evaluation of text systems.", depth: "Deep" },
      { area: "Computer Vision", detail: "CNN architectures, transfer learning, detection/segmentation basics, multimodal touchpoints.", depth: "Good" },
      { area: "Generative AI & LLMs", detail: "Model families incl. open-weight models, local inference, context windows, structured outputs, cost and latency engineering.", depth: "Deep" },
      { area: "Prompt engineering", detail: "System design of prompts, few-shot, chain-of-thought patterns, guardrails — taught as a component, not the product.", depth: "Deep" },
      { area: "RAG & vector databases", detail: "Chunking strategy, embedding choice, hybrid search, re-ranking, FAISS/Chroma/Pinecone/pgvector, and RAG evaluation (faithfulness, context precision).", depth: "Deep" },
      { area: "LangChain / LangGraph & agents", detail: "Tool calling, state machines, multi-agent orchestration with LangGraph, CrewAI and AutoGen, plus MCP-style tool interfaces.", depth: "Deep" },
      { area: "Fine-tuning", detail: "SFT, LoRA/QLoRA, dataset curation, evaluation harnesses, and when fine-tuning is the wrong answer versus retrieval.", depth: "Deep" },
      { area: "MLOps / LLMOps", detail: "MLflow experiment tracking, FastAPI services, Docker, CI/CD, drift and cost monitoring, observability for LLM apps.", depth: "Deep" },
      { area: "Cloud & deployment", detail: "Containerised deployment, GPU/inference cost trade-offs, serving patterns on major cloud providers.", depth: "Good" },
    ],
    projects: [
      { label: "Progressive builds", detail: "10–15 graded builds, each one a component an interviewer can interrogate: an ML pipeline with honest validation, a transformer from scratch, a production RAG service with evaluation, a fine-tuned domain model, an agentic workflow with tools." },
      { label: "Capstone", detail: "Learner-designed capstone that must be deployed with a public endpoint, monitoring and a written design doc — notebooks are not accepted as a finished capstone." },
      { label: "Datasets", detail: "Real, messy datasets and domain corpora rather than curated toy sets; the failure modes are the teaching material." },
      { label: "Portfolio output", detail: "Every project documented for GitHub with README, architecture diagram, evaluation results and cost notes." },
    ],
    support: [
      { label: "Doubt clearing", detail: "In-session resolution plus a between-sessions mentor channel; recorded sessions with a structured catch-up path for missed weeks." },
      { label: "Peer group", detail: "Fixed cohort with weekly accountability; a working-professional peer set rather than an anonymous forum." },
      { label: "Teaching assistants", detail: "TA support for debugging and code review escalation alongside the instructor." },
      { label: "Flexibility", detail: "Batch deferral available; IST evening and weekend batches designed around Indian work hours." },
    ],
    teaching:
      "Step-by-step and cumulative: concept → live implementation → guided lab → graded build → review. Each module ends with a build that becomes a portfolio artefact, so the curriculum and the portfolio are the same object rather than two parallel workstreams.",
    mentorship:
      "Live instructor-led classes with direct instructor access, mentor channels between sessions and human code review on submissions. Portfolio and project-defence reviews are one-to-one.",
    placementFacts: [
      { label: "Model", detail: "Job assistance and career guidance — explicitly NOT a placement guarantee, no bond, no ISA. We state this plainly because we publish this page." },
      { label: "Interview preparation", detail: "AI-role-specific mock interviews: ML fundamentals, system design for AI, project-defence drills where your own capstone is attacked." },
      { label: "Resume & LinkedIn", detail: "Resume rewrite workshops that convert projects into outcome bullets, plus LinkedIn headline/About/featured-project optimisation for AI recruiter search terms." },
      { label: "Career counselling", detail: "Role-targeting sessions (AI Engineer vs Data Scientist vs MLOps), band expectations by city and company type, and negotiation framing." },
      { label: "Hiring partners", detail: "Alumni report offers across Indian product companies, GCCs and services firms; company names and outcome details are published as learner-submitted stories at logicmojo.com/success-story rather than as an aggregate placement percentage. No placement percentage is claimed here because we will not publish a denominator we cannot show." },
      { label: "Post-course support", detail: "Career support continues past the final module while you are actively interviewing [verify current duration with the counsellor in writing]." },
    ],
    feedback: [
      { background: "Java backend developer, 4 yrs, services firm, Pune", role: "AI Engineer", company: "Indian product company", band: "high-teens ₹ LPA band", note: "Switched on the strength of a deployed RAG service with an evaluation dashboard; source: learner story at logicmojo.com/success-story [verify current]" },
      { background: "Data analyst, 3 yrs, BFSI, Bengaluru", role: "Machine Learning Engineer", company: "GCC", band: "mid-teens ₹ LPA band", note: "Internal move after the MLOps module; learner-submitted story [verify current]" },
      { background: "Non-CS graduate, self-taught Python", role: "GenAI Engineer (junior)", company: "AI-native startup", band: "entry AI band", note: "Hired off an agentic workflow project defended in a live round; learner-submitted story [verify current]" },
    ],
    industryReadiness:
      "Tooling matches what 2026 job descriptions list: PyTorch, Hugging Face, LangChain/LangGraph, vector stores, MLflow, FastAPI, Docker and CI/CD. The measurable readiness signal is that graduates can answer 'why this chunk size', 'how did you evaluate it' and 'what did it cost per 1,000 requests' — the three questions that separate an AI engineer offer from an analyst offer.",
  },
  {
    rank: 2,
    thesis:
      "The strongest placement infrastructure on this list. If the binding constraint on your career is access to product-company interview loops rather than raw skill, this is the honest recommendation — you are buying a pipeline, and it is priced accordingly.",
    salary: [
      { role: "Software → ML Engineer switch", band: "₹14–28 LPA", note: "Product-company loops, strong DSA base [verify current]" },
      { role: "Data Scientist (2–5 yrs)", band: "₹12–24 LPA", note: "[verify current]" },
      { role: "Senior ML Engineer", band: "₹25–45 LPA", note: "[verify current]" },
    ],
    prerequisites:
      "Working professionals with coding experience; the program assumes and reinforces DSA. Freshers are accepted but the value concentrates for those with 1+ years of engineering experience.",
    stack: [
      { area: "Python & DSA", detail: "Substantial DSA and problem-solving track — genuinely useful because product-company loops still test it.", depth: "Deep" },
      { area: "SQL", detail: "Analytics-grade SQL with case-study style problems.", depth: "Deep" },
      { area: "Statistics", detail: "Inference, experimentation and A/B testing, which maps to product data-science interviews.", depth: "Deep" },
      { area: "Machine Learning", detail: "Broad supervised/unsupervised coverage with business framing and case studies.", depth: "Deep" },
      { area: "Deep Learning", detail: "Neural networks, CNNs, sequence models in TensorFlow/PyTorch.", depth: "Good" },
      { area: "NLP", detail: "Classical to transformer-era NLP.", depth: "Good" },
      { area: "Computer Vision", detail: "Standard CNN and transfer-learning coverage.", depth: "Moderate" },
      { area: "Generative AI & LLMs", detail: "GenAI electives and modules added to the core track.", depth: "Good" },
      { area: "RAG & vector databases", detail: "Covered at application level; less depth on re-ranking and evaluation than a specialist track.", depth: "Moderate" },
      { area: "Agents / LangGraph", detail: "Introductory-to-applied coverage [verify current syllabus].", depth: "Moderate" },
      { area: "Fine-tuning", detail: "Conceptual plus limited hands-on [verify current].", depth: "Basic" },
      { area: "MLOps", detail: "Deployment and pipeline modules; solid, not specialist-grade.", depth: "Good" },
    ],
    projects: [
      { label: "Case-study projects", detail: "Business-framed projects modelled on product-company problem statements." },
      { label: "Capstone", detail: "End-to-end capstone with mentor review." },
      { label: "Interview artefacts", detail: "Projects are explicitly shaped to survive product-company technical screens." },
    ],
    support: [
      { label: "Doubt clearing", detail: "Dedicated TA doubt-support with response SLAs — one of the better-run operations in Indian ed-tech." },
      { label: "Peer group", detail: "Large, active alumni and batch community; referral flow inside the community is a real asset." },
      { label: "Teaching assistants", detail: "Structured TA layer separate from instructors." },
    ],
    teaching: "Instructor-led live classes with graded assessments, milestone gates and heavy interview-pattern drilling.",
    mentorship: "1-on-1 mentorship with working engineers from product companies, scheduled at regular cadence — the highest-frequency personal mentorship on this list.",
    placementFacts: [
      { label: "Model", detail: "Structured placement/career services team with referrals into a partner network; assistance, not a guarantee — read the eligibility criteria before assuming coverage." },
      { label: "Hiring partners", detail: "Large partner network spanning Indian product companies, GCCs and startups [verify current list on the provider site]." },
      { label: "Placement percentage", detail: "Provider publishes outcome reports; treat any published percentage as computed on placement-eligible learners, not total enrolment. Ask for the denominator in writing." },
      { label: "Mock interviews", detail: "Multiple mock rounds with working engineers, plus DSA and system-design specific loops." },
      { label: "Resume / LinkedIn", detail: "Resume clinics and profile optimisation as part of career services." },
      { label: "Post-course support", detail: "Career services continue for a defined window after completion [verify current duration]." },
    ],
    feedback: [
      { background: "Service-company SDE, 3 yrs", role: "ML Engineer", company: "Product company, Bengaluru", band: "₹20 LPA+ band", note: "Publicly posted alumni outcomes on LinkedIn; verify individual claims yourself [verify current]" },
      { background: "Analyst, 2 yrs", role: "Data Scientist", company: "Fintech", band: "low-teens ₹ LPA band", note: "[verify current]" },
    ],
    industryReadiness:
      "Best-in-class for interview readiness at product companies; slightly behind a specialist AI track on the newest GenAI production tooling. If your target JD says 'RAG evaluation, LangGraph, LoRA', supplement it.",
  },
  {
    rank: 3,
    thesis:
      "A university-credentialed path (IIIT-Bangalore) that clears HR filters and internal promotion panels — valuable when the blocker is documentation rather than capability.",
    salary: [
      { role: "ML Engineer (post-PGP, with experience)", band: "₹12–24 LPA", note: "[verify current]" },
      { role: "Data Scientist", band: "₹10–20 LPA", note: "[verify current]" },
      { role: "AI lead / manager track", band: "₹22–40 LPA", note: "Credential helps on panels [verify current]" },
    ],
    prerequisites: "Graduate with basic maths; programming exposure recommended. Structured for working professionals over 12+ months.",
    stack: [
      { area: "Python & SQL", detail: "Foundations bootcamp before the core program.", depth: "Good" },
      { area: "Statistics", detail: "Solid academic-grade statistics module.", depth: "Deep" },
      { area: "Machine Learning", detail: "Broad, academically framed ML with specialisation tracks.", depth: "Deep" },
      { area: "Deep Learning", detail: "Specialisation-dependent depth.", depth: "Good" },
      { area: "NLP / CV", detail: "Available as specialisation electives.", depth: "Good" },
      { area: "Generative AI & LLMs", detail: "GenAI modules added to recent cohorts [verify current syllabus version].", depth: "Moderate" },
      { area: "RAG / agents / fine-tuning", detail: "Lighter than specialist tracks; treat as introductory.", depth: "Basic" },
      { area: "MLOps & cloud", detail: "Deployment modules present, depth varies by specialisation.", depth: "Moderate" },
    ],
    projects: [
      { label: "Industry projects", detail: "Multiple case-based industry projects across domains." },
      { label: "Capstone", detail: "Faculty-reviewed capstone with academic rigour on methodology and write-up." },
    ],
    support: [
      { label: "Doubt clearing", detail: "Student success managers plus scheduled doubt sessions." },
      { label: "Peer group", detail: "Large cohort community and alumni base across India." },
      { label: "Teaching assistants", detail: "TA-led problem-solving sessions." },
    ],
    teaching: "Recorded academic lectures plus live doubt and mentorship sessions; heavier reading and assessment load than pure bootcamps.",
    mentorship: "Group mentorship with industry mentors, plus a dedicated success manager for pacing and escalation.",
    placementFacts: [
      { label: "Model", detail: "Career services with a job-assistance framing; guarantee language varies by product SKU — read the specific contract." },
      { label: "Hiring partners", detail: "Broad hiring-partner network across Indian enterprises and GCCs [verify current]." },
      { label: "Mock interviews", detail: "Mock interviews and profile-building sessions included." },
      { label: "Resume / LinkedIn", detail: "Resume and LinkedIn workshops standard." },
      { label: "Post-course support", detail: "Defined placement-support window post-completion [verify current]." },
    ],
    feedback: [
      { background: "IT services, 6 yrs", role: "Senior Data Scientist", company: "Enterprise, Hyderabad", band: "high-teens ₹ LPA band", note: "Credential used for an internal band change [verify current]" },
    ],
    industryReadiness:
      "Strong on rigour and documentation, weaker on 2026 GenAI production tooling. Best when a formal credential unlocks something specific for you.",
  },
  {
    rank: 4,
    thesis:
      "A globally recognised university association (UT Austin / Great Lakes) with a long-running AIML program and a genuinely large Indian alumni network.",
    salary: [
      { role: "Data Scientist / ML Engineer", band: "₹10–22 LPA", note: "[verify current]" },
      { role: "AI consultant / analytics lead", band: "₹18–35 LPA", note: "Experience-dependent [verify current]" },
    ],
    prerequisites: "Graduates with 1+ years of work experience preferred; foundational Python provided.",
    stack: [
      { area: "Python & SQL", detail: "Pre-work foundations plus applied data handling.", depth: "Good" },
      { area: "Statistics", detail: "Applied statistics with business framing.", depth: "Deep" },
      { area: "Machine Learning", detail: "Comprehensive supervised/unsupervised coverage.", depth: "Deep" },
      { area: "Deep Learning / NLP / CV", detail: "Full modules for each with mentored labs.", depth: "Good" },
      { area: "Generative AI & LLMs", detail: "GenAI modules present in current cohorts [verify current].", depth: "Moderate" },
      { area: "RAG / agents / fine-tuning", detail: "Introductory coverage relative to specialist tracks.", depth: "Basic" },
      { area: "MLOps & cloud", detail: "Deployment coverage; not a platform-engineering track.", depth: "Moderate" },
    ],
    projects: [
      { label: "Mentored projects", detail: "A large count of guided projects across domains — the mentored-lab model is this program's differentiator." },
      { label: "Capstone", detail: "Industry capstone with mentor evaluation." },
    ],
    support: [
      { label: "Doubt clearing", detail: "Weekly mentored sessions in small groups — consistently the best-reviewed part of the program." },
      { label: "Peer group", detail: "Very large alumni network across Indian metros with active chapters." },
      { label: "Teaching assistants", detail: "Program managers plus mentor support." },
    ],
    teaching: "Recorded faculty content plus weekly live mentored sessions where you work problems with an industry mentor.",
    mentorship: "Small-group industry mentorship weekly — closest thing to 1-on-1 outside Scaler.",
    placementFacts: [
      { label: "Model", detail: "Career support and a job board; assistance rather than guarantee." },
      { label: "Hiring partners", detail: "Access to a recruiter network and career fairs [verify current]." },
      { label: "Mock interviews", detail: "Interview preparation sessions and profile reviews included." },
      { label: "Resume / LinkedIn", detail: "Resume building and LinkedIn optimisation workshops." },
      { label: "Post-course support", detail: "Alumni career services access after completion [verify current]." },
    ],
    feedback: [
      { background: "Mechanical engineer → analytics", role: "Data Scientist", company: "Consulting firm", band: "low-teens ₹ LPA band", note: "[verify current]" },
    ],
    industryReadiness: "Excellent classical ML and analytics readiness; supplement with GenAI production work if you target AI-engineer JDs.",
  },
  {
    rank: 5,
    thesis:
      "IIT-affiliated certification with an aggressive career-services operation; a reasonable middle path between credential and cost.",
    salary: [
      { role: "AI/ML Engineer", band: "₹8–18 LPA", note: "[verify current]" },
      { role: "Data Scientist", band: "₹8–16 LPA", note: "[verify current]" },
    ],
    prerequisites: "Graduates; foundational modules included for non-programmers.",
    stack: [
      { area: "Python & SQL", detail: "Foundation modules included.", depth: "Good" },
      { area: "Statistics & ML", detail: "Standard, broad coverage.", depth: "Good" },
      { area: "Deep Learning / NLP / CV", detail: "Covered with lab work.", depth: "Moderate" },
      { area: "Generative AI & LLMs", detail: "GenAI modules added; verify the syllabus version you are buying.", depth: "Moderate" },
      { area: "RAG / LangChain / agents", detail: "Applied-level introduction [verify current].", depth: "Basic" },
      { area: "MLOps & cloud", detail: "Deployment basics on cloud.", depth: "Moderate" },
    ],
    projects: [
      { label: "Industry projects", detail: "Multiple guided projects plus a capstone." },
    ],
    support: [
      { label: "Doubt clearing", detail: "24×7 support channel advertised — quality varies by batch [verify current]." },
      { label: "Peer group", detail: "Batch community plus alumni groups." },
    ],
    teaching: "Live instructor-led sessions with recordings and assignment gates.",
    mentorship: "Group mentorship and scheduled 1-on-1 career sessions.",
    placementFacts: [
      { label: "Model", detail: "Job assistance with an active placement cell; sales follow-up is heavy — get every promise in writing." },
      { label: "Hiring partners", detail: "Partner network claimed across enterprises [verify current]." },
      { label: "Mock interviews", detail: "Multiple mock rounds and profile-building support." },
      { label: "Resume / LinkedIn", detail: "Resume workshops and LinkedIn optimisation included." },
      { label: "Post-course support", detail: "Placement assistance window post-completion [verify current]." },
    ],
    feedback: [
      { background: "Support engineer, 3 yrs", role: "ML Engineer (junior)", company: "Mid-size IT firm", band: "high single-digit ₹ LPA band", note: "[verify current]" },
    ],
    industryReadiness: "Adequate for services-sector AI roles; thinner for product-company GenAI loops.",
  },
  {
    rank: 6,
    thesis:
      "The corporate-upskilling default: Purdue/IBM branding, structured delivery, and the easiest program on this list to get reimbursed by an employer.",
    salary: [
      { role: "AI/ML Engineer (enterprise)", band: "₹8–18 LPA", note: "[verify current]" },
      { role: "Internal upskill / promotion track", band: "10–30% increment typical", note: "Highly employer-dependent [verify current]" },
    ],
    prerequisites: "Graduates with basic programming exposure; foundational modules provided.",
    stack: [
      { area: "Python & SQL", detail: "Included as foundation modules.", depth: "Good" },
      { area: "ML & Deep Learning", detail: "Broad structured coverage with IBM labs.", depth: "Good" },
      { area: "NLP / CV", detail: "Module-level coverage.", depth: "Moderate" },
      { area: "Generative AI & LLMs", detail: "GenAI modules present [verify current version].", depth: "Moderate" },
      { area: "RAG / agents / fine-tuning", detail: "Light.", depth: "Basic" },
      { area: "MLOps & cloud", detail: "Cloud lab exposure, limited production depth.", depth: "Basic" },
    ],
    projects: [{ label: "Guided projects", detail: "Structured lab projects plus a capstone; lower autonomy than specialist tracks." }],
    support: [
      { label: "Doubt clearing", detail: "Scheduled doubt sessions and forums." },
      { label: "Peer group", detail: "Cohort forums; less community depth than Scaler or Great Learning." },
    ],
    teaching: "Blended live + self-paced with masterclasses; very predictable pacing for busy professionals.",
    mentorship: "Group mentoring sessions; limited individual attention.",
    placementFacts: [
      { label: "Model", detail: "Career assistance and a job-board style service; not a placement pipeline." },
      { label: "Mock interviews", detail: "Interview prep sessions included [verify current]." },
      { label: "Resume / LinkedIn", detail: "Resume assistance included." },
      { label: "Post-course support", detail: "Limited window [verify current]." },
    ],
    feedback: [
      { background: "Enterprise IT, 8 yrs", role: "AI solution lead (internal move)", company: "Global IT services", band: "internal band change", note: "Credential used for internal documentation [verify current]" },
    ],
    industryReadiness: "Good enterprise literacy and credentialing; weakest of the paid options on production GenAI engineering.",
  },
  {
    rank: 7,
    thesis:
      "World-class foundations for near-zero cost. Nothing on this list teaches deep learning intuition better per rupee — but there is no placement machinery whatsoever.",
    salary: [
      { role: "Depends entirely on your own portfolio", band: "n/a", note: "Bands come from the role you can defend, not from this certificate" },
    ],
    prerequisites: "Basic Python and comfort with self-direction. Discipline is the actual prerequisite.",
    stack: [
      { area: "Machine Learning", detail: "The canonical ML specialisation — conceptually the clearest teaching available anywhere.", depth: "Deep" },
      { area: "Deep Learning", detail: "Full DL specialisation including sequence models and CNNs.", depth: "Deep" },
      { area: "NLP", detail: "Dedicated NLP coverage.", depth: "Good" },
      { area: "Generative AI & LLMs", detail: "Short courses on LLM app patterns, RAG, agents and fine-tuning — excellent, but short-course scope.", depth: "Good" },
      { area: "MLOps", detail: "MLOps specialisation available separately.", depth: "Good" },
      { area: "Placement-oriented content", detail: "None.", depth: "Not covered" },
    ],
    projects: [{ label: "Course assignments", detail: "Guided notebooks; you must design and deploy your own portfolio projects on top — this is the gap that decides your outcome." }],
    support: [
      { label: "Doubt clearing", detail: "Community forums only." },
      { label: "Peer group", detail: "Global learner forums; no cohort accountability." },
    ],
    teaching: "Self-paced video with quizzes and labs; exceptional explanation quality, zero external accountability.",
    mentorship: "None.",
    placementFacts: [
      { label: "Model", detail: "No placement support, no career services, no interview prep. Stated clearly by the provider — which is itself a mark of honesty." },
    ],
    feedback: [
      { background: "Self-taught learner", role: "ML Engineer", company: "Startup", band: "varies widely", note: "Outcomes here are self-driven; no provider-published placement data exists [verify current]" },
    ],
    industryReadiness: "Foundation-grade. Pair it with a deployed portfolio and structured interview reps or it will not convert to an offer.",
  },
  {
    rank: 8,
    thesis:
      "The best low-cost applied AI-engineering certificate: hands-on Keras/PyTorch labs with an enterprise-recognised brand for HR screens.",
    salary: [{ role: "Entry AI/ML roles", band: "₹5–12 LPA", note: "Certificate supports the screen; portfolio decides the band [verify current]" }],
    prerequisites: "Basic Python; suits learners who already have some data exposure.",
    stack: [
      { area: "Python & ML", detail: "Applied ML with scikit-learn.", depth: "Good" },
      { area: "Deep Learning", detail: "Keras and PyTorch lab-heavy modules.", depth: "Good" },
      { area: "NLP / CV", detail: "Applied module coverage.", depth: "Moderate" },
      { area: "Generative AI & LLMs", detail: "GenAI content added to the certificate [verify current].", depth: "Moderate" },
      { area: "RAG / agents / fine-tuning", detail: "Introductory.", depth: "Basic" },
      { area: "MLOps", detail: "Light.", depth: "Basic" },
    ],
    projects: [{ label: "Labs + capstone", detail: "Hands-on labs and a capstone; portfolio-grade only if you extend and deploy them yourself." }],
    support: [
      { label: "Doubt clearing", detail: "Forums and peer review." },
      { label: "Peer group", detail: "Course discussion boards." },
    ],
    teaching: "Self-paced, lab-first sequencing.",
    mentorship: "None.",
    placementFacts: [{ label: "Model", detail: "No placement service. Brand recognition on the résumé is the entire career benefit." }],
    feedback: [{ background: "Fresher, tier-3 college", role: "Junior ML engineer", company: "Services firm", band: "entry band", note: "Certificate plus three self-built projects [verify current]" }],
    industryReadiness: "Good applied grounding at very low cost; you own the portfolio and interview work entirely.",
  },
  {
    rank: 9,
    thesis:
      "IIT-Madras-incubated, vernacular-friendly and priced for students — the most accessible structured entry point on this list.",
    salary: [{ role: "Entry data/AI roles", band: "₹4–9 LPA", note: "[verify current]" }],
    prerequisites: "Absolute beginners welcome; regional-language tracks available.",
    stack: [
      { area: "Python & SQL", detail: "Beginner-first foundations, well paced.", depth: "Good" },
      { area: "Statistics & ML", detail: "Core coverage with practice problems.", depth: "Moderate" },
      { area: "Deep Learning / NLP", detail: "Introductory modules.", depth: "Basic" },
      { area: "Generative AI", detail: "GenAI track available [verify current].", depth: "Basic" },
      { area: "MLOps / RAG / agents", detail: "Minimal.", depth: "Basic" },
    ],
    projects: [{ label: "Guided projects", detail: "Practice projects and a capstone at beginner scope." }],
    support: [
      { label: "Doubt clearing", detail: "Mentor support and community channels." },
      { label: "Peer group", detail: "Large Indian learner community, strong regional-language support." },
    ],
    teaching: "Structured beginner sequencing with practice-heavy assessment.",
    mentorship: "Group mentorship.",
    placementFacts: [
      { label: "Model", detail: "Placement assistance for eligible learners in specific programs; eligibility criteria matter — read them." },
      { label: "Mock interviews", detail: "Basic interview preparation included [verify current]." },
      { label: "Resume", detail: "Resume support included [verify current]." },
    ],
    feedback: [{ background: "B.Sc graduate, tier-2 city", role: "Data analyst → junior ML", company: "Startup", band: "entry band", note: "[verify current]" }],
    industryReadiness: "Gets a true beginner to employable-adjacent; you will need a second, deeper program for AI-engineer bands.",
  },
  {
    rank: 10,
    thesis:
      "The lowest-cost structured route with GenAI content included — remarkable value for a student budget, provided you supply the discipline.",
    salary: [{ role: "Entry data/AI roles", band: "₹4–10 LPA", note: "[verify current]" }],
    prerequisites: "Beginners; Hindi-friendly delivery suits many first-time learners.",
    stack: [
      { area: "Python & SQL", detail: "Solid beginner foundations.", depth: "Good" },
      { area: "Statistics & ML", detail: "Reasonable core ML coverage for the price.", depth: "Moderate" },
      { area: "Deep Learning / NLP", detail: "Introductory-to-applied.", depth: "Basic" },
      { area: "Generative AI & LLMs", detail: "GenAI modules included — unusual at this price point [verify current].", depth: "Moderate" },
      { area: "RAG / LangChain", detail: "Introductory.", depth: "Basic" },
      { area: "MLOps", detail: "Minimal.", depth: "Basic" },
    ],
    projects: [{ label: "Guided projects", detail: "Multiple guided projects; deployment is largely your responsibility." }],
    support: [
      { label: "Doubt clearing", detail: "Doubt-support portal with TA responses [verify current SLA]." },
      { label: "Peer group", detail: "Very large learner community." },
    ],
    teaching: "Recorded-first with live doubt sessions; extremely high learner-to-instructor ratio.",
    mentorship: "Limited; community-driven.",
    placementFacts: [
      { label: "Model", detail: "Job-assistance portal and resume support; treat placement claims at this price with appropriate scepticism." },
      { label: "Resume / interviews", detail: "Resume and basic interview preparation included [verify current]." },
    ],
    feedback: [{ background: "Final-year engineering student", role: "Data science intern → analyst", company: "Startup", band: "entry band", note: "[verify current]" }],
    industryReadiness: "Best-in-class rupees-to-syllabus ratio; weakest support density. Completion rate is the risk, not content.",
  },
];

export const deepDiveByRank = Object.fromEntries(deepDives.map((d) => [d.rank, d])) as Record<
  number,
  DeepDive
>;

export const VERIFY_NOTE = V;
