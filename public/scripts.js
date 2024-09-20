const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip-card");
  });
});

const images = document.querySelectorAll(".carousel-image");
let currentIndex = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  images[currentIndex].parentElement.parentElement.classList.add("hidden");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].parentElement.parentElement.classList.remove("hidden");
});

document.getElementById("prevBtn").addEventListener("click", () => {
  images[currentIndex].parentElement.parentElement.classList.add("hidden");
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  images[currentIndex].parentElement.parentElement.classList.remove("hidden");
});

const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});
