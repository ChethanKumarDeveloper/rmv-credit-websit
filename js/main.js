document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const headerNav = document.querySelector(".header-nav");

  if (!menuToggle || !headerNav) return;

  // ✅ Force-reset menu on page load
  headerNav.classList.remove("nav-open");

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    headerNav.classList.toggle("nav-open");
  });

  // Close menu when clicking outside
  document.addEventListener("click", () => {
    headerNav.classList.remove("nav-open");
  });

  // Prevent menu click from closing itself
  headerNav.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // ✅ Fix resize issues (desktop ↔ mobile)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      headerNav.classList.remove("nav-open");
    }
  });
});
