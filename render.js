/* ============================================================
   Renders the page from data.js. Do NOT edit for content changes.
   ============================================================ */

// ---------- HERO ----------
document.getElementById('hero-status').textContent = SITE.status;
document.getElementById('hero-role').textContent   = `${SITE.role}. ${SITE.tagline}`;

if (SITE.headshot) {
  document.getElementById('hero-photo-wrap').innerHTML =
    `<img src="${SITE.headshot}" alt="${SITE.name}" class="headshot">`;
}
const resumeBtn = document.getElementById('resume-btn');
if (SITE.resume) {
  resumeBtn.href = SITE.resume;
  resumeBtn.style.display = 'inline-flex';
}

// ---------- PROJECTS ----------
const projectsGrid = document.getElementById('projects-grid');
PROJECTS.forEach(p => {
  const el = document.createElement('article');
  el.className = 'project-card reveal';
  el.innerHTML = `
    ${p.image ? `<img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy">` : ''}
    <div class="project-body">
      <h3>${p.title}</h3>
      ${p.subtitle ? `<p class="project-sub">${p.subtitle}</p>` : ''}
      <p><strong>Problem:</strong> ${p.problem}</p>
      <p><strong>Role:</strong> ${p.role}</p>
      <p><strong>Method:</strong> ${p.method}</p>
      <p><strong>Result:</strong> ${p.result}</p>
      <div class="skill-tags">${p.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
      ${p.link ? `<a class="btn" href="${p.link}" target="_blank" rel="noopener">View →</a>` : ''}
    </div>`;
  projectsGrid.appendChild(el);
});

// ---------- EXPERIENCE ----------
document.getElementById('experience-list').innerHTML = EXPERIENCE.map(e => `
  <div class="exp-item reveal">
    <div class="when">${e.when}</div>
    <div class="rail"></div>
    <div>
      ${e.logo ? `<img src="${e.logo}" alt="" class="company-logo">` : ''}
      <h3>${e.title}</h3>
      <p class="where">${e.where}</p>
      <ul class="desc">${e.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
    </div>
  </div>`).join('');

// ---------- SKILLS ----------
document.getElementById('skills-list').innerHTML = SKILLS.map(g => `
  <div class="skill-group reveal">
    <h3>${g.group}</h3>
    <div class="skill-tags">${g.items.map(i => `<span class="skill-tag">${i}</span>`).join('')}</div>
  </div>`).join('');

// ---------- CONTACT LIST ----------
document.getElementById('contact-list').innerHTML = `
  <li><span class="label">Email</span><a href="mailto:${SITE.email}">${SITE.email}</a></li>
  <li><span class="label">Phone / WhatsApp</span><a href="tel:${SITE.phone.replace(/\s/g,'')}">${SITE.phone}</a></li>
  <li><span class="label">LinkedIn</span><a href="${SITE.linkedin}" target="_blank" rel="noopener">${SITE.linkedin.replace('https://','')}</a></li>
  <li><span class="label">GitHub</span><a href="${SITE.github}" target="_blank" rel="noopener">${SITE.github.replace('https://','')}</a></li>
  <li><span class="label">Location</span>${SITE.location}</li>
`;

// ---------- WEB3FORMS AJAX SUBMIT ----------
const form   = document.getElementById('enquiry-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Sending…';
  status.style.color = '#555';

  const payload = Object.fromEntries(new FormData(form));

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (json.success) {
      status.textContent = '✅ Thanks! Your message has been sent.';
      status.style.color = '#16a34a';
      form.reset();
    } else {
      status.textContent = '❌ ' + (json.message || 'Submission failed. Please email me directly.');
      status.style.color = '#dc2626';
    }
  } catch (err) {
    status.textContent = '❌ Network error. Please email me directly.';
    status.style.color = '#dc2626';
  }
});
