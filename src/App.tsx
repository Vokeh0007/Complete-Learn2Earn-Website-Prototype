import { useEffect, useState } from "react"
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"
import { ExternalLink } from "lucide-react"
import {
  AboutPage,
  ArticlePage,
  AudiencesPage,
  CaseExamplesPage,
  ContactPage,
  DashboardPage,
  FAQsPage,
  HomePage,
  HowWeWorkPage,
  InsightsPage,
  NotFoundPage,
  PolicyPage,
  ProgrammeDetailPage,
  ProgrammesPage,
  SectorDetailPage,
  SectorsPage,
  ServiceDetailPage,
  SolutionsPage,
  WorkspaceLoginPage,
} from "./pages"
import {
  Button,
  Modal,
  SiteFooter,
  SiteHeader,
  WhatsAppQuickAction,
} from "./ui"

function ScrollManager() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppShell() {
  const [login, setLogin] = useState(false)
  return (
    <>
      <ScrollManager />
      <SiteHeader onLogin={() => setLogin(true)} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route
            path="/solutions/:serviceSlug"
            element={<ServiceDetailPage />}
          />
          <Route path="/sectors" element={<SectorsPage />} />
          <Route path="/sectors/:sectorSlug" element={<SectorDetailPage />} />
          <Route path="/who-we-work-with" element={<AudiencesPage />} />
          <Route
            path="/who-we-work-with/:audienceSlug"
            element={<AudiencesPage />}
          />
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route
            path="/programmes/:programmeSlug"
            element={<ProgrammeDetailPage />}
          />
          <Route path="/dashboards" element={<DashboardPage />} />
          <Route path="/workspace-login" element={<WorkspaceLoginPage />} />
          <Route
            path="/dashboards/:dashboardType"
            element={<DashboardPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/case-examples" element={<CaseExamplesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:articleSlug" element={<ArticlePage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/privacy" element={<PolicyPage type="privacy" />} />
          <Route path="/terms" element={<PolicyPage type="terms" />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
      <WhatsAppQuickAction />
      <Modal
        open={login}
        onClose={() => setLogin(false)}
        title="Preview a learning workspace"
      >
        <div className="login-modal">
          <p>
            Choose a role to preview the connected learning workspace. These
            links are frontend-only and do not sign you in to a live LMS.
          </p>
          <div className="placeholder-url">
            <span>Live platform connection</span>
            <strong>Destination pending confirmation</strong>
          </div>
          <p className="fine">
            Names, courses, attendance, payments, and reporting figures are
            illustrative dummy data.
          </p>
          <div className="button-row">
            <Button to="/workspace-login" onClick={() => setLogin(false)}>
              Open workspace login
            </Button>
            <Button to="/dashboards" variant="secondary" onClick={() => setLogin(false)}>Browse previews</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
