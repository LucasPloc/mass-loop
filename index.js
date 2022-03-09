//navbar

const mainNavMenu = document.querySelector(".main-nav__menu");
const menu = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".mobile-nav");
const crossIcon = document.querySelector(".cross-icon");

mainNavMenu.addEventListener("click", function () {
  menu.classList.toggle("show");
  crossIcon.classList.toggle("hidden");
  mobileNav.classList.toggle("hidden");
});
