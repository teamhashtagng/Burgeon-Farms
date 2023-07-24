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
