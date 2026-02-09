/* ========================================
   NAVBAR & SIDEBAR (HAMBURGER) — JavaScript
   Shared script — link file ini di semua halaman
   ======================================== */

// Ambil elemen
const hamburgerMenu = document.getElementById("hamburgerMenu");
const sidebarNav = document.getElementById("sidebarNav");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarLinks = document.querySelectorAll(".sidebar-menu-link");

// Fungsi buka/tutup sidebar
function toggleSidebar() {
  hamburgerMenu.classList.toggle("active");
  sidebarNav.classList.toggle("active");
  sidebarOverlay.classList.toggle("active");
  document.body.style.overflow = sidebarNav.classList.contains("active")
    ? "hidden"
    : "";
}

function closeSidebar() {
  hamburgerMenu.classList.remove("active");
  sidebarNav.classList.remove("active");
  sidebarOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Klik hamburger → buka/tutup sidebar
hamburgerMenu.addEventListener("click", toggleSidebar);

// Klik overlay (area gelap) → tutup sidebar
sidebarOverlay.addEventListener("click", closeSidebar);

// Klik link di sidebar → tutup sidebar
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    sidebarLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    setTimeout(closeSidebar, 300);
  });
});

// Navbar scroll effect (transparan saat di-scroll)
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});
