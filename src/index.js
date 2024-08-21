const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const header = document.getElementById("header");
const links = document.querySelectorAll("#menu a");
const posesDiv = document.getElementById("poses-div");
const toggleMenu = () => {
  // main page slides to left to reveal navbar
  header.classList.toggle("-translate-x-[250px]");
  // view/hide menu
  menu.classList.toggle("hidden");
  // hamburger turns into x
  hamburger.firstElementChild.classList.toggle("rotate-[35deg]");
  hamburger.firstElementChild.classList.toggle("translate-y-[6px]");
  hamburger.children[1].classList.toggle("scale-0");
  hamburger.lastElementChild.classList.toggle("-rotate-[35deg]");
  hamburger.lastElementChild.classList.toggle("-translate-y-[6px]");

  // close the menu on link selection
  links.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
};
// toggle menu on hamburger click
hamburger.addEventListener("click", toggleMenu);

// get a list of images from yoga API for examples
const getPoses = async () => {
  const response = await fetch(
    "https://yoga-api-nzy4.onrender.com/v1/categories",
  );
  const data = await response.json();
  const posesHTML = data.map((item) =>
    item.poses
      .map(
        (pose) =>
          `<img src=${pose.url_svg} alt=${pose.url_svg_alt} class="flex-1 h-24"/>`,
      )
      .join("")
  );
  // add to dom
  posesDiv.innerHTML = posesHTML.slice(10).join("");
};
getPoses();
