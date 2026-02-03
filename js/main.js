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

document.addEventListener("DOMContentLoaded", function () {

  // 1. Load EmailJS
  emailjs.init("fp2ihnbxtgJ9bg1at"); // <-- replace

  // 2. Get form
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("❌ contactForm not found");
    return;
  }

  // 3. Submit handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_1tr6gbr",   // <-- replace
      "template_2beo738",  // <-- replace
      this
    ).then(
      function () {
        alert("✅ Message sent successfully!");
        form.reset();
      },
      function (error) {
        alert("❌ Failed to send message");
        console.error("EmailJS error:", error);
      }
    );
  });

});

