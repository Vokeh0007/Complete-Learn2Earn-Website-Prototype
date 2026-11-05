export type Service = {
  slug: string
  number: string
  title: string
  short: string
  description: string
  problems: string[]
  users: string[]
  provides: string[]
  format: string
  inputs: string[]
  outputs: string[]
  cta: string
  conditional?: boolean
}

export type Sector = {
  slug: string
  title: string
  short: string
  audience: string
  challenges: string[]
  themes: string[]
  image: string
  imageAlt: string
  cta: string
}

export const services: Service[] = [
  {
    slug: "institutional-training",
    number: "01",
    title: "Institutional Training",
    short: "Private training cohorts",
    description:
      "Private, commissioned training cohorts for staff, members and defined beneficiary groups.",
    problems: [
      "Dispersed teams need consistent skills",
      "Generic courses do not reflect institutional realities",
      "Leaders need participation evidence",
    ],
    users: [
      "Government agencies",
      "Regulated enterprises",
      "Member organisations",
    ],
    provides: [
      "Needs-led programme design",
      "Private learner groups",
      "Expert facilitation",
      "Progress oversight",
    ],
    format:
      "A defined cohort completes a planned blend of guided online learning, live sessions and practical activities.",
    inputs: [
      "Priority skills and target roles",
      "Cohort profile",
      "Internal policy or regulatory context",
    ],
    outputs: [
      "Agreed curriculum",
      "Facilitated learning activities",
      "Conditional completion and outcome report",
    ],
    cta: "Request a proposal",
  },
  {
    slug: "branded-academies",
    number: "02",
    title: "Branded Academies",
    short: "Enterprise learning",
    description:
      "Co-branded or managed learning programmes for institutions and their target audiences.",
    problems: [
      "Training is fragmented across a network",
      "Member groups need a shared learning standard",
      "Programme oversight is difficult",
    ],
    users: ["Apex bodies", "Professional associations", "Large institutions"],
    provides: [
      "Co-branded experience",
      "Custom curriculum",
      "Vetted experts",
      "Programme oversight",
    ],
    format:
      "A sponsoring institution works with Learn2Earn to coordinate structured learning for private cohorts.",
    inputs: [
      "Brand guidance",
      "Governance requirements",
      "Target learner cohort",
    ],
    outputs: [
      "Managed academy structure",
      "Tailored curriculum",
      "Illustrative reporting views",
    ],
    cta: "Ask about a branded academy",
  },
  {
    slug: "custom-content-localisation",
    number: "03",
    title: "Custom Content & Localisation",
    short: "Context-aware learning",
    description:
      "Training content adapted to institutional requirements, local contexts and relevant regulations.",
    problems: [
      "Existing content lacks local relevance",
      "Policies need practical translation",
      "Multiple roles need distinct examples",
    ],
    users: ["Regional programmes", "Compliance teams", "Development partners"],
    provides: [
      "Content adaptation",
      "Scenario writing",
      "Format planning",
      "Language scoping where confirmed",
    ],
    format:
      "Review, adaptation, expert validation and pilot delivery are agreed around the source material.",
    inputs: ["Existing materials", "Applicable policies", "Audience context"],
    outputs: [
      "Content blueprint",
      "Adapted modules",
      "Review and pilot recommendations",
    ],
    cta: "Discuss content localisation",
  },
  {
    slug: "training-delivery-experts",
    number: "04",
    title: "Training Delivery & Experts",
    short: "Expert-led facilitation",
    description:
      "Live sessions, recorded learning, workshops, mentoring and expert facilitation.",
    problems: [
      "Internal experts have limited delivery capacity",
      "Programmes need credible specialists",
      "Learners need guided practice",
    ],
    users: ["Programme managers", "HR and L&D teams", "Funded initiatives"],
    provides: [
      "Expert matching",
      "Facilitation plans",
      "Live or recorded delivery",
      "Cohort support",
    ],
    format:
      "Specialists are matched against a clear brief, reviewed for fit and supported through delivery.",
    inputs: ["Expertise required", "Delivery constraints", "Learner profile"],
    outputs: [
      "Expert shortlist",
      "Delivery plan",
      "Facilitated sessions and notes",
    ],
    cta: "Discuss delivery options",
  },
  {
    slug: "professional-development",
    number: "05",
    title: "Professional Development",
    short: "CPD pathways where authorised",
    description:
      "Professional skills development and continuing development pathways where authorised.",
    problems: [
      "Skills pathways are unclear",
      "Teams need transferable capabilities",
      "Development activity needs structure",
    ],
    users: ["Professional bodies", "Employers", "Individual professionals"],
    provides: [
      "Skills pathways",
      "Applied workshops",
      "Mentoring options",
      "Conditional CPD alignment",
    ],
    format:
      "Modular learning is tailored to role, sector and any confirmed professional framework.",
    inputs: [
      "Target competencies",
      "Career stages",
      "Authorised framework where applicable",
    ],
    outputs: [
      "Learning pathway",
      "Practical activities",
      "Completion evidence where agreed",
    ],
    cta: "Explore professional tracks",
  },
  {
    slug: "consulting-advisory",
    number: "06",
    title: "Consulting & Advisory",
    short: "Learning strategy",
    description:
      "Skills assessments, learning strategies, curriculum planning and learning technology advisory.",
    problems: [
      "Skills gaps are not clearly evidenced",
      "Learning investments lack a roadmap",
      "Change initiatives need capability planning",
    ],
    users: [
      "Institutional leaders",
      "Programme offices",
      "People and strategy teams",
    ],
    provides: [
      "Skills diagnosis",
      "Learning strategy",
      "Curriculum planning",
      "Change advisory",
    ],
    format:
      "A scoped discovery combines stakeholder input, evidence review and practical recommendations.",
    inputs: [
      "Strategic priorities",
      "Available workforce data",
      "Stakeholder access",
    ],
    outputs: [
      "Skills audit",
      "Curriculum blueprint",
      "Prioritised learning roadmap",
    ],
    cta: "Discuss your project",
  },
  {
    slug: "digital-workflows",
    number: "07",
    title: "Digital Workflows",
    short: "Conditional workflow options",
    description:
      "Potential digital signatures, credentials and approval workflows, subject to confirmed scope.",
    problems: [
      "Approvals rely on manual handoffs",
      "Credential processes are difficult to trace",
      "Programme records sit across systems",
    ],
    users: [
      "Regulated bodies",
      "Programme administrators",
      "Credentialing partners",
    ],
    provides: [
      "Workflow discovery",
      "Pilot mapping",
      "Conditional credentials",
      "Implementation advisory",
    ],
    format:
      "Availability, integration, legal fit and pilot boundaries must be confirmed before any delivery commitment.",
    inputs: [
      "Current process map",
      "Compliance constraints",
      "Systems landscape",
    ],
    outputs: [
      "Feasibility view",
      "Pilot workflow design",
      "Conditional implementation scope",
    ],
    cta: "Enquire about workflow solutions",
    conditional: true,
  },
  {
    slug: "assessment-outcomes",
    number: "08",
    title: "Assessment & Outcomes",
    short: "Learning evidence",
    description:
      "Pre/post assessment, completion reporting, progress insights and institutional oversight.",
    problems: [
      "Completion alone does not show learning",
      "Leaders lack cohort-level visibility",
      "Reporting is time-consuming",
    ],
    users: ["Programme sponsors", "Donors", "L&D and compliance teams"],
    provides: [
      "Baseline assessment",
      "Progress monitoring",
      "Completion summaries",
      "Outcome reporting",
    ],
    format:
      "Assessment design and reporting measures are agreed against the programme's intended competencies.",
    inputs: ["Success measures", "Learner roster", "Reporting requirements"],
    outputs: [
      "Assessment framework",
      "Progress dashboard",
      "Illustrative or agreed outcome report",
    ],
    cta: "Discuss assessment & reporting",
  },
]

export const sectors: Sector[] = [
  {
    slug: "agriculture-development",
    title: "Agriculture Development",
    short:
      "Strengthen field capability, compliance and resilient agricultural value chains.",
    audience:
      "Agricultural ministries, boards, producer groups, agribusinesses and agriculture-focused donors.",
    challenges: [
      "Reaching dispersed producers and extension teams",
      "Turning standards into practical field behaviours",
      "Building digital and financial capability",
    ],
    themes: [
      "Digital agricultural extension",
      "Good Agricultural Practice and export compliance",
      "Agricultural finance",
      "Smallholder financial and digital literacy",
    ],
    image:
      "https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "A farmer tending crops in a green field",
    cta: "Discuss agriculture training",
  },
  {
    slug: "manufacturing-industrialisation-real-estate",
    title: "Manufacturing, Industrialisation & Real Estate",
    short:
      "Build safer operations, technical capability and quality-led growth.",
    audience:
      "Manufacturers, industrial associations, contractor bodies, property developers and housing agencies.",
    challenges: [
      "Maintaining safety across diverse worksites",
      "Keeping technical practice consistent",
      "Embedding quality and productivity habits",
    ],
    themes: [
      "Workplace safety",
      "Technical training",
      "Contractor and construction safety",
      "Building codes",
      "Industrial productivity and quality management",
    ],
    image:
      "https://images.unsplash.com/photo-1637997840862-9aafaf835eed?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "A group of professionals working at sewing machines",
    cta: "Discuss industry training",
  },
  {
    slug: "healthcare-nutrition",
    title: "Healthcare & Nutrition",
    short:
      "Support consistent practice, quality improvement and community health delivery.",
    audience:
      "Health ministries, public health agencies, professional bodies, health facilities and nutrition programme funders.",
    challenges: [
      "Keeping practice aligned with evolving standards",
      "Reaching facility and community-based teams",
      "Documenting professional learning",
    ],
    themes: [
      "CME/CPD where authorised",
      "Community health and nutrition",
      "Pharmacovigilance",
      "Digital health records and quality practices",
    ],
    image:
      "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "A healthcare professional reviewing information with a patient",
    cta: "Discuss health training",
  },
  {
    slug: "financial-inclusion-services",
    title: "Financial Inclusion & Financial Services",
    short:
      "Advance trusted services, sound governance and responsible financial access.",
    audience:
      "Banks, SACCOs, microfinance institutions, regulators and financial inclusion programmes.",
    challenges: [
      "Managing fast-changing compliance requirements",
      "Reducing cyber and operational risk",
      "Extending responsible services to communities",
    ],
    themes: [
      "AML/KYC compliance",
      "Cybersecurity",
      "Agency banking and mobile money",
      "Governance",
      "Financial literacy for SMEs and communities",
    ],
    image:
      "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1200&q=82",
    imageAlt: "Professionals collaborating in a modern office",
    cta: "Discuss financial training",
  },
]

export const audiences = [
  {
    slug: "government-public-sector",
    title: "Government & Public Sector",
    summary:
      "Support public mandates, compliance, field-worker capacity and auditable training results.",
    points: [
      "Public mandate alignment",
      "Field workforce capability",
      "Structured oversight and reporting",
    ],
    cta: "Discuss a public-sector programme",
    org: "Government / Public Agency",
  },
  {
    slug: "associations-apex-bodies",
    title: "Associations & Apex Bodies",
    summary:
      "Coordinate member training and co-branded academies across enterprises, chapters and professional cohorts.",
    points: [
      "Shared learning standards",
      "Member-wide coordination",
      "Co-branded academy options",
    ],
    cta: "Discuss a member academy",
    org: "Association / Apex Body",
  },
  {
    slug: "private-businesses",
    title: "Private Businesses",
    summary:
      "Build workforce skills across operations, cybersecurity, safety, finance and compliance.",
    points: [
      "Role-based capability",
      "Practical delivery",
      "Documented completion",
    ],
    cta: "Discuss workforce training",
    org: "Private Enterprise",
  },
  {
    slug: "development-organisations",
    title: "Development Organisations & Donors",
    summary:
      "Plan funded training for dispersed communities with realistic access choices and donor-ready reporting.",
    points: [
      "Mixed-connectivity planning",
      "Implementation stages",
      "Outcome reporting",
    ],
    cta: "Discuss a funded programme",
    org: "Development Organisation / NGO / Donor",
  },
  {
    slug: "academic-professional-institutions",
    title: "Academic & Professional Institutions",
    summary:
      "Collaborate on professional learning, staff development and approved CPD partnerships.",
    points: [
      "Curriculum collaboration",
      "Staff capability",
      "Conditional CPD pathways",
    ],
    cta: "Discuss an academic partnership",
    org: "Academic / Professional Institution",
  },
]

export const process = [
  ["Diagnose", "Understand skills gaps and institutional requirements."],
  ["Design", "Shape the curriculum, programme and delivery approach."],
  ["Deliver", "Facilitate learning through suitable agreed methods."],
  ["Assess", "Evaluate progress against agreed competencies."],
  ["Certify", "Support completion or certification where applicable."],
  ["Report", "Present participation, progress and outcome information."],
]

export const programmes = [
  {
    slug: "aml-practice",
    title: "AML/KYC Practice for Frontline Teams",
    sector: "Financial Inclusion & Financial Services",
    audience: "Compliance and operations teams",
    format: "Blended cohort",
    status: "Illustrative availability",
    duration: "6 weeks",
    outcomes: [
      "Recognise core customer due-diligence risks",
      "Apply escalation steps to practical scenarios",
      "Document decisions consistently",
    ],
    outline: ["Risk foundations", "Customer due diligence", "Scenario lab"],
    eligibility: "Professionals working in regulated financial services.",
  },
  {
    slug: "digital-extension",
    title: "Digital Extension for Agricultural Field Teams",
    sector: "Agriculture Development",
    audience: "Extension officers and programme teams",
    format: "Mobile-friendly cohort",
    status: "Illustrative availability",
    duration: "4 weeks",
    outcomes: [
      "Plan digital extension touchpoints",
      "Select fit-for-context content formats",
      "Use field feedback to improve delivery",
    ],
    outline: ["Audience mapping", "Digital content", "Field measurement"],
    eligibility: "Agriculture extension or programme delivery roles.",
  },
  {
    slug: "health-quality",
    title: "Quality Practice in Community Health Delivery",
    sector: "Healthcare & Nutrition",
    audience: "Community health programme teams",
    format: "Facilitated online",
    status: "Illustrative availability",
    duration: "5 weeks",
    outcomes: [
      "Identify quality risks",
      "Use practical improvement tools",
      "Record programme learning",
    ],
    outline: [
      "Quality principles",
      "Community scenarios",
      "Improvement planning",
    ],
    eligibility: "Health programme staff; CPD status not implied.",
  },
  {
    slug: "workplace-safety",
    title: "Workplace Safety for Growing Enterprises",
    sector: "Manufacturing, Industrialisation & Real Estate",
    audience: "Supervisors and operations teams",
    format: "Workshop series",
    status: "Illustrative availability",
    duration: "3 workshops",
    outcomes: [
      "Recognise common worksite risks",
      "Lead a practical safety conversation",
      "Build an action register",
    ],
    outline: ["Hazard awareness", "Team routines", "Action planning"],
    eligibility: "Operational and supervisory staff.",
  },
]

export const articles = [
  {
    slug: "designing-private-cohorts",
    category: "Learning Guides",
    date: "18 June 2025",
    time: "6 min read",
    title: "Designing private learning cohorts that fit institutional reality",
    excerpt:
      "A practical guide to matching programme structure, expert support and assessment to a defined workforce.",
    tags: ["Programme design", "SPOCs"],
    technical: false,
  },
  {
    slug: "low-data-training",
    category: "Sector Briefs",
    date: "04 June 2025",
    time: "5 min read",
    title: "Low-data does not mean low-engagement",
    excerpt:
      "Four programme decisions that make digital learning more practical for dispersed teams.",
    tags: ["Access", "Delivery"],
    technical: false,
  },
  {
    slug: "assessment-beyond-completion",
    category: "Learning Guides",
    date: "21 May 2025",
    time: "7 min read",
    title: "Assessment beyond course completion",
    excerpt:
      "How institutions can define useful learning evidence before a programme begins.",
    tags: ["Assessment", "Reporting"],
    technical: true,
  },
  {
    slug: "building-sector-academies",
    category: "Company Updates",
    date: "08 May 2025",
    time: "4 min read",
    title: "Why sector academies need both standards and local context",
    excerpt:
      "A perspective on coordinated learning across professional and industry networks.",
    tags: ["Academies", "Associations"],
    technical: false,
  },
]

export const faqs = [
  [
    "Commissioning Training",
    "How does an institutional programme begin?",
    "We begin with a scoped conversation about your audience, priorities, constraints and intended outcomes. Any proposed format, schedule or price follows that discovery.",
  ],
  [
    "Private Cohorts and SPOCs",
    "What is a private learning cohort?",
    "It is commissioned online or blended training for a defined organisation or audience. Access, content and support are planned around that group rather than a public marketplace.",
  ],
  [
    "Sector Programmes",
    "Are sector themes fixed courses?",
    "No. Themes shown on this prototype are illustrative and are tailored per client after the relevant requirements are understood.",
  ],
  [
    "Certificates",
    "Are certificates or CPD points guaranteed?",
    "No. Completion evidence, certification and CPD/CME recognition depend on the programme scope and any authorised partner or regulator requirements.",
  ],
  [
    "Eligibility",
    "Can individual professionals apply?",
    "Individuals may request information about confirmed public programmes. The prototype catalogue is illustrative and does not show confirmed live availability.",
  ],
  [
    "Programme Delivery",
    "Is offline or SMS learning included?",
    "Not automatically. Mobile-friendly and low-data choices can be scoped, while offline, SMS, chatbot or multilingual delivery must be explicitly confirmed.",
  ],
  [
    "Privacy and Enquiries",
    "What happens to information entered here?",
    "This prototype does not send or store submissions. Final data handling terms and contact channels require management and legal approval.",
  ],
]

export const cases = [
  {
    title: "Coordinated member academy",
    challenge:
      "An apex body needs consistent capability across a varied membership.",
    audience: "Associations, regional chapters and member enterprises",
    activities: [
      "Needs mapping",
      "Co-branded curriculum",
      "Facilitated private cohorts",
    ],
    outputs: [
      "Shared learning pathway",
      "Participation summary",
      "Recommended next-stage plan",
    ],
  },
  {
    title: "Field-team capability programme",
    challenge:
      "A public programme needs practical training for dispersed delivery teams.",
    audience: "Government programme and field teams",
    activities: [
      "Role analysis",
      "Mobile-friendly activities",
      "Supervisor feedback loops",
    ],
    outputs: [
      "Role-based curriculum",
      "Progress view",
      "Conditional completion report",
    ],
  },
  {
    title: "Regulated workforce upskilling",
    challenge:
      "An enterprise needs traceable learning across operational roles.",
    audience: "Operations, compliance and team leaders",
    activities: [
      "Competency baseline",
      "Scenario workshops",
      "Post-learning assessment",
    ],
    outputs: [
      "Competency comparison",
      "Completion summary",
      "Priority capability recommendations",
    ],
  },
]

export const team = [
  [
    "Leadership profile placeholder",
    "Executive direction",
    "Approved identity and biography to be supplied.",
  ],
  [
    "Sector expert placeholder",
    "Technical review",
    "Named specialist credentials to be confirmed.",
  ],
  [
    "Programme lead placeholder",
    "Learning delivery",
    "Approved programme experience to be supplied.",
  ],
  [
    "Learning designer placeholder",
    "Curriculum design",
    "Portfolio details pending approval.",
  ],
]
