# Learn2Earn Complete Website UI Prototype — Implementation Plan

## 1. Goal and Success Criteria

Build a complete, polished, responsive frontend prototype for Learn2Earn in the existing React 19 + Vite 8 + TypeScript + Tailwind CSS v4 project.

The result will:

- Position Learn2Earn as an Africa-first B2B institutional capacity-building partner, not a course marketplace.
- Include every requested public-facing page and all eight service detail views, four sector detail views, five buyer routes, programme states, article details, policies, FAQs, and contact states.
- Use URL-addressable client-side routes so navigation, breadcrumbs, contextual CTAs, browser history, and direct review links work predictably.
- Use centralized, typed mock data for all editable content.
- Use frontend-only state; no backend, API, database, authentication, checkout, LMS, email sending, or real WhatsApp redirect.
- Clearly label illustrative, conditional, draft, pending-approval, and prototype-only content.
- Meet responsive and WCAG 2.2 AA-oriented interaction requirements.

## 2. Repository Baseline and Constraints

- Current project is a minimal Vite app:
  - `src/App.tsx` is empty apart from a centered container.
  - `src/index.css` only imports Tailwind.
  - There is no existing router, component library, icon system, or design system.
- Use the repository-prescribed Vite/Tailwind v4 structure; do not add Tailwind or PostCSS configuration files.
- Keep global CSS, theme variables, font imports, focus styles, reduced-motion rules, and print/overflow utilities in `src/index.css`.
- Do not start a development server; Figma Make already supervises it.
- The attached research/gap-analysis Markdown reinforces the supplied brief and provides no conflicting approved brand or business information.

## 3. Technical Approach

### 3.1 Dependencies

Add only two focused runtime dependencies:

- `react-router-dom` for URL-addressable SPA routing, nested layouts, route params, query-string context, navigation, and browser history.
- `lucide-react` for a consistent accessible icon set instead of ad hoc symbols or emoji.

Use `BrowserRouter` if the Figma Make preview/deployment fallback supports SPA routes; otherwise use `HashRouter` to guarantee direct-link reliability in the static preview. Confirm this from the Make environment before wiring routes; the route map and page APIs remain identical either way.

### 3.2 Proposed Source Organization

```text
src/
  App.tsx
  main.tsx
  index.css
  types/
    content.ts
  data/
    navigation.ts
    services.ts
    sectors.ts
    audiences.ts
    programmes.ts
    insights.ts
    faqs.ts
    team.ts
    caseExamples.ts
    reports.ts
  hooks/
    useTheme.ts
    useDisclosure.ts
    usePageContext.ts
  utils/
    routes.ts
    contactContext.ts
    validation.ts
  components/
    layout/
      SiteHeader.tsx
      DesktopNavigation.tsx
      MobileNavigation.tsx
      NavigationDropdown.tsx
      SiteFooter.tsx
      PageShell.tsx
      Breadcrumbs.tsx
      BackToTop.tsx
    ui/
      Button.tsx
      Badge.tsx
      Modal.tsx
      Drawer.tsx
      Accordion.tsx
      Tabs.tsx
      SectionHeading.tsx
      PageHero.tsx
      EmptyState.tsx
      PrototypeStateBar.tsx
    content/
      ServiceCard.tsx
      SectorCard.tsx
      AudienceRouteCard.tsx
      ProcessTimeline.tsx
      MockReportCard.tsx
      ProgrammeCard.tsx
      ProgrammeDetailDrawer.tsx
      ArticleCard.tsx
      TeamProfileCard.tsx
    diagrams/
      BrandedAcademyDiagram.tsx
      HubAndSpokeDiagram.tsx
    global/
      ThemeToggle.tsx
      LearnerLoginModal.tsx
      WhatsAppQuickAction.tsx
    forms/
      ContactForm.tsx
      InstitutionalEnquiryForm.tsx
      IndividualEnquiryForm.tsx
      FormStatePreview.tsx
  pages/
    HomePage.tsx
    SolutionsPage.tsx
    ServiceDetailPage.tsx
    SectorsPage.tsx
    SectorDetailPage.tsx
    AudiencesPage.tsx
    ProgrammesPage.tsx
    AboutPage.tsx
    HowWeWorkPage.tsx
    CaseExamplesPage.tsx
    InsightsPage.tsx
    ArticlePage.tsx
    FAQsPage.tsx
    PrivacyPage.tsx
    TermsPage.tsx
    ContactPage.tsx
    NotFoundPage.tsx
```

Minor consolidation is acceptable where it keeps files coherent, but page markup, data, global interactions, and form logic must not collapse into one monolithic component.

### 3.3 Route Map

Use stable slug IDs shared by mock data, cards, selectors, dropdowns, breadcrumbs, and contact context:

- `/` — Home
- `/solutions` — Solutions overview
- `/solutions/:serviceSlug` — Eight reusable service detail views
- `/sectors` — Sectors overview
- `/sectors/:sectorSlug` — Four reusable sector detail views
- `/who-we-work-with` — Buyer overview, default route
- `/who-we-work-with/:audienceSlug` — Five buyer routes using the shared page/tab structure
- `/programmes` — Catalogue and all three prototype states
- `/about` — About Learn2Earn
- `/how-we-work` — Expanded process page
- `/case-examples` — Case Examples & Evidence
- `/insights` — Insights listing
- `/insights/:articleSlug` — Reusable article detail page
- `/faqs` — FAQs
- `/privacy` — Draft Privacy Policy
- `/terms` — Draft Terms of Use
- `/contact` — Smart dual-mode enquiry
- `*` — Designed not-found page with routes back to Home, Solutions, and Contact

Use query parameters for durable context and preview state:

- Contact: `?mode=institutional|individual&service=<slug>&sector=<slug>&audience=<slug>&programme=<slug>`
- Programmes prototype state: `?state=available|no-results|unconfirmed`
- Contact prototype state: `?preview=default|errors|success`

This preserves context across navigation and makes each state directly reviewable.

## 4. Visual and Interaction System

Before implementation, invoke the code-based design-system skill. Invoke the Unsplash skill before selecting photography because the homepage and sector storytelling benefit from relevant imagery.

### 4.1 Art Direction

- Premium “architectural editorial” composition: disciplined grid, strong horizontal rules, asymmetrical hero balance, restrained cards, generous whitespace, and numbered section cues.
- Avoid generic SaaS gradients, excessive pills, inflated corner radii, oversized floating blobs, and repetitive same-shape card sections.
- Use relevant African institutional/workforce imagery sparingly:
  - One strong homepage hero image.
  - Four carefully selected sector images.
  - Optional editorial image treatment on About/Insights.
  - Use descriptive alt text and remote URLs from Unsplash output; do not imply pictured people or institutions are clients.
- Supplement photography with CSS/SVG diagrams and simple line icons.

### 4.2 Typography

- Body/UI: Inter, imported as a public Google font.
- Selected display headings: Instrument Serif, used sparingly for major editorial phrases.
- Maintain a 16px minimum body size, compact label styles, readable 60–72 character text measures, and fluid display sizing with `clamp()`.

### 4.3 Theme Tokens

Define semantic CSS custom properties rather than hard-coded component colors.

Default monochrome:

- `--ink: #09090B`
- `--action: #18181B`
- `--text: #3F3F46`
- `--muted: #71717A`
- `--surface-subtle: #F4F4F5`
- `--surface: #FFFFFF`
- `--border: #E4E4E7`
- `--page: #FAFAFA`

Legacy warm preview:

- `--accent: #EA580C`
- `--accent-secondary: #D97706`
- `--ink: #432818`
- `--action: #432818`
- `--text: #111827`
- `--surface-subtle: warm off-white tint`
- `--page: #FAFAFA`

The theme toggle updates a root data attribute and persists the reviewer’s choice in `localStorage`, while respecting the default monochrome theme on first visit. Every button, link, badge, focus ring, diagram connector, progress bar, and chart must consume semantic tokens so theme switching is complete.

### 4.4 Layout and Motion

- 1280px max content width.
- 12-column desktop grid with 24px gutters; adaptive tablet grid; one-column mobile layout with 16px page padding.
- 80–96px desktop section spacing and approximately 48px mobile spacing.
- 8px standard card radius; slightly larger radius only for hero/media compositions and floating overlays.
- Thin borders and restrained elevation.
- Minimum 44×44px controls.
- Brief opacity/translate transitions for dropdowns, drawers, modal panels, tabs, and cards.
- Disable nonessential transitions and smooth scrolling under `prefers-reduced-motion: reduce`.

### 4.5 Shared Accessibility Behaviors

- Semantic landmarks and logical heading order.
- Skip-to-content link and a stable `main` target.
- Visible `:focus-visible` treatment.
- Click-triggered dropdowns with `aria-expanded`, keyboard navigation, Escape dismissal, outside-click dismissal, and focus restoration.
- Modal/drawer focus management, labelled dialog semantics, Escape/overlay close, and body-scroll locking.
- Accessible accordions with button controls and associated panels.
- Tabs usable by keyboard, with clear selected state not conveyed by color alone.
- Form errors tied to controls through `aria-describedby`; summary announcement for validation and success.
- Route changes scroll to the top and move focus to the page heading without disrupting modal/drawer navigation.

## 5. Shared Application Shell

### 5.1 Header

- Sticky, translucent/glass-treated header only where it improves contrast.
- Wordmark: `Learn2Earn`; supporting label: `Institutional Capacity Building`.
- Desktop navigation follows the exact menu groups supplied in the brief.
- Active route styling and correct links for every dropdown item.
- Learner login button opens a modal; no external link is invented.
- Contact button routes to the institutional form default.
- Mobile menu is a full-height accessible drawer with expandable navigation groups, theme toggle, Learner login, and Contact action.

### 5.2 Learner Login Modal

- Explain that returning learners use a separate learning platform.
- Show a labelled placeholder: `External learner platform URL — pending confirmation`.
- Provide “Close” and a disabled/non-navigating “Open learning platform” treatment with explanatory text until a URL is confirmed.

### 5.3 Contextual WhatsApp Action

- Floating bottom-right 44px+ action.
- Opens a compact preview panel; it does not contact or redirect to an invented number.
- Message derives from route data, for example: `Hello Learn2Earn, I would like to discuss Healthcare and Nutrition training for my organisation.`
- Panel states that the verified WhatsApp destination is pending confirmation.
- Includes copy-message functionality where browser support exists, plus close action.

### 5.4 Footer

- Four columns: Solutions, Sector Academies, Who We Work With, Company/How We Work/Case Examples/FAQs/Privacy/Terms.
- Clearly labelled placeholders for official email, phone, address, and WhatsApp.
- Regional note: proposed first-wave operations in Kenya and Rwanda, serving institutions across Africa.
- Current copyright year and prototype/approval note.

## 6. Central Typed Mock Data

Create interfaces for navigation groups, services, sectors, audiences, programmes, articles, FAQs, profiles, case scenarios, and report data. Each entry uses:

- Stable `id`/`slug`.
- Display labels and navigation paths.
- Page-specific content arrays.
- Conditional/approval labels where required.
- Contact preselection metadata.
- Related entity slugs.

Data requirements:

- Eight complete service entries, each with hero, problems, users, provisions, engagement format, client inputs, conditional outputs, three FAQs, related sectors, and CTA.
- Four complete sector entries with identical seven-part structure.
- Five complete audience entries.
- Four to six illustrative programme records sufficient to exercise search and filters.
- Six to nine sample articles across all three categories, with two or more full article bodies.
- FAQ entries across all seven categories.
- Replaceable role-based team/expert placeholders; no names, credentials, biographies, or real portraits.
- Three or more illustrative engagement scenarios.
- Reusable illustrative reporting series for completion, competency, and pre/post comparisons.

## 7. Page-by-Page Implementation

### 7.1 Homepage — Nine Sections in Required Order

1. Shared header plus editorial hero:
   - Exact supplied headline and supporting copy.
   - “Explore solutions” → `/solutions`.
   - “Discuss a programme” → institutional or individual contact context as appropriate; use institutional consultation wording from the brief.
   - Strong institutional image with a small non-client editorial caption.
2. Four route cards:
   - Workforce → private businesses route, with government cross-link.
   - Members → associations route.
   - Funded programme → donors route.
   - Find a programme → programmes page.
3. Eight service cards plus full-width Managed Support and Account Services layer.
4. Four sector academy cards with imagery and exact contextual links.
5. Responsive six-stage process:
   - Connected horizontal timeline on desktop.
   - Numbered vertical timeline on mobile.
6. Four delivery/access feature blocks using careful conditional language.
7. Proof and people:
   - Expert vetting standards.
   - Sample completion and competency cards.
   - Reporting preview; every sample bears `Sample Illustration — Not Client Data`.
8. Consultation panel with Contact and WhatsApp actions.
9. Shared footer.

### 7.2 Solutions Overview

- Introductory hero.
- Eight service cards.
- Common institutional challenges grid.
- “How services combine” composition showing Diagnose/Design/Delivery/Assessment around the managed support layer.
- Full-width Managed Support & Administration block.
- Consultation CTA.

### 7.3 Reusable Service Detail Template

- Breadcrumbs and a horizontally scrollable/desktop-wrapped service selector.
- Render all ten required content areas from typed service data.
- Three-question accordion for each service.
- Related sector cards.
- CTA query string preselects the service on Contact.
- Branded Academies includes responsive three-node Sponsoring Organisation → Learn2Earn Managed Academy → Private Learner Cohorts diagram with directional labels.
- Digital Workflows has a prominent `Subject to Scope Confirmation / Pilot Availability` badge and no definitive legal/regulatory claims.
- Assessment & Outcomes includes a polished responsive sample dashboard with completion ring/bar, summary values, and pre/post bars, always labelled `Illustrative Sample Report — Example Only`.

### 7.4 Sectors Overview and Four Sector Pages

- Overview hero, four sector cards, common capacity-building model, and consultation CTA.
- Reusable detail template with the exact seven-section order:
  1. Sector headline and audience.
  2. Three challenges.
  3. Tailored solutions.
  4. Themes with exact `Proposed Programme Themes — Tailored per Client` label.
  5. Cross-sector skills.
  6. Labelled sample outcomes preview.
  7. Exact sector-specific CTA.
- Each CTA passes the sector slug to Contact.

### 7.5 Who We Work With

- Buyer-focused overview page with five route cards.
- Dedicated URL per audience while retaining a shared route tab bar.
- Every audience includes mandate/need framing, typical programme shape, useful services, an illustrative scenario, and contextual CTA.
- Government CTA preselects `Government / Public Agency`.
- Associations route includes responsive SVG/CSS hub-and-spoke diagram:
  - Center: Coordinating Apex Body.
  - Spokes: Member Enterprises, Regional Chapters, SME Practitioners, Professional Cohorts.
- Donor route explicitly covers mixed-connectivity design and auditable reporting without promising offline/SMS delivery.

### 7.6 Programmes

- Prototype-only state bar clearly separated from production-style content.
- Default state: `No confirmed public programmes`, per brief.
- Available state:
  - Prominent `Illustrative Mock Data — Not Confirmed Live Programmes` notice.
  - Search, sector, format, and availability filters.
  - Cards with complete metadata and contextual enquiry CTA.
  - Accessible detail drawer with outcomes, outline, eligibility, duration, `Subject to confirmation` price, and enquiry button.
- No-results state:
  - Exact empty-state message.
  - Clear/reset all action returns to catalogue.
- Unconfirmed state:
  - Polished catalogue explanation.
  - Inline individual enquiry form using shared validation/success behavior.

### 7.7 About

- Company introduction, mission, institutional positioning, and capacity-building approach.
- `Our Evolution: iLearn to Learn2Earn` section with prominent `Pending Management Approval`.
- Clear distinction between commercial institutional services and potential social-impact activity.
- Role-based team/expert placeholders clearly labelled as replaceable mock data.
- Contact CTA.

### 7.8 How We Work

- Expanded six-stage timeline.
- One explicitly proposed institutional scenario, not a client story.
- Responsive comparison table: `What the Client Supplies` vs. `What Learn2Earn Delivers`.
- Labelled assessment/reporting visuals.
- Consultation CTA.

### 7.9 Case Examples & Evidence

- Multiple structured scenarios with Challenge, Approach, Audience, Illustrative Activities, and Possible Outputs/Outcomes.
- Every scenario carries exact label: `Illustrative Engagement Scenario — Awaiting Client Publication Sign-Off`.
- Fact-sheet controls open a small “file pending approval” modal or disabled explanatory state; no fake download.
- No names, logos, testimonials, or unsupported figures.

### 7.10 Insights and Article Detail

- Listing page with category filter and article cards containing every required metadata field.
- Full-text search is optional only if it does not distract from required category behavior.
- Reusable article route with title, placeholder author, date, clearly labelled sample content, structured mock body, related articles, CTA, and reviewer placeholder.
- Regulated/technical topics show exact pattern: `Reviewed by: [Named Sector Specialist / Role]`.

### 7.11 FAQs and Policies

- FAQ page with filter/tabs for all seven categories and accessible accordions.
- Separate Privacy and Terms routes.
- Policy pages use structured, readable draft sections and a prominent `Draft Placeholder — Requires Management and Legal Approval` notice.
- State that enquiry details are intended for follow-up; do not claim approved retention, processor, jurisdiction, or compliance terms.

### 7.12 Smart Contact Page

- Context summary at top shows what route preselected and allows clearing it.
- Two form modes:
  - Institutional fields exactly as specified.
  - Individual fields exactly as specified.
- Country dropdown includes Kenya, Rwanda, and Other only unless additional countries are supplied/approved.
- Required client-side validation:
  - Non-empty required fields.
  - Work email/email format where an email is used.
  - Email-or-phone accepts either a valid-looking email or a reasonable phone string without asserting deliverability.
  - Textarea minimum useful length.
- Prototype state bar:
  - Default.
  - Validation errors, produced by the real validator.
  - Success.
- Real submit behavior:
  - Prevent default.
  - Show a brief in-button loading state.
  - Transition to explicit prototype success: the enquiry was recorded only in the current prototype; no email/server submission occurred.
  - Offer reset/start another enquiry and return to relevant page.
- WhatsApp alternative opens the shared preview panel with the same context.

## 8. Interaction Details and Edge Cases

- Header dropdowns are mutually exclusive; route change closes menus and mobile drawer.
- Overlay stacking order is centralized so mobile nav, modal, programme drawer, and WhatsApp panel do not conflict.
- Opening one global overlay closes incompatible overlays.
- Invalid service, sector, audience, article, or programme slugs render the designed not-found state rather than blank content.
- Filter matching is case-insensitive and combines all active filters.
- Clearing programme filters restores available mock records.
- Query context that does not match known data is ignored safely and never displayed unsanitized.
- Theme and route context survive navigation; form field edits are not unexpectedly overwritten after initial preselection.
- Tables use horizontal scrolling with a visible cue on narrow screens; diagrams switch to stacked/vertical forms while retaining reading order and connector meaning.
- All visible buttons either navigate, change state, submit/reset, open a labelled preview, or explain why an external action is pending.

## 9. Implementation Sequence

1. Load design-system and Unsplash guidance; choose approved remote imagery and record source URLs/alt text.
2. Install focused dependencies and establish types, route constants, centralized mock data, design tokens, font imports, and global accessibility styles.
3. Build router, shared shell, route-focus/scroll behavior, header/dropdowns/mobile nav, footer, theme toggle, learner modal, WhatsApp panel, breadcrumbs, and back-to-top.
4. Build foundational UI/content components and diagrams.
5. Implement Homepage and overview pages to validate the visual system.
6. Implement reusable service and sector templates with all records.
7. Implement audience routes, diagrams, and smart contact-context helpers.
8. Implement Programmes states, filters, detail drawer, and embedded enquiry.
9. Implement About, How We Work, Case Examples, Insights/articles, FAQs, Privacy, and Terms.
10. Implement and connect the full Contact experience and all CTA query parameters.
11. Audit all route/link maps and polish responsive layouts and accessibility states.

## 10. Verification Strategy

Because this is a broad multi-page implementation, run the repository’s supported checks after implementation:

1. `pnpm format` on the project, then inspect that only intended source/package files changed.
2. `pnpm build` and resolve all TypeScript/Vite errors.
3. Use the existing Figma Make preview, without starting another server, to inspect:
   - Desktop, tablet, and mobile widths.
   - Every top-level route and each dynamic service/sector/audience/article route.
   - Header dropdown keyboard behavior and mobile navigation.
   - Theme switching across representative pages and overlay components.
   - Learner modal, WhatsApp preview, programme drawer, fact-sheet placeholder, and all close/Escape paths.
   - Programme available, no-results, and unconfirmed states.
   - Search/filter reset behavior.
   - FAQ accordions and audience tabs.
   - Contact modes, smart preselection examples, validation state, submission state, and reset.
   - Responsive timelines, diagrams, reporting visuals, and comparison table overflow.
4. Perform a content/claims audit:
   - All samples visibly marked illustrative.
   - Digital workflows conditional.
   - CPD/CME conditional where authorised.
   - No fake clients, staff, reviewers, contact details, URLs, prices, schedules, accreditations, outcomes, or testimonials.
   - No backend, LMS internal UI, checkout, or unsupported delivery claims.
5. Perform a navigation audit:
   - Every header/footer item resolves.
   - Every card/CTA has a sensible destination.
   - Sector/service/audience/programme context arrives correctly at Contact.
   - Unknown routes/slugs produce the not-found experience.

## 11. Completion Deliverables

- Complete responsive frontend implementation in the current repository.
- Central editable data and token architecture.
- All required pages, views, diagrams, mock reports, forms, prototype states, and global interactions.
- Updated package manifest/lockfile for only the approved focused dependencies.
- Successful format/build verification and a concise report of any preview-only limitations.
