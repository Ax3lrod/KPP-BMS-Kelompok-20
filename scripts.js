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
