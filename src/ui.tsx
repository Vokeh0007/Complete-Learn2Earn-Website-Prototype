import { ReactNode, useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  X,
} from "lucide-react"
import { audiences, sectors, services } from "./data"

export function Button({
  to,
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}: {
  to?: string
  children: ReactNode
  variant?: "primary" | "secondary" | "text"
  onClick?: () => void
  type?: "button" | "submit"
  className?: string
}) {
  const cn = `btn btn-${variant} ${className}`
  return to ? (
    <Link className={cn} to={to} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <button className={cn} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string
  title: string
  copy?: string
}) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string
  title: string
  copy: string
  children?: ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="hero-copy">
          <p>{copy}</p>
          {children && <div className="button-row">{children}</div>}
        </div>
      </div>
    </section>
  )
}

function ThemeToggle() {
  const getStoredTheme = () => {
    if (typeof window === "undefined") return false

    try {
      if (window.localStorage.getItem("l2e-theme-selected") !== "true") {
        return true
      }
      return window.localStorage.getItem("l2e-theme") === "warm"
    } catch {
      return false
    }
  }

  const [warm, setWarm] = useState(getStoredTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = warm ? "warm" : "mono"

    try {
      window.localStorage.setItem("l2e-theme", warm ? "warm" : "mono")
    } catch {
      // Storage can be unavailable in locked-down or private browsing contexts.
    }
  }, [warm])
  const toggleTheme = () => {
    try {
      window.localStorage.setItem("l2e-theme-selected", "true")
    } catch {
      // Storage can be unavailable in locked-down or private browsing contexts.
    }
    setWarm(!warm)
  }
  return (
    <button
      className="icon-btn"
      aria-label={`Switch to ${warm ? "monochrome" : "warm"} theme`}
      title="Switch colour theme"
      onClick={toggleTheme}
    >
      {warm ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}

const navGroups = [
  {
    label: "Solutions",
    base: "/solutions",
    links: [
      ["All Solutions", "/solutions"],
      ...services.map((x) => [x.title, `/solutions/${x.slug}`]),
      ["How We Work", "/how-we-work"],
    ],
  },
  {
    label: "Sectors",
    base: "/sectors",
    links: [
      ["All Sectors", "/sectors"],
      ...sectors.map((x) => [x.title, `/sectors/${x.slug}`]),
    ],
  },
  {
    label: "Who We Work With",
    base: "/who-we-work-with",
    links: [
      ["Overview", "/who-we-work-with"],
      ...audiences.map((x) => [x.title, `/who-we-work-with/${x.slug}`]),
    ],
  },
  {
    label: "About",
    base: "/about",
    links: [
      ["About Learn2Earn", "/about"],
      ["How We Work", "/how-we-work"],
      ["Case Examples & Evidence", "/case-examples"],
      ["Dashboard previews", "/dashboards"],
      ["FAQs", "/faqs"],
      ["Privacy Policy", "/privacy"],
      ["Terms of Use", "/terms"],
    ],
  },
]

function NavDropdown({
  group,
  closeAll,
}: {
  group: typeof navGroups[number]
  closeAll?: () => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [])
  return (
    <div className="nav-drop" ref={ref}>
      <button aria-expanded={open} onClick={() => setOpen(!open)}>
        {group.label}
        <ChevronDown size={15} />
      </button>
      {open && (
        <div className="dropdown" role="menu">
          {group.links.map(([label, to]) => (
            <Link
              role="menuitem"
              key={to}
              to={to}
              onClick={() => {
                setOpen(false)
                closeAll?.()
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function SiteHeader({ onLogin }: { onLogin: () => void }) {
  const [mobile, setMobile] = useState(false)
  const location = useLocation()
  useEffect(() => setMobile(false), [location.pathname])
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="wordmark" to="/">
          <strong>Learn2Earn</strong>
          <span>Institutional Capacity Building</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          <NavLink to="/">Home</NavLink>
          {navGroups.slice(0, 3).map((g) => (
            <NavDropdown key={g.label} group={g} />
          ))}
          <NavLink to="/programmes">Programmes</NavLink>
          <NavDropdown group={navGroups[3]} />
          <NavLink to="/insights">Insights</NavLink>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Button variant="secondary" onClick={onLogin}>
            Workspace login <ExternalLink size={15} />
          </Button>
          <Button to="/contact">Contact us</Button>
          <button
            className="mobile-trigger icon-btn"
            aria-label="Open navigation"
            onClick={() => setMobile(true)}
          >
            <Menu />
          </button>
        </div>
      </div>
      {mobile && (
        <div className="mobile-menu">
          <div className="mobile-menu-head">
            <span>Navigation</span>
            <button
              className="icon-btn"
              aria-label="Close navigation"
              onClick={() => setMobile(false)}
            >
              <X />
            </button>
          </div>
          <NavLink to="/">Home</NavLink>
          {navGroups.map((g) => (
            <NavDropdown
              key={g.label}
              group={g}
              closeAll={() => setMobile(false)}
            />
          ))}
          <NavLink to="/programmes">Programmes</NavLink>
          <NavLink to="/insights">Insights</NavLink>
          <Button variant="secondary" onClick={onLogin}>
            Workspace login <ExternalLink size={15} />
          </Button>
          <Button to="/contact">Contact us</Button>
        </div>
      )}
    </header>
  )
}

export function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean
  title: string
  children: ReactNode
  onClose: () => void
}) {
  useEffect(() => {
    const e = (ev: KeyboardEvent) => ev.key === "Escape" && onClose()
    document.addEventListener("keydown", e)
    return () => document.removeEventListener("keydown", e)
  }, [onClose])
  if (!open) return null
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h2 id="modal-title">{title}</h2>
          <button
            className="icon-btn"
            aria-label="Close dialog"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export function WhatsAppQuickAction() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const context =
    location.pathname.split("/").filter(Boolean).pop()?.replaceAll("-", " ") ||
    "institutional training"
  return (
    <div className="whatsapp">
      {open && (
        <div className="whatsapp-panel">
          <button
            className="panel-close"
            aria-label="Close WhatsApp preview"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>
          <p className="eyebrow">Message preview</p>
          <p>
            Hello Learn2Earn, I would like to discuss <strong>{context}</strong>{" "}
            for my organisation.
          </p>
          <p className="fine">
            Official WhatsApp destination pending confirmation.
          </p>
          <Button
            to={`/contact?context=${encodeURIComponent(context)}`}
            variant="primary"
          >
            Continue with enquiry
          </Button>
        </div>
      )}
      <button
        className="whatsapp-btn"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <MessageCircle size={20} />
        <span>Quick question</span>
      </button>
    </div>
  )
}

export function SiteFooter() {
  const columns = [
    [
      "Solutions",
      services
        .filter((_, i) => [0, 1, 2, 7].includes(i))
        .map((x) => [x.title, `/solutions/${x.slug}`]),
    ],
    ["Sector Academies", sectors.map((x) => [x.title, `/sectors/${x.slug}`])],
    [
      "Who We Work With",
      audiences.map((x) => [x.title, `/who-we-work-with/${x.slug}`]),
    ],
    [
      "Company",
      [
        ["About Learn2Earn", "/about"],
        ["How We Work", "/how-we-work"],
        ["Case Examples", "/case-examples"],
        ["Dashboard previews", "/dashboards"],
        ["FAQs", "/faqs"],
        ["Privacy Policy", "/privacy"],
        ["Terms of Use", "/terms"],
      ],
    ],
  ] as [string, string[][]][]
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-brand">
          <strong>Learn2Earn</strong>
          <p>
            Africa-first institutional capacity building, with proposed
            first-wave operations in Kenya and Rwanda.
          </p>
          <p className="fine">
            Email, phone, office and verified WhatsApp details: pending
            confirmation.
          </p>
        </div>
        <div className="footer-columns">
          {columns.map(([title, links]) => (
            <div key={title}>
              <h3>{title}</h3>
              {links.map(([label, to]) => (
                <Link key={label} to={to}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Learn2Earn. Prototype content.</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}

export function ProcessTimeline() {
  const steps = ["Diagnose", "Design", "Deliver", "Assess", "Certify", "Report"]
  return (
    <div className="process">
      {steps.map((x, i) => (
        <div key={x} className="process-step">
          <span>{String(i + 1).padStart(2, "0")}</span>
          <strong>{x}</strong>
          {i < steps.length - 1 && (
            <ArrowRight className="process-arrow" size={20} />
          )}
        </div>
      ))}
    </div>
  )
}

export function ReportCard({ large = false }: { large?: boolean }) {
  return (
    <div className={`report-card ${large ? "report-large" : ""}`}>
      <div className="report-head">
        <div>
          <p className="eyebrow">Cohort overview</p>
          <h3>Programme progress</h3>
        </div>
        <Badge>Illustrative Sample Report — Example Only</Badge>
      </div>
      <div className="report-stats">
        <div>
          <strong>84%</strong>
          <span>Illustrative completion</span>
        </div>
        <div>
          <strong>+21</strong>
          <span>Example assessment change</span>
        </div>
        <div>
          <strong>42</strong>
          <span>Sample cohort size</span>
        </div>
      </div>
      <div
        className="chart"
        aria-label="Illustrative assessment comparison chart"
      >
        {[48, 62, 56, 77, 64, 85].map((h, i) => (
          <div key={i} style={{ height: `${h}%` }}>
            <span />
          </div>
        ))}
      </div>
      <div className="chart-labels">
        <span>Baseline</span>
        <span>Post-programme</span>
      </div>
    </div>
  )
}

export function Accordion({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="accordion">
      {items.map(([q, a], i) => (
        <div className="accordion-item" key={q}>
          <button
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{q}</span>
            <ChevronDown size={20} />
          </button>
          {open === i && (
            <div className="accordion-content">
              <p>{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
