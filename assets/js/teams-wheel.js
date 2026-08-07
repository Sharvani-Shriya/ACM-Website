/* ============================================================
   ACM TEAMS - Interactive Spinning Wheel & Side Details Popup
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var teamsData = [
    {
      sno: 1,
      year: '2025-2026',
      shortYear: '2025-26',
      students: 58,
      staff: 15,
      studentPdf: 'assets/documents/students-2025-26.pdf',
      staffPdf: 'assets/documents/staff-2025-26.pdf'
    },
    {
      sno: 2,
      year: '2024-2025',
      shortYear: '2024-25',
      students: 72,
      staff: 22,
      studentPdf: 'assets/documents/students-2024-25.pdf',
      staffPdf: 'assets/documents/staff-2024-25.pdf'
    },
    {
      sno: 3,
      year: '2023-2024',
      shortYear: '2023-24',
      students: 116,
      staff: 21,
      studentPdf: 'assets/documents/students-2023-24.pdf',
      staffPdf: 'assets/documents/staff-2023-24.pdf'
    },
    {
      sno: 4,
      year: '2022-2023',
      shortYear: '2022-23',
      students: 139,
      staff: 21,
      studentPdf: 'assets/documents/students-2022-23.pdf',
      staffPdf: 'assets/documents/staff-2022-23.pdf'
    },
    {
      sno: 5,
      year: '2021-2022',
      shortYear: '2021-22',
      students: 125,
      staff: 27,
      studentPdf: 'assets/documents/students-2021-22.pdf',
      staffPdf: 'assets/documents/staff-2021-22.pdf'
    },
    {
      sno: 6,
      year: '2020-2021',
      shortYear: '2020-21',
      students: 68,
      staff: 28,
      studentPdf: 'assets/documents/students-2020-21.pdf',
      staffPdf: 'assets/documents/staff-2020-21.pdf'
    },
    {
      sno: 7,
      year: '2019-2020',
      shortYear: '2019-20',
      students: 106,
      staff: 27,
      studentPdf: 'assets/documents/students-2019-20.pdf',
      staffPdf: 'assets/documents/staff-2019-20.pdf'
    },
    {
      sno: 8,
      year: '2018-2019',
      shortYear: '2018-19',
      students: 37,
      staff: 26,
      studentPdf: 'assets/documents/students-2018-19.pdf',
      staffPdf: 'assets/documents/staff-2018-19.pdf'
    }
  ];

  var wheelSvg = document.getElementById('teams-wheel-svg');
  var popupCard = document.getElementById('teams-details-popup');
  if (!wheelSvg || !popupCard) return;

  var currentSelectedIndex = 0; // Default: 2025-2026
  var currentRotation = 0;
  var sliceCount = teamsData.length;
  var sliceAngle = 360 / sliceCount; // 45deg per slice

  // Vibrant Event Horizon Palette (Emerald, Terracotta, Purple, Amber, Deep Blue, Crimson, Teal, Forest)
  var palette = [
    { bg: '#14509e', text: '#ffffff' }, // 2025-26: Deep Electric Blue (Intra-College)
    { bg: '#2d7a52', text: '#ffffff' }, // 2024-25: Emerald Green (Hour of Code)
    { bg: '#bc4c2a', text: '#ffffff' }, // 2023-24: Terracotta Rust (Outreach)
    { bg: '#673ab7', text: '#ffffff' }, // 2022-23: Royal Purple (Guest Lectures)
    { bg: '#d97706', text: '#ffffff' }, // 2021-22: Golden Amber (Technizen)
    { bg: '#386641', text: '#ffffff' }, // 2020-21: Forest Green (Workshops)
    { bg: '#c8102e', text: '#ffffff' }, // 2019-20: Crimson Red (College Accent)
    { bg: '#0084c7', text: '#ffffff' }  // 2018-19: Teal Cyan (Pixel Craft)
  ];

  // Helper for SVG polar coordinates
  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    var d = [
      "M", x, y,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
    return d;
  }

  // Draw wheel SVG
  function renderWheel() {
    var size = 420;
    var center = size / 2;
    var radius = center - 10;
    var innerRadius = 55; // room for center hub

    var svgHtml = `<svg viewBox="0 0 ${size} ${size}" class="wheel-svg-element" id="wheel-svg-rotator">`;
    
    // Outer rim glow circle
    svgHtml += `<circle cx="${center}" cy="${center}" r="${radius + 4}" fill="none" stroke="rgba(20, 80, 158, 0.25)" stroke-width="4" />`;
    svgHtml += `<circle cx="${center}" cy="${center}" r="${radius}" fill="#071433" stroke="#0b1f4d" stroke-width="3" />`;

    // Render slices
    for (var i = 0; i < sliceCount; i++) {
      var startAngle = i * sliceAngle;
      var endAngle = (i + 1) * sliceAngle;
      var midAngle = startAngle + (sliceAngle / 2);
      var pathData = describeArc(center, center, radius, startAngle, endAngle);
      var sliceColor = palette[i % palette.length];

      // Text position along bisector radius
      var textPos = polarToCartesian(center, center, radius * 0.68, midAngle);

      svgHtml += `
        <g class="wheel-slice-group ${i === currentSelectedIndex ? 'selected' : ''}" data-index="${i}">
          <path d="${pathData}" fill="${sliceColor.bg}" stroke="#ffffff" stroke-width="1.5" class="wheel-slice-path" />
          <text x="${textPos.x}" y="${textPos.y}" 
                transform="rotate(${midAngle}, ${textPos.x}, ${textPos.y})"
                text-anchor="middle" dominant-baseline="central" 
                fill="${sliceColor.text}" font-weight="700" font-size="14" class="wheel-slice-text">
            ${teamsData[i].shortYear}
          </text>
        </g>
      `;
    }

    // Inner ring border
    svgHtml += `<circle cx="${center}" cy="${center}" r="${innerRadius}" fill="none" stroke="#14509e" stroke-width="2.5" />`;
    svgHtml += `</svg>`;

    wheelSvg.innerHTML = svgHtml;
    attachSliceListeners();
  }

  function attachSliceListeners() {
    var groups = wheelSvg.querySelectorAll('.wheel-slice-group');

    groups.forEach(function (group) {
      group.addEventListener('click', function () {
        var index = parseInt(group.getAttribute('data-index'), 10);
        selectYearIndex(index);
      });
    });
  }

  function selectYearIndex(index, isSpinAnimation) {
    if (index < 0 || index >= sliceCount) return;
    currentSelectedIndex = index;

    // Calculate rotation to place selected slice at top marker (0 degrees / 12 o'clock)
    var targetAngle = -(index * sliceAngle + (sliceAngle / 2));
    
    // Normalize rotation to prevent multi-spin unwinding glitch
    var currentMod = currentRotation % 360;
    var diff = (targetAngle - currentMod) % 360;
    if (diff < -180) diff += 360;
    if (diff > 180) diff -= 360;
    
    if (isSpinAnimation) {
      currentRotation = currentRotation + diff + (360 * 3);
    } else {
      currentRotation = currentRotation + diff;
    }

    var rotator = document.getElementById('wheel-svg-rotator');
    if (rotator) {
      rotator.style.transform = `rotate(${currentRotation}deg)`;
    }

    // Highlight selected slice in SVG
    var groups = wheelSvg.querySelectorAll('.wheel-slice-group');
    groups.forEach(function (g, i) {
      if (i === currentSelectedIndex) {
        g.classList.add('selected');
      } else {
        g.classList.remove('selected');
      }
    });

    updateSidePopup(teamsData[currentSelectedIndex]);
  }

  function updateSidePopup(data) {
    var yearEl = popupCard.querySelector('.popup-year-title');
    var staffCountEl = popupCard.querySelector('.popup-staff-count');
    var studentCountEl = popupCard.querySelector('.popup-student-count');
    var totalCountEl = popupCard.querySelector('.popup-total-count');
    var studentFill = popupCard.querySelector('.student-fill');
    var staffFill = popupCard.querySelector('.staff-fill');
    var studentPctEl = popupCard.querySelector('.popup-student-pct');
    var staffPctEl = popupCard.querySelector('.popup-staff-pct');
    var studentBtn = popupCard.querySelector('.popup-student-btn');
    var staffBtn = popupCard.querySelector('.popup-staff-btn');
    var popupBadge = popupCard.querySelector('.popup-badge');
    var popupMonogram = popupCard.querySelector('.popup-monogram');

    var activeColor = palette[currentSelectedIndex % palette.length].bg;

    if (yearEl) yearEl.textContent = 'Academic Year ' + data.year;

    // Update Monogram Icon Badge (like HC, OP, GL, TW in Event Horizon)
    if (popupMonogram) {
      var yrCode = data.shortYear.split('-')[0].substring(2) || '25';
      popupMonogram.textContent = 'AY' + yrCode;
      popupMonogram.style.background = activeColor;
    }

    // Top border stripe matches active batch category color
    popupCard.style.borderTopColor = activeColor;

    var totalMembers = data.students + data.staff;

    // Fast counter animation for counts
    animateNumber(staffCountEl, data.staff);
    animateNumber(studentCountEl, data.students);
    animateNumber(totalCountEl, totalMembers);

    // Update Ratio Breakdown Bar (Multi-color Emerald Students & Terracotta Staff)
    var studentPct = Math.round((data.students / totalMembers) * 100);
    var staffPct = 100 - studentPct;

    if (studentFill) studentFill.style.width = studentPct + '%';
    if (staffFill) staffFill.style.width = staffPct + '%';

    if (studentPctEl) studentPctEl.textContent = studentPct + '% Students';
    if (staffPctEl) staffPctEl.textContent = staffPct + '% Staff';

    if (studentBtn) {
      studentBtn.setAttribute('href', data.studentPdf);
      var mainSpan = studentBtn.querySelector('.dl-btn-main');
      if (mainSpan) mainSpan.textContent = `Student List (${data.students})`;
    }
    if (staffBtn) {
      staffBtn.setAttribute('href', data.staffPdf);
      var mainSpan = staffBtn.querySelector('.dl-btn-main');
      if (mainSpan) mainSpan.textContent = `Staff List (${data.staff})`;
    }

    // Add brief pulse animation to side popup
    popupCard.classList.remove('popup-updated');
    void popupCard.offsetWidth; // trigger reflow
    popupCard.classList.add('popup-updated');
  }

  function animateNumber(el, targetVal) {
    if (!el) return;
    var startVal = 0;
    var duration = 450;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var current = Math.floor(startVal + (targetVal - startVal) * progress);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = targetVal;
      }
    }
    requestAnimationFrame(step);
  }

  // Render initial wheel
  renderWheel();
  // Select initial year (2025-2026)
  selectYearIndex(0);

  // Center SPIN button listener
  var spinCenterBtn = document.getElementById('teams-wheel-spin-btn');
  if (spinCenterBtn) {
    spinCenterBtn.addEventListener('click', function () {
      // Spin to next year
      var nextIdx = (currentSelectedIndex + 1) % sliceCount;
      selectYearIndex(nextIdx, true);
    });
  }

  // Prev / Next year navigation buttons in side popup
  var prevYearBtn = document.getElementById('popup-prev-year');
  var nextYearBtn = document.getElementById('popup-next-year');

  if (prevYearBtn) {
    prevYearBtn.addEventListener('click', function () {
      var prevIdx = (currentSelectedIndex - 1 + sliceCount) % sliceCount;
      selectYearIndex(prevIdx);
    });
  }

  if (nextYearBtn) {
    nextYearBtn.addEventListener('click', function () {
      var nextIdx = (currentSelectedIndex + 1) % sliceCount;
      selectYearIndex(nextIdx);
    });
  }

  // View Switcher (Wheel View vs Table View toggle)
  var btnWheelView = document.getElementById('btn-view-wheel');
  var btnTableView = document.getElementById('btn-view-table');
  var wheelViewSection = document.getElementById('teams-wheel-view');
  var tableViewSection = document.getElementById('teams-table-view');

  if (btnWheelView && btnTableView && wheelViewSection && tableViewSection) {
    btnWheelView.addEventListener('click', function () {
      btnWheelView.classList.add('active');
      btnTableView.classList.remove('active');
      wheelViewSection.style.display = 'grid';
      tableViewSection.style.display = 'none';
    });

    btnTableView.addEventListener('click', function () {
      btnTableView.classList.add('active');
      btnWheelView.classList.remove('active');
      wheelViewSection.style.display = 'none';
      tableViewSection.style.display = 'block';
    });
  }

});
