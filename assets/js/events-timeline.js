/* ============================================================
   ACM Student Chapter -- Shared Events Timeline & Modal Component
   ============================================================ */

(function (global) {
  'use strict';

  var currentSliderInterval = null;

  // Vibrant Multi-Color Palette for Timeline Nodes & Archive Cards
  var TIMELINE_PALETTE = [
    '#0284c7', // Sky Blue / Azure
    '#8b5cf6', // Electric Purple
    '#10b981', // Emerald Teal
    '#f59e0b', // Warm Amber Gold
    '#ec4899', // Vivid Rose
    '#3b82f6', // Sapphire Blue
    '#06b6d4', // Deep Cyan
    '#84cc16'  // Bright Lime Green
  ];

  // Curated Real Event Photos for Timeline & Marquee Gallery
  var SAMPLE_PHOTOS = [
    'assets/images/gallery/gallery-1.jpg',
    'assets/images/gallery/gallery-2.jpg',
    'assets/images/gallery/gallery-3.jpg',
    'assets/images/gallery/gallery-4.jpg',
    'assets/images/gallery/gallery-5.jpg',
    'assets/images/gallery/gallery-6.jpg',
    'assets/images/gallery/gallery-7.jpg',
    'assets/images/gallery/gallery-8.jpg',
    'assets/images/gallery/gallery-9.jpg',
    'assets/images/gallery/gallery-10.jpg'
  ];

  function resolveImagePath(path) {
    if (!path) return '';
    if (path.indexOf('http') === 0 || path.indexOf('/') === 0 || path.indexOf('../') === 0) {
      return path;
    }
    var isSubfolder = window.location.pathname.indexOf('/events/') !== -1;
    return isSubfolder ? '../' + path : path;
  }

  /**
   * Main function to render timeline nodes and archive toggle
   * @param {Object} options 
   */
  function evRenderTimelineArchive(options) {
    options = options || {};
    var rawInstances   = options.pastInstances || [];
    var timelineEl     = options.timelineEl;
    var categoryColor  = options.categoryColor || '#14509e';
    var categoryLabel  = options.categoryLabel || 'Event Category';
    var recentCount    = typeof options.recentCount === 'number' ? options.recentCount : 5;

    if (!timelineEl) return;

    // Clear timeline container and any existing archive section sibling
    timelineEl.innerHTML = '';
    if (timelineEl.parentNode) {
      var existingArchive = timelineEl.parentNode.querySelector('.ev-archive-wrap');
      if (existingArchive) {
        existingArchive.remove();
      }
    }

    // Make a working copy of instances
    var instances = rawInstances.slice();

    // Sort descending by year
    instances.sort(function (a, b) { return b.year - a.year; });

    var recentInstances  = instances.slice(0, recentCount);
    var archiveInstances = instances.slice(recentCount);

    // 1. Render recent instances (past 5 years: 2026, 2025, 2024, 2023, 2022)
    recentInstances.forEach(function (ev, index) {
      var node = createTimelineNode(ev, categoryColor, categoryLabel, index);
      timelineEl.appendChild(node);
    });

    // 2. Render Archive Toggle & Grid if there are remaining instances
    if (archiveInstances.length > 0) {
      var minYear = archiveInstances[archiveInstances.length - 1].year;
      var maxYear = archiveInstances[0].year;
      var yearRange = minYear === maxYear ? minYear : minYear + '–' + maxYear;
      var count = archiveInstances.length;

      var toggleWrap = document.createElement('div');
      toggleWrap.className = 'ev-archive-wrap';

      var toggleBtn = document.createElement('button');
      toggleBtn.className = 'ev-archive-toggle';
      toggleBtn.setAttribute('type', 'button');
      toggleBtn.innerHTML = 'Show ' + count + ' earlier year' + (count > 1 ? 's' : '') + ' (' + yearRange + ') <span class="chev">&#9660;</span>';

      var gridWrap = document.createElement('div');
      gridWrap.className = 'ev-archive-grid-wrap';

      var grid = document.createElement('div');
      grid.className = 'ev-archive-grid';

      archiveInstances.forEach(function (ev, index) {
        var card = createArchiveCard(ev, categoryColor, categoryLabel, index);
        grid.appendChild(card);
      });

      gridWrap.appendChild(grid);
      toggleWrap.appendChild(toggleBtn);
      toggleWrap.appendChild(gridWrap);

      if (timelineEl.parentNode) {
        timelineEl.parentNode.insertBefore(toggleWrap, timelineEl.nextSibling);
      } else {
        timelineEl.appendChild(toggleWrap);
      }

      // Expand/Collapse click handler
      toggleBtn.addEventListener('click', function () {
        var isExpanded = gridWrap.classList.contains('is-expanded');
        if (isExpanded) {
          gridWrap.classList.remove('is-expanded');
          toggleBtn.innerHTML = 'Show ' + count + ' earlier year' + (count > 1 ? 's' : '') + ' (' + yearRange + ') <span class="chev">&#9660;</span>';
        } else {
          gridWrap.classList.add('is-expanded');
          toggleBtn.innerHTML = 'Hide earlier years <span class="chev">&#9650;</span>';
        }
      });
    }
  }

  /**
   * Date formatting helpers for Timeline Box Date Column
   */
  function formatOrdinal(val) {
    var str = String(val).trim();
    if (str.indexOf('<sup>') !== -1) return str;
    var match = str.match(/^(\d+)(st|nd|rd|th)?$/i);
    if (match) {
      var num = parseInt(match[1], 10);
      var suf = match[2];
      if (!suf) {
        var j = num % 10, k = num % 100;
        if (j === 1 && k !== 11) suf = 'st';
        else if (j === 2 && k !== 12) suf = 'nd';
        else if (j === 3 && k !== 13) suf = 'rd';
        else suf = 'th';
      }
      return num + '<sup>' + suf.toLowerCase() + '</sup>';
    }
    return str;
  }

  function getEventDateComponents(ev, index) {
    var yearStr = ev.year || 2026;
    var dayHtml = '14<sup>th</sup>';
    var monthStr = 'AUGUST';

    if (ev.day && ev.month) {
      dayHtml = formatOrdinal(ev.day);
      monthStr = String(ev.month).toUpperCase();
    } else if (ev.date) {
      var parts = String(ev.date).trim().split(/\s+/);
      if (parts.length >= 1) dayHtml = formatOrdinal(parts[0]);
      if (parts.length >= 2) monthStr = parts[1].toUpperCase();
    } else {
      var months = ['SEPTEMBER', 'MARCH', 'OCTOBER', 'FEBRUARY', 'AUGUST', 'DECEMBER', 'NOVEMBER', 'JANUARY'];
      var days = ['14', '21', '30', '04', '19', '28', '12', '15'];
      dayHtml = formatOrdinal(days[index % days.length]);
      monthStr = months[index % months.length];
    }

    return {
      dayHtml: dayHtml,
      monthStr: monthStr,
      yearStr: yearStr
    };
  }

  /**
   * Creates a single timeline node (.ev-t-node)
   */
  function createTimelineNode(ev, categoryColor, categoryLabel, index) {
    var nodeColor = TIMELINE_PALETTE[index % TIMELINE_PALETTE.length] || categoryColor || '#14509e';
    var node = document.createElement('div');
    node.className = 'ev-t-node';
    node.style.setProperty('--node-color', nodeColor);
    node.style.borderLeftColor = nodeColor;
    node.style.cursor = 'pointer';

    var dateComp = getEventDateComponents(ev, index);
    var badgeText = (ev.badgeText || (ev.status === 'ongoing' ? 'ONGOING NOW' : (ev.year === 2026 ? '2026 EDITION' : 'COMPLETED')));
    var badgeClass = (ev.status === 'ongoing' || ev.year === 2026) ? 'ev-t-badge is-signature' : 'ev-t-badge';
    var yearBg = hexToRgba(nodeColor, 0.12);

    var photoSrc = ev.photo || SAMPLE_PHOTOS[index % SAMPLE_PHOTOS.length];
    var resolvedPhoto = resolveImagePath(photoSrc);
    var photoHtml = '<img src="' + escapeHtml(resolvedPhoto) + '" alt="' + escapeHtml(ev.title) + '">';
    var peekThumbLabel = (ev.banners && ev.banners.length > 0) ? ev.banners[0] : (categoryLabel + ' ' + ev.year);

    node.innerHTML =
      '<div class="ev-t-dot"></div>' +
      '<div class="ev-t-date-col">' +
        '<div class="ev-t-date-day">' + dateComp.dayHtml + '</div>' +
        '<div class="ev-t-date-month">' + dateComp.monthStr + '</div>' +
        '<div class="ev-t-date-year">' + dateComp.yearStr + '</div>' +
      '</div>' +
      '<div class="ev-t-divider"></div>' +
      '<div class="ev-t-body-col">' +
        '<div class="ev-t-title-row">' +
          '<h4>' + escapeHtml(ev.title) + '</h4>' +
          '<span class="' + badgeClass + '">' + badgeText + '</span>' +
        '</div>' +
        '<p>' + escapeHtml(ev.description) + '</p>' +
        '<div class="ev-peek">' +
          '<div class="ev-peek-inner">' +
            '<div class="ev-peek-photo" style="background-color:' + yearBg + ';color:' + nodeColor + '">' + photoHtml + '</div>' +
            '<div class="ev-peek-info">' +
              '<div class="ev-peek-cta" style="color:' + nodeColor + '">Click for more info & details &rarr;</div>' +
              '<div class="ev-peek-sub">' + escapeHtml(peekThumbLabel) + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    node.addEventListener('click', function (e) {
      e.stopPropagation();
      if (ev.year === 2026) {
        var spotlight = document.getElementById('ev-spotlight-zone');
        if (spotlight) {
          spotlight.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      evOpenModal(ev, categoryLabel, nodeColor);
    });

    return node;
  }

  /**
   * Creates an archive card (.ev-a-card)
   */
  function createArchiveCard(ev, categoryColor, categoryLabel, index) {
    var nodeColor = TIMELINE_PALETTE[(index + 3) % TIMELINE_PALETTE.length] || categoryColor || '#14509e';
    var card = document.createElement('div');
    card.className = 'ev-a-card';
    card.style.setProperty('--node-color', nodeColor);
    card.style.borderLeft = '4px solid ' + nodeColor;
    card.style.cursor = 'pointer';

    var dateComp = getEventDateComponents(ev, index);
    var yearBg = hexToRgba(nodeColor, 0.12);
    var photoSrc = ev.photo || SAMPLE_PHOTOS[(index + 4) % SAMPLE_PHOTOS.length];
    var resolvedPhoto = resolveImagePath(photoSrc);
    var photoHtml = '<img src="' + escapeHtml(resolvedPhoto) + '" alt="' + escapeHtml(ev.title) + '">';
    var peekThumbLabel = (ev.banners && ev.banners.length > 0) ? ev.banners[0] : (categoryLabel + ' ' + ev.year);

    card.innerHTML =
      '<div class="ev-t-date-col">' +
        '<div class="ev-t-date-day">' + dateComp.dayHtml + '</div>' +
        '<div class="ev-t-date-month">' + dateComp.monthStr + '</div>' +
        '<div class="ev-t-date-year">' + dateComp.yearStr + '</div>' +
      '</div>' +
      '<div class="ev-t-divider"></div>' +
      '<div class="ev-t-body-col">' +
        '<div class="ev-t-title-row">' +
          '<h4>' + escapeHtml(ev.title) + '</h4>' +
          '<span class="ev-t-badge">COMPLETED</span>' +
        '</div>' +
        '<p>' + escapeHtml(ev.description) + '</p>' +
        '<div class="ev-peek">' +
          '<div class="ev-peek-inner">' +
            '<div class="ev-peek-photo" style="background-color:' + yearBg + ';color:' + nodeColor + '">' + photoHtml + '</div>' +
            '<div class="ev-peek-info">' +
              '<div class="ev-peek-cta" style="color:' + nodeColor + '">Click for more info & details &rarr;</div>' +
              '<div class="ev-peek-sub">' + escapeHtml(peekThumbLabel) + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    card.addEventListener('click', function (e) {
      e.stopPropagation();
      if (ev.year === 2026) {
        var spotlight = document.getElementById('ev-spotlight-zone');
        if (spotlight) {
          spotlight.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      evOpenModal(ev, categoryLabel, nodeColor);
    });

    return card;
  }

  /**
   * Global Modal Opener Function
   */
  function evOpenModal(instance, categoryLabel, categoryColor) {
    categoryColor = categoryColor || '#14509e';
    ensureModalDOM();

    var backdrop  = document.getElementById('ev-modal-backdrop');
    var modalEl   = backdrop ? backdrop.querySelector('.ev-modal') : null;
    var heroEl    = document.getElementById('ev-modal-hero');
    var bodyEl    = document.getElementById('ev-modal-body');

    if (!backdrop || !heroEl || !bodyEl) return;

    if (modalEl) {
      modalEl.style.borderTopColor = categoryColor;
      modalEl.scrollTop = 0;
    }

    // Clear previous auto-advance interval
    if (currentSliderInterval) {
      clearInterval(currentSliderInterval);
      currentSliderInterval = null;
    }

    heroEl.innerHTML =
      '<div class="ev-modal-cat-tag" style="background-color:' + hexToRgba(categoryColor, 0.15) + ';color:' + categoryColor + '">' +
        escapeHtml(categoryLabel) + ' &middot; ' + instance.year +
      '</div>' +
      '<h3>' + escapeHtml(instance.title) + '</h3>' +
      '<p class="ev-modal-sub">' + escapeHtml(instance.description) + '</p>';

    // 2. Build Body HTML
    var bodyHtml = '';

    // Facts Section
    if (instance.facts && instance.facts.length > 0) {
      bodyHtml += '<div class="ev-modal-section-title">Quick Highlights</div>';
      bodyHtml += '<div class="ev-modal-facts">';
      instance.facts.forEach(function (f) {
        var labelText = (f[1] || '').trim();
        bodyHtml +=
          '<div class="ev-mf" style="border-top-color:' + categoryColor + '">' +
            '<span class="ev-mf-num" style="color:' + categoryColor + '">' + escapeHtml(f[0]) + '</span>' +
            (labelText ? '<span class="ev-mf-label">' + escapeHtml(labelText) + '</span>' : '') +
          '</div>';
      });
      bodyHtml += '</div>';
    }

    // Detailed Description
    var fullDesc = instance.desc || instance.description;
    bodyHtml += '<div class="ev-modal-section-title">Overview</div>';
    bodyHtml += '<p class="ev-modal-desc">' + escapeHtml(fullDesc) + '</p>';

    // Banner Slider Section
    var banners = (instance.banners && instance.banners.length > 0) ? instance.banners : ['Event Highlights ' + instance.year];
    bodyHtml += '<div class="ev-modal-section-title">Event Highlights & Banners</div>';
    bodyHtml += '<div class="ev-modal-slider" id="ev-modal-slider">';
    bodyHtml +=   '<div class="ev-slider-track" id="ev-slider-track">';
    banners.forEach(function (bLabel, idx) {
      bodyHtml +=
        '<div class="ev-slide">' +
          '<div class="ev-slide-img" style="background: linear-gradient(135deg, ' + hexToRgba(categoryColor, 0.25) + ', #1e293b);">' +
            '<div class="ev-slide-placeholder-icon">&#128247;</div>' +
            '<div class="ev-slide-label">' + escapeHtml(bLabel) + '</div>' +
          '</div>' +
        '</div>';
    });
    bodyHtml +=   '</div>';

    if (banners.length > 1) {
      bodyHtml += '<div class="ev-slider-dots" id="ev-slider-dots">';
      banners.forEach(function (_, idx) {
        bodyHtml += '<span class="ev-s-dot' + (idx === 0 ? ' active' : '') + '" data-slide="' + idx + '" style="' + (idx === 0 ? 'background-color:' + categoryColor : '') + '"></span>';
      });
      bodyHtml += '</div>';
    }
    bodyHtml += '</div>';

    bodyEl.innerHTML = bodyHtml;

    // 3. Setup Slider Interaction if > 1 banner
    if (banners.length > 1) {
      setupSlider(banners.length, categoryColor);
    }

    // 4. Show Backdrop
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Sets up carousel slider logic
   */
  function setupSlider(slideCount, categoryColor) {
    var track = document.getElementById('ev-slider-track');
    var dots  = document.querySelectorAll('#ev-slider-dots .ev-s-dot');
    var sliderEl = document.getElementById('ev-modal-slider');
    var currentSlide = 0;

    function goToSlide(index) {
      currentSlide = (index + slideCount) % slideCount;
      if (track) {
        track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
      }
      dots.forEach(function (dot, i) {
        if (i === currentSlide) {
          dot.classList.add('active');
          dot.style.backgroundColor = categoryColor;
        } else {
          dot.classList.remove('active');
          dot.style.backgroundColor = '';
        }
      });
    }

    // Dot Clicks
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var slideIndex = parseInt(this.getAttribute('data-slide'), 10);
        goToSlide(slideIndex);
      });
    });

    // Auto-advance every 2.8s
    function startAutoAdvance() {
      if (currentSliderInterval) clearInterval(currentSliderInterval);
      currentSliderInterval = setInterval(function () {
        goToSlide(currentSlide + 1);
      }, 2800);
    }

    startAutoAdvance();

    // Pause on hover
    if (sliderEl) {
      sliderEl.addEventListener('mouseenter', function () {
        if (currentSliderInterval) clearInterval(currentSliderInterval);
      });
      sliderEl.addEventListener('mouseleave', function () {
        startAutoAdvance();
      });
    }
  }

  /**
   * Injects modal markup into document.body if missing
   */
  function ensureModalDOM() {
    if (document.getElementById('ev-modal-backdrop')) return;

    var backdrop = document.createElement('div');
    backdrop.id = 'ev-modal-backdrop';
    backdrop.className = 'ev-modal-backdrop';

    backdrop.innerHTML =
      '<div class="ev-modal" role="dialog" aria-modal="true">' +
        '<button class="ev-modal-close" id="ev-modal-close" aria-label="Close modal">&times;</button>' +
        '<div class="ev-modal-hero" id="ev-modal-hero"></div>' +
        '<div class="ev-modal-body" id="ev-modal-body"></div>' +
      '</div>';

    document.body.appendChild(backdrop);

    // Event listeners to close
    var closeBtn = document.getElementById('ev-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeEvModal);
    }

    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) {
        closeEvModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        closeEvModal();
      }
    });
  }

  function closeEvModal() {
    var backdrop = document.getElementById('ev-modal-backdrop');
    if (backdrop) {
      backdrop.classList.remove('is-open');
      var modalEl = backdrop.querySelector('.ev-modal');
      if (modalEl) {
        modalEl.scrollTop = 0;
      }
    }
    document.body.style.overflow = '';
    if (currentSliderInterval) {
      clearInterval(currentSliderInterval);
      currentSliderInterval = null;
    }
  }

  function evRenderPhotoMarquee(photoEl, pastInstances, categoryLabel) {
    if (!photoEl) return;
    photoEl.innerHTML = '';

    pastInstances = pastInstances || [];
    var items = pastInstances.slice();
    if (items.length === 0) {
      items = [
        { year: 2026, title: 'Event Highlights' },
        { year: 2025, title: 'Annual Edition' },
        { year: 2024, title: 'Campus Showcase' },
        { year: 2023, title: 'Tech Competition' }
      ];
    }

    var cardList = [];
    items.forEach(function (ev) {
      if (ev.banners && ev.banners.length > 0) {
        ev.banners.forEach(function (bLabel) {
          cardList.push({
            ev: ev,
            year: ev.year,
            title: bLabel,
            sub: ev.title
          });
        });
      } else {
        cardList.push({
          ev: ev,
          year: ev.year,
          title: ev.title,
          sub: categoryLabel
        });
      }
    });

    cardList.forEach(function (card, index) {
      var photoSrc = (card.ev.photo && card.ev.photo.indexOf('poster.jpg') === -1)
        ? card.ev.photo
        : SAMPLE_PHOTOS[index % SAMPLE_PHOTOS.length];
      var resolvedPhoto = resolveImagePath(photoSrc);
      var yearTag = card.year || '2026';
      var titleText = card.title;
      var subText = card.sub;

      var tile = document.createElement('div');
      tile.className = 'ev-photo-tile';
      tile.innerHTML =
        '<img src="' + escapeHtml(resolvedPhoto) + '" alt="' + escapeHtml(titleText) + '">' +
        '<div class="ev-photo-overlay">' +
          '<span class="ev-photo-badge">' + yearTag + ' &middot; ' + escapeHtml(subText) + '</span>' +
          '<div class="ev-photo-title-wrap">' +
            '<h5 class="ev-photo-title">' + escapeHtml(titleText) + '</h5>' +
            '<span class="ev-photo-cta-arrow">&rarr;</span>' +
          '</div>' +
        '</div>';

      tile.addEventListener('click', function () {
        if (typeof evOpenModal === 'function') {
          evOpenModal(card.ev, categoryLabel || 'Events Gallery', '#14509e');
        }
      });

      photoEl.appendChild(tile);
    });

    // Duplicate tiles to ensure seamless infinite scrolling marquee
    photoEl.innerHTML += photoEl.innerHTML;

    // Apply constant speed in pixels/sec regardless of photo count
    applyConstantMarqueeSpeed(photoEl);
  }

  function applyConstantMarqueeSpeed(el) {
    if (!el) return;
    function calcSpeed() {
      var rawCssSpeed = getComputedStyle(document.documentElement).getPropertyValue('--marquee-speed-px').trim();
      var speedPxPerSec = window.MARQUEE_SPEED_PX || parseFloat(rawCssSpeed);
      if (!speedPxPerSec || isNaN(speedPxPerSec) || speedPxPerSec <= 0) {
        speedPxPerSec = 35;
      }
      var totalWidth = el.scrollWidth;
      var halfWidth = totalWidth / 2;
      if (halfWidth > 0) {
        var duration = halfWidth / speedPxPerSec;
        el.style.animationDuration = duration.toFixed(2) + 's';
      }
    }
    requestAnimationFrame(function () {
      calcSpeed();
      setTimeout(calcSpeed, 200);
    });
    window.addEventListener('resize', calcSpeed);
  }

  // Utilities
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function hexToRgba(hex, alpha) {
    if (!hex) return 'rgba(20, 80, 158, ' + alpha + ')';
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var r = parseInt(hex.substring(0, 2), 16) || 0;
    var g = parseInt(hex.substring(2, 4), 16) || 0;
    var b = parseInt(hex.substring(4, 6), 16) || 0;
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  }

  // Export to global context
  global.evRenderTimelineArchive = evRenderTimelineArchive;
  global.evOpenModal = evOpenModal;
  global.evRenderPhotoMarquee = evRenderPhotoMarquee;
  global.applyConstantMarqueeSpeed = applyConstantMarqueeSpeed;

})(typeof window !== 'undefined' ? window : this);
