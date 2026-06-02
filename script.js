/* Principal UX Architect Portfolio Interactivity */

const imageNames = [
  'mockup.png', 'mockup.jpg', 'mockup.jpeg', 'screenshot.png', 'screenshot.jpg',
  'screenshot.jpeg', 'screen.png', 'screen.jpg', 'cover.png', 'cover.jpg',
  'hero.png', 'hero.jpg', 'image.png', 'image.jpg', '1.png', '1.jpg', '01.png', '01.jpg'
];

function visuals(folders) {
  return folders.flatMap(folder => imageNames.map(file => `Case Studies/${folder}/${file}`));
}

const caseStudies = [
  {
    category: 'systems', badge: 'Design System', badgeClass: 'badge-red', client: 'PROVIDENCE GLOBAL CENTER', timeline: '2023 - Present', title: 'Multi-Brand Enterprise Design System Architecture', role: 'Principal UX Architect', impact: '60% fewer inconsistencies, 30% faster handoff',
    summary: 'A systems-level redesign of fragmented healthcare product interfaces into a governed, tokenized, multi-brand design architecture.', problem: 'More than 10 healthcare surfaces were using disconnected UI patterns, one-off CSS variables, inconsistent accessibility behavior, and duplicated engineering effort.',
    research: 'Audited product screens, component inventories, engineering repositories, accessibility defects, and stakeholder handoff pain points across patient, provider, and internal operations platforms.', strategy: 'Created a federated design-system operating model with contribution rules, token governance, adoption scorecards, and a shared component API contract between design and engineering.',
    low: 'Mapped the global, alias, and component-token taxonomy; sketched component states, responsive behavior, accessibility annotations, and rollout dependencies.', high: 'Built high-fidelity Figma libraries with semantic color, typography, spacing, elevation, state, and density rules for web, iOS, Android, and multi-brand theming.',
    system: 'Defined DTCG-aligned tokens, Style Dictionary exports, reusable component specs, ARIA rules, contrast-safe color pairs, and governance documentation.', testing: 'Validated components through designer reviews, engineering checks, accessibility audits, and adoption tracking across squads.',
    metrics: ['60% reduction in UI inconsistency', '30% faster design-to-development handoff', '40% faster engineer onboarding', 'Reusable governance for 10+ platforms']
  },
  {
    category: 'transformation', badge: 'Healthcare UX', badgeClass: 'badge-teal', client: 'PROVIDENCE / TRUSANA', timeline: '2022 - 2023', title: 'Trusana Mental Health Enrollment Platform', role: 'Lead UX Engineer', impact: '25% conversion gain, ET Healthcare Award',
    summary: 'An end-to-end patient enrollment redesign for a regulated mental-health platform serving Medicare and Medicaid users.', problem: 'The legacy journey was too long, form-heavy, and cognitively demanding for high-vulnerability users, creating abandonment and support pressure.',
    research: 'Reviewed funnel drop-offs, patient-service feedback, HIPAA constraints, accessibility risks, form validation issues, and cognitive-load barriers.', strategy: 'Shifted a 14-step form flow into a progressive, trust-building enrollment model with clear eligibility checkpoints and simplified decision moments.',
    low: 'Created low-fidelity task flows, progressive disclosure wireframes, content hierarchy maps, and edge-case paths for eligibility and appointment selection.', high: 'Designed responsive patient journeys with accessible inputs, clear error states, plain-language microcopy, and reassuring progress visibility.',
    system: 'Used healthcare-safe form components, WCAG AA color and focus tokens, validation rules, and reusable stepper patterns.', testing: 'Validated senior-user scenarios, keyboard navigation, screen-reader announcements, and completion confidence across the funnel.',
    metrics: ['25% increase in enrollment conversion', 'Reduced high-friction abandonment', 'Improved accessibility compliance', 'ET Healthcare product award']
  },
  {
    category: 'transformation', badge: 'Enterprise Workflow', badgeClass: 'badge-blue', client: 'PROVIDENCE / PS&D', timeline: '2024', title: 'Applicant Tracking System and Job Portal Modernization', role: 'Principal UX Architect', impact: '35% faster task completion',
    summary: 'A recruiter operations redesign that simplified dense job creation, candidate review, filtering, and batch-action workflows.', problem: 'Recruiters were working through dense tables, hidden actions, repeated navigation, and slow job-posting paths.',
    research: 'Observed recruiter task flows, mapped job-post creation steps, reviewed candidate-list usage, and identified repeated decision bottlenecks.', strategy: 'Reframed the ATS as a three-pane workspace: filters, results, and candidate or job details in one predictable surface.',
    low: 'Wireframed recruiter dashboards, batch action bars, saved views, filter chips, and job-posting wizard paths.', high: 'Delivered desktop and responsive views with compact density, clear data hierarchy, sticky actions, and accessible table interactions.',
    system: 'Standardized data-table tokens, chips, status labels, pagination, form fields, drawers, and batch operation patterns.', testing: 'Validated recruiter task completion, table scanning, form completion, bulk actions, and responsive behavior.',
    metrics: ['35% faster job creation', 'Reduced navigation between tasks', '40% smaller perceived payload', 'Higher candidate-status confidence']
  },
  {
    category: 'innovation', badge: 'AI Workflow', badgeClass: 'badge-purple', client: 'PROVIDENCE LABS', timeline: '2024 - 2025', title: 'AI-Integrated Enterprise Design Workflows', role: 'Lead AI-UX Strategist', impact: '3x faster prototyping cycles',
    summary: 'A governed AI-assisted design workflow using Figma Make, Claude, Google Stitch, and design-system prompts.', problem: 'Design teams were spending too much time creating repetitive wireframe variants, workshop artifacts, and first-pass specifications.',
    research: 'Studied designer pain points, PM workshop needs, privacy constraints, prompt failure patterns, and design-system compliance gaps.', strategy: 'Created an AI workflow guardrail model where prompts and approved patterns guide generation while designers retain control.',
    low: 'Mapped prompt-to-wireframe flows, AI review checkpoints, workshop templates, and fallback patterns for uncertain outputs.', high: 'Designed reusable AI-generated prototype structures convertible into production-ready Figma explorations.',
    system: 'Built prompt libraries, design-system syntax rules, component constraints, and review criteria for AI-assisted UX output.', testing: 'Compared manual and AI-assisted cycles, reviewed prompt quality, and gathered designer feedback.',
    metrics: ['3x faster first-pass prototyping', '20% shorter design lifecycle', 'More consistent workshop outputs', 'Reduced repetitive specification work']
  },
  {
    category: 'systems', badge: 'Accessibility', badgeClass: 'badge-amber', client: 'PROVIDENCE ENTERPRISE', timeline: '2023 - 2024', title: 'Accessibility Architecture at Scale', role: 'Enterprise Accessibility Lead', impact: 'WCAG 2.2 AA embedded into the system layer',
    summary: 'A program that moved accessibility from late-stage QA into reusable component, token, and governance decisions.', problem: 'Accessibility defects were being found too late, creating rework across color, focus, landmark, form, modal, and screen-reader behavior.',
    research: 'Audited accessibility defects, screen-reader flows, keyboard traps, color contrast, and component-level failure patterns.', strategy: 'Shifted accessibility ownership to the system layer with annotations, automated checks, and acceptance criteria.',
    low: 'Mapped focus flows, keyboard order, ARIA states, alert timing, dialog behavior, and error recovery patterns.', high: 'Designed contrast-safe components, visible focus states, accessible forms, and responsive layouts that preserve reading order.',
    system: 'Added WCAG AA tokens, axe-core testing requirements, ARIA templates, annotation checklists, and Figma accessibility documentation.', testing: 'Validated keyboard-only flows, screen-reader simulation, contrast testing, automated audits, and accessibility QA reviews.',
    metrics: ['90% reduction in late accessibility defects', '100% AA target for new surfaces', 'Lower regulatory risk', 'Reusable accessibility criteria']
  },
  {
    category: 'research,behance', badge: 'Research Methods', badgeClass: 'badge-blue', client: 'IIT BOMBAY EXECUTIVE', timeline: '2021', title: 'Design Thinking Research Framework', role: 'UX Research Lead', impact: 'Reusable discovery model for product teams',
    summary: 'A structured design-thinking case study converting ambiguous business problems into validated user needs.', problem: 'Teams lacked a repeatable way to move from stakeholder assumptions to evidence-backed experience requirements.',
    research: 'Used stakeholder interviews, empathy maps, journey maps, pain-point clustering, and heuristic review.', strategy: 'Defined a five-phase discovery-to-validation model aligned to product prioritization and measurable outcomes.',
    low: 'Created journey maps, persona drafts, opportunity matrices, service blueprints, and low-fidelity sketches.', high: 'Converted validated concepts into polished flows, screens, and research-backed recommendations.',
    system: 'Created templates for personas, interview scripts, assumption maps, usability scorecards, and synthesis reports.', testing: 'Validated recommendations through critique sessions, heuristic scoring, and scenario-based usability review.',
    metrics: ['25% shorter discovery cycles', 'Clearer product requirements', 'Reusable research templates', '780+ Behance views']
  },
  {
    category: 'transformation,behance', badge: 'Lead Funnel', badgeClass: 'badge-teal', client: 'GRAMENER TECH', timeline: '2016', title: 'Marketing Leads and Recruiter Funnel UX', role: 'Lead Product Designer', impact: '30% faster lead-processing workflow',
    summary: 'A funnel and dashboard redesign that made lead capture, recruiter review, and follow-up actions easier.', problem: 'Lead forms were long, tables were hard to scan, validation was unclear, and mobile behavior created layout strain.',
    research: 'Reviewed lead conversion steps, recruiter table usage, form errors, search/filter behavior, and repeated support issues.', strategy: 'Reduced form friction, moved recruiters toward task-based cards, and aligned lead status visibility with the user journey.',
    low: 'Designed form-step wireframes, table-to-card conversions, filter placement, mobile layouts, and validation states.', high: 'Created lead capture screens, recruiter dashboards, responsive cards, status labels, and follow-up actions.',
    system: 'Defined Material-inspired cards, form controls, validation states, lead tags, spacing, and responsive breakpoints.', testing: 'Tested task completion, form comprehension, table scanning, mobile wrapping, and error recovery.',
    metrics: ['30% faster lead processing', 'Reduced form confusion', 'Improved responsive behavior', 'Cleaner conversion visibility']
  },
  {
    category: 'transformation,behance', badge: 'Industrial UX', badgeClass: 'badge-blue', client: 'WINWIRE / APPLIED MATERIALS', timeline: '2018 - 2020', title: 'Applied Materials Industrial Automation Dashboard', role: 'Senior UX Architect / Tech Lead', impact: '35% fewer diagnostic errors',
    summary: 'A complex industrial monitoring redesign for semiconductor chamber operations and telemetry alerts.', problem: 'Operators were monitoring high-density machine data with unclear hierarchy and delayed anomaly recognition.',
    research: 'Studied operator workflows, alert response paths, telemetry density, diagnostic errors, and machine-state interpretation.', strategy: 'Grouped chamber signals into visual clusters and prioritized anomaly visibility over raw data volume.',
    low: 'Mapped alarm hierarchy, dashboard zones, drill-down behavior, telemetry cards, and diagnostic paths.', high: 'Designed command dashboards with status cards, real-time charts, threshold warnings, and compact controls.',
    system: 'Created dashboard cards, severity colors, chart rules, alert icons, table density, and layout tokens.', testing: 'Validated anomaly detection, chart readability, alert comprehension, and operator task flows.',
    metrics: ['35% reduction in diagnostic errors', 'Faster anomaly recognition', 'Unified responsive portal', 'Executive Excellence recognition']
  },
  {
    category: 'transformation,behance', badge: 'Healthcare Ops', badgeClass: 'badge-teal', client: 'OMNICELL', timeline: 'Enterprise Healthcare', title: 'Omnicell Pharmacy Operations and Inventory Experience', role: 'Senior UX Architect', impact: 'Safer medication workflows and clearer inventory decisions',
    summary: 'A healthcare operations case study focused on medication inventory visibility, task prioritization, and exception handling.', visuals: visuals(['Omnicell Project', 'Omnicell', 'Omnicell Healthcare']),
    problem: 'Pharmacy users needed faster visibility into medication status, exceptions, inventory movement, and next-best actions.', research: 'Reviewed pharmacy-user tasks, inventory exception scenarios, medication fulfillment workflows, and compliance-sensitive decision points.',
    strategy: 'Prioritized a role-based operational dashboard that moved users from raw tables toward exception-first task queues.', low: 'Mapped inventory lookup, exception review, replenishment triggers, medication status, and escalation flows.',
    high: 'Designed dashboard screens with status cards, exception panels, search and filter controls, inventory tables, and clear actions.', system: 'Used healthcare-safe colors, compact table density, alert states, filter chips, card elevation, and reusable form patterns.',
    testing: 'Validated scanability, exception recognition, form completion, table filtering, and task confidence.', metrics: ['Reduced time to identify exceptions', 'Improved medication-status visibility', 'Clearer pharmacy task priority', 'Lower cognitive load']
  },
  {
    category: 'transformation,behance', badge: 'Field Service', badgeClass: 'badge-blue', client: 'AONA NORTH AMERICA', timeline: 'North America Operations', title: 'AONA North America Operations Experience', role: 'UX Strategy and Product Design Lead', impact: 'More consistent regional workflows and clearer visibility',
    summary: 'A North America operations case study focused on task clarity, regional data visibility, and workflow consistency.', visuals: visuals(['AONA North America', 'AONA', 'AONA Project']),
    problem: 'Regional teams needed cleaner ways to track operational work, review location or account data, and act on time-sensitive updates.', research: 'Studied stakeholder workflows, regional data structures, operational status needs, filtering behavior, and handoff pain points.',
    strategy: 'Organized operational data by priority, region, status, and next action so teams could move from review to action faster.', low: 'Created list views, regional filters, detail panels, status summaries, and escalation paths.',
    high: 'Designed responsive screens with Material-style cards, data sections, status language, and consistent action placement.', system: 'Defined card patterns, filters, status tags, spacing rules, table states, and responsive behavior.',
    testing: 'Tested findability, scan time, filter accuracy, handoff clarity, and layout stability.', metrics: ['Improved regional task visibility', 'Reduced screen switching', 'Faster review cycles', 'More consistent handoffs']
  },
  {
    category: 'systems,transformation,behance', badge: 'Location Master', badgeClass: 'badge-amber', client: "PEET'S COFFEE", timeline: 'Retail Location Data', title: "Peet's Coffee Location Master Platform", role: 'Lead UX Designer', impact: 'Cleaner location governance and faster master-data updates',
    summary: 'A retail master-data case study for managing store-location records, ownership details, metadata, and update workflows.', visuals: visuals(['Peets Coffee Location Master', 'Peet Coffee Location Master', 'Peets Coffee', "Peet's Coffee"]),
    problem: 'Retail teams needed a dependable way to manage location master records, reduce data-entry mistakes, and maintain accurate store information.', research: 'Analyzed store-data fields, admin workflows, search and edit behavior, approval needs, duplicates, and common data errors.',
    strategy: 'Designed a master-data governance experience with clear record states, guided editing, validation, and review checkpoints.', low: 'Mapped location search, store profiles, edit drawers, change history, field validation, and approval handoff.',
    high: 'Created screens with structured location cards, tabbed data groups, inline validation, audit history, and responsive admin views.', system: 'Standardized input fields, data cards, tabs, status labels, validation messages, audit trails, and search components.',
    testing: 'Validated search accuracy, edit confidence, validation clarity, approval flow comprehension, and responsive fit.', metrics: ['Reduced location-data errors', 'Faster store-record updates', 'Clearer audit visibility', 'Improved master-data governance']
  },
  {
    category: 'transformation,behance', badge: 'Animal Health', badgeClass: 'badge-purple', client: 'PHIBRO ANIMAL HEALTH', timeline: 'Animal Health Enterprise', title: 'Phibro Animal Health Enterprise Experience', role: 'Senior Product Designer', impact: 'Clearer product, customer, and operational decision support',
    summary: 'An animal-health enterprise case study simplifying product, customer, and operational data into decision workflows.', visuals: visuals(['Phibro Animal Health', 'Phibro Animal health', 'Phibro', 'Phibro Project']),
    problem: 'Business users needed to understand product, customer, and operational information quickly, but dense data structures slowed decisions.', research: 'Reviewed user roles, product-data workflows, customer account views, reporting needs, search patterns, and hierarchy problems.',
    strategy: 'Created a decision-support experience that grouped data by user intent: review, compare, update, and act.', low: 'Produced dashboards, account-detail layouts, product-data groupings, filter models, and action flows.',
    high: 'Designed responsive interfaces with clean data cards, product summaries, account panels, tables, and guided actions.', system: 'Defined enterprise cards, status indicators, data tables, form states, filter chips, and responsive layout rules.',
    testing: 'Validated data findability, comprehension, task completion, table filtering, and mobile readability.', metrics: ['Faster product-data review', 'Reduced cognitive load', 'More consistent workflows', 'Improved decision confidence']
  },
  {
    category: 'innovation,behance', badge: 'AI OCR', badgeClass: 'badge-purple', client: 'WINWIRE / AUSTIN INDUSTRIES', timeline: '2018', title: 'Austin Industries OCR Verification Experience', role: 'Lead Experience Designer', impact: '50% faster invoice digitization',
    summary: 'An AI document-ingestion interface for reviewing OCR results, confidence scores, and parsing errors.', problem: 'Paper-based invoice processing created data-entry delays, review fatigue, and cataloging errors.',
    research: 'Analyzed document processing steps, reviewer behavior, OCR uncertainty points, batch-upload expectations, and correction patterns.', strategy: 'Designed a human-in-the-loop model that made machine confidence visible and correction actions immediate.',
    low: 'Wireframed split views, confidence tags, batch queues, shortcuts, and field correction flows.', high: 'Delivered OCR review dashboards with document preview, parsed fields, confidence color, and validation actions.',
    system: 'Standardized confidence labels, document cards, review tables, error states, upload zones, and keyboard patterns.', testing: 'Tested review speed, correction accuracy, batch clarity, and reviewer fatigue.',
    metrics: ['50% faster invoice digitization', 'Reduced manual entry errors', 'Clearer AI confidence visibility', 'Reusable Angular patterns']
  },
  {
    category: 'transformation,behance', badge: 'Data Visualization', badgeClass: 'badge-blue', client: 'GRAMENER TECH / INDUSTRIAL', timeline: '2016', title: 'Big Data IoT Telemetry Dashboard', role: 'Senior UX/UI Developer', impact: '40% faster anomaly detection',
    summary: 'A telemetry dashboard redesign converting high-volume industrial sensor streams into actionable monitoring.', problem: 'Operators were overwhelmed by 50+ metrics, noisy charts, and slow visual parsing during anomaly investigation.',
    research: 'Reviewed sensor usage, chart latency, operator scanning behavior, metric prioritization, and escalation paths.', strategy: 'Reduced visual noise, grouped metrics by decision need, and made anomalies visually dominant.',
    low: 'Sketched metric hierarchy, dashboard zones, alarm cards, comparative charts, and responsive behavior.', high: 'Designed telemetry cards, status blocks, alert panels, trend charts, and compact controls.',
    system: 'Created chart tokens, alarm colors, grid spacing, SVG alert components, responsive cards, and LESS/CSS patterns.', testing: 'Validated scanning time, anomaly identification, chart comprehension, and performance expectations.',
    metrics: ['40% faster anomaly detection', 'Under 100ms render-call target', 'Reusable dashboard stylesheet', 'Clearer machine-state hierarchy']
  },
  {
    category: 'innovation,behance', badge: 'Startup SaaS', badgeClass: 'badge-amber', client: 'SYNC APPS VENTURES', timeline: '2014 - 2016', title: 'Innfly Mobile Hotel Builder and SaaS Platform', role: 'Co-Founder and Lead Architect', impact: 'Websites built in under 30 minutes',
    summary: 'A mobile-first SaaS product helping independent hotels publish booking-ready websites without technical skills.', problem: 'Small hotel operators lacked budget, technical confidence, and direct-booking infrastructure.',
    research: 'Studied hotel owner needs, booking setup pain points, template expectations, mobile editing behavior, and inventory workflows.', strategy: 'Created a guided builder based on owner-friendly choices: brand, rooms, pricing, photos, and booking rules.',
    low: 'Wireframed mobile builder steps, templates, inventory screens, drag-and-drop blocks, and preview states.', high: 'Designed mobile and desktop builder screens with template previews, palette selection, content cards, and publishing confirmation.',
    system: 'Built template cards, color swatches, room modules, booking widgets, responsive layout rules, and onboarding components.', testing: 'Validated setup flow, content editing, booking preview, and time-to-publish.',
    metrics: ['Website setup under 30 minutes', 'T-Hub Phase 1 incubation', 'Startup India recognition', 'Reduced custom development dependency']
  }
];

document.addEventListener('DOMContentLoaded', () => {
  injectCaseStudyStyles();
  renderCaseStudies();
  initMobileNav();
  initCaseFilters();
  initCaseStudyExpansion();
  initScrollAnimations();
});

function initMobileNav() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const menu = document.querySelector('.nav-menu');
  const items = document.querySelectorAll('.nav-item');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => { menu.classList.toggle('open'); toggle.classList.toggle('active'); });
  items.forEach(item => item.addEventListener('click', () => { menu.classList.remove('open'); toggle.classList.remove('active'); }));
}

function renderCaseStudies() {
  const grid = document.querySelector('.projects-grid');
  const desc = document.querySelector('#portfolio .section-desc');
  if (!grid) return;
  if (desc) desc.textContent = 'End-to-end UX case studies covering research, strategy, low-fidelity exploration, high-fidelity design, design systems, usability testing, visual mockups, and success metrics.';
  grid.innerHTML = caseStudies.map((study, index) => `
    <article class="project-card ux-case-card ${index === 0 ? 'hero-project' : ''}" data-category="${study.category}">
      <div class="case-card-topline"><div class="project-badge ${study.badgeClass}">${study.badge}</div><div class="project-meta"><span class="project-client">${study.client}</span><span class="project-timeline">${study.timeline}</span></div></div>
      <div class="project-content">
        <h3>${index + 1}. ${study.title}</h3>
        <p class="project-summary">${study.summary}</p>
        ${study.visuals ? `<figure class="case-visual"><img class="case-image" src="${study.visuals[0]}" data-index="0" data-candidates='${JSON.stringify(study.visuals)}' alt="${study.title} design mockup"><figcaption>Design mockup preview</figcaption><div class="case-visual-fallback">Mockup screenshots will appear here once this project folder is published to GitHub.</div></figure>` : ''}
        <div class="case-snapshot"><div><strong>Role</strong><span>${study.role}</span></div><div><strong>Impact</strong><span>${study.impact}</span></div></div>
        <button class="case-toggle" type="button" aria-expanded="false"><span>View full UX case study</span><span class="case-toggle-icon">+</span></button>
        <div class="case-detail" aria-hidden="true"><div class="case-detail-inner"><div class="case-narrative"><h4>Problem Framing</h4><p>${study.problem}</p></div><div class="ux-lifecycle-grid">${block('UX Research', study.research)}${block('UX Strategy', study.strategy)}${block('Low Fidelity', study.low)}${block('High Fidelity', study.high)}${block('Design System', study.system)}${block('Usability Testing', study.testing)}</div><div class="metrics-panel"><h4>Metrics for Success</h4><div class="metrics-grid">${study.metrics.map(metric => `<span>${metric}</span>`).join('')}</div></div></div></div>
      </div>
    </article>`).join('');
  initCaseImages();
}

function block(title, copy) { return `<div class="lifecycle-block"><h4>${title}</h4><p>${copy}</p></div>`; }

function initCaseImages() {
  document.querySelectorAll('.case-image').forEach(image => {
    image.addEventListener('error', () => {
      const candidates = JSON.parse(image.dataset.candidates || '[]');
      const nextIndex = Number(image.dataset.index || 0) + 1;
      if (candidates[nextIndex]) { image.dataset.index = String(nextIndex); image.src = candidates[nextIndex]; }
      else { image.closest('.case-visual')?.classList.add('is-missing'); }
    });
  });
}

function initCaseFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(',').map(c => c.trim());
        const show = filter === 'all' || categories.includes(filter);
        card.style.display = show ? 'block' : 'none';
        card.style.opacity = '1';
        card.style.transform = 'none';
      });
    });
  });
}

function initCaseStudyExpansion() {
  document.querySelectorAll('.case-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.ux-case-card');
      const detail = card.querySelector('.case-detail');
      const isOpen = card.classList.contains('open');
      card.classList.toggle('open', !isOpen);
      button.setAttribute('aria-expanded', String(!isOpen));
      detail.setAttribute('aria-hidden', String(isOpen));
    });
  });
}

function initScrollAnimations() {
  const revealElements = document.querySelectorAll('section:not(#portfolio), .fact-card');
  const portfolio = document.querySelector('#portfolio');
  if (portfolio) { portfolio.classList.add('revealed'); portfolio.style.opacity = '1'; portfolio.style.transform = 'none'; }
  document.querySelectorAll('#portfolio .project-card').forEach(card => { card.classList.add('revealed'); card.style.opacity = '1'; card.style.transform = 'none'; });
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  revealElements.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(30px)'; el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'; observer.observe(el); });
}

function injectCaseStudyStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .revealed, #portfolio, #portfolio .project-card { opacity: 1 !important; transform: none !important; }
    .ux-case-card { border-radius: 8px; padding: 0; overflow: hidden; box-shadow: 0 14px 30px rgba(0,0,0,.22); }
    .ux-case-card .project-content { padding: 30px 32px 32px; }
    .case-card-topline { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 24px 32px 0; }
    .ux-case-card .project-badge { position: static; display: inline-flex; width: fit-content; white-space: nowrap; }
    .ux-case-card h3 { max-width: 920px; font-size: 30px; line-height: 1.2; }
    .case-visual { position: relative; margin: 22px 0 24px; border: 1px solid var(--border); border-radius: 8px; background: rgba(7,9,14,.42); overflow: hidden; }
    .case-visual img { display: block; width: 100%; max-height: 420px; object-fit: cover; background: var(--bg-primary); }
    .case-visual figcaption { border-top: 1px solid var(--border); color: var(--text-secondary); font-family: var(--font-mono); font-size: 10px; letter-spacing: 1px; padding: 10px 14px; text-transform: uppercase; }
    .case-visual-fallback { display: none; color: var(--text-secondary); font-size: 13px; line-height: 1.6; padding: 18px; }
    .case-visual.is-missing img, .case-visual.is-missing figcaption { display: none; }
    .case-visual.is-missing .case-visual-fallback { display: block; }
    .case-snapshot { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 14px; margin: 24px 0; }
    .case-snapshot div { min-height: 86px; border: 1px solid var(--border); border-radius: 8px; background: rgba(7,9,14,.42); padding: 16px; }
    .case-snapshot strong { display: block; color: var(--gold); font-family: var(--font-mono); font-size: 10px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 6px; }
    .case-snapshot span { display: block; color: var(--text-primary); font-size: 13.5px; line-height: 1.55; }
    .case-toggle { display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; min-height: 52px; border: 1px solid rgba(201,164,76,.28); border-radius: 8px; background: var(--gold-soft); color: var(--gold); cursor: pointer; font-weight: 700; padding: 13px 16px; text-align: left; transition: var(--transition); }
    .case-toggle:hover { background: rgba(201,164,76,.16); border-color: var(--gold); }
    .case-toggle-icon { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; border: 1px solid rgba(201,164,76,.35); flex: 0 0 auto; font-size: 18px; line-height: 1; }
    .ux-case-card.open .case-toggle-icon { transform: rotate(45deg); }
    .case-detail { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s cubic-bezier(.4,0,.2,1); }
    .ux-case-card.open .case-detail { grid-template-rows: 1fr; }
    .case-detail-inner { overflow: hidden; min-height: 0; }
    .case-narrative { margin-top: 24px; border-top: 1px solid var(--border); padding-top: 24px; }
    .case-narrative h4, .lifecycle-block h4, .metrics-panel h4 { font-family: var(--font-serif); font-size: 20px; line-height: 1.25; color: var(--text-primary); margin-bottom: 8px; }
    .case-narrative p, .lifecycle-block p { color: var(--text-secondary); font-size: 13.5px; line-height: 1.72; margin: 0; }
    .ux-lifecycle-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; margin-top: 18px; }
    .lifecycle-block { border: 1px solid var(--border); border-radius: 8px; background: rgba(7,9,14,.34); padding: 18px; }
    .lifecycle-block h4 { color: var(--gold); font-size: 17px; }
    .metrics-panel { margin-top: 18px; border: 1px solid rgba(52,211,153,.22); border-radius: 8px; background: var(--emerald-soft); padding: 20px; }
    .metrics-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; }
    .metrics-grid span { min-height: 48px; display: flex; align-items: center; border-radius: 8px; background: rgba(7,9,14,.45); border: 1px solid rgba(52,211,153,.14); color: var(--text-primary); font-size: 12.5px; line-height: 1.45; padding: 10px 12px; }
    @media (max-width: 768px) { .ux-case-card .project-content, .case-card-topline { padding-left: 20px; padding-right: 20px; } .case-card-topline { align-items: flex-start; flex-direction: column; } .ux-case-card h3 { font-size: 24px; max-width: 100%; } .case-snapshot, .ux-lifecycle-grid, .metrics-grid { grid-template-columns: 1fr; } .project-meta { flex-direction: column; gap: 4px; } }
  `;
  document.head.appendChild(style);
}
