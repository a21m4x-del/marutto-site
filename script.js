const fadeItems = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, {
  threshold: 0.16
});

fadeItems.forEach((item) => observer.observe(item));

const parallaxTarget = document.querySelector(".image-message__photo");
window.addEventListener("scroll", () => {
  if (!parallaxTarget) return;
  const rect = parallaxTarget.parentElement.getBoundingClientRect();
  const move = rect.top * -0.08;
  parallaxTarget.style.setProperty("--parallax", `${move}px`);
}, { passive: true });
