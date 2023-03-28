const hamburgerMenuOpen = document.querySelector(".mobile-menu")
const hamburgerMenuClose = document.querySelector(".mobile-menu-close")
hamburgerMenuOpen.addEventListener("click", () => {
  const MobileMenu = document.querySelector(".hamburger-menu");
  MobileMenu.classList.add("open");
})
hamburgerMenuClose.addEventListener("click", () => {
  const MobileMenu = document.querySelector(".hamburger-menu");
  MobileMenu.classList.remove("open");
})