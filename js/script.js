const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLink.classList.toggle("active");
});

navHeader = document.querySelector(".nav");
navA = document.querySelectorAll(".nav-a");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navHeader.classList.add("nav-scrolled");
    for (const element of navA) {
      element.classList.add("nav-a-scrolled");
    }
  } else if (window.scrollY <= 50) {
    navHeader.classList.remove("nav-scrolled");
    for (const element of navA) {
      element.classList.remove("nav-a-scrolled");
    }
  }
});

const ServicesStyleOne = new Swiper(".productswiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 3.5,
  spaceBetween: 50,
  autoplay: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    120: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// dropDownShow = document.querySelector('.dropdown');
// const
