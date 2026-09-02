// ============================================================
// PORTFOLIO — SCRIPT.JS
// Theme toggle, smooth scroll, hamburger, scroll reveal,
// active nav, contact form, profile image fallback
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // ── Theme Toggle ─────────────────────────────────────────
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const iconSun = themeToggle.querySelector('.icon-sun');
  const iconMoon = themeToggle.querySelector('.icon-moon');

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    } else {
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    }
  }

  // ── Hamburger Menu ───────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  navOverlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ── Navbar Scroll Effect ─────────────────────────────────
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ── Active Nav Link on Scroll ────────────────────────────
  const sections = document.querySelectorAll('section[id]');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => {
    navObserver.observe(section);
  });

  // ── Scroll Reveal Animation ──────────────────────────────
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ── Profile Image Fallback ───────────────────────────────
  const heroImageInner = document.getElementById('heroImage');

  if (portfolioData && portfolioData.personal && portfolioData.personal.profileImage) {
    const img = new Image();
    img.src = portfolioData.personal.profileImage;
    img.alt = portfolioData.personal.name + ' — Profile Photo';

    img.onload = () => {
      heroImageInner.innerHTML = '';
      heroImageInner.appendChild(img);
    };

    img.onerror = () => {
      // Keep the fallback initials
    };
  }

  // ── Contact Form (mailto) ───────────────────────────────
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      return;
    }

    const recipientEmail = portfolioData.personal.email || 'your.email@example.com';
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Show success feedback
    const submitBtn = contactForm.querySelector('.form-submit');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      Message Sent!
    `;
    submitBtn.style.opacity = '0.7';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalHTML;
      submitBtn.style.opacity = '1';
      submitBtn.disabled = false;
      contactForm.reset();
    }, 3000);
  });

  // ── Resume Download Graceful Handling ────────────────────
  const resumeBtns = document.querySelectorAll('#resumeDownloadBtn, #resumeCTABtn');

  resumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Check if file exists via a quick HEAD request
      const href = btn.getAttribute('href');

      fetch(href, { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            e.preventDefault();
            showToast('Resume will be available soon. Please check back later!');
          }
        })
        .catch(() => {
          // If fetch fails (file protocol), let the browser handle it naturally
        });
    });
  });

  // ── Toast Notification ───────────────────────────────────
  function showToast(message) {
    // Remove existing toast
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    // Style the toast
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%) translateY(20px)',
      background: 'var(--bg-card)',
      color: 'var(--text-primary)',
      padding: '14px 28px',
      borderRadius: 'var(--border-radius-pill)',
      border: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-lg)',
      fontSize: '0.9rem',
      fontFamily: 'var(--font-body)',
      zIndex: '9999',
      opacity: '0',
      transition: 'all 0.3s ease'
    });

    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Remove after 3s
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ── Smooth Scroll for anchor links ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
