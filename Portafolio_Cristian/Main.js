// Cambio de idioma
const esBtn = document.getElementById("esBtn");
const enBtn = document.getElementById("enBtn");

function switchLang(lang) {
  const translatableElements = document.querySelectorAll("[data-es], [data-en]");
  translatableElements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.innerText = text;
  });
  if (lang === "es") {
    esBtn.setAttribute("aria-pressed", "true");
    enBtn.setAttribute("aria-pressed", "false");
    esBtn.classList.add("active");
    enBtn.classList.remove("active");
  } else {
    enBtn.setAttribute("aria-pressed", "true");
    esBtn.setAttribute("aria-pressed", "false");
    enBtn.classList.add("active");
    esBtn.classList.remove("active");
  }
}

// Iniciar en español
document.addEventListener("DOMContentLoaded", () => {
  switchLang("es");
});

// Eventos cambio de idioma
esBtn.addEventListener("click", () => switchLang("es"));
enBtn.addEventListener("click", () => switchLang("en"));

// Modo oscuro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Animación aparición
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));
