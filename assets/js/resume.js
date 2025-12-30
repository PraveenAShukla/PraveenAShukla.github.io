document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.querySelector(".back-to-top");

  document.querySelectorAll("[data-scroll]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const toggleButton = () => {
    if (!backToTop) return;
    backToTop.style.display = window.scrollY > 240 ? "flex" : "none";
  };

  window.addEventListener("scroll", toggleButton, { passive: true });
  toggleButton();
});
