/* ============================================================
   R.V.R. & J.C. COLLEGE OF ENGINEERING — CSE Dept.
   Shared site behaviour
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle & Close on Outside Click ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  var mainNav = document.querySelector('.main-nav');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navLinks.classList.remove('active');
      });
    });

    // Close mobile nav menu when clicking or tapping anywhere outside
    document.addEventListener('click', function (e) {
      if (navLinks.classList.contains('open') || navLinks.classList.contains('active')) {
        if (mainNav && !mainNav.contains(e.target)) {
          navLinks.classList.remove('open');
          navLinks.classList.remove('active');
        }
      }
    });

    document.addEventListener('touchstart', function (e) {
      if (navLinks.classList.contains('open') || navLinks.classList.contains('active')) {
        if (mainNav && !mainNav.contains(e.target)) {
          navLinks.classList.remove('open');
          navLinks.classList.remove('active');
        }
      }
    }, { passive: true });
  }

  /* ---------- Highlight active nav link ---------- */
  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var target = a.getAttribute('href');
    if (target === here || (here === '' && target === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ---------- About Page Full-Width Hero Background Slider ---------- */
  var heroSlides = document.querySelectorAll('.about-hero-slide');
  if (heroSlides.length) {
    var heroCurrent = 0;
    var heroDotsWrap = document.getElementById('about-hero-dots');

    heroSlides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'about-hero-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('type', 'button');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', function () { goToHeroSlide(i); });
      heroDotsWrap && heroDotsWrap.appendChild(dot);
    });

    var heroDots = heroDotsWrap ? heroDotsWrap.querySelectorAll('.about-hero-dot') : [];

    function goToHeroSlide(i) {
      heroSlides[heroCurrent].classList.remove('active');
      heroDots[heroCurrent] && heroDots[heroCurrent].classList.remove('active');
      heroCurrent = (i + heroSlides.length) % heroSlides.length;
      heroSlides[heroCurrent].classList.add('active');
      heroDots[heroCurrent] && heroDots[heroCurrent].classList.add('active');
    }

    var heroPrev = document.getElementById('about-hero-prev');
    var heroNext = document.getElementById('about-hero-next');
    heroPrev && heroPrev.addEventListener('click', function () { goToHeroSlide(heroCurrent - 1); });
    heroNext && heroNext.addEventListener('click', function () { goToHeroSlide(heroCurrent + 1); });

    var heroAutoplay = setInterval(function () { goToHeroSlide(heroCurrent + 1); }, 4500);

    var heroBanner = document.querySelector('.about-hero-banner');
    if (heroBanner) {
      heroBanner.addEventListener('mouseenter', function () { clearInterval(heroAutoplay); });
      heroBanner.addEventListener('mouseleave', function () {
        heroAutoplay = setInterval(function () { goToHeroSlide(heroCurrent + 1); }, 4500);
      });
    }
  }

  /* ---------- About page Tab Switching ---------- */
  var tabBtns = document.querySelectorAll('.about-tab-btn');
  var tabPanels = document.querySelectorAll('.about-tab-panel');
  var tabImgs = document.querySelectorAll('.about-tab-img');
  var tabNav = document.querySelector('.about-tabs-nav');
  if (tabBtns.length && tabPanels.length) {
    var activeTabIndex = 0;
    var tabAutoplay = null;

    function switchTab(index) {
      activeTabIndex = (index + tabBtns.length) % tabBtns.length;
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });
      tabImgs.forEach(function (img) { img.classList.remove('active'); });

      var targetBtn = tabBtns[activeTabIndex];
      if (targetBtn) {
        targetBtn.classList.add('active');
        var dataTab = targetBtn.getAttribute('data-tab');
        var activePanel = document.getElementById('tab-' + dataTab);
        if (activePanel) {
          void activePanel.offsetWidth;
          activePanel.classList.add('active');
        }
        var activeImg = document.getElementById('tab-img-' + dataTab);
        if (activeImg) {
          activeImg.classList.add('active');
        }
      }
    }

    function startAutoplay() {
      if (tabAutoplay) clearInterval(tabAutoplay);
      tabAutoplay = setInterval(function () {
        switchTab(activeTabIndex + 1);
      }, 2000);
    }

    function stopAutoplay() {
      if (tabAutoplay) {
        clearInterval(tabAutoplay);
        tabAutoplay = null;
      }
    }

    // Start auto-switching initially
    startAutoplay();

    // When a tab button is clicked: pause auto-switch and stay on clicked tab
    tabBtns.forEach(function (btn, index) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        stopAutoplay();
        switchTab(index);
      });
    });

    // When user clicks anywhere outside the tab buttons, resume auto-switching
    document.addEventListener('click', function (e) {
      if (tabNav && !tabNav.contains(e.target)) {
        if (!tabAutoplay) {
          startAutoplay();
        }
      }
    });
  }

  /* ---------- Events: master grid -> TECHNIZEN sub-grid ---------- */
  var masterCards = document.querySelectorAll('[data-open-master]');
  var masterView = document.getElementById('events-master-view');
  var subView = document.getElementById('events-sub-view');
  var subViewTitle = document.getElementById('sub-view-title');

  function showSubView(title) {
    if (!subView || !masterView) return;
    masterView.style.display = 'none';
    subView.style.display = 'block';
    if (subViewTitle && title) subViewTitle.textContent = title;
  }

  function showMasterView() {
    if (!subView || !masterView) return;
    subView.style.display = 'none';
    masterView.style.display = 'block';
  }

  function checkHashAndToggle() {
    if (!masterView || !subView) return;
    var hash = window.location.hash.toLowerCase();
    if (hash === '#technizen') {
      showSubView('TECHNIZEN');
    } else {
      showMasterView();
    }
  }

  if (masterView && subView) {
    checkHashAndToggle();
    window.addEventListener('hashchange', checkHashAndToggle);
    window.addEventListener('popstate', checkHashAndToggle);
    window.addEventListener('pageshow', checkHashAndToggle);

    masterCards.forEach(function (card) {
      card.addEventListener('click', function () {
        var masterName = card.getAttribute('data-open-master') || 'TECHNIZEN';
        showSubView(masterName);
        window.location.hash = masterName.toLowerCase();
        window.scrollTo({ top: subView.offsetTop - 90, behavior: 'smooth' });
      });
    });

    var backToMaster = document.getElementById('back-to-master');
    backToMaster && backToMaster.addEventListener('click', function (e) {
      e.preventDefault();
      showMasterView();
      if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname + window.location.search);
      }
      window.scrollTo({ top: masterView.offsetTop - 90, behavior: 'smooth' });
    });
  }

  /* ---------- Event detail modal ---------- */
  var modalBackdrop = document.getElementById('event-modal');
  var modalBody = document.getElementById('event-modal-body');

  document.querySelectorAll('[data-view-details]').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var tpl = document.getElementById(trigger.getAttribute('data-view-details'));
      if (!tpl || !modalBackdrop || !modalBody) return;
      modalBody.innerHTML = tpl.innerHTML;
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-close-modal]').forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });
  modalBackdrop && modalBackdrop.addEventListener('click', function (e) {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ---------- Gallery marquee: duplicate row content & apply constant speed ---------- */
  document.querySelectorAll('.marquee-row').forEach(function (row) {
    row.innerHTML += row.innerHTML;
    if (typeof applyConstantMarqueeSpeed === 'function') {
      applyConstantMarqueeSpeed(row);
    } else if (typeof window.applyConstantMarqueeSpeed === 'function') {
      window.applyConstantMarqueeSpeed(row);
    }
  });

  /* ---------- Animated Fast Stat Counter (Starts from 1 to target) ---------- */
  function initStatCounters() {
    var containers = document.querySelectorAll('.stats-overview-grid, .ev-stats-strip, .ev-detail-stats');

    containers.forEach(function (container) {
      var counterEls = container.querySelectorAll('.stat-number, .ev-stat-num');
      if (!counterEls.length) return;
      var animated = false;

      function runAnimation() {
        if (animated) return;

        // Check if elements have valid target numbers
        var hasValidTarget = false;
        counterEls.forEach(function (el) {
          var rawText = el.textContent.trim();
          var targetNum = parseInt(el.getAttribute('data-count') || rawText.replace(/\D/g, ''), 10);
          if (!isNaN(targetNum) && targetNum > 0) {
            hasValidTarget = true;
          }
        });
        if (!hasValidTarget) return;

        animated = true;

        counterEls.forEach(function (el) {
          var rawText = el.textContent.trim();
          var targetNum = parseInt(el.getAttribute('data-count') || rawText.replace(/\D/g, ''), 10);
          var suffix = el.getAttribute('data-suffix') || (rawText.includes('+') ? '+' : '');
          var prefix = el.getAttribute('data-prefix') || '';

          if (isNaN(targetNum) || targetNum <= 0) return;

          var startNum = 1; // Starts from 1 as requested
          var duration = 1200; // Fast 1.2s count-up duration
          var startTime = null;

          function updateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            var elapsed = timestamp - startTime;
            var progress = Math.min(elapsed / duration, 1);

            // Fast ease-out cubic timing function
            var easeOut = 1 - Math.pow(1 - progress, 3);
            var currentVal = Math.floor(startNum + (targetNum - startNum) * easeOut);

            if (currentVal > targetNum) currentVal = targetNum;

            el.textContent = prefix + currentVal + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = prefix + targetNum + suffix;
            }
          }

          el.textContent = prefix + startNum + suffix;
          requestAnimationFrame(updateCounter);
        });
      }

      if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              runAnimation();
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        observer.observe(container);
      } else {
        runAnimation();
      }
    });
  }

  window.initStatCounters = initStatCounters;
  initStatCounters();

});
