/* ==========================================
   PRINCIPAL UX ARCHITECT PORTFOLIO INTERACTIVITY
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCaseFilters();
  initAccordions();
  initScrollAnimations();
});

/**
 * 1. Mobile Menu Toggle
 */
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

/**
 * 2. Dynamic Case Study Filtering
 */
function initCaseFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button styling
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          
          if (filterValue === 'all' || category === filterValue) {
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

/**
 * 3. Smooth Collapsible Accordions for Case Studies ARCH Briefs
 */
function initAccordions() {
  const accordHeaders = document.querySelectorAll('.accordion-header');

  if (accordHeaders.length > 0) {
    accordHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const panel = header.parentElement;
        const body = panel.querySelector('.accordion-body');
        
        // If already open, close it
        if (panel.classList.contains('open')) {
          body.style.maxHeight = null;
          panel.classList.remove('open');
        } else {
          // Close other accordions in the same list if desired
          // For a premium portfolio, we let them open multiple, but we set scroll alignment
          panel.classList.add('open');
          body.style.maxHeight = body.scrollHeight + "px";
          
          // Re-calculate heights if window is resized or internal elements shift
          setTimeout(() => {
            if(panel.classList.contains('open')) {
              body.style.maxHeight = 'none';
            }
          }, 400);
        }
      });
    });
  }
}

/**
 * 4. Premium Scroll Reveal Animations
 */
function initScrollAnimations() {
  // Simple intersection observer to trigger section reveals
  const revealElements = document.querySelectorAll('section, .fact-card, .project-card');
  
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
      rootMargin: "0px 0px -50px 0px"
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

// Add stylesheet rules for intersection reveals dynamically
const style = document.createElement('style');
style.textContent = `
  .revealed {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
