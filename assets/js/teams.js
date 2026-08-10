/* ============================================================
   ACM TEAMS ARCHIVE — Interactive Logic & Full CSE Student Dummy Data
   File: assets/js/teams.js
   Matches exact layout of teams-page-prototype1.html
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var roleColors = {
    "Chair": "var(--teams-crimson)",
    "Vice Chair": "var(--teams-navy-700)",
    "Secretary": "var(--teams-purple)",
    "Treasurer": "var(--teams-green)",
    "Web Master": "var(--teams-blue)",
    "Event Lead": "var(--teams-gold)"
  };

  function initials(name) {
    return name.split(" ").map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase();
  }

  function genMembers(n, seedNames) {
    var out = seedNames ? seedNames.slice() : [];
    var first = ["Aarav", "Sai", "Priya", "Divya", "Rahul", "Sneha", "Vikram", "Ananya", "Kiran", "Meena",
      "Arjun", "Lakshmi", "Yashwanth", "Pooja", "Naveen", "Deepika", "Rohit", "Swathi", "Bhavana", "Charan"];
    var last = ["Reddy", "Kumar", "Naidu", "Rao", "Sharma", "Varma", "Chowdary", "Prasad", "Devi", "Babu"];
    for (var i = out.length; i < n; i++) {
      out.push({ name: first[i % first.length] + " " + last[(i * 3) % last.length], branch: "CSE" });
    }
    return out;
  }

  /* Full Dummy Data for ALL 8 Academic Years — All Students CSE */
  var yearsData = {
    "2025-2026": {
      students: 58, staff: 15, hasData: true,
      leadership: [
        { name: "P. Sai Teja", role: "Chair", branch: "CSE" },
        { name: "K. Sindhu Priya", role: "Vice Chair", branch: "CSE" },
        { name: "M. Rohit Varma", role: "Secretary", branch: "CSE" },
        { name: "D. Ananya", role: "Treasurer", branch: "CSE" },
        { name: "V. Charan Kumar", role: "Web Master", branch: "CSE" },
        { name: "S. Bhavana", role: "Event Lead", branch: "CSE" }
      ],
      members: genMembers(58, []),
      staffList: [
        { name: "Dr. N. Ravi Shankar", role: "Faculty Advisor" },
        { name: "Dr. K. Lakshmi", role: "Co-Advisor" },
        { name: "Mr. B. Praveen", role: "Coordinator" },
        { name: "Ms. T. Anitha", role: "Coordinator" }
      ]
    },
    "2024-2025": {
      students: 72, staff: 22, hasData: true,
      leadership: [
        { name: "R. Venkatesh", role: "Chair", branch: "CSE" },
        { name: "J. Deepika", role: "Vice Chair", branch: "CSE" },
        { name: "A. Naveen", role: "Secretary", branch: "CSE" },
        { name: "P. Swathi", role: "Treasurer", branch: "CSE" },
        { name: "K. Yashwanth", role: "Web Master", branch: "CSE" },
        { name: "N. Meena", role: "Event Lead", branch: "CSE" }
      ],
      members: genMembers(72, []),
      staffList: [
        { name: "Dr. N. Ravi Shankar", role: "Faculty Advisor" },
        { name: "Dr. S. Padma", role: "Co-Advisor" },
        { name: "Mr. C. Suresh", role: "Coordinator" }
      ]
    },
    "2023-2024": {
      students: 116, staff: 21, hasData: true,
      leadership: [
        { name: "M. Sai Kiran", role: "Chair", branch: "CSE" },
        { name: "V. Pooja", role: "Vice Chair", branch: "CSE" },
        { name: "S. Arjun", role: "Secretary", branch: "CSE" },
        { name: "K. Divya", role: "Treasurer", branch: "CSE" },
        { name: "R. Kiran Babu", role: "Web Master", branch: "CSE" },
        { name: "T. Snigdha", role: "Event Lead", branch: "CSE" }
      ],
      members: genMembers(116, []),
      staffList: [
        { name: "Dr. N. Ravi Shankar", role: "Faculty Advisor" },
        { name: "Dr. K. Lakshmi", role: "Co-Advisor" }
      ]
    },
    "2022-2023": {
      students: 139, staff: 21, hasData: true,
      leadership: [
        { name: "G. Hemanth", role: "Chair", branch: "CSE" },
        { name: "T. Sushma", role: "Vice Chair", branch: "CSE" },
        { name: "K. Tarun", role: "Secretary", branch: "CSE" },
        { name: "P. Harshitha", role: "Treasurer", branch: "CSE" },
        { name: "R. Venkatesh", role: "Web Master", branch: "CSE" },
        { name: "M. Akhil", role: "Event Lead", branch: "CSE" }
      ],
      members: genMembers(139, []),
      staffList: [
        { name: "Dr. N. Ravi Shankar", role: "Faculty Advisor" },
        { name: "Dr. B. Vijayalakshmi", role: "Co-Advisor" }
      ]
    },
    "2021-2022": {
      students: 125, staff: 27, hasData: true,
      leadership: [
        { name: "K. Praveen Kumar", role: "Chair", branch: "CSE" },
        { name: "L. Monisha", role: "Vice Chair", branch: "CSE" },
        { name: "V. Rajesh", role: "Secretary", branch: "CSE" },
        { name: "S. Kavya", role: "Treasurer", branch: "CSE" },
        { name: "N. Ganesh", role: "Web Master", branch: "CSE" },
        { name: "D. Srinivas", role: "Event Lead", branch: "CSE" }
      ],
      members: genMembers(125, []),
      staffList: [
        { name: "Dr. N. Ravi Shankar", role: "Faculty Advisor" },
        { name: "Dr. M. Seshagiri Rao", role: "Co-Advisor" }
      ]
    },
    "2020-2021": {
      students: 68, staff: 28, hasData: true,
      leadership: [
        { name: "A. Dinesh", role: "Chair", branch: "CSE" },
        { name: "B. Sravani", role: "Vice Chair", branch: "CSE" },
        { name: "C. Hema", role: "Secretary", branch: "CSE" },
        { name: "E. Tejaswini", role: "Treasurer", branch: "CSE" },
        { name: "F. Bhanu", role: "Web Master", branch: "CSE" },
        { name: "G. Sandeep", role: "Event Lead", branch: "CSE" }
      ],
      members: genMembers(68, []),
      staffList: [
        { name: "Dr. N. Ravi Shankar", role: "Faculty Advisor" },
        { name: "Mr. K. Subba Rao", role: "Coordinator" }
      ]
    },
    "2019-2020": {
      students: 106, staff: 27, hasData: true,
      leadership: [
        { name: "M. Sindhu Reddy", role: "Vice Chair", branch: "CSE" },
        { name: "K. Praveen Kumar", role: "Chair", branch: "CSE" },
        { name: "B. Harika", role: "Secretary", branch: "CSE" },
        { name: "G. Vamsi", role: "Treasurer", branch: "CSE" },
        { name: "S. Nikhita", role: "Web Master", branch: "CSE" },
        { name: "P. Raju", role: "Event Lead", branch: "CSE" }
      ],
      members: genMembers(106, []),
      staffList: [{ name: "Dr. N. Ravi Shankar", role: "Faculty Advisor" }]
    },
    "2018-2019": {
      students: 37, staff: 26, hasData: true,
      leadership: [
        { name: "V. Harish", role: "Chair", branch: "CSE" },
        { name: "P. Archana", role: "Vice Chair", branch: "CSE" },
        { name: "K. Mohan", role: "Secretary", branch: "CSE" },
        { name: "N. Rekha", role: "Treasurer", branch: "CSE" },
        { name: "R. Bharath", role: "Web Master", branch: "CSE" },
        { name: "S. Yamini", role: "Event Lead", branch: "CSE" }
      ],
      members: genMembers(37, []),
      staffList: [{ name: "Dr. N. Ravi Shankar", role: "Faculty Advisor" }]
    },
    "2017-2018":{
      students: 143,staff: 30, hasData: true,
      leadership: [
        { name: "P. Poorna Sai Sri Harsha", role: "Chair", branch: "CSE"},
        { name: "D. Supriya", role: "Vice Chair", branch: "CSE"},
        { name: "K. Kalyan", role: "Secretary", branch: "CSE"},
        { name: "B. Madhu", role: "Treasurer", branch: "CSE"},
        { name: "K. Jaash", role: "Web Master", branch: "CSE"},
        { name: "M. Pavan", role: "Event Lead", branch: "CSE"}  
      ],
      members: genMembers(143, []),
      staffList: [{ name: "Dr. S. S. Rajamouli", role: "Faculty Advisor" }]
    }
  };

  /* Render Year Tabs */
  var tabsEl = document.getElementById('yearTabs');
  var panelEl = document.getElementById('yearPanel');
  if (!tabsEl || !panelEl) return;

  var activeYear = "2025-2026";

  Object.keys(yearsData).forEach(function (year) {
    var btn = document.createElement('button');
    btn.className = 'year-tab' + (yearsData[year].hasData ? '' : ' empty');
    btn.textContent = year;
    btn.dataset.year = year;
    btn.onclick = function () { activeYear = year; renderTabs(); renderPanel(year); };
    tabsEl.appendChild(btn);
  });

  function renderTabs() {
    Array.prototype.forEach.call(tabsEl.children, function (b) {
      b.classList.toggle('active', b.dataset.year === activeYear);
    });
  }

  function renderPanel(year) {
    var d = yearsData[year];

    /* 6 Leadership Cards */
    var leadHtml = d.leadership.map(function (m) {
      return '<div class="lead-card">' +
        '<span class="role-badge" style="background:' + (roleColors[m.role] || 'var(--teams-navy-800)') + '">' + m.role + '</span>' +
        '<div class="avatar">' + initials(m.name) + '</div>' +
        '<div class="mname">' + m.name + '</div>' +
        '<div class="mrole">' + m.branch + '</div>' +
        '</div>';
    }).join('');

    /* Cohort Breakdown */
    var branchCounts = {};
    d.members.forEach(function (m) { branchCounts[m.branch] = (branchCounts[m.branch] || 0) + 1; });
    var breakdownHtml = Object.keys(branchCounts).map(function (b) {
      return '<div class="breakdown-chip"><b>' + branchCounts[b] + '</b> ' + b + '</div>';
    }).join('');

    /* Staff Cards */
    var staffHtml = d.staffList.map(function (s) {
      return '<div class="staff-card">' +
        '<div class="avatar">' + initials(s.name) + '</div>' +
        '<div><div class="mname">' + s.name + '</div><div class="mrole">' + s.role + '</div></div>' +
        '</div>';
    }).join('');

    panelEl.innerHTML =
      '<div class="year-panel-head">' +
        '<div class="year-head-left">' +
          '<h3>' + year + '</h3>' +
          '<div class="meta"><b>' + d.students + '</b> student members · <b>' + d.staff + '</b> staff members</div>' +
        '</div>' +
        '<button class="btn-prototype btn-primary" id="openRosterBtn">View full member directory ↗</button>' +
      '</div>' +
      '<div class="subhead">Leadership team</div>' +
      '<div class="lead-grid">' + leadHtml + '</div>' +
      '<div class="subhead">Cohort breakdown</div>' +
      '<div class="breakdown-row">' + breakdownHtml + '</div>' +
      '<div class="subhead">Look someone up in ' + year + '</div>' +
      '<div class="year-search">' +
      '<input placeholder="Type a name…" id="yearSearchInput">' +
      '<button id="yearSearchTrigger">Search</button>' +
      '</div>' +
      '<div class="year-search-hint">Nothing shows until you search — every one of the ' + d.students + ' members has equal footing here. Prefer to scan the whole list? Use the directory button above.</div>' +
      '<div class="year-search-results" id="yearSearchResults"></div>' +
      '<div class="subhead" style="margin-top:6px;">Faculty &amp; staff</div>' +
      '<div class="staff-row">' + staffHtml + '</div>';

    /* Attach clean event listeners */
    var btnOpen = document.getElementById('openRosterBtn');
    if (btnOpen) btnOpen.onclick = function () { window.openModal(year); };

    var sInput = document.getElementById('yearSearchInput');
    var sTrigger = document.getElementById('yearSearchTrigger');
    if (sInput) sInput.oninput = function () { window.onYearSearch(this.value); };
    if (sTrigger && sInput) sTrigger.onclick = function () { window.onYearSearch(sInput.value); };
  }

  window.onYearSearch = function (q) {
    var d = yearsData[activeYear];
    var box = document.getElementById('yearSearchResults');
    if (!box) return;
    q = q.trim().toLowerCase();
    if (!q) { box.innerHTML = ''; return; }
    var pool = d.leadership.map(function (m) { return Object.assign({}, m, { tag: m.role }); })
      .concat(d.members.map(function (m) { return Object.assign({}, m, { tag: "Member" }); }));
    var hits = pool.filter(function (m) { return m.name.toLowerCase().indexOf(q) !== -1; }).slice(0, 8);
    box.innerHTML = hits.length
      ? hits.map(function (h) {
        return '<div class="hit-row"><span><b>' + h.name + '</b> · ' + h.branch + '</span><span class="tag">' + h.tag + '</span></div>';
      }).join('')
      : '<div class="hit-row"><span>No one matching "' + q + '" in ' + activeYear + '.</span></div>';
  };

  renderTabs();
  renderPanel(activeYear);

  /* Modal Roster */
  var modalRows = [];
  var modalFilter = "All";
  var modalQuery = "";
  var modalPage = 1;
  var PAGE_SIZE = 25;

  window.openModal = function (year) {
    var d = yearsData[year];
    document.getElementById('modalYearBadge').textContent = "ROSTER · " + year;
    document.getElementById('modalTitle').textContent = "Full Member Roster";
    document.getElementById('modalMeta').textContent = d.students + " students · " + d.staff + " staff";

    modalRows = [].concat(
      d.leadership.map(function (m) { return { name: m.name, role: m.role, branch: m.branch, type: "Leadership" }; }).sort(byName),
      d.members.map(function (m) { return { name: m.name, role: "Member", branch: m.branch, type: "Student" }; }).sort(byName),
      d.staffList.map(function (s) { return { name: s.name, role: s.role, branch: "—", type: "Staff" }; }).sort(byName)
    );

    var bset = d.members.map(function (m) { return m.branch; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
    var filters = ["All", "Leadership", "Staff"].concat(bset);
    var modalFiltersEl = document.getElementById('modalFilters');
    modalFiltersEl.innerHTML = '';
    filters.forEach(function (f) {
      var chip = document.createElement('button');
      chip.className = 'filter-chip' + (f === 'All' ? ' active' : '');
      chip.textContent = f;
      chip.dataset.f = f;
      chip.onclick = function () { window.setModalFilter(f); };
      modalFiltersEl.appendChild(chip);
    });

    modalFilter = "All"; modalQuery = ""; modalPage = 1;
    document.getElementById('modalSearchInput').value = "";
    renderModalTable();
    document.body.style.overflow = 'hidden';
    document.getElementById('rosterModal').classList.add('open');
  };

  function byName(a, b) { return a.name.localeCompare(b.name); }

  window.setModalFilter = function (f) {
    modalFilter = f; modalPage = 1;
    Array.prototype.forEach.call(document.querySelectorAll('.filter-chip'), function (c) {
      c.classList.toggle('active', c.dataset.f === f);
    });
    renderModalTable();
  };

  window.onModalSearch = function (v) { modalQuery = v.toLowerCase(); modalPage = 1; renderModalTable(); };

  function renderModalTable() {
    var rows = modalRows.filter(function (r) {
      var mf = modalFilter === "All" ? true
        : modalFilter === "Leadership" ? r.type === "Leadership"
          : modalFilter === "Staff" ? r.type === "Staff"
            : r.branch === modalFilter;
      return mf && (!modalQuery || r.name.toLowerCase().indexOf(modalQuery) !== -1);
    });

    var totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
    modalPage = Math.min(modalPage, totalPages);
    var pageRows = rows.slice((modalPage - 1) * PAGE_SIZE, modalPage * PAGE_SIZE);

    document.getElementById('modalTableBody').innerHTML = pageRows.length
      ? pageRows.map(function (r) { return '<tr><td>' + r.name + '</td><td>' + r.role + '</td><td>' + r.branch + '</td><td>' + r.type + '</td></tr>'; }).join('')
      : '<tr><td colspan="4" style="color:var(--teams-muted);text-align:center;padding:24px;">No one matches that search or filter.</td></tr>';

    var pagEl = document.getElementById('modalPagination');
    pagEl.innerHTML =
      '<span>' + rows.length + ' result' + (rows.length === 1 ? '' : 's') + ' · page ' + modalPage + ' of ' + totalPages + '</span>' +
      '<div class="pg-btns">' +
      '<button id="modalPrevBtn" ' + (modalPage <= 1 ? 'disabled' : '') + '>← Prev</button>' +
      '<button id="modalNextBtn" ' + (modalPage >= totalPages ? 'disabled' : '') + '>Next →</button>' +
      '</div>';

    var btnP = document.getElementById('modalPrevBtn');
    var btnN = document.getElementById('modalNextBtn');
    if (btnP) btnP.onclick = function () { window.changeModalPage(-1); };
    if (btnN) btnN.onclick = function () { window.changeModalPage(1); };
  }

  window.changeModalPage = function (delta) {
    modalPage += delta;
    renderModalTable();
  };

  window.closeModal = function () {
    document.body.style.overflow = '';
    document.getElementById('rosterModal').classList.remove('open');
  };

  document.getElementById('rosterModal').addEventListener('click', function (e) {
    if (e.target.id === 'rosterModal') window.closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.getElementById('rosterModal').classList.contains('open')) {
      window.closeModal();
    }
  });

  /* Alumni search */
  window.runAlumniSearch = function () {
    var q = document.getElementById('alumniSearch').value.trim().toLowerCase();
    var box = document.getElementById('alumniResults');
    if (!box) return;
    if (!q) { box.innerHTML = ''; return; }
    var hits = [];
    Object.keys(yearsData).forEach(function (year) {
      var d = yearsData[year];
      if (!d.hasData) return;
      d.leadership.concat(d.members).forEach(function (m) {
        if (m.name.toLowerCase().indexOf(q) !== -1) hits.push(Object.assign({}, m, { year: year }));
      });
    });
    hits = hits.slice(0, 6);
    box.innerHTML = hits.length
      ? hits.map(function (h) {
        return '<div class="hit"><span><b>' + h.name + '</b> · ' + (h.branch || '') + '</span><span>' + h.year + '</span></div>';
      }).join('')
      : '<div class="hit"><span>No matches in the digitized years. Try a shorter name.</span></div>';
  };

  var alumniInp = document.getElementById('alumniSearch');
  if (alumniInp) {
    alumniInp.addEventListener('keydown', function (e) { if (e.key === 'Enter') window.runAlumniSearch(); });
  }

  /* Growth Chart animation trigger */
  var chartCard = document.getElementById('chartCard');
  if (chartCard) {
    chartCard.classList.add('in-view');
  }

});
