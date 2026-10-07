// ============================================================
//  VetCare – JavaScript Principal
// ============================================================

/* -------------------------------------------------------
   Datos de ejemplo
   ------------------------------------------------------- */
const DATA = {
  services: [
    { icon: '🩺', color: '#e6f4ec', title: 'Consulta General', desc: 'Evaluación integral de la salud de tu mascota con nuestros expertos certificados.', price: 'Desde $350', tag: 'Popular' },
    { icon: '💉', color: '#eff6ff', title: 'Vacunación', desc: 'Plan de vacunas completo y personalizado según edad, especie y estilo de vida.', price: 'Desde $180', tag: '' },
    { icon: '🔬', color: '#f0fdf4', title: 'Laboratorio', desc: 'Análisis de sangre, orina, cultivos y más con resultados en 24 horas.', price: 'Desde $420', tag: '' },
    { icon: '🏥', color: '#fef9ec', title: 'Cirugía', desc: 'Procedimientos quirúrgicos con anestesia segura y monitoreo constante.', price: 'Desde $1,800', tag: '' },
    { icon: '🦷', color: '#fff1f2', title: 'Odontología', desc: 'Limpieza dental, extracciones y tratamientos para la salud bucal de tu mascota.', price: 'Desde $650', tag: '' },
    { icon: '🛁', color: '#f5f3ff', title: 'Grooming', desc: 'Baño, corte de pelo, limpieza de oídos y uñas para que luzca espectacular.', price: 'Desde $250', tag: 'Nuevo' },
    { icon: '📡', color: '#ecfeff', title: 'Radiografías', desc: 'Diagnóstico por imagen con equipos digitales de alta resolución.', price: 'Desde $550', tag: '' },
    { icon: '🏨', color: '#fff7ed', title: 'Hospitalización', desc: 'Cuidados 24/7 con monitoreo constante y personal altamente capacitado.', price: 'Desde $900/día', tag: '' },
  ],
  pets: [
    { name: 'Max', breed: 'Golden Retriever', species: 'Perro', age: '3 años', weight: '28 kg', owner: 'Carlos M.', emoji: '🐕', bg: '#fef3c7', status: 'Sano', color: '#92400e' },
    { name: 'Luna', breed: 'Persa', species: 'Gato', age: '5 años', weight: '4.2 kg', owner: 'María G.', emoji: '🐈', bg: '#ede9fe', status: 'En tratamiento', color: '#5b21b6' },
    { name: 'Coco', breed: 'Bulldog Francés', species: 'Perro', age: '2 años', weight: '10 kg', owner: 'Ana R.', emoji: '🐶', bg: '#dcfce7', status: 'Sano', color: '#166534' },
    { name: 'Mimi', breed: 'Siamés', species: 'Gato', age: '7 años', weight: '3.8 kg', owner: 'Pedro L.', emoji: '😸', bg: '#e0f2fe', status: 'Sano', color: '#0c4a6e' },
    { name: 'Rocky', breed: 'Pastor Alemán', species: 'Perro', age: '4 años', weight: '32 kg', owner: 'Luis T.', emoji: '🐩', bg: '#fce7f3', status: 'Revisión', color: '#831843' },
    { name: 'Kiwi', breed: 'Cotorro Australiano', species: 'Ave', age: '1 año', weight: '85 g', owner: 'Sofía V.', emoji: '🦜', bg: '#ecfdf5', status: 'Sano', color: '#065f46' },
    { name: 'Bella', breed: 'Labrador Dorado', species: 'Perro', age: '6 años', weight: '26 kg', owner: 'Diana C.', emoji: '🦮', bg: '#fff7ed', status: 'Sano', color: '#7c2d12' },
    { name: 'Sassy', breed: 'Ragdoll', species: 'Gato', age: '3 años', weight: '5 kg', owner: 'Jorge F.', emoji: '🐱', bg: '#f0abfc', status: 'En tratamiento', color: '#701a75' },
  ],
  vets: [
    { name: 'Dra. Laura Sánchez', specialty: 'Medicina Interna', exp: '12 años de experiencia', emoji: '👩‍⚕️', bg: '#e6f4ec', rating: 4.9, reviews: 128, tags: ['Cirugía', 'Cardiología'], online: true },
    { name: 'Dr. Miguel Ángel Torres', specialty: 'Cirugía General', exp: '8 años de experiencia', emoji: '👨‍⚕️', bg: '#eff6ff', rating: 4.8, reviews: 97, tags: ['Ortopedia', 'Emergencias'], online: true },
    { name: 'Dra. Patricia Cruz', specialty: 'Dermatología Veterinaria', exp: '6 años de experiencia', emoji: '👩‍⚕️', bg: '#fce7f3', rating: 4.7, reviews: 74, tags: ['Alergias', 'Piel'], online: false },
    { name: 'Dr. Roberto Méndez', specialty: 'Exóticos & Aves', exp: '10 años de experiencia', emoji: '🧑‍⚕️', bg: '#fff7ed', rating: 4.9, reviews: 156, tags: ['Reptiles', 'Aves', 'Conejos'], online: true },
  ],
  appointments: [
    { day: '08', month: 'Oct', pet: 'Max – Golden Retriever', detail: 'Consulta General · Dra. Laura Sánchez', time: '10:00 AM', status: 'confirmed' },
    { day: '10', month: 'Oct', pet: 'Luna – Gata Persa', detail: 'Control de tratamiento · Dr. M. Torres', time: '12:30 PM', status: 'confirmed' },
    { day: '12', month: 'Oct', pet: 'Coco – Bulldog Francés', detail: 'Vacunación anual · Dra. P. Cruz', time: '09:00 AM', status: 'pending' },
    { day: '15', month: 'Oct', pet: 'Kiwi – Cotorro', detail: 'Revisión rutinaria · Dr. R. Méndez', time: '11:00 AM', status: 'pending' },
    { day: '03', month: 'Oct', pet: 'Bella – Labrador', detail: 'Limpieza dental · Dra. Laura Sánchez', time: '08:30 AM', status: 'completed' },
    { day: '01', month: 'Oct', pet: 'Rocky – P. Alemán', detail: 'Radiografía · Dr. M. Torres', time: '14:00 PM', status: 'completed' },
  ],
  testimonials: [
    { stars: 5, text: '"El equipo de VetCare es increíble. Mi perro Max siempre sale feliz de sus visitas. La atención es cálida y profesional, ¡los recomiendo al 100%!"', name: 'Carlos Martínez', pet: 'Dueño de Max 🐕', emoji: '🙎‍♂️' },
    { stars: 5, text: '"Llevamos a Luna a Cirugía y el seguimiento post-operatorio fue impecable. Tuvimos actualizaciones constantes. Muchas gracias a todo el equipo."', name: 'María González', pet: 'Mamá de Luna 🐈', emoji: '👩' },
    { stars: 5, text: '"El Dr. Méndez es experto con aves exóticas. Kiwi recibió el mejor cuidado posible. Las instalaciones son modernas y muy limpias."', name: 'Sofía Vargas', pet: 'Dueña de Kiwi 🦜', emoji: '👧' },
  ],
};

/* -------------------------------------------------------
   Utilidades
   ------------------------------------------------------- */
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function starsHTML(n) {
  const full  = Math.floor(n);
  const half  = n % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '⯨' : '') + '☆'.repeat(empty);
}

/* -------------------------------------------------------
   Toast notifications
   ------------------------------------------------------- */
const toastContainer = document.createElement('div');
toastContainer.className = 'toast-container';
document.body.appendChild(toastContainer);

function showToast(title, msg, type = 'success', duration = 4000) {
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type !== 'success' ? type : ''}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
    </div>
    <span class="toast-close" role="button" aria-label="Cerrar">✕</span>
  `;
  toastContainer.appendChild(toast);

  const close = () => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 300);
  };
  toast.querySelector('.toast-close').addEventListener('click', close);
  setTimeout(close, duration);
}

/* -------------------------------------------------------
   Navbar
   ------------------------------------------------------- */
function initNavbar() {
  const navbar   = $('.navbar');
  const hamburger = $('.hamburger');
  const navMobile = $('.nav-mobile');
  const links    = $$('.nav-links a, .nav-mobile a');

  // Scroll shadow
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    navMobile.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close mobile menu on link click
  $$('.nav-mobile a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMobile.classList.remove('open');
    });
  });

  // Active link on scroll
  const sections = $$('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* -------------------------------------------------------
   Back to Top
   ------------------------------------------------------- */
function initBackToTop() {
  const btn = $('.back-to-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* -------------------------------------------------------
   Animated counters (hero stats)
   ------------------------------------------------------- */
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const dur  = 1500;
  const step = 16;
  const inc  = target / (dur / step);
  const timer = setInterval(() => {
    start += inc;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start) + suffix;
  }, step);
}

function initCounters() {
  const counters = $$('[data-count]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

/* -------------------------------------------------------
   Render Services
   ------------------------------------------------------- */
function renderServices() {
  const grid = $('#services-grid');
  grid.innerHTML = DATA.services.map(s => `
    <div class="service-card">
      <div class="service-icon" style="background:${s.color}">${s.icon}</div>
      <h3>${s.title} ${s.tag ? `<span class="service-price" style="background:#fef3c7;color:#92400e">${s.tag}</span>` : ''}</h3>
      <p>${s.desc}</p>
      <span class="service-price">${s.price}</span>
    </div>
  `).join('');
}

/* -------------------------------------------------------
   Render Pets
   ------------------------------------------------------- */
let currentFilter = 'Todos';
let currentSearch = '';

function renderPets() {
  const grid = $('#pets-grid');
  let filtered = DATA.pets;

  if (currentFilter !== 'Todos') {
    filtered = filtered.filter(p => p.species === currentFilter);
  }
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.breed.toLowerCase().includes(q) ||
      p.owner.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:48px 24px;color:var(--text-light)">
        <div style="font-size:3rem;margin-bottom:12px">🔍</div>
        <p style="font-size:1rem">No se encontraron mascotas con esos criterios.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="pet-card" data-species="${p.species}">
      <div class="pet-avatar" style="background:${p.bg}">
        <span>${p.emoji}</span>
        <span class="pet-species-badge" style="color:${p.color}">${p.species}</span>
      </div>
      <div class="pet-body">
        <div class="pet-name">${p.name}</div>
        <div class="pet-breed">${p.breed}</div>
        <div class="pet-info">
          <span class="pet-tag">🎂 ${p.age}</span>
          <span class="pet-tag">⚖️ ${p.weight}</span>
          <span class="pet-tag" style="background:${p.status === 'Sano' ? '#dcfce7' : p.status === 'En tratamiento' ? '#fee2e2' : '#fef3c7'};
                                       color:${p.status === 'Sano' ? '#166534' : p.status === 'En tratamiento' ? '#991b1b' : '#92400e'}">
            ${p.status === 'Sano' ? '✅' : p.status === 'En tratamiento' ? '💊' : '📋'} ${p.status}
          </span>
        </div>
        <div class="pet-owner">
          <div class="owner-avatar">${p.owner.split(' ').map(n=>n[0]).join('')}</div>
          <span>${p.owner}</span>
          <button class="btn btn-sm btn-outline" style="margin-left:auto"
                  onclick="openPetModal(${JSON.stringify(p).replace(/"/g,'&quot;')})">
            Ver más
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function initPets() {
  renderPets();

  // Filter buttons
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderPets();
    });
  });

  // Search
  $('#pet-search').addEventListener('input', e => {
    currentSearch = e.target.value.trim();
    renderPets();
  });
}

/* -------------------------------------------------------
   Pet Modal
   ------------------------------------------------------- */
function openPetModal(pet) {
  const overlay = $('#pet-modal');
  overlay.classList.remove('hidden');
  $('#pet-modal-content').innerHTML = `
    <div class="modal-emoji" style="background:${pet.bg};border-radius:var(--radius);padding:16px;margin-bottom:16px">${pet.emoji}</div>
    <div class="modal-title">${pet.name}</div>
    <div class="modal-sub">${pet.breed}</div>
    <div class="modal-body">
      <div class="modal-row"><span>Especie</span><span>${pet.species}</span></div>
      <div class="modal-row"><span>Edad</span><span>${pet.age}</span></div>
      <div class="modal-row"><span>Peso</span><span>${pet.weight}</span></div>
      <div class="modal-row"><span>Estado</span><span>${pet.status}</span></div>
      <div class="modal-row"><span>Propietario</span><span>${pet.owner}</span></div>
    </div>
    <button class="btn btn-primary" style="width:100%;margin-top:24px;justify-content:center"
            onclick="closePetModal();setTimeout(()=>document.getElementById('citas').scrollIntoView({behavior:'smooth'}),200)">
      📅 Agendar Cita
    </button>
  `;
}
function closePetModal() {
  $('#pet-modal').classList.add('hidden');
}
// Close on overlay click
$('#pet-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) closePetModal();
});

/* -------------------------------------------------------
   Render Vets
   ------------------------------------------------------- */
function renderVets() {
  const grid = $('#vets-grid');
  grid.innerHTML = DATA.vets.map(v => `
    <div class="vet-card">
      <div class="vet-avatar" style="background:${v.bg}">
        ${v.emoji}
        <span class="vet-status ${v.online ? '' : 'offline'}"></span>
      </div>
      <div class="vet-name">${v.name}</div>
      <div class="vet-specialty">${v.specialty}</div>
      <div class="vet-exp">${v.exp}</div>
      <div class="vet-rating">
        <span class="stars">${starsHTML(v.rating)}</span>
        <span class="rating-num">${v.rating} (${v.reviews} reseñas)</span>
      </div>
      <div class="vet-tags">
        ${v.tags.map(t => `<span class="vet-tag">${t}</span>`).join('')}
        <span class="vet-tag" style="background:${v.online ? '#dcfce7' : '#f1f5f9'};color:${v.online ? '#166534' : 'var(--text-mid)'}">
          ${v.online ? '🟢 Disponible' : '⚪ No disponible'}
        </span>
      </div>
      <button class="btn btn-outline btn-sm" style="width:100%;justify-content:center"
              onclick="selectVet('${v.name}')">
        Agendar con este veterinario
      </button>
    </div>
  `).join('');
}

function selectVet(name) {
  const select = $('#vet-select');
  if (select) {
    const opt = [...select.options].find(o => o.value === name);
    if (opt) {
      select.value = name;
      document.getElementById('citas').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => showToast('Veterinario seleccionado', `Se preseleccionó a ${name} para tu cita.`, 'info'), 500);
    }
  }
}

function populateVetSelect() {
  const select = $('#vet-select');
  DATA.vets.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.name;
    opt.textContent = `${v.name} – ${v.specialty}`;
    select.appendChild(opt);
  });
}

/* -------------------------------------------------------
   Render Appointments list
   ------------------------------------------------------- */
let apptFilter = 'all';

function renderAppointments() {
  const list = $('#appt-list');
  let filtered = DATA.appointments;
  if (apptFilter !== 'all') {
    filtered = filtered.filter(a => a.status === apptFilter);
  }

  if (filtered.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:32px;color:var(--text-light)"><div style="font-size:2.5rem;margin-bottom:8px">📭</div><p>No hay citas en esta categoría.</p></div>`;
    return;
  }

  list.innerHTML = filtered.map(a => `
    <div class="appt-item ${a.status}">
      <div class="appt-date-box">
        <div class="appt-day">${a.day}</div>
        <div class="appt-month">${a.month}</div>
      </div>
      <div class="appt-info">
        <div class="appt-pet">${a.pet}</div>
        <div class="appt-detail">${a.detail}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
        <span class="appt-status status-${a.status}">${statusLabel(a.status)}</span>
        <span class="appt-time">⏰ ${a.time}</span>
      </div>
    </div>
  `).join('');
}

function statusLabel(s) {
  return { pending: '⏳ Pendiente', confirmed: '✅ Confirmada', completed: '✔️ Completada', cancelled: '❌ Cancelada' }[s] || s;
}

function initAppointmentFilters() {
  $$('.appt-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.appt-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      apptFilter = btn.dataset.filter;
      renderAppointments();
    });
  });
}

/* -------------------------------------------------------
   Appointment Form
   ------------------------------------------------------- */
function initAppointmentForm() {
  const form = $('#appt-form');
  form.addEventListener('submit', e => {
    e.preventDefault();

    const petName  = $('#appt-pet').value.trim();
    const owner    = $('#appt-owner').value.trim();
    const date     = $('#appt-date').value;
    const time     = $('#appt-time').value;
    const vet      = $('#vet-select').value;
    const service  = $('#appt-service').value;
    const notes    = $('#appt-notes').value.trim();

    if (!petName || !owner || !date || !time || !vet || !service) {
      showToast('Campos incompletos', 'Por favor llena todos los campos requeridos.', 'warning');
      return;
    }

    const dateObj = new Date(date + 'T00:00:00');
    const months  = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const day     = String(dateObj.getDate()).padStart(2, '0');
    const month   = months[dateObj.getMonth()];
    const [h, m]  = time.split(':');
    const timeStr = `${h}:${m} ${h < 12 ? 'AM' : 'PM'}`;

    DATA.appointments.unshift({
      day, month,
      pet: petName,
      detail: `${service} · ${vet.split(' –')[0]}`,
      time: timeStr,
      status: 'pending'
    });

    renderAppointments();
    form.reset();
    apptFilter = 'all';
    $$('.appt-filter').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));

    showToast('¡Cita agendada!', `La cita de ${petName} fue registrada correctamente.`, 'success', 5000);
    setTimeout(() => document.getElementById('citas').scrollIntoView({ behavior: 'smooth' }), 200);
  });

  // Min date = today
  const dateInput = $('#appt-date');
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;
}

/* -------------------------------------------------------
   Render Testimonials
   ------------------------------------------------------- */
function renderTestimonials() {
  const grid = $('#testimonials-grid');
  grid.innerHTML = DATA.testimonials.map(t => `
    <div class="testi-card">
      <div class="testi-stars">${'★'.repeat(t.stars)}</div>
      <p class="testi-text">${t.text}</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.emoji}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-pet">${t.pet}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* -------------------------------------------------------
   Init all
   ------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackToTop();
  initCounters();
  renderServices();
  initPets();
  renderVets();
  populateVetSelect();
  renderAppointments();
  initAppointmentFilters();
  initAppointmentForm();
  renderTestimonials();

  // Smooth scroll for anchor links
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Card entrance animations
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${(i % 4) * 80}ms`;
        entry.target.classList.add('revealed');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // We add the CSS for reveal here dynamically
  const style = document.createElement('style');
  style.textContent = `
    .service-card, .pet-card, .vet-card, .testi-card {
      opacity: 0; transform: translateY(24px);
      transition: opacity .5s ease, transform .5s ease, box-shadow .3s ease, background .3s ease, border-color .3s ease;
    }
    .service-card.revealed, .pet-card.revealed, .vet-card.revealed, .testi-card.revealed {
      opacity: 1; transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // Observe after slight delay so DOM is ready
  setTimeout(() => {
    $$('.service-card, .pet-card, .vet-card, .testi-card').forEach(el => revealObs.observe(el));
  }, 100);
});
