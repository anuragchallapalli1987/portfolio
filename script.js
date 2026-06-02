/* ==========================================
   PRINCIPAL UX ARCHITECT PORTFOLIO INTERACTIVITY
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  injectCaseStudyStyles();
  renderCaseStudies();
  initMobileNav();
  initCaseFilters();
  initCaseStudyExpansion();
  initAccordions();
  initScrollAnimations();
});

const caseStudies = [
  {
    category: 'systems', badge: 'Design System', badgeClass: 'badge-red', client: 'PROVIDENCE GLOBAL CENTER', timeline: '2023 - Present', title: 'Multi-Brand Enterprise Design System Architecture', role: 'Principal UX Architect', impact: '60% fewer inconsistencies, 30% faster handoff',
    summary: 'A systems-level redesign of fragmented healthcare product interfaces into a governed, tokenized, multi-brand design architecture.',
    problem: 'More than 10 healthcare surfaces were using disconnected UI patterns, one-off CSS variables, inconsistent accessibility behavior, and duplicated engineering effort.',
    research: 'Audited product screens, component inventories, engineering repositories, accessibility defects, and stakeholder handoff pain points across patient, provider, and internal operations platforms.',
    strategy: 'Created a federated design-system operating model with contribution rules, token governance, adoption scorecards, and a shared component API contract between design and engineering.',
    low: 'Mapped the global, alias, and component-token taxonomy; sketched component states, responsive behavior, accessibility annotations, and rollout dependencies in low-fidelity architecture boards.',
    high: 'Built high-fidelity Figma libraries with semantic color, typography, spacing, elevation, state, and density rules for web, iOS, Android, and multi-brand theming.',
    system: 'Defined DTCG-aligned tokens, Style Dictionary exports, reusable component specs, ARIA rules, contrast-safe color pairs, and governance documentation.',
    testing: 'Validated components through designer reviews, engineering implementation checks, accessibility audits, and adoption tracking across squads.',
    metrics: ['60% reduction in UI inconsistency', '30% faster design-to-development handoff', '40% faster onboarding for engineers', 'Reusable governance model for 10+ platforms']
  },
  {
    category: 'transformation', badge: 'Healthcare UX', badgeClass: 'badge-teal', client: 'PROVIDENCE / TRUSANA', timeline: '2022 - 2023', title: 'Trusana Mental Health Enrollment Platform', role: 'Lead UX Engineer', impact: '25% conversion gain, ET Healthcare Award',
    summary: 'An end-to-end patient enrollment redesign for a regulated mental-health platform serving Medicare and Medicaid users.',
    problem: 'The legacy journey was too long, form-heavy, and cognitively demanding for high-vulnerability users, creating abandonment and support pressure.',
    research: 'Reviewed funnel drop-offs, patient-service feedback, HIPAA constraints, accessibility risks, form validation issues, and cognitive-load barriers in the enrollment journey.',
    strategy: 'Shifted the experience from a 14-step form flow to a progressive, trust-building enrollment model with clear eligibility checkpoints and simplified decision moments.',
    low: 'Created low-fidelity task flows, progressive disclosure wireframes, content hierarchy maps, and edge-case paths for eligibility, insurance, and appointment selection.',
    high: 'Designed a polished, responsive patient journey with accessible inputs, clear error states, plain-language microcopy, and reassuring progress visibility.',
    system: 'Used healthcare-safe form components, WCAG AA color and focus tokens, consistent validation rules, and reusable stepper patterns.',
    testing: 'Ran usability reviews against senior-user scenarios, keyboard navigation, screen-reader announcements, and completion confidence across the funnel.',
    metrics: ['25% increase in enrollment conversion', 'Reduced abandonment in high-friction form steps', 'Improved accessibility compliance', 'Recognized with ET Healthcare product award']
  },
  {
    category: 'transformation', badge: 'Enterprise Workflow', badgeClass: 'badge-blue', client: 'PROVIDENCE / PS&D', timeline: '2024', title: 'Applicant Tracking System and Job Portal Modernization', role: 'Principal UX Architect', impact: '35% faster task completion',
    summary: 'A recruiter operations redesign that simplified dense job creation, candidate review, filtering, and batch-action workflows.',
    problem: 'Recruiters were working through dense tables, hidden actions, repeated navigation, and slow job-posting paths that made daily work inefficient.',
    research: 'Observed recruiter task flows, mapped job-post creation steps, reviewed candidate-list usage, analyzed table-filter behavior, and identified repeated decision bottlenecks.',
    strategy: 'Reframed the ATS as a three-pane workspace: filters, results, and candidate or job details visible in one predictable operating surface.',
    low: 'Wireframed recruiter dashboards, batch action bars, empty states, saved views, filter chips, and job-posting wizard paths.',
    high: 'Delivered high-fidelity desktop and responsive views with compact density, clear data hierarchy, sticky actions, and accessible table interactions.',
    system: 'Standardized data-table tokens, chips, status labels, pagination, form fields, drawer panels, and batch operation patterns.',
    testing: 'Validated task completion against recruiter scenarios, table scanning, form completion, bulk actions, and responsive behavior.',
    metrics: ['35% faster job creation and assignment', 'Reduced navigation between recruiter tasks', '40% smaller perceived payload through lazy-loading design', 'Higher confidence in candidate-status visibility']
  },
  {
    category: 'innovation', badge: 'AI Workflow', badgeClass: 'badge-purple', client: 'PROVIDENCE LABS', timeline: '2024 - 2025', title: 'AI-Integrated Enterprise Design Workflows', role: 'Lead AI-UX Strategist', impact: '3x faster prototyping cycles',
    summary: 'A governed AI-assisted design workflow using Figma Make, Claude, Google Stitch, and design-system prompts to accelerate product discovery.',
    problem: 'Design teams were spending too much time creating repetitive wireframe variants, workshop artifacts, and first-pass specifications.',
    research: 'Studied designer pain points, PM workshop needs, repetitive design tasks, privacy constraints, prompt failure patterns, and design-system compliance gaps.',
    strategy: 'Created an AI workflow guardrail model where prompts, approved patterns, and design-system rules guide generation while designers retain decision control.',
    low: 'Mapped prompt-to-wireframe flows, AI review checkpoints, workshop templates, and fallback patterns for uncertain outputs.',
    high: 'Designed reusable AI-generated prototype structures that could be converted into production-ready Figma explorations with consistent layout behavior.',
    system: 'Built prompt libraries, design-system syntax rules, component usage constraints, and review criteria for AI-assisted UX output.',
    testing: 'Compared manual and AI-assisted cycles, reviewed prompt quality, tested consistency against design-system rules, and gathered designer feedback.',
    metrics: ['3x faster first-pass prototyping', '20% shorter design lifecycle lead time', 'More consistent workshop outputs', 'Reduced repetitive specification effort']
  },
  {
    category: 'systems', badge: 'Accessibility', badgeClass: 'badge-amber', client: 'PROVIDENCE ENTERPRISE', timeline: '2023 - 2024', title: 'Accessibility Architecture at Scale', role: 'Enterprise Accessibility Lead', impact: 'WCAG 2.2 AA embedded into the system layer',
    summary: 'A program that moved accessibility from late-stage QA into reusable component, token, and governance decisions.',
    problem: 'Accessibility defects were being found too late, creating rework across color, focus, landmark, form, modal, and screen-reader behavior.',
    research: 'Audited accessibility defects, reviewed screen-reader flows, checked keyboard traps, evaluated color contrast, and analyzed component-level failure patterns.',
    strategy: 'Shifted accessibility ownership to the system layer with reusable annotations, automated checks, and accessibility acceptance criteria for every component.',
    low: 'Mapped focus flows, keyboard order, ARIA states, alert timing, dialog behavior, and error recovery patterns before high-fidelity design.',
    high: 'Designed contrast-safe components, visible focus states, accessible form systems, and responsive layouts that preserve reading order.',
    system: 'Added WCAG AA tokens, axe-core testing requirements, ARIA templates, annotation checklists, and Figma accessibility documentation.',
    testing: 'Validated with keyboard-only checks, screen-reader simulation, contrast testing, automated audits, and accessibility QA reviews.',
    metrics: ['90% reduction in late accessibility defects', '100% AA target for new core surfaces', 'Lower regulatory risk', 'Reusable accessibility criteria for product teams']
  },
  {
    category: 'research,behance', badge: 'Research Methods', badgeClass: 'badge-blue', client: 'IIT BOMBAY EXECUTIVE', timeline: '2021', title: 'Design Thinking Research Framework', role: 'UX Research Lead', impact: 'Reusable discovery model for product teams',
    summary: 'A structured design-thinking case study converting ambiguous business problems into validated user needs and product opportunities.',
    problem: 'Teams lacked a repeatable way to move from stakeholder assumptions to evidence-backed experience requirements.',
    research: 'Used stakeholder interviews, user empathy mapping, journey mapping, pain-point clustering, and heuristic review to expose opportunity areas.',
    strategy: 'Defined a five-phase discovery-to-validation model that aligned research synthesis with product prioritization and measurable outcomes.',
    low: 'Created rough journey maps, persona drafts, opportunity matrices, service blueprints, and low-fidelity solution sketches.',
    high: 'Converted validated concepts into presentation-ready flows, polished screens, and research-backed experience recommendations.',
    system: 'Created reusable templates for personas, interview scripts, assumption maps, usability scorecards, and research synthesis reports.',
    testing: 'Validated recommendations through critique sessions, heuristic scoring, and scenario-based usability review.',
    metrics: ['25% shorter discovery cycles', 'Clearer product requirements', 'Reusable research templates', '780+ Behance views and 25+ appreciations']
  },
  {
    category: 'transformation,behance', badge: 'Lead Funnel', badgeClass: 'badge-teal', client: 'GRAMENER TECH', timeline: '2016', title: 'Marketing Leads and Recruiter Funnel UX', role: 'Lead Product Designer', impact: '30% faster lead-processing workflow',
    summary: 'A funnel and dashboard redesign that made lead capture, recruiter review, and follow-up actions easier to scan and complete.',
    problem: 'Lead forms were long, tables were hard to scan, validation was unclear, and mobile behavior created layout strain.',
    research: 'Reviewed lead conversion steps, recruiter table usage, form errors, search/filter behavior, and repeated support issues.',
    strategy: 'Reduced form friction, moved recruiters toward task-based cards, and aligned lead status visibility with the user journey.',
    low: 'Designed form-step wireframes, table-to-card conversions, filter placement, mobile layouts, and progressive validation states.',
    high: 'Created high-fidelity lead capture screens, recruiter dashboards, responsive cards, status labels, and follow-up actions.',
    system: 'Defined Material-inspired cards, form controls, validation states, lead tags, spacing, and responsive breakpoints.',
    testing: 'Tested task completion, form comprehension, table scanning, mobile wrapping, and error recovery.',
    metrics: ['30% faster recruiter lead processing', 'Reduced form confusion', 'Improved responsive behavior', 'Cleaner conversion funnel visibility']
  },
  {
    category: 'transformation,behance', badge: 'Industrial UX', badgeClass: 'badge-blue', client: 'WINWIRE / APPLIED MATERIALS', timeline: '2018 - 2020', title: 'Applied Materials Industrial Automation Dashboard', role: 'Senior UX Architect / Tech Lead', impact: '35% fewer diagnostic errors',
    summary: 'A complex industrial monitoring redesign for semiconductor chamber operations, telemetry alerts, and diagnostic workflows.',
    problem: 'Operators were monitoring high-density machine data across multiple chambers with unclear hierarchy and delayed anomaly recognition.',
    research: 'Studied operator workflows, alert response paths, telemetry density, diagnostic errors, and critical machine-state interpretation.',
    strategy: 'Grouped related chamber signals into visual clusters and prioritized anomaly visibility over raw data volume.',
    low: 'Mapped alarm hierarchy, dashboard zones, drill-down behavior, telemetry cards, and diagnostic paths in wireframes.',
    high: 'Designed high-fidelity command dashboards with clear status cards, real-time charts, threshold warnings, and compact operator controls.',
    system: 'Created reusable industrial dashboard cards, severity colors, chart rules, alert icons, table density, and layout tokens.',
    testing: 'Validated anomaly detection, chart readability, alert comprehension, and operator task flows with scenario reviews.',
    metrics: ['35% reduction in diagnostic errors', 'Faster anomaly recognition', 'Unified responsive web portal', 'Executive Excellence Award recognition']
  },
  {
    category: 'innovation,behance', badge: 'AI OCR', badgeClass: 'badge-purple', client: 'WINWIRE / AUSTIN INDUSTRIES', timeline: '2018', title: 'Austin Industries OCR Verification Experience', role: 'Lead Experience Designer', impact: '50% faster invoice digitization',
    summary: 'An AI document-ingestion interface that helped construction teams review OCR results, confidence scores, and parsing errors quickly.',
    problem: 'Paper-based invoice and log processing created manual data-entry delays, review fatigue, and frequent cataloging errors.',
    research: 'Analyzed document processing steps, reviewer behavior, OCR uncertainty points, batch-upload expectations, and correction patterns.',
    strategy: 'Designed a human-in-the-loop verification model that made machine confidence visible and correction actions immediate.',
    low: 'Wireframed split-view layouts, confidence tags, batch queues, keyboard shortcuts, and field-level correction flows.',
    high: 'Delivered high-fidelity OCR review dashboards with document preview, parsed fields, confidence color, and quick validation actions.',
    system: 'Standardized confidence labels, document cards, review tables, error states, upload zones, and keyboard interaction patterns.',
    testing: 'Tested parsing review speed, correction accuracy, batch upload clarity, and reviewer fatigue across repeated document scenarios.',
    metrics: ['50% faster invoice digitization', 'Reduced manual entry errors', 'Clearer AI confidence visibility', 'Reusable Angular component patterns']
  },
  {
    category: 'transformation,behance', badge: 'Data Visualization', badgeClass: 'badge-blue', client: 'GRAMENER TECH / INDUSTRIAL', timeline: '2016', title: 'Big Data IoT Telemetry Dashboard', role: 'Senior UX/UI Developer', impact: '40% faster anomaly detection',
    summary: 'A telemetry dashboard redesign that converted high-volume industrial sensor streams into a clean, actionable monitoring experience.',
    problem: 'Operators were overwhelmed by 50+ machine metrics, noisy charts, and slow visual parsing during anomaly investigation.',
    research: 'Reviewed sensor usage, chart latency, operator scanning behavior, metric prioritization, and anomaly escalation paths.',
    strategy: 'Reduced visual noise, grouped metrics by decision need, and made anomalies visually dominant without hiding supporting data.',
    low: 'Sketched metric hierarchy, dashboard zones, alarm cards, comparative chart layouts, and responsive behavior.',
    high: 'Designed polished telemetry cards, status blocks, alert panels, trend charts, and compact control areas.',
    system: 'Created chart tokens, alarm colors, grid spacing, SVG alert components, responsive cards, and reusable LESS/CSS patterns.',
    testing: 'Validated scanning time, anomaly identification, chart comprehension, and performance expectations with operator-like scenarios.',
    metrics: ['40% faster anomaly detection', 'Render calls reduced under 100ms target', 'Reusable dashboard stylesheet', 'Clearer machine-state hierarchy']
  },
  {
    category: 'innovation,behance', badge: 'Startup SaaS', badgeClass: 'badge-amber', client: 'SYNC APPS VENTURES', timeline: '2014 - 2016', title: 'Innfly Mobile Hotel Builder and SaaS Platform', role: 'Co-Founder and Lead Architect', impact: 'Websites built in under 30 minutes',
    summary: 'A mobile-first SaaS product that helped independent hotels create, configure, and publish booking-ready websites without technical skills.',
    problem: 'Small hotel operators lacked budget, technical confidence, and direct-booking infrastructure, making them dependent on aggregators.',
    research: 'Studied hotel owner needs, booking setup pain points, template expectations, mobile editing behavior, and room-inventory workflows.',
    strategy: 'Created a guided builder that reduced website creation to a set of owner-friendly choices: brand, rooms, pricing, photos, and booking rules.',
    low: 'Wireframed mobile builder steps, page templates, room inventory screens, drag-and-drop content blocks, and preview states.',
    high: 'Designed high-fidelity mobile and desktop builder screens with template previews, palette selection, content cards, and publishing confirmation.',
    system: 'Built template cards, color swatches, room modules, booking widgets, responsive layout rules, and reusable SaaS onboarding components.',
    testing: 'Validated first-time setup flow, content editing, booking preview, and time-to-publish with small-business owner scenarios.',
    metrics: ['Website setup in under 30 minutes', 'T-Hub Phase 1 incubation', 'Startup India recognition', 'Reduced dependency on custom development']
  }
];

function initMobileNav() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const menu = document.querySelector('.nav-menu');
  const items = document.querySelectorAll('.nav-item');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    items.forEach(item => {
      item.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }
}

function renderCaseStudies() {
  const grid = document.querySelector('.projects-grid');
  const sectionDesc = document.querySelector('#portfolio .section-desc');

  if (!grid) return;

  if (sectionDesc) {
    sectionDesc.textContent = 'End-to-end UX case studies covering research, strategy, low-fidelity exploration, high-fidelity design, design systems, usability testing, and success metrics.';
  }

  grid.innerHTML = caseStudies.map((study, index) => `
    <article class="project-card ux-case-card ${index === 0 ? 'hero-project' : ''}" data-category="${study.category}">
      <div class="case-card-topline">
        <div class="project-badge ${study.badgeClass}">${study.badge}</div>
        <div class="project-meta">
          <span class="project-client">${study.client}</span>
          <span class="project-timeline">${study.timeline}</span>
        </div>
      </div>
      <div class="project-content">
        <h3>${index + 1}. ${study.title}</h3>
        <p class="project-summary">${study.summary}</p>
        <div class="case-snapshot">
          <div><strong>Role</strong><span>${study.role}</span></div>
          <div><strong>Impact</strong><span>${study.impact}</span></div>
        </div>
        <button class="case-toggle" type="button" aria-expanded="false">
          <span>View full UX case study</span>
          <span class="case-toggle-icon">+</span>
        </button>
        <div class="case-detail" aria-hidden="true">
          <div class="case-detail-inner">
            <div class="case-narrative">
              <h4>Problem Framing</h4>
              <p>${study.problem}</p>
            </div>
            <div class="ux-lifecycle-grid">
              ${lifecycleBlock('UX Research', study.research)}
              ${lifecycleBlock('UX Strategy', study.strategy)}
              ${lifecycleBlock('Low Fidelity', study.low)}
              ${lifecycleBlock('High Fidelity', study.high)}
              ${lifecycleBlock('Design System', study.system)}
              ${lifecycleBlock('Usability Testing', study.testing)}
            </div>
            <div class="metrics-panel">
              <h4>Metrics for Success</h4>
              <div class="metrics-grid">
                ${study.metrics.map(metric => `<span>${metric}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function lifecycleBlock(title, copy) {
  return `
    <div class="lifecycle-block">
      <h4>${title}</h4>
      <p>${copy}</p>
    </div>
  `;
}

function initCaseFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const categoryAttr = card.getAttribute('data-category') || '';
          const categories = categoryAttr.split(',').map(c => c.trim());

          if (filterValue === 'all' || categories.includes(filterValue)) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
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

function initAccordions() {
  const accordHeaders = document.querySelectorAll('.accordion-header');

  if (accordHeaders.length > 0) {
    accordHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const panel = header.parentElement;
        const body = panel.querySelector('.accordion-body');

        if (panel.classList.contains('open')) {
          body.style.maxHeight = null;
          panel.classList.remove('open');
        } else {
          panel.classList.add('open');
          body.style.maxHeight = body.scrollHeight + 'px';

          setTimeout(() => {
            if (panel.classList.contains('open')) {
              body.style.maxHeight = 'none';
            }
          }, 400);
        }
      });
    });
  }
}

function initScrollAnimations() {
  const revealElements = document.querySelectorAll('section:not(#portfolio), .fact-card');
  const portfolio = document.querySelector('#portfolio');

  if (portfolio) {
    portfolio.classList.add('revealed');
    portfolio.style.opacity = '1';
    portfolio.style.transform = 'none';
  }

  document.querySelectorAll('#portfolio .project-card').forEach(card => {
    card.classList.add('revealed');
    card.style.opacity = '1';
    card.style.transform = 'none';
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(el);
    });
  } else {
    revealElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }
}

function injectCaseStudyStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }

    #portfolio,
    #portfolio .project-card {
      opacity: 1 !important;
      transform: none !important;
    }

    .ux-case-card {
      border-radius: 8px;
      padding: 0;
      overflow: hidden;
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22);
    }

    .ux-case-card .project-content {
      padding: 30px 32px 32px;
    }

    .case-card-topline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      padding: 24px 32px 0;
    }

    .ux-case-card .project-badge {
      position: static;
      display: inline-flex;
      width: fit-content;
      white-space: nowrap;
    }

    .ux-case-card h3 {
      max-width: 920px;
      font-size: 30px;
      line-height: 1.2;
    }

    .case-snapshot {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      margin: 24px 0;
    }

    .case-snapshot div {
      min-height: 86px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: rgba(7, 9, 14, 0.42);
      padding: 16px;
    }

    .case-snapshot strong {
      display: block;
      color: var(--gold);
      font-family: var(--font-mono);
      font-size: 10px;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    .case-snapshot span {
      display: block;
      color: var(--text-primary);
      font-size: 13.5px;
      line-height: 1.55;
    }

    .case-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      width: 100%;
      min-height: 52px;
      border: 1px solid rgba(201, 164, 76, 0.28);
      border-radius: 8px;
      background: var(--gold-soft);
      color: var(--gold);
      cursor: pointer;
      font-weight: 700;
      padding: 13px 16px;
      text-align: left;
      transition: var(--transition);
    }

    .case-toggle:hover {
      background: rgba(201, 164, 76, 0.16);
      border-color: var(--gold);
    }

    .case-toggle-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid rgba(201, 164, 76, 0.35);
      flex: 0 0 auto;
      font-size: 18px;
      line-height: 1;
    }

    .ux-case-card.open .case-toggle-icon {
      transform: rotate(45deg);
    }

    .case-detail {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .ux-case-card.open .case-detail {
      grid-template-rows: 1fr;
    }

    .case-detail-inner {
      overflow: hidden;
      min-height: 0;
    }

    .case-narrative {
      margin-top: 24px;
      border-top: 1px solid var(--border);
      padding-top: 24px;
    }

    .case-narrative h4,
    .lifecycle-block h4,
    .metrics-panel h4 {
      font-family: var(--font-serif);
      font-size: 20px;
      line-height: 1.25;
      color: var(--text-primary);
      margin-bottom: 8px;
    }

    .case-narrative p,
    .lifecycle-block p {
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.72;
      margin: 0;
    }

    .ux-lifecycle-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      margin-top: 18px;
    }

    .lifecycle-block {
      border: 1px solid var(--border);
      border-radius: 8px;
      background: rgba(7, 9, 14, 0.34);
      padding: 18px;
    }

    .lifecycle-block h4 {
      color: var(--gold);
      font-size: 17px;
    }

    .metrics-panel {
      margin-top: 18px;
      border: 1px solid rgba(52, 211, 153, 0.22);
      border-radius: 8px;
      background: var(--emerald-soft);
      padding: 20px;
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }

    .metrics-grid span {
      min-height: 48px;
      display: flex;
      align-items: center;
      border-radius: 8px;
      background: rgba(7, 9, 14, 0.45);
      border: 1px solid rgba(52, 211, 153, 0.14);
      color: var(--text-primary);
      font-size: 12.5px;
      line-height: 1.45;
      padding: 10px 12px;
    }

    @media (max-width: 768px) {
      .ux-case-card .project-content,
      .case-card-topline {
        padding-left: 20px;
        padding-right: 20px;
      }

      .case-card-topline {
        align-items: flex-start;
        flex-direction: column;
      }

      .ux-case-card h3 {
        font-size: 24px;
        max-width: 100%;
      }

      .case-snapshot,
      .ux-lifecycle-grid,
      .metrics-grid {
        grid-template-columns: 1fr;
      }

      .project-meta {
        flex-direction: column;
        gap: 4px;
      }
    }
  `;
  document.head.appendChild(style);
}
