const hamburgerIcon = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".nav-menu");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((removeMenu) =>
  removeMenu.addEventListener("click", () => {
    hamburgerIcon.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
