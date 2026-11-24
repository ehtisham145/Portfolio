const GITHUB = "https://github.com/ehtisham145";

export const profile = {
  name: "Ehtisham Iftikhar",
  title: "AI Engineer & Full-Stack Developer",
  tagline: "I build, test and deploy production software",
  location: "Lahore, Pakistan",
  summary:
    "I design, build and deploy production software end to end: multi-tenant SaaS platforms with Django and Next.js, and RAG systems and AI agents with the guardrails real users need.",
  availability: "Open to freelance & full-time roles",
  education: {
    degree: "BS Data Science",
    school: "Virtual University of Pakistan",
    status: "In progress",
  },
  focus: ["RAG & AI agents", "Multi-tenant SaaS", "CI/CD & deployment"],
  email: "ehtisham2406@gmail.com",
  whatsapp: "923271141797",
  linkedin: "https://www.linkedin.com/in/ehtisham-iftikhar-4b6b86309/",
  github: GITHUB,
  website: "https://e-numerak.com/",
  // PDF file inside /public. Set to null to hide all resume buttons.
  resume: "Ehtisham_Iftikhar_Resume.pdf",
  // Bump this whenever the resume PDF changes, so browsers fetch the new file instead of a cached one.
  resumeVersion: "2026-11-24",
  about: [
    "I'm a full-stack developer and AI engineer based in Lahore, Pakistan. I'm pursuing a BS in Data Science at Virtual University of Pakistan while building and shipping production software for real clients.",
    "I work across the whole product lifecycle: designing backend systems, building clean interfaces, integrating AI where it adds real value, and deploying to production. I care about reliability, so I test, load-test and automate what I ship.",
    "On the AI side, I build Retrieval-Augmented Generation (RAG) pipelines, vector search and LLM agents, with guardrails and privacy controls that make them safe for production.",
  ],
};

export const resumeUrl = profile.resume
  ? `${import.meta.env.BASE_URL}${profile.resume}?v=${profile.resumeVersion}`
  : null;

export const stats = [
  { value: "2–3", label: "Years shipping production software" },
  { value: "20+", label: "Public repositories on GitHub" },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "AI Merak Tax Consultant LLC",
    period: "Nov 2024 – Present",
    location: "On-site, Lahore",
    points: [
      { label: "E-Numerak", text: "build and ship features for a live UAE e-invoicing and VAT compliance platform." },
      { label: "Qomunix", text: "built the company's internal CRM, a custom portal on the WhatsApp Business API that gives managers visibility into employee–client conversations." },
      { label: "AML", text: "integrated the Didit API into an Anti-Money Laundering platform for live KYC identity verification." },
      "Take applications from local development to production: CI/CD pipelines, Docker containers and Linux servers.",
      "Load-test APIs with Grafana k6 and support research on new products and AI features.",
    ],
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "LessonLab",
    period: "Jul 2026 – Present",
    location: "Remote",
    points: [
      "Building LessonLab end to end for a client: a multi-tenant school management SaaS for private schools in Saudi Arabia.",
      "Backend with Django, DRF, PostgreSQL, Redis and Celery; frontend with Next.js and TypeScript, in Arabic and English (RTL).",
      "Built AI lesson-plan generation, role-based access, and a teacher app with trial and paid plans.",
      "Set up the CI/CD pipeline and deployed the platform to production on Oracle Cloud (OCI).",
    ],
  },
];

export const projects = [
  {
    title: "LessonLab",
    subtitle: "School Management SaaS",
    description:
      "A multi-tenant platform that runs the daily operations of private schools in Saudi Arabia, in Arabic and English.",
    problem:
      "Schools juggle attendance, classes, staff and lesson planning across scattered tools.",
    solution:
      "One secure platform with full data isolation per school, role-based access, and AI-generated lesson plans for teachers.",
    role: "Sole developer, from design and backend to frontend, CI/CD and production deployment on Oracle Cloud.",
    tags: ["Django", "DRF", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Celery", "Docker", "GitHub Actions", "Oracle Cloud"],
    link: "https://staging.lessonlab.me/",
    repo: `${GITHUB}/School-Management-Saas`,
  },
  {
    title: "Zero-Trust Clinical EHR Assistant",
    subtitle: "Privacy-first RAG for health records",
    description:
      "A RAG system that lets clinicians query Electronic Health Records in plain language, without exposing patient data to the LLM.",
    problem:
      "Clinical records are hard to search, and sending patient data to an external LLM is a serious privacy risk.",
    solution:
      "Semantic search over MIMIC-IV with pgvector and BioClinical ModernBERT embeddings. Microsoft Presidio masks all PHI/PII before the LLM sees it, NVIDIA NeMo Guardrails block medical advice, and each chat session is locked to one patient.",
    role: "Built it on my own: data ingestion, embedding pipeline, redaction, guardrails, FastAPI backend and Streamlit UI.",
    tags: ["Python", "FastAPI", "pgvector", "OpenAI", "Hugging Face", "Presidio", "NeMo Guardrails", "Streamlit"],
    link: null,
    repo: `${GITHUB}/Secure-EHR-Patient-Chatbot`,
  },
  {
    title: "E-Numerak",
    subtitle: "UAE E-Invoicing & VAT Compliance",
    description:
      "A live multi-tenant SaaS that lets UAE businesses create, validate, digitally sign and transmit PEPPOL BIS 3.0 / UBL 2.1 tax invoices to the Federal Tax Authority.",
    problem: "UAE businesses need FTA-compliant e-invoicing, with VAT and Excise handled correctly and no manual errors.",
    solution:
      "Full invoice lifecycle with real-time compliance validation, async processing on Celery queues and a complete audit trail, plus a RAG-based AI Tax Chatbot (pgvector) that answers VAT and invoicing questions.",
    role: "Contributing developer on invoicing and compliance features; built the AI Tax Chatbot and handle production deployment.",
    tags: ["Django", "DRF", "Next.js", "PostgreSQL", "Redis", "Celery", "pgvector", "Docker"],
    link: "https://e-numerak.com/",
    repo: null,
  },
  {
    title: "AML",
    subtitle: "Anti-Money Laundering & KYC",
    description:
      "A multi-tenant compliance SaaS for UAE-regulated businesses: customer onboarding, identity verification, AML/sanctions screening, risk scoring and audit logging.",
    problem: "Manual identity checks and AML screening are slow, error-prone and hard to audit.",
    solution:
      "Real-time document verification, face match, liveness checks and AML screening through the Didit API, with webhook-driven status updates into the compliance workflow.",
    role: "Feature development, Didit API integration and end-to-end production deployment.",
    tags: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Didit API"],
    link: "https://e-amli.com/",
    repo: null,
  },
];

export const moreProjects = [
  {
    title: "Qomunix WhatsApp CRM",
    description:
      "Multi-agent CRM on the Meta WhatsApp Business API that moves sales chats to one secured company number and gives management daily visibility into deals.",
    tags: ["WhatsApp Business API", "Docker", "Linux VPS"],
    link: "https://qomunix.com",
    repo: null,
  },
  {
    title: "WhatsApp AI Agent Platform",
    description:
      "Multi-tenant WhatsApp AI agent platform where each business is a config file, not a code fork.",
    tags: ["FastAPI", "Meta Cloud API", "OpenAI"],
    link: null,
    repo: `${GITHUB}/Whatsapp-Agent`,
  },
  {
    title: "Autonomous Coding Agent",
    description:
      "Terminal-based AI coding assistant using a ReAct loop with native tool-calling to read, write and patch files.",
    tags: ["Python", "Groq", "Llama 3.3", "Typer"],
    link: null,
    repo: `${GITHUB}/Coding_Agent`,
  },
  {
    title: "AI Calling Bot",
    description:
      "Bilingual (Arabic/English) AI voice receptionist for Saudi clinics that answers patient inquiries and books appointments.",
    tags: ["Python", "Voice AI", "Arabic/English"],
    link: null,
    repo: `${GITHUB}/AI_Calling_Bot`,
  },
  {
    title: "E-Numerak Monitoring System",
    description:
      "Self-hosted uptime monitor for E-Numerak's live services that sends a WhatsApp alert the moment a service goes down or recovers.",
    tags: ["JavaScript", "Monitoring", "WhatsApp Alerts"],
    link: "https://e-numerak-monitoring-system.vercel.app",
    repo: `${GITHUB}/E-Numerak-Monitoring-System`,
  },
  {
    title: "Royal Stationers POS",
    description:
      "Billing, multi-store stock and import software for a wholesale stationery business, replacing their old desktop MIS.",
    tags: ["React", "Supabase", "Vercel"],
    link: "https://royal-stationary-pos.vercel.app",
    repo: `${GITHUB}/Royal-Stationary-Invoicing-Software`,
  },
];

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "SQL"],
  Backend: ["Django", "DRF", "FastAPI", "PostgreSQL", "Redis", "Celery"],
  Frontend: ["Next.js", "React", "Streamlit"],
  "AI / ML": ["RAG", "AI Agents", "OpenAI", "Hugging Face", "pgvector", "scikit-learn", "PyTorch"],
  "DevOps & Cloud": ["Oracle Cloud (OCI)", "AWS", "Microsoft Azure", "Linux", "Docker", "Git", "GitHub Actions", "CI/CD", "Grafana k6"],
  Automation: ["n8n", "LangChain", "LangGraph", "WhatsApp Business API"],
};

export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    url: "https://www.coursera.org/account/accomplishments/verify/LNP12BKSA9OU",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    url: "https://www.coursera.org/account/accomplishments/verify/4JAMLLD011WC",
  },
  {
    name: "Prompt Engineering",
    issuer: "Vanderbilt University",
    url: "https://www.coursera.org/account/accomplishments/verify/5CHHDGXN05AQ",
  },
  {
    name: "REST API Development",
    issuer: "IBM",
    url: "https://www.coursera.org/account/accomplishments/verify/ROIJ11ITA75H",
  },
];
