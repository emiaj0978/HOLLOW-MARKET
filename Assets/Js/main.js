// Control de carrusel de tarjetas
document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".card-carousel-wrapper");

  wrappers.forEach(wrapper => {
    const carousel = wrapper.querySelector(".card-carousel");
    const prevBtn = wrapper.querySelector(".carousel-control.prev");
    const nextBtn = wrapper.querySelector(".carousel-control.next");

    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -220, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: 220, behavior: "smooth" });
    });
  });
});
