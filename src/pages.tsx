import { FormEvent, useMemo, useState } from "react"
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  CircleDollarSign,
  Download,
  ExternalLink,
  Filter,
  LayoutDashboard,
  Search,
  Users,
  X,
} from "lucide-react"
import {
  articles,
  audiences,
  cases,
  faqs,
  process,
  programmes,
  sectors,
  services,
  team,
} from "./data"
import {
  Accordion,
  Badge,
  Button,
  PageHero,
  ProcessTimeline,
  ReportCard,
  SectionHeading,
} from "./ui"

const contactLink = (params: Record<string, string>) =>
  `/contact?${new URLSearchParams(params).toString()}`

export function HomePage({ openWhatsApp }: { openWhatsApp?: () => void }) {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">
              Learn2Earn · Institutional learning, made practical
            </p>
            <h1>
              Institutional training for the work your people do.
            </h1>
            <p>
              Build relevant skills with programmes shaped around your sector,
              your people and the outcomes your organisation needs.
            </p>
            <div className="button-row">
              <Button to="/solutions">
                Explore solutions <ArrowRight size={17} />
              </Button>
              <Button to="/contact" variant="secondary">
                Discuss your training need
              </Button>
            </div>
            <div className="hero-note">
              <span className="hero-note-mark">L2E</span>
              <p>
                Private cohorts <i /> Sector-specific learning <i /> Practical
                assessment
              </p>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
              alt="Colleagues working together around a table in a shared workspace"
              fetchPriority="high"
            />
            <div className="image-caption">
              <div>
                <span>LEARN2EARN APPROACH</span>
                <strong>Skills for real work. Learning shaped around people.</strong>
              </div>
              <ArrowRight size={20} />
            </div>
            <div className="hero-float-card">
              <span className="hero-float-mark">01—06</span>
              <div>
                <strong>From skills gap to practical progress</strong>
                <span>Diagnose · Design · Deliver · Assess</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Choose the right route"
            title="Start with what your institution needs to achieve."
          />
          <div className="route-grid">
            {[
              [
                "Train Our Workforce",
                "Businesses and public agencies",
                "/who-we-work-with/private-businesses",
                "Explore workforce routes",
              ],
              [
                "Support Our Members",
                "Professional and industry associations",
                "/who-we-work-with/associations-apex-bodies",
                "Explore member academies",
              ],
              [
                "Fund a Training Programme",
                "Donors, NGOs and development partners",
                "/who-we-work-with/development-organisations",
                "Explore donor delivery",
              ],
              [
                "Find a Programme",
                "Individual professionals",
                "/programmes",
                "Browse approved programmes",
              ],
            ].map(([title, audience, to, cta], i) => (
              <Link className="route-card" to={to} key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{audience}</p>
                </div>
                <strong>
                  {cta} <ArrowRight size={16} />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionHeading
            eyebrow="What Learn2Earn provides"
            title="One partner across the programme lifecycle."
            copy="Eight connected service groups can be commissioned separately or combined around an institutional requirement."
          />
          <div className="service-grid">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="support-banner">
            <div>
              <p className="eyebrow">Cross-cutting support layer</p>
              <h3>Managed Support and Account Services</h3>
            </div>
            <p>
              Ongoing technical support, account management and programme
              administration can sit across the agreed engagement—rather than
              becoming a disconnected ninth service.
            </p>
            <Button to="/solutions" variant="secondary">
              See the complete model
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Four sector academies"
            title="Sector context first. Practical capability next."
          />
          <div className="sector-grid">
            {sectors.map((s) => (
              <SectorCard key={s.slug} sector={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section ink-section">
        <div className="container">
          <SectionHeading
            eyebrow="How an engagement works"
            title="Six connected stages, one accountable programme."
          />
          <ProcessTimeline />
          <div className="process-copy">
            {process.map(([title, copy], i) => (
              <div key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery and access"
            title="Designed around real teams and real constraints."
          />
          <div className="feature-grid">
            {[
              [
                "Private learning cohorts",
                "Small Private Online Courses (SPOCs) are commissioned online training groups for a defined organisation or audience—not a public course marketplace.",
              ],
              [
                "Expert facilitation",
                "Suitable specialists are screened for subject relevance, practical experience and facilitation fit before being matched to a programme.",
              ],
              [
                "Mobile-friendly learning",
                "The public experience and proposed learning formats account for smaller screens, clear structure and practical task flows.",
              ],
              [
                "Practical access choices",
                "Low-data delivery options may be incorporated into programme design when required. Offline, SMS or chatbot access is not assumed.",
              ],
            ].map(([title, copy], i) => (
              <div className="feature" key={title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container proof-grid">
          <div>
            <SectionHeading
              eyebrow="Proof and people"
              title="Credibility without invented claims."
              copy="Until approved client evidence is available, this prototype shows how expert quality and reporting can be communicated honestly."
            />
            <ul className="check-list">
              <li>
                <Check />
                Subject relevance and recent practical experience
              </li>
              <li>
                <Check />
                Facilitation suitability and conflict checks
              </li>
              <li>
                <Check />
                Programme brief alignment and structured review
              </li>
            </ul>
            <Button to="/case-examples" variant="secondary">
              View illustrative scenarios
            </Button>
          </div>
          <ReportCard large />
        </div>
      </section>

      <section className="section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Start a useful conversation</p>
            <h2>
              Let’s design a training programme around your institution’s needs.
            </h2>
          </div>
          <div className="button-row">
            <Button to="/contact">Request a Consultation</Button>
            <Button
              to="/contact?context=WhatsApp+quick+question"
              variant="secondary"
            >
              Ask a Quick Question on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ service }: { service: typeof services[number] }) {
  return (
    <article className="service-card">
      <div className="card-top">
        <span>{service.number}</span>
        <Badge>{service.short}</Badge>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {service.conditional && <Badge>Subject to Scope Confirmation</Badge>}
      <Link to={`/solutions/${service.slug}`}>
        Explore service <ArrowRight size={16} />
      </Link>
    </article>
  )
}

function SectorCard({ sector }: { sector: typeof sectors[number] }) {
  return (
    <article className="sector-card">
      <img src={sector.image} alt={sector.imageAlt} />
      <div>
        <h3>{sector.title}</h3>
        <p>{sector.short}</p>
        <Link to={`/sectors/${sector.slug}`}>
          Explore {sector.title} Academy <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}

export function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Institutional learning, assembled around the need."
        copy="From diagnosis and content to facilitation and reporting, select one capability or build a connected programme."
      >
        <Button to="/contact">Discuss your requirement</Button>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((s) => (
              <ServiceCard service={s} key={s.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Common challenges"
              title="Where institutional learning often breaks down."
            />
          </div>
          <div className="challenge-list">
            {[
              "The same programme must serve different roles and locations.",
              "Generic content does not reflect policy or operational reality.",
              "Completion data is available, but learning evidence is not.",
              "Multiple suppliers make accountability difficult.",
            ].map((x, i) => (
              <div key={x}>
                <span>0{i + 1}</span>
                <p>{x}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="support-banner">
            <div>
              <p className="eyebrow">Managed layer</p>
              <h3>Support & Administration</h3>
            </div>
            <p>
              Programme coordination, learner communications, technical support
              and account management can connect the selected services.
            </p>
            <Button to="/contact">Plan a joined-up programme</Button>
          </div>
        </div>
      </section>
    </>
  )
}

function BrandedDiagram() {
  const nodes = [
    [
      "Sponsoring Organisation",
      "Institutional branding",
      "Target learner cohort",
      "Programme governance",
    ],
    [
      "Learn2Earn Managed Academy",
      "Learning platform",
      "Custom curriculum",
      "Vetted experts and support",
    ],
    [
      "Private Learner Cohorts",
      "Staff, members or field workers",
      "Structured learning",
      "Activities and assessments",
    ],
  ]
  return (
    <div className="flow-diagram">
      {nodes.map((n, i) => (
        <div className="flow-wrap" key={n[0]}>
          <div className="flow-node">
            <span>0{i + 1}</span>
            <h3>{n[0]}</h3>
            <ul>
              {n.slice(1).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          {i < 2 && (
            <div className="flow-arrow">
              <ArrowRight />
              <span>
                {i === 0 ? "Mandate & requirements" : "Managed delivery"}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = services.find((s) => s.slug === serviceSlug)
  const navigate = useNavigate()
  if (!service) return <NotFoundPage />
  const faqItems: [string, string][] = [
    [
      `How is ${service.title.toLowerCase()} scoped?`,
      `We begin with the institutional need, target audience and delivery constraints before proposing a format.`,
    ],
    [
      "Can it connect with other Learn2Earn services?",
      "Yes. Services can work independently or form part of a connected programme with managed support.",
    ],
    [
      "Are outputs guaranteed?",
      "No. Outputs remain conditional until scope, source inputs, technical feasibility and any relevant authorisations are confirmed.",
    ],
  ]
  return (
    <>
      <div className="selector-bar">
        <div className="container">
          <span>Service selector</span>
          <select
            aria-label="Choose a service"
            value={service.slug}
            onChange={(e) => navigate(`/solutions/${e.target.value}`)}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.number} — {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <PageHero
        eyebrow={`${service.number} · ${service.short}`}
        title={service.title}
        copy={service.description}
      >
        {service.conditional && (
          <Badge>Subject to Scope Confirmation / Pilot Availability</Badge>
        )}
        <Button to={contactLink({ service: service.slug })}>
          {service.cta}
        </Button>
      </PageHero>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <SectionHeading
              eyebrow="Problems addressed"
              title="Designed for practical institutional constraints."
            />
            <div className="number-list">
              {service.problems.map((x, i) => (
                <div key={x}>
                  <span>{i + 1}</span>
                  <p>{x}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="detail-panel">
            <p className="eyebrow">Who uses this service</p>
            {service.users.map((x) => (
              <h3 key={x}>{x}</h3>
            ))}
          </div>
        </div>
      </section>
      {service.slug === "branded-academies" && (
        <section className="section surface">
          <div className="container">
            <SectionHeading
              eyebrow="Academy architecture"
              title="One coordinating relationship. Clear roles throughout."
            />
            <BrandedDiagram />
          </div>
        </section>
      )}
      <section className="section surface">
        <div className="container three-col">
          <div>
            <p className="eyebrow">What we provide</p>
            {service.provides.map((x) => (
              <p className="line-item" key={x}>
                {x}
              </p>
            ))}
          </div>
          <div>
            <p className="eyebrow">Typical format</p>
            <p>{service.format}</p>
          </div>
          <div>
            <p className="eyebrow">Client supplies</p>
            {service.inputs.map((x) => (
              <p className="line-item" key={x}>
                {x}
              </p>
            ))}
          </div>
        </div>
      </section>
      {service.slug === "assessment-outcomes" && (
        <section className="section">
          <div className="container">
            <ReportCard large />
          </div>
        </section>
      )}
      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Expected outputs"
              title="Defined together, described conditionally."
            />
            {service.outputs.map((x) => (
              <p className="output" key={x}>
                <Check size={18} />
                {x}
              </p>
            ))}
          </div>
          <div>
            <p className="eyebrow">Frequently asked</p>
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container related">
          <SectionHeading
            eyebrow="Related sectors"
            title="Apply this capability in context."
          />
          <div className="link-row">
            {sectors.map((s) => (
              <Link key={s.slug} to={`/sectors/${s.slug}`}>
                {s.title}
                <ArrowRight size={15} />
              </Link>
            ))}
          </div>
          <Button to={contactLink({ service: service.slug })}>
            {service.cta}
          </Button>
        </div>
      </section>
    </>
  )
}

export function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sector Academies"
        title="Capacity building shaped by sector realities."
        copy="Four focused academy routes connect technical context, professional capability and measurable learning."
      >
        <Button to="/contact">Discuss a sector programme</Button>
      </PageHero>
      <section className="section">
        <div className="container sector-grid large">
          {sectors.map((s) => (
            <SectorCard sector={s} key={s.slug} />
          ))}
        </div>
      </section>
    </>
  )
}

export function SectorDetailPage() {
  const { sectorSlug } = useParams()
  const sector = sectors.find((s) => s.slug === sectorSlug)
  if (!sector) return <NotFoundPage />
  return (
    <>
      <section className="sector-hero">
        <img src={sector.image} alt={sector.imageAlt} />
        <div className="sector-hero-overlay" />
        <div className="container">
          <p className="eyebrow">Sector Academy</p>
          <h1>{sector.title}</h1>
          <p>{sector.short}</p>
          <Button to={contactLink({ sector: sector.slug })}>
            {sector.cta}
          </Button>
        </div>
      </section>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <SectionHeading eyebrow="Who this serves" title={sector.audience} />
          </div>
          <div>
            <p className="eyebrow">Three sector challenges</p>
            <div className="number-list">
              {sector.challenges.map((x, i) => (
                <div key={x}>
                  <span>{i + 1}</span>
                  <p>{x}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container split">
          <SectionHeading
            eyebrow="Tailored learning solutions"
            title="Private cohorts, contextual content and expert facilitation."
            copy="The programme structure is selected around the client’s audience, operating context, priorities and access needs."
          />
          <div>
            <Badge>Proposed Programme Themes — Tailored per Client</Badge>
            <div className="theme-list">
              {sector.themes.map((x, i) => (
                <div key={x}>
                  <span>0{i + 1}</span>
                  <h3>{x}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container proof-grid">
          <div>
            <SectionHeading
              eyebrow="Cross-sector skills"
              title="Technical capability works better with transferable skills."
            />
            <div className="tag-cloud">
              {[
                "Leadership",
                "Communication",
                "Project management",
                "Digital literacy",
                "Data skills",
                "Change readiness",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
          <ReportCard />
        </div>
      </section>
      <section className="section">
        <div className="container cta-panel">
          <h2>
            Build a {sector.title.toLowerCase()} programme around your context.
          </h2>
          <Button to={contactLink({ sector: sector.slug })}>
            {sector.cta}
          </Button>
        </div>
      </section>
    </>
  )
}

function HubDiagram() {
  return (
    <div className="hub-diagram">
      <div className="hub">
        <span>Coordinating</span>
        <strong>Apex Body</strong>
        <small>Academy & shared standards</small>
      </div>
      {[
        "Member Enterprises",
        "Regional Chapters",
        "SME Practitioners",
        "Professional Cohorts",
      ].map((x, i) => (
        <div className={`spoke spoke-${i + 1}`} key={x}>
          <span>{x}</span>
        </div>
      ))}
    </div>
  )
}

export function AudiencesPage() {
  const { audienceSlug } = useParams()
  const active = audienceSlug
    ? audiences.find((a) => a.slug === audienceSlug)
    : undefined
  if (audienceSlug && !active) return <NotFoundPage />
  return (
    <>
      <PageHero
        eyebrow="Who we work with"
        title={
          active
            ? "Different institutions. One focus on useful capability."
            : "Who we work with"
        }
        copy={
          active
            ? "Select a route to see how programme design, delivery and reporting can respond to each buyer context."
            : "Explore how institutional training can be shaped for public agencies, associations, enterprises, development partners, and professional institutions."
        }
      >
        {active && (
          <Button to={contactLink({ audience: active.slug })}>
            {active.cta}
          </Button>
        )}
      </PageHero>
      {active && (
        <>
          <div className="container audience-tabs" role="tablist">
            {audiences.map((a) => (
              <Link
                role="tab"
                aria-selected={a.slug === active.slug}
                className={a.slug === active.slug ? "active" : ""}
                key={a.slug}
                to={`/who-we-work-with/${a.slug}`}
              >
                {a.title}
              </Link>
            ))}
          </div>
          <section className="section">
            <div className="container audience-feature">
              <div>
                <p className="eyebrow">Selected route</p>
                <h2>{active.title}</h2>
                <p className="lead">{active.summary}</p>
                <div className="number-list">
                  {active.points.map((x, i) => (
                    <div key={x}>
                      <span>{i + 1}</span>
                      <p>{x}</p>
                    </div>
                  ))}
                </div>
                <Button to={contactLink({ audience: active.slug })}>
                  {active.cta}
                </Button>
              </div>
              {active.slug === "associations-apex-bodies" ? (
                <HubDiagram />
              ) : (
                <div className="audience-art">
                  <span>Institution</span>
                  <div />
                  <strong>Defined cohort</strong>
                  <small>
                    Tailored programme · Expert support · Useful reporting
                  </small>
                </div>
              )}
            </div>
          </section>
        </>
      )}
      <section className="section surface">
        <div className="container">
          <SectionHeading
            eyebrow="All institutional routes"
            title={active ? "Explore another perspective." : "Choose your route."}
          />
          <div className="route-grid">
            {audiences.map((a, i) => (
              <Link
                className="route-card compact"
                to={`/who-we-work-with/${a.slug}`}
                key={a.slug}
              >
                <span>0{i + 1}</span>
                <h3>{a.title}</h3>
                <strong>
                  View route <ArrowRight size={16} />
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function ProgrammesPage() {
  const [params, setParams] = useSearchParams()
  const state = params.get("state") || "unconfirmed"
  const [query, setQuery] = useState("")
  const [sector, setSector] = useState("All sectors")
  const [format, setFormat] = useState("All formats")
  const [selected, setSelected] = useState<typeof programmes[number] | null>(
    null,
  )
  const results = useMemo(
    () =>
      programmes.filter(
        (p) =>
          (sector === "All sectors" || p.sector === sector) &&
          (format === "All formats" || p.format === format) &&
          p.title.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, sector, format],
  )
  const clear = () => {
    setQuery("")
    setSector("All sectors")
    setFormat("All formats")
  }
  return (
    <>
      <PageHero
        eyebrow="Programmes & learning opportunities"
        title="Explore learning routes for professionals."
        copy="The safe launch state shows no confirmed public programmes. Reviewers can inspect illustrative catalogue and empty-filter states below."
      >
        <div className="prototype-switch">
          <span>Prototype-only state preview</span>
          {[
            ["unconfirmed", "No confirmed programmes"],
            ["available", "Illustrative catalogue"],
            ["no-results", "No filter matches"],
          ].map(([id, label]) => (
            <button
              className={state === id ? "active" : ""}
              key={id}
              onClick={() => setParams({ state: id })}
            >
              {label}
            </button>
          ))}
        </div>
      </PageHero>
      {state === "unconfirmed" ? (
        <section className="section">
          <div className="container empty-state">
            <span className="empty-mark">00</span>
            <div>
              <p className="eyebrow">Safe default launch state</p>
              <h2>No confirmed public programmes are currently listed.</h2>
              <p>
                Public opportunities are awaiting confirmation. Institutions may
                commission private learning cohorts, while individuals can
                request programme information without implying a live schedule.
              </p>
              <Button to="/contact?mode=individual">
                Request Programme Information
              </Button>
            </div>
            <IndividualMiniForm />
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="container">
            <Badge>
              Illustrative Mock Data — Not Confirmed Live Programmes
            </Badge>
            <div className="filters">
              <label>
                <span>Search programmes</span>
                <div>
                  <Search size={18} />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by title"
                  />
                </div>
              </label>
              <label>
                <span>Sector</span>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                >
                  <option>All sectors</option>
                  {sectors.map((s) => (
                    <option key={s.slug}>{s.title}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>Delivery format</span>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                >
                  <option>All formats</option>
                  {[...new Set(programmes.map((p) => p.format))].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
            </div>
            {state === "no-results" || results.length === 0 ? (
              <div className="no-results">
                <Filter size={28} />
                <h2>No programmes match your selected filters.</h2>
                <p>
                  Clear all filters to return to the illustrative catalogue.
                </p>
                <Button
                  onClick={() => {
                    clear()
                    setParams({ state: "available" })
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className="programme-grid">
                {results.map((p) => (
                  <article className="programme-card" key={p.slug}>
                    <Badge>{p.status}</Badge>
                    <p className="eyebrow">{p.sector}</p>
                    <h3>{p.title}</h3>
                    <dl>
                      <div>
                        <dt>Audience</dt>
                        <dd>{p.audience}</dd>
                      </div>
                      <div>
                        <dt>Format</dt>
                        <dd>{p.format}</dd>
                      </div>
                    </dl>
                    <Button variant="secondary" onClick={() => setSelected(p)}>
                      View programme
                    </Button>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
      {selected && (
        <div className="drawer-backdrop" onMouseDown={() => setSelected(null)}>
          <aside
            className="drawer"
            role="dialog"
            aria-modal="true"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button className="drawer-close" onClick={() => setSelected(null)}>
              <X />
              <span>Close</span>
            </button>
            <Badge>Illustrative Mock Programme</Badge>
            <p className="eyebrow">{selected.sector}</p>
            <h2>{selected.title}</h2>
            <p>
              {selected.audience} · {selected.format} · {selected.duration}
            </p>
            <h3>Learning outcomes</h3>
            <ul>
              {selected.outcomes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <h3>Content outline</h3>
            <ol>
              {selected.outline.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ol>
            <h3>Eligibility</h3>
            <p>{selected.eligibility}</p>
            <div className="price">
              <span>Price</span>
              <strong>Subject to confirmation</strong>
            </div>
            <Button
              to={contactLink({ mode: "individual", programme: selected.slug })}
            >
              Enquire about this programme
            </Button>
            <Button to={`/programmes/${selected.slug}`} variant="secondary">
              Open full detail page
            </Button>
          </aside>
        </div>
      )}
    </>
  )
}

export function ProgrammeDetailPage() {
  const { programmeSlug } = useParams()
  const programme = programmes.find((item) => item.slug === programmeSlug)
  if (!programme) return <NotFoundPage />

  return (
    <>
      <PageHero
        eyebrow="Illustrative mock programme · Not confirmed live"
        title={programme.title}
        copy="This example shows the kind of programme information that may be published after content, availability, and delivery details are approved."
      >
        <Button
          to={contactLink({
            mode: "individual",
            programme: programme.slug,
          })}
        >
          Enquire about this programme
        </Button>
      </PageHero>
      <section className="section">
        <div className="container programme-detail-grid">
          <div className="programme-detail-main">
            <Badge>Illustrative Mock Data — Not a Live Offer</Badge>
            <SectionHeading
              eyebrow="Learning outcomes"
              title="What participants may work towards"
            />
            <ul className="check-list">
              {programme.outcomes.map((outcome) => (
                <li key={outcome}>
                  <Check />
                  {outcome}
                </li>
              ))}
            </ul>
            <div className="programme-outline">
              <h2>Content outline</h2>
              {programme.outline.map((item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          </div>
          <aside className="programme-detail-aside">
            <p className="eyebrow">Programme at a glance</p>
            <dl>
              <div>
                <dt>Sector</dt>
                <dd>{programme.sector}</dd>
              </div>
              <div>
                <dt>Intended audience</dt>
                <dd>{programme.audience}</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>{programme.format}</dd>
              </div>
              <div>
                <dt>Example duration</dt>
                <dd>{programme.duration} — requires confirmation</dd>
              </div>
              <div>
                <dt>Eligibility</dt>
                <dd>{programme.eligibility}</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>Not confirmed for public enrolment</dd>
              </div>
            </dl>
            <p className="fine">
              No dates, prices, accreditation, or application window are
              confirmed. Enquiries are simulated by this prototype.
            </p>
            <Button
              to={contactLink({
                mode: "individual",
                programme: programme.slug,
              })}
            >
              Enquire about this programme
            </Button>
          </aside>
        </div>
      </section>
    </>
  )
}

type DashboardRole = "learner" | "instructor" | "institution"

const dashboardNav: Array<{
  label: string
  icon: typeof LayoutDashboard
}> = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "My learning", icon: BookOpen },
  { label: "Calendar", icon: CalendarDays },
  { label: "Messages", icon: Bell },
]

const instructorNav = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Learners", icon: Users },
  { label: "Courses", icon: BookOpen },
  { label: "Reviews", icon: ClipboardCheck },
  { label: "Calendar", icon: CalendarDays },
]

const institutionNav = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Cohorts", icon: Users },
  { label: "Reporting", icon: BarChart3 },
  { label: "Calendar", icon: CalendarDays },
]

const learnerCourses = [
  { title: "Digital Extension Basics", type: "Core programme", progress: 62, next: "Module 3 · Feedback in practice", tone: "amber" },
  { title: "Workplace Communication", type: "Short course", progress: 38, next: "Lesson 4 · Clearer team briefs", tone: "plum" },
  { title: "Safeguarding Essentials", type: "Required learning", progress: 100, next: "Completed · 18 May 2025", tone: "green" },
]

const instructorLearners = [
  { name: "Amina Wanjiku", initials: "AW", email: "amina@example.test", course: "Digital Extension Basics", enrolled: "12 May 2025", attendance: "94%", fee: "KES 18,000", paid: "KES 18,000", status: "Paid", progress: 62 },
  { name: "Brian Otieno", initials: "BO", email: "brian@example.test", course: "Digital Extension Basics", enrolled: "12 May 2025", attendance: "88%", fee: "KES 18,000", paid: "KES 12,000", status: "Part-paid", progress: 48 },
  { name: "Carol Njeri", initials: "CN", email: "carol@example.test", course: "Workplace Communication", enrolled: "20 May 2025", attendance: "100%", fee: "KES 12,500", paid: "KES 12,500", status: "Paid", progress: 76 },
  { name: "David Kamau", initials: "DK", email: "david@example.test", course: "Workplace Communication", enrolled: "20 May 2025", attendance: "71%", fee: "KES 12,500", paid: "KES 0", status: "Pending", progress: 24 },
]

function DashboardSidebar({
  role,
  active,
  onSelect,
}: {
  role: DashboardRole
  active: string
  onSelect: (label: string) => void
}) {
  const items = role === "instructor" ? instructorNav : role === "institution" ? institutionNav : dashboardNav
  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-brand">
        <span className="dashboard-brand-mark">L2E</span>
        <div>
          <strong>Learn2Earn</strong>
          <small>{role === "learner" ? "Learner space" : role === "instructor" ? "Instructor space" : "Institution space"}</small>
        </div>
      </div>
      <nav aria-label={`${role} dashboard navigation`}>
        {items.map(({ label, icon: Icon }) => (
          <button className={active === label ? "is-active" : ""} key={label} onClick={() => onSelect(label)}>
            <Icon size={16} />
            {label}
          </button>
        ))}
      </nav>
      <div className="dashboard-sidebar-foot">
        <Badge>Frontend prototype</Badge>
        <p>Every record and action on this screen is illustrative dummy data.</p>
        <Link to="/dashboards">Switch preview</Link>
      </div>
    </aside>
  )
}

function DashboardTopbar({ role, onNotify }: { role: DashboardRole; onNotify: () => void }) {
  const label = role === "learner" ? "Amina Wanjiku" : role === "instructor" ? "James Mwangi" : "Acme Foundation"
  const initials = role === "learner" ? "AW" : role === "instructor" ? "JM" : "AF"
  return (
    <header className="dashboard-topbar">
      <div>
        <p className="eyebrow">Mock workspace · {role}</p>
        <h1>{role === "learner" ? "Good morning, Amina." : role === "instructor" ? "Good morning, James." : "Programme command centre"}</h1>
      </div>
      <div className="dashboard-topbar-actions">
        <button className="dashboard-icon-button" onClick={onNotify} aria-label="Show mock notifications"><Bell size={18} /></button>
        <div className="dashboard-user">
          <span>{initials}</span>
          <div><strong>{label}</strong><small>Sample account</small></div>
        </div>
      </div>
    </header>
  )
}

function DashboardMetric({ icon: Icon, value, label, detail }: { icon: typeof BookOpen; value: string; label: string; detail: string }) {
  return <div className="dashboard-metric"><span className="dashboard-metric-icon"><Icon size={17} /></span><strong>{value}</strong><span>{label}</span><small>{detail}</small></div>
}

function LearnerWorkspace({ active }: { active: string }) {
  const [selectedCourse, setSelectedCourse] = useState(0)
  if (active === "Calendar") {
    return <DashboardPlaceholder title="Your learning calendar" copy="Keep live sessions, submission windows, and personal study time in one place." icon={CalendarDays} items={["Live workshop · Thursday, 10:00", "Practice reflection · Due Friday", "Cohort check-in · 28 May"]} />
  }
  if (active === "Messages") {
    return <DashboardPlaceholder title="Messages from your learning team" copy="A calm inbox for facilitator notes and cohort updates." icon={Bell} items={["James shared feedback on your reflection", "New cohort announcement · Digital Extension Basics", "Welcome to your Learn2Earn space"]} />
  }
  return (
    <div className="workspace-body">
      <div className="dashboard-metric-grid">
        <DashboardMetric icon={BookOpen} value="3" label="Active courses" detail="2 in progress · 1 complete" />
        <DashboardMetric icon={CheckCircle2} value="62%" label="Overall progress" detail="+8% since last check-in" />
        <DashboardMetric icon={CalendarDays} value="2" label="Upcoming sessions" detail="Next one in 2 days" />
        <DashboardMetric icon={ClipboardCheck} value="4" label="Open activities" detail="1 needs your attention" />
      </div>
      {active === "My learning" ? <CourseList selectedCourse={selectedCourse} onSelect={setSelectedCourse} /> : <LearnerOverview selectedCourse={selectedCourse} onSelect={setSelectedCourse} />}
    </div>
  )
}

function LearnerOverview({ selectedCourse, onSelect }: { selectedCourse: number; onSelect: (index: number) => void }) {
  return (
    <div className="dashboard-two-column">
      <section className="dashboard-surface dashboard-feature-card">
        <div className="dashboard-surface-head"><div><p className="eyebrow">Continue where you left off</p><h2>{learnerCourses[selectedCourse].title}</h2></div><Badge>In progress</Badge></div>
        <p>{learnerCourses[selectedCourse].next}</p>
        <div className="progress-track"><span style={{ width: `${learnerCourses[selectedCourse].progress}%` }} /></div>
        <div className="dashboard-progress-label"><span>Sample progress</span><strong>{learnerCourses[selectedCourse].progress}%</strong></div>
        <Button onClick={() => onSelect(selectedCourse)}>Resume learning <ArrowRight size={16} /></Button>
      </section>
      <section className="dashboard-surface">
        <div className="dashboard-surface-head"><div><p className="eyebrow">Needs attention</p><h2>Next steps</h2></div><span className="dashboard-count">3</span></div>
        {["Complete practice reflection", "Review facilitator feedback", "Join Thursday live workshop"].map((item, index) => <div className="dashboard-task" key={item}><span>{index + 1}</span><div><strong>{item}</strong><small>{index === 0 ? "Suggested this week" : "Sample activity"}</small></div><ArrowRight size={15} /></div>)}
      </section>
      <section className="dashboard-surface dashboard-wide">
        <div className="dashboard-surface-head"><div><p className="eyebrow">My learning</p><h2>Course progress</h2></div><Button to="/programmes" variant="text">Browse programmes <ArrowRight size={15} /></Button></div>
        <CourseList selectedCourse={selectedCourse} onSelect={onSelect} compact />
      </section>
    </div>
  )
}

function CourseList({ selectedCourse, onSelect, compact = false }: { selectedCourse: number; onSelect: (index: number) => void; compact?: boolean }) {
  return <div className={`course-list ${compact ? "is-compact" : ""}`}>{learnerCourses.map((course, index) => <button className={`course-row ${index === selectedCourse ? "is-selected" : ""}`} key={course.title} onClick={() => onSelect(index)}><span className={`course-art ${course.tone}`}><BookOpen size={18} /></span><span className="course-row-copy"><strong>{course.title}</strong><small>{course.type} · {course.next}</small><span className="progress-track"><span style={{ width: `${course.progress}%` }} /></span></span><strong className="course-progress">{course.progress}%</strong><ArrowRight size={15} /></button>)}</div>
}

function InstructorWorkspace({ active }: { active: string }) {
  const [query, setQuery] = useState("")
  const filtered = instructorLearners.filter((learner) => `${learner.name} ${learner.course} ${learner.status}`.toLowerCase().includes(query.toLowerCase()))
  if (active === "Learners") {
    return <div className="workspace-body"><LearnerTable query={query} setQuery={setQuery} learners={filtered} /></div>
  }
  if (active === "Reviews") {
    return <DashboardPlaceholder title="Assessment review queue" copy="A focused place for sample submissions waiting for facilitator feedback." icon={ClipboardCheck} items={["Amina Wanjiku · Practice reflection", "Brian Otieno · Module 2 knowledge check", "Carol Njeri · Team briefing activity"]} />
  }
  if (active === "Calendar") {
    return <DashboardPlaceholder title="Facilitator calendar" copy="Plan live delivery, office hours, and cohort check-ins." icon={CalendarDays} items={["Digital Extension Basics · Thursday, 10:00", "Workplace Communication · Friday, 14:00", "Cohort review · 30 May"]} />
  }
  if (active === "Courses") {
    return <DashboardPlaceholder title="Assigned courses" copy="Manage the sample programmes assigned to your instructor account." icon={BookOpen} items={["Digital Extension Basics · 24 learners", "Workplace Communication · 18 learners", "Safeguarding Essentials · Archived sample"]} />
  }
  return <InstructorOverview learners={instructorLearners} />
}

function InstructorOverview({ learners }: { learners: typeof instructorLearners }) {
  return <div className="workspace-body"><div className="dashboard-metric-grid"><DashboardMetric icon={Users} value="42" label="Assigned learners" detail="Across 2 sample courses" /><DashboardMetric icon={BarChart3} value="86%" label="Average attendance" detail="+4% this month" /><DashboardMetric icon={ClipboardCheck} value="8" label="Reviews pending" detail="3 due this week" /><DashboardMetric icon={Clock3} value="3" label="Upcoming sessions" detail="Next one Thursday" /></div><div className="dashboard-two-column"><section className="dashboard-surface dashboard-wide"><div className="dashboard-surface-head"><div><p className="eyebrow">Learner administration</p><h2>Recent learner records</h2></div><Link className="dashboard-text-link" to="/dashboards/instructor">Open full register <ArrowRight size={15} /></Link></div><LearnerTable query="" setQuery={() => undefined} learners={learners.slice(0, 3)} compact /></section><section className="dashboard-surface"><div className="dashboard-surface-head"><div><p className="eyebrow">This week</p><h2>Delivery rhythm</h2></div></div>{["Live workshop", "Review queue", "Cohort check-in"].map((item, index) => <div className="dashboard-task" key={item}><span>{index + 1}</span><div><strong>{item}</strong><small>{["Thu · 10:00", "4 sample submissions", "Fri · 15:30"][index]}</small></div></div>)}</section></div></div>
}

function LearnerTable({ query, setQuery, learners, compact = false }: { query: string; setQuery: (value: string) => void; learners: typeof instructorLearners; compact?: boolean }) {
  return <div className="dashboard-register"><div className="register-toolbar"><div><p className="eyebrow">Sample learner register</p>{!compact && <h2>Course administration</h2>}</div>{!compact && <label className="dashboard-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search learner, course or status" /></label>}</div><div className="register-table-wrap"><table className="register-table"><thead><tr>{["Learner", "Course", "Enrollment date", "Attendance", "Fee amount", "Amount paid", "Payment status"].map((heading) => <th key={heading}>{heading}</th>)}</tr></thead><tbody>{learners.map((learner) => <tr key={learner.email}><td><div className="learner-cell"><span>{learner.initials}</span><div><strong>{learner.name}</strong><small>{learner.email}</small></div></div></td><td>{learner.course}<small className="table-progress">{learner.progress}% progress</small></td><td>{learner.enrolled}</td><td><strong>{learner.attendance}</strong></td><td>{learner.fee}</td><td>{learner.paid}</td><td><span className={`status-pill ${learner.status.toLowerCase().replace("-", "")}`}>{learner.status}</span></td></tr>)}</tbody></table></div></div>
}

function InstitutionWorkspace() {
  return <div className="workspace-body"><div className="dashboard-metric-grid"><DashboardMetric icon={Users} value="48" label="Sample participants" detail="3 active cohort groups" /><DashboardMetric icon={BarChart3} value="84%" label="Completion rate" detail="Illustrative reporting only" /><DashboardMetric icon={CircleDollarSign} value="KES 412k" label="Fees recorded" detail="Dummy finance snapshot" /><DashboardMetric icon={CheckCircle2} value="3" label="Active programmes" detail="Across 2 sample teams" /></div><div className="dashboard-two-column"><section className="dashboard-surface dashboard-wide"><div className="dashboard-surface-head"><div><p className="eyebrow">Cohort oversight</p><h2>Programme groups</h2></div><Badge>Example report</Badge></div><div className="cohort-card-grid">{[["Operations team", "Workplace Safety", "92%", "18 learners"], ["Field team", "Digital Extension", "76%", "24 learners"], ["Member group", "Professional Practice", "54%", "6 learners"]].map(([group, course, progress, people]) => <div className="cohort-card" key={group}><span className="cohort-card-icon"><Users size={16} /></span><strong>{group}</strong><small>{course} · {people}</small><div className="progress-track"><span style={{ width: progress }} /></div><div className="dashboard-progress-label"><span>Sample completion</span><strong>{progress}</strong></div></div>)}</div></section><section className="dashboard-surface"><div className="dashboard-surface-head"><div><p className="eyebrow">Illustrative reporting</p><h2>Learning pulse</h2></div></div><div className="mini-chart" aria-label="Illustrative learning pulse chart">{[42, 58, 52, 72, 66, 84, 78].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div><p className="fine">Not a live report. Figures are visual placeholders for a future reporting workflow.</p></section></div></div>
}

function DashboardPlaceholder({ title, copy, icon: Icon, items }: { title: string; copy: string; icon: typeof CalendarDays; items: string[] }) {
  return <div className="dashboard-placeholder dashboard-surface"><span className="placeholder-icon"><Icon size={22} /></span><p className="eyebrow">Mock workspace</p><h2>{title}</h2><p>{copy}</p><div className="placeholder-list">{items.map((item) => <div key={item}><CheckCircle2 size={16} /><strong>{item}</strong></div>)}</div><Badge>Frontend-only sample</Badge></div>
}

function DashboardLanding() {
  return <>
    <PageHero eyebrow="Learning workspace previews" title="One connected view for every learning role." copy="Explore the learner, instructor, and institution experiences. This is a frontend-only prototype: all accounts, records, payments, and reporting figures are dummy data." />
    <section className="section"><div className="container dashboard-choice-grid">
      {([
        ["learner", "Learner workspace", "Pick up learning, see progress, and keep track of upcoming activities.", BookOpen],
        ["instructor", "Instructor workspace", "Manage learner records, review work, and coordinate cohort delivery.", ClipboardCheck],
        ["institution", "Institution workspace", "Review cohort participation, illustrative reporting, and programme pulse.", BarChart3],
      ] as const).map(([slug, title, copy, Icon]) => <Link className="dashboard-choice dashboard-role-choice" to={`/dashboards/${slug}`} key={slug}><span className="dashboard-choice-icon"><Icon size={22} /></span><Badge>{slug} preview</Badge><h2>{title}</h2><p>{copy}</p><strong>Open workspace <ArrowRight size={17} /></strong></Link>)}
    </div></section>
  </>
}

export function DashboardPage() {
  const { dashboardType } = useParams()
  if (dashboardType && !["learner", "instructor", "institution"].includes(dashboardType)) return <NotFoundPage />
  if (!dashboardType) return <DashboardLanding />
  const role = dashboardType as DashboardRole
  const [active, setActive] = useState("Overview")
  const [toast, setToast] = useState(false)
  const currentRole = dashboardType ? role : "learner"
  const roleName = currentRole === "learner" ? "Learner" : currentRole === "instructor" ? "Instructor" : "Institution"
  return <section className="dashboard-app"><div className="dashboard-app-inner"><DashboardSidebar role={currentRole} active={active} onSelect={setActive} /><main className="dashboard-main"><DashboardTopbar role={currentRole} onNotify={() => setToast(true)} /><div className="dashboard-mobile-switch"><Link to="/dashboards/learner">Learner</Link><Link to="/dashboards/instructor">Instructor</Link><Link to="/dashboards/institution">Institution</Link></div><div className="dashboard-context"><div><Badge>Mock data only</Badge><p>Connected prototype · {roleName} experience</p></div><Button to="/dashboards" variant="secondary">All dashboards</Button></div>{currentRole === "learner" ? <LearnerWorkspace active={active} /> : currentRole === "instructor" ? <InstructorWorkspace active={active} /> : <InstitutionWorkspace />}{toast && <button className="dashboard-toast" onClick={() => setToast(false)}><Bell size={15} /> 3 sample notifications · dismiss</button>}</main></div></section>
}

function LegacyDashboardPage() {
  const { dashboardType } = useParams()
  if (dashboardType && !["learner", "institution"].includes(dashboardType)) {
    return <NotFoundPage />
  }

  if (!dashboardType) {
    return (
      <>
        <PageHero
          eyebrow="Dashboard previews"
          title="A clearer view of learning, from either side."
          copy="Explore two illustrative dashboard experiences. All names, activity, completion indicators, and reporting figures are mock data; nothing is connected to a live account."
        />
        <section className="section">
          <div className="container dashboard-choice-grid">
            <Link className="dashboard-choice" to="/dashboards/learner">
              <Badge>Learner preview</Badge>
              <h2>My learning</h2>
              <p>
                A sample learning home with course progress, next steps, and
                completion states.
              </p>
              <strong>
                Open learner dashboard <ArrowRight size={17} />
              </strong>
            </Link>
            <Link className="dashboard-choice" to="/dashboards/institution">
              <Badge>Institution preview</Badge>
              <h2>Programme overview</h2>
              <p>
                A sample cohort view for sponsors reviewing participation and
                illustrative programme evidence.
              </p>
              <strong>
                Open institutional dashboard <ArrowRight size={17} />
              </strong>
            </Link>
          </div>
        </section>
      </>
    )
  }

  const learner = dashboardType === "learner"
  return (
    <>
      <PageHero
        eyebrow={
          learner
            ? "Learner dashboard · Mock preview"
            : "Institution dashboard · Mock preview"
        }
        title={learner ? "Your learning, at a glance." : "Programme oversight."}
        copy={
          learner
            ? "A sample learner home showing how a private cohort experience could bring progress and next steps together."
            : "A sample sponsor view showing how agreed cohort information could be organised for programme oversight."
        }
      >
        <Button to="/dashboards" variant="secondary">
          All dashboard previews
        </Button>
      </PageHero>
      <section className="section dashboard-section">
        <div className="container">
          <div className="dashboard-notice">
            <Badge>Mock Data Only</Badge>
            <p>
              This is a visual prototype. It does not represent a real learner,
              institution, course, schedule, or live reporting system.
            </p>
          </div>
          {learner ? (
            <div className="learner-dashboard">
              <div className="dashboard-welcome">
                <p className="eyebrow">Private cohort · Sample learner account</p>
                <h2>Welcome back, Amina.</h2>
                <p>
                  Continue your illustrative programme or review what you have
                  completed.
                </p>
              </div>
              <div className="learner-stats">
                {[
                  ["01", "Illustrative course", "Digital Extension Basics"],
                  ["62%", "Sample progress", "Across 5 learning modules"],
                  ["2", "Mock next steps", "One activity and one review"],
                ].map(([value, label, detail]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                    <small>{detail}</small>
                  </div>
                ))}
              </div>
              <div className="learner-content-grid">
                <section className="dashboard-panel current-course">
                  <div className="dashboard-panel-head">
                    <div>
                      <p className="eyebrow">Continue learning</p>
                      <h3>Digital Extension Basics</h3>
                    </div>
                    <Badge>Illustrative</Badge>
                  </div>
                  <p>Module 3 · Using feedback to improve field delivery</p>
                  <div
                    className="progress-track"
                    role="progressbar"
                    aria-label="Illustrative course progress"
                    aria-valuenow={62}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <span style={{ width: "62%" }} />
                  </div>
                  <div className="dashboard-progress-label">
                    <span>Sample progress</span>
                    <strong>62%</strong>
                  </div>
                  <Button to="/programmes/digital-extension">
                    View programme outline <ArrowRight size={16} />
                  </Button>
                </section>
                <section className="dashboard-panel">
                  <p className="eyebrow">Next steps · Example only</p>
                  <div className="dashboard-list-item">
                    <span>01</span>
                    <div>
                      <strong>Complete a practice reflection</strong>
                      <small>Suggested next activity · No due date</small>
                    </div>
                  </div>
                  <div className="dashboard-list-item">
                    <span>02</span>
                    <div>
                      <strong>Review facilitator feedback</strong>
                      <small>Sample feedback state</small>
                    </div>
                  </div>
                  <div className="dashboard-list-item">
                    <span>03</span>
                    <div>
                      <strong>Completion record</strong>
                      <small>Not yet available in this preview</small>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ) : (
            <div className="institution-dashboard">
              <div className="dashboard-panel">
                <div className="dashboard-panel-head">
                  <div>
                    <p className="eyebrow">Sponsor view · Sample cohort</p>
                    <h2>Workforce Essentials Cohort</h2>
                  </div>
                  <Badge>Illustrative Sample Report — Example Only</Badge>
                </div>
                <div className="institution-stats">
                  {[
                    ["48", "Sample participants"],
                    ["84%", "Illustrative completion"],
                    ["+21", "Example assessment change"],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <p className="eyebrow">Example cohort groups</p>
                <div className="cohort-table-wrap">
                  <table className="cohort-table">
                    <thead>
                      <tr>
                        <th scope="col">Sample group</th>
                        <th scope="col">Programme</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Operations Team · Example</td>
                        <td>Workplace Safety</td>
                        <td>Mock progress view</td>
                      </tr>
                      <tr>
                        <td>Field Team · Example</td>
                        <td>Digital Extension</td>
                        <td>Mock progress view</td>
                      </tr>
                      <tr>
                        <td>Member Group · Example</td>
                        <td>Professional Practice</td>
                        <td>Awaiting sample activity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <ReportCard large />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function IndividualMiniForm() {
  const [done, setDone] = useState(false)
  return (
    <div className="mini-form">
      <p className="eyebrow">Individual enquiry</p>
      {done ? (
        <div>
          <Check />
          <h3>Enquiry recorded in this prototype.</h3>
          <p>
            No message was sent. A confirmed contact route will be connected
            later.
          </p>
          <Button onClick={() => setDone(false)} variant="secondary">
            Send another mock enquiry
          </Button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setDone(true)
          }}
        >
          <label>
            Name
            <input required />
          </label>
          <label>
            Email or phone
            <input required />
          </label>
          <label>
            Programme interest
            <input />
          </label>
          <label>
            Question
            <textarea rows={3} />
          </label>
          <Button type="submit">Record mock enquiry</Button>
        </form>
      )}
    </div>
  )
}

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Learn2Earn"
        title="An Africa-first partner for institutional capability."
        copy="Learn2Earn is positioned to help organisations diagnose, design, deliver and evidence learning that reflects sector and workforce realities."
      >
        <Button to="/contact">Start a conversation</Button>
      </PageHero>
      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2>
              Make professional learning more relevant, practical and
              accountable.
            </h2>
          </div>
          <div>
            <p className="lead">
              We focus on the institutional conditions around learning: who
              needs the skill, why it matters, how people can participate, and
              what evidence decision-makers need.
            </p>
            <p>
              Commercial training services and any future social-impact activity
              are distinct. Programme funding, beneficiaries and delivery
              responsibilities would be made explicit for each engagement.
            </p>
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container evolution">
          <div>
            <Badge>Pending Management Approval</Badge>
            <p className="eyebrow">Our Evolution: iLearn to Learn2Earn</p>
            <h2>A clearer institutional focus.</h2>
          </div>
          <p>
            This placeholder section acknowledges the proposed transition from
            iLearn to Learn2Earn. Approved wording about identity, history,
            legal continuity and timing has not yet been supplied and must not
            be inferred from this prototype.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The approach"
            title="Capacity building as a connected system."
          />
          <ProcessTimeline />
        </div>
      </section>
      <section className="section surface">
        <div className="container">
          <SectionHeading
            eyebrow="People"
            title="Profile structure ready for approved details."
            copy="No staff identity, biography, qualification or photograph below represents a real person."
          />
          <div className="team-grid">
            {team.map(([title, role, copy], i) => (
              <article key={title}>
                <div className="avatar-placeholder">
                  <span>0{i + 1}</span>
                </div>
                <Badge>Replaceable mock profile</Badge>
                <h3>{title}</h3>
                <strong>{role}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="From an institutional need to useful evidence."
        copy="A six-stage model keeps programme decisions connected while leaving room for sector context, delivery constraints and client governance."
      >
        <Button to="/contact">Plan an engagement</Button>
      </PageHero>
      <section className="section ink-section">
        <div className="container">
          <ProcessTimeline />
          <div className="process-copy">
            {process.map(([title, copy], i) => (
              <div key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container scenario">
          <div>
            <Badge>Proposed Engagement Example — Not a Client Project</Badge>
            <h2>A national membership body coordinates a shared academy.</h2>
            <p>
              The body identifies common capability priorities while member
              enterprises provide role context. Learn2Earn maps a curriculum,
              supports experts, facilitates private cohorts and prepares an
              illustrative summary against agreed measures.
            </p>
          </div>
          <div className="scenario-steps">
            {[
              "Shared priority",
              "Role-specific context",
              "Private cohorts",
              "Outcome view",
            ].map((x, i) => (
              <div key={x}>
                <span>0{i + 1}</span>
                <strong>{x}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container">
          <SectionHeading
            eyebrow="Responsibilities"
            title="Clear inputs. Clear delivery."
          />
          <div className="comparison-table">
            <div>
              <h3>What the Client Supplies</h3>
              {[
                "Strategic priorities",
                "Target cohort and roles",
                "Relevant policy and source material",
                "Success measures and governance",
              ].map((x) => (
                <p key={x}>{x}</p>
              ))}
            </div>
            <div>
              <h3>What Learn2Earn Delivers</h3>
              {[
                "Skills diagnosis and programme blueprint",
                "Tailored content and delivery plan",
                "Expert facilitation and cohort support",
                "Agreed assessment and reporting views",
              ].map((x) => (
                <p key={x}>{x}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container proof-grid">
          <SectionHeading
            eyebrow="Assessment & reporting"
            title="Agree the evidence before learning begins."
            copy="The sample visual shows how participation and assessment information might be presented. It is not client data."
          />
          <ReportCard large />
        </div>
      </section>
    </>
  )
}

export function CaseExamplesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case examples & evidence"
        title="Illustrative scenarios, clearly labelled."
        copy="These structured examples demonstrate possible engagement patterns without inventing clients, testimonials, logos or confirmed results."
      >
        <Button to="/contact">Discuss your scenario</Button>
      </PageHero>
      <section className="section">
        <div className="container case-grid">
          {cases.map((c, i) => (
            <article className="case-card" key={c.title}>
              <div className="case-number">0{i + 1}</div>
              <Badge>
                Illustrative Engagement Scenario — Awaiting Client Publication
                Sign-Off
              </Badge>
              <h2>{c.title}</h2>
              <h3>Challenge</h3>
              <p>{c.challenge}</p>
              <h3>Intended audience</h3>
              <p>{c.audience}</p>
              <div className="case-cols">
                <div>
                  <h3>Illustrative activities</h3>
                  {c.activities.map((x) => (
                    <p key={x}>{x}</p>
                  ))}
                </div>
                <div>
                  <h3>Possible outputs</h3>
                  {c.outputs.map((x) => (
                    <p key={x}>{x}</p>
                  ))}
                </div>
              </div>
              <button
                className="download-placeholder"
                onClick={() => alert("No fact sheet file has been supplied.")}
              >
                <Download size={18} />
                Fact sheet placeholder
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export function InsightsPage() {
  const [category, setCategory] = useState("All")
  const shown =
    category === "All"
      ? articles
      : articles.filter((a) => a.category === category)
  return (
    <>
      <PageHero
        eyebrow="Insights & resources"
        title="Practical thinking for institutional learning."
        copy="Sample editorial content on programme design, delivery, professional development and sector capacity building."
      />
      <section className="section">
        <div className="container">
          <div className="category-tabs">
            {["All", "Sector Briefs", "Learning Guides", "Company Updates"].map(
              (x) => (
                <button
                  className={x === category ? "active" : ""}
                  key={x}
                  onClick={() => setCategory(x)}
                >
                  {x}
                </button>
              ),
            )}
          </div>
          <div className="article-grid">
            {shown.map((a, i) => (
              <article key={a.slug}>
                <div className="article-index">0{i + 1}</div>
                <p className="eyebrow">
                  {a.category} · {a.date}
                </p>
                <h2>{a.title}</h2>
                <p>{a.excerpt}</p>
                <div className="tag-cloud">
                  {a.tags.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
                <span>{a.time}</span>
                <Link to={`/insights/${a.slug}`}>
                  Read article <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function ArticlePage() {
  const { articleSlug } = useParams()
  const article = articles.find((a) => a.slug === articleSlug) || articles[0]
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2)
  return (
    <>
      <article className="article-page">
        <header className="container article-header">
          <Badge>Sample Editorial Content</Badge>
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="lead">{article.excerpt}</p>
          <div className="article-meta">
            <span>Author: Editorial team placeholder</span>
            <span>{article.date}</span>
            <span>{article.time}</span>
          </div>
          {article.technical && (
            <Badge>Reviewed by: [Named Sector Specialist / Role]</Badge>
          )}
        </header>
        <div className="article-body">
          <p>
            Institutional learning works best when programme choices follow the
            operating reality rather than a generic content catalogue. This
            sample article demonstrates the intended editorial structure and
            does not present verified research or a published Learn2Earn
            position.
          </p>
          <h2>Begin with the decision the institution needs to make</h2>
          <p>
            A useful programme brief connects a defined capability with the
            people who need it, the conditions in which they work, and the
            evidence that will help leaders understand progress. This makes
            delivery choices more deliberate.
          </p>
          <blockquote>
            Good programme design makes constraints visible early—before they
            become learner barriers.
          </blockquote>
          <h2>Design participation, not just content</h2>
          <p>
            Live facilitation, mobile-friendly resources, practical scenarios
            and supervisor involvement can each play a role. The right
            combination depends on cohort size, connectivity, work patterns and
            the nature of the skill.
          </p>
          <h2>Agree on evidence</h2>
          <p>
            Completion may be useful, but it rarely tells the whole story.
            Baseline understanding, applied tasks, feedback and post-programme
            comparisons can provide a more useful view when measures are agreed
            in advance.
          </p>
        </div>
      </article>
      <section className="section surface">
        <div className="container">
          <SectionHeading
            eyebrow="Continue reading"
            title="Related sample articles."
          />
          <div className="link-row">
            {related.map((a) => (
              <Link to={`/insights/${a.slug}`} key={a.slug}>
                {a.title}
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container cta-panel">
          <h2>Apply these ideas to an institutional programme.</h2>
          <Button to="/contact">Request a consultation</Button>
        </div>
      </section>
    </>
  )
}

export function FAQsPage() {
  const grouped = faqs.map(([category, q, a]) => ({ category, q, a }))
  return (
    <>
      <PageHero
        eyebrow="Common questions"
        title="Clear answers, careful claims."
        copy="These prototype answers explain the proposed service model while keeping schedules, accreditation, delivery options and policies conditional."
      />
      <section className="section">
        <div className="container faq-layout">
          <div>
            <SectionHeading
              eyebrow="FAQs"
              title="What would you like to understand?"
            />
            <p>
              Still deciding? Send a contextual enquiry and we will record it in
              the prototype without transmitting data.
            </p>
            <Button to="/contact">Ask a question</Button>
          </div>
          <div>
            {grouped.map((x) => (
              <div className="faq-category" key={x.category}>
                <p className="eyebrow">{x.category}</p>
                <Accordion items={[[x.q, x.a]]} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function PolicyPage({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy"
  return (
    <>
      <PageHero
        eyebrow="Draft policy placeholder"
        title={privacy ? "Privacy Policy" : "Terms of Use"}
        copy="This page is a structured prototype and is not an approved legal document. Management and legal review are required before publication."
      />
      <section className="section">
        <div className="container policy">
          <Badge>Draft Placeholder — Not Legally Approved</Badge>
          <p className="lead">
            {privacy
              ? "This proposed notice describes how enquiry information might support follow-up once approved systems and processes are confirmed."
              : "These proposed terms outline how the public information service might be used once legal identity, jurisdiction and approved conditions are confirmed."}
          </p>
          {(privacy
            ? [
                [
                  "Information collected",
                  "Enquiry forms may request identity, organisation, contact information and a description of the training need. This prototype does not send or retain that information.",
                ],
                [
                  "Purpose and follow-up",
                  "If implemented, submitted details would be intended to support relevant follow-up about services or programme information, subject to an approved privacy notice.",
                ],
                [
                  "Retention and sharing",
                  "Retention periods, processors, hosting arrangements, international transfers and sharing rules remain to be confirmed by management and legal counsel.",
                ],
                [
                  "Your choices",
                  "Approved contact details and procedures for access, correction, deletion or withdrawal requests must be inserted before launch.",
                ],
              ]
            : [
                [
                  "Prototype status",
                  "Content, service descriptions and illustrative programme information are provided for interface review and do not create a commercial commitment.",
                ],
                [
                  "Conditional services",
                  "Schedules, prices, accreditation, credentials, digital workflows and delivery options require a confirmed written scope.",
                ],
                [
                  "Intellectual property",
                  "Ownership and permitted use of site and programme materials require approved legal wording.",
                ],
                [
                  "Liability and jurisdiction",
                  "Limitations, governing law, dispute handling and official entity details must be supplied by legal counsel before publication.",
                ],
              ]
          ).map(([title, copy]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{copy}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  )
}

export function ContactPage() {
  const [params, setParams] = useSearchParams()
  const initialMode =
    params.get("mode") === "individual" ? "individual" : "institutional"
  const [mode, setMode] = useState(initialMode)
  const [preview, setPreview] = useState(params.get("preview") || "default")
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const selectedSector =
    sectors.find((s) => s.slug === params.get("sector"))?.title || ""
  const selectedService =
    services.find((s) => s.slug === params.get("service"))?.title || ""
  const selectedAudience = audiences.find(
    (a) => a.slug === params.get("audience"),
  )
  const selectedProgramme =
    programmes.find((p) => p.slug === params.get("programme"))?.title || ""
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const required =
      mode === "institutional"
        ? [
            "name",
            "email",
            "organisation",
            "country",
            "orgType",
            "interest",
            "need",
          ]
        : ["name", "contact"]
    const next: Record<string, string> = {}
    required.forEach((x) => {
      if (!String(form.get(x) || "").trim()) next[x] = "This field is required."
    })
    if (preview === "errors") next.name = "Please enter your full name."
    setErrors(next)
    if (!Object.keys(next).length) {
      setSubmitted(true)
      setPreview("success")
    }
  }
  const success = submitted || preview === "success"
  return (
    <>
      <PageHero
        eyebrow="Contact & consultation"
        title="Tell us what capability needs to change."
        copy="Choose an institutional consultation or a shorter individual programme enquiry. All interactions are frontend-only prototype states."
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-sidebar">
            <p className="eyebrow">Enquiry mode</p>
            <div className="mode-switch">
              <button
                className={mode === "institutional" ? "active" : ""}
                onClick={() => {
                  setMode("institutional")
                  setErrors({})
                  setSubmitted(false)
                }}
              >
                Institutional enquiry
              </button>
              <button
                className={mode === "individual" ? "active" : ""}
                onClick={() => {
                  setMode("individual")
                  setErrors({})
                  setSubmitted(false)
                }}
              >
                Individual programme
              </button>
            </div>
            <div className="context-card">
              <p className="eyebrow">Preserved context</p>
              <p>
                {selectedSector ||
                  selectedService ||
                  selectedProgramme ||
                  selectedAudience?.title ||
                  params.get("context") ||
                  "General consultation"}
              </p>
            </div>
            <p className="fine">
              No data entered here is sent, stored or emailed. Official contact
              details and data handling require confirmation.
            </p>
            <Button to="/faqs" variant="secondary">
              Read common questions
            </Button>
          </div>
          <div className="contact-form-wrap">
            <div className="prototype-switch form-preview">
              <span>Prototype-only form state</span>
              {["default", "errors", "success"].map((x) => (
                <button
                  className={preview === x ? "active" : ""}
                  key={x}
                  onClick={() => {
                    setPreview(x)
                    setSubmitted(x === "success")
                    if (x === "errors")
                      setErrors({
                        name: "Please enter your full name.",
                        email: "Enter a valid work email.",
                      })
                    else setErrors({})
                  }}
                >
                  {x}
                </button>
              ))}
            </div>
            {success ? (
              <div className="form-success">
                <span>
                  <Check />
                </span>
                <p className="eyebrow">Prototype confirmation</p>
                <h2>Your enquiry has been recorded in this prototype.</h2>
                <p>
                  No email or server submission occurred. In a future approved
                  flow, the appropriate Learn2Earn team would review the context
                  and confirm a next conversation.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false)
                    setPreview("default")
                  }}
                >
                  Return to form
                </Button>
              </div>
            ) : (
              <form className="contact-form" noValidate onSubmit={submit}>
                {mode === "institutional" ? (
                  <>
                    <div className="field-grid">
                      <Field
                        name="name"
                        label="Full Name"
                        required
                        error={errors.name}
                      />
                      <Field
                        name="email"
                        label="Work Email"
                        type="email"
                        required
                        error={errors.email}
                      />
                      <Field
                        name="organisation"
                        label="Organisation"
                        required
                        error={errors.organisation}
                      />
                      <SelectField
                        name="country"
                        label="Country"
                        required
                        error={errors.country}
                        options={["Kenya", "Rwanda", "Other"]}
                      />
                      <SelectField
                        name="orgType"
                        label="Type of Organisation"
                        required
                        error={errors.orgType}
                        initial={selectedAudience?.org}
                        options={[
                          "Government / Public Agency",
                          "Association / Apex Body",
                          "Private Enterprise",
                          "Development Organisation / NGO / Donor",
                          "Academic / Professional Institution",
                          "Other",
                        ]}
                      />
                      <SelectField
                        name="interest"
                        label="Service or Sector of Interest"
                        required
                        error={errors.interest}
                        initial={selectedSector || selectedService}
                        options={[
                          ...services.map((s) => s.title),
                          ...sectors.map((s) => s.title),
                        ]}
                      />
                    </div>
                    <label>
                      Brief Description of Need <span>*</span>
                      <textarea
                        name="need"
                        rows={5}
                        aria-invalid={!!errors.need}
                      />
                      {errors.need && (
                        <small className="error">{errors.need}</small>
                      )}
                    </label>
                    <div className="field-grid">
                      <Field name="phone" label="Phone (optional)" type="tel" />
                      <SelectField
                        name="method"
                        label="Preferred Contact Method (optional)"
                        options={["Email", "Phone", "WhatsApp"]}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <Field
                      name="name"
                      label="Name"
                      required
                      error={errors.name}
                    />
                    <Field
                      name="contact"
                      label="Email or Phone"
                      required
                      error={errors.contact}
                    />
                    <Field
                      name="programme"
                      label="Programme of Interest"
                      initial={selectedProgramme}
                    />
                    <label>
                      Question or Message
                      <textarea name="message" rows={5} />
                    </label>
                  </>
                )}
                <div className="form-actions">
                  <Button type="submit">Record prototype enquiry</Button>
                  <Button
                    to="/contact?context=WhatsApp+alternative"
                    variant="secondary"
                  >
                    WhatsApp alternative
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({
  name,
  label,
  type = "text",
  required,
  error,
  initial,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
  error?: string
  initial?: string
}) {
  return (
    <label>
      {label} {required && <span>*</span>}
      <input
        name={name}
        type={type}
        defaultValue={initial}
        aria-invalid={!!error}
      />
      {error && <small className="error">{error}</small>}
    </label>
  )
}

function SelectField({
  name,
  label,
  required,
  error,
  options,
  initial,
}: {
  name: string
  label: string
  required?: boolean
  error?: string
  options: string[]
  initial?: string
}) {
  return (
    <label>
      {label} {required && <span>*</span>}
      <select name={name} defaultValue={initial || ""} aria-invalid={!!error}>
        <option value="">Select an option</option>
        {options.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
      {error && <small className="error">{error}</small>}
    </label>
  )
}

export function NotFoundPage() {
  return (
    <section className="section not-found">
      <div className="container">
        <span>404</span>
        <h1>We couldn’t find that page.</h1>
        <p>Use a link below to return to a Learn2Earn page.</p>
        <div className="button-row">
          <Button to="/">Home</Button>
          <Button to="/solutions" variant="secondary">
            Solutions
          </Button>
          <Button to="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  )
}
