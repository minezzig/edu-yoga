const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const header = document.getElementById("header")

hamburger.addEventListener("click", () => {
  // main page slides to left to reveal navbar
  header.classList.toggle("-translate-x-[250px]")
  // view/hide menu
  menu.classList.toggle("hidden");
  // hamburger turns into x
  hamburger.firstElementChild.classList.toggle("rotate-[35deg]");
  hamburger.firstElementChild.classList.toggle("translate-y-[6px]");
  hamburger.children[1].classList.toggle("scale-0");
  hamburger.lastElementChild.classList.toggle("-rotate-[35deg]");
  hamburger.lastElementChild.classList.toggle("-translate-y-[6px]");
});


