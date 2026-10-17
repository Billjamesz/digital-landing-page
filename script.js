// Mobile navigation toggle
const toggle = document.getElementById("navToggle");
const nav = document.getElementById("primaryNav");
const overlay = document.getElementById("overlay");
const desktopQuery = window.matchMedia("(min-width: 900px)");

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  nav.classList.toggle("is-open", open);
  overlay.hidden = !open;
  document.body.style.overflow = open ? "hidden" : "";
}

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

// Close when clicking the dark overlay or any menu link
overlay.addEventListener("click", () => setMenu(false));
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Close with the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// Reset when the screen grows to desktop size
desktopQuery.addEventListener("change", (e) => {
  if (e.matches) setMenu(false);
});
