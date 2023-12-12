const nav = document.getElementById("nav");
const link = document.getElementById("nav-link");
const dropdown = document.getElementById("dropdown");
const cta_nav = document.getElementById("cta-nav");

dropdown.addEventListener("click", function () {
  link.classList.toggle("hidden");
  nav.classList.toggle("items-center");
  nav.classList.toggle("items-start");
  link.classList.toggle("flex");
  dropdown.classList.toggle("fa-caret-down");
  dropdown.classList.toggle("fa-xmark");
  dropdown.classList.toggle("translate-y-3");
  cta_nav.classList.toggle("translate-y-[1.5px]");
});
