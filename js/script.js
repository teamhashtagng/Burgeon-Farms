const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLink.classList.toggle("active");
});
