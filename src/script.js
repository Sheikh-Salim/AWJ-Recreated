// Carousel

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    100: {
      items: 1,
    },
    200: {
      items: 2,
    },
    300: {
      items: 3,
    },
    400: {
      items: 4,
    },
  },
});

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

// hamburger.addEventListener("click", () => {
//   menu.style.display = "block";
// });
hamburger.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none"; // Or keep it as it is if you prefer
  }
});

// Animation on scroll

const allSections = document.querySelectorAll(".section");

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
        console.log(entry);
        console.log(entry.target);
      }
    });
  }, options);

  const elements = document.querySelectorAll(
    ".from-left, .from-right, .demo, .bg-half"
  );
  elements.forEach((element) => {
    observer.observe(element);
  });
});
