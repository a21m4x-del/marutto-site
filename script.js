const fadeItems = document.querySelectorAll(".js-fade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, {
  threshold: 0.18
});

fadeItems.forEach((item) => observer.observe(item));

const photoBg = document.querySelector(".photo-band-bg");
window.addEventListener("scroll", () => {
  if (!photoBg) return;
  const rect = photoBg.parentElement.getBoundingClientRect();
  const move = rect.top * -0.08;
  photoBg.style.setProperty("--parallax", `${move}px`);
}, { passive: true });
