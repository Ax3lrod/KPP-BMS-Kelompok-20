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

const slideshows = [
  {
    elementId: "slideshowImage1",
    images: [
      "images/satya_figma.png",
      "images/satya_webdev.png",
      "images/satya_copywriting.png",
      "images/satya_photography.jpg",
    ],
  },
  {
    elementId: "slideshowImage2",
    images: [
      "images/tika_figma.jpg",
      "images/member2_task2.png",
      "images/member2_task3.png",
      "images/member2_task4.png",
    ],
  },
  {
    elementId: "slideshowImage3",
    images: [
      "images/figma_azza.png",
      "images/web_azza.png",
      "images/copywriting_azza.png",
      "images/photography_azza.jpeg",
    ],
  },
  {
    elementId: "slideshowImage4",
    images: [
      "images/tika_figma.jpg",
      "images/amoes_webdev.png",
      "images/member2_task3.png",
      "images/member2_task4.png",
    ],
  },
  {
    elementId: "slideshowImage5",
    images: [
      "images/amoes_figma.jpg",
      "images/amoes_webdev.png",
      "images/amoes_copywriting.png",
      "images/member2_task4.png",
    ],
  },
];

slideshows.forEach((slideshow) => {
  let currentIndex = 0;
  const imageElement = document.getElementById(slideshow.elementId);

  imageElement.src = slideshow.images[currentIndex];

  function changeImage() {
    currentIndex = (currentIndex + 1) % slideshow.images.length;
    imageElement.src = slideshow.images[currentIndex];
  }

  setInterval(changeImage, 3000);
});

// Navbar blur and transparency on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('backdrop-blur-md', 'bg-opacity-20');
    navbar.classList.remove('bg-opacity-100');
  } else {
    navbar.classList.remove('backdrop-blur-md', 'bg-opacity-70');
    navbar.classList.add('bg-opacity-100');
  }
});

   // Scroll to Hero section when Home button is clicked
   const homeButton = document.getElementById('homeButton');
   homeButton.addEventListener('click', function() {
     document.getElementById('home').scrollIntoView({
       behavior: 'smooth'
     });
   });

  // Scroll to Meet the Team section when Members button is clicked
  const membersButton = document.getElementById('memberButton');
  membersButton.addEventListener('click', function() {
    document.getElementById('meetTheTeam').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Scroll to Our Works section when Projects button is clicked
  const projectsButton = document.getElementById('projectButton');
  projectsButton.addEventListener('click', function() {
    document.getElementById('ourWorks').scrollIntoView({
      behavior: 'smooth'
    });
  });




