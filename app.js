// Dropdown Menu Toggle
function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('show');
}

// Announcement Slider
let announSlideIndex = 0;
function moveAnnounSlide(direction) {
  const announSlides = document.querySelectorAll('.announ-slide');
  announSlideIndex = (announSlideIndex + direction + announSlides.length) % announSlides.length;
  document.querySelector('.announ-slider').style.transform = `translateX(-${announSlideIndex * 100}%)`;
}
setInterval(() => moveAnnounSlide(1), 4000);

// Image Slider
let imageSlideIndex = 0;
function moveImageSlide(direction) {
  const imageSlides = document.querySelectorAll('.slide');
  imageSlideIndex = (imageSlideIndex + direction + imageSlides.length) % imageSlides.length;
  document.querySelector('.slider').style.transform = `translateX(-${imageSlideIndex * 100}%)`;
}
setInterval(() => moveImageSlide(1), 3000);

// Animate on load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".animate").forEach(el => {
    el.style.opacity = 1;
  });
});
