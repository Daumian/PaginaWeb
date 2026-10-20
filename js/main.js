// ===== Configuración =====
// Número de WhatsApp con código de país, sin "+" ni espacios (ej: 5493511234567)
const WHATSAPP = "5490000000000";
const WHATSAPP_MSG = "¡Hola CyberData! Quiero hacer una consulta 🙂";

document.getElementById("wa-link").href =
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

document.getElementById("year").textContent = new Date().getFullYear();

// Menú mobile
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Aparición suave al hacer scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.15 }
);
document.querySelectorAll(".section, .card, .steps li").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});
