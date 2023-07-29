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
  spaceBetween: 10,
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
      spaceBetween: 5,
    },

    1280: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
});

// dropDownShow = document.querySelector('.dropdown');
// const

// const ValidateMail = () => {
//   if (params.email.match(validRegex)) {
//     return true;
//   } else {
//     // alert("Invalid email address!");

//     // console.log("wrong mail");

//     return false;
//   }
// };

const emailJs = (myparams) => {
  const serviceID = "service_27psmqd";
  const TemplateID = "template_mxah4ej";
  emailjs
    .send(serviceID, TemplateID, myparams)
    .then((res) => {
      (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("phone").value = ""),
        (document.getElementById("message").value = "");
      console.log(res);
      alert("your message was sent succesfully");
    })
    .catch((err) => console.log(err));
};

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var myparams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_27psmqd";
  const TemplateID = "template_mxah4ej";
  emailjs
    .send(serviceID, TemplateID, myparams)
    .then((res) => {
      (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("phone").value = ""),
        (document.getElementById("message").value = "");
      console.log(res);
      alert("your message was sent succesfully");
    })
    .catch((err) => console.log(err));
  // emailJs(params);
});

// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     phone: document.getElementById("phone").value,
//     message: document.getElementById("message").value,
//   };
//   var validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//   if (params.email.match(validRegex)) {
//     // var params = {
//     //   name: document.getElementById("name").value,
//     //   email: document.getElementById("email").value,
//     //   phone: document.getElementById("phone").value,
//     //   message: document.getElementById("message").value,
//     // };
//   } else {
//     alert("wrong email address");
//   }
// }
