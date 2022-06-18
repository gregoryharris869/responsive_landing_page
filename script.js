function handleNav() {
  const nav = document.querySelector("[data-mainNav]");

  const hamburger = document.querySelector("[data-hamBurger]");

  if (!nav.classList.contains("main-nav--active")) {
    nav.classList.add("main-nav--active");
    hamburger.classList.add("hamburger--active");
  } else {
    nav.classList.remove("main-nav--active");
    hamburger.classList.remove("hamburger--active");
  }
}
