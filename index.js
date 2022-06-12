var burger = document.querySelector("button.burger");
var close = document.querySelector("button.close");
var nav = document.querySelector("nav.nav--main");
var mediaQuery = window.matchMedia("(min-width: 768px)");

function openMenu() {
  //   veil.classList.add("veil--open");
  nav.classList.add("nav--open");
}

function closeMenu() {
  //   veil.classList.remove("veil--open");
  nav.classList.remove("nav--open");
}

function isMobile() {
  if (mediaQuery.matches) {
    closeMenu();
  }
}

burger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
