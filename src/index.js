import { loadTranslations } from "./translations";

// navigation
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const header = document.getElementById("header");
const links = document.querySelectorAll("#menu a");
// poses
const posesDiv = document.getElementById("poses-div");
// translation
const spanishFlag = document.getElementById("spanish-flag");
const englishFlag = document.getElementById("english-flag");

// navigation ----------------------------------------------------
const toggleMenu = () => {
  // main page slides to left to reveal navbar
  header.classList.toggle("-translate-x-[250px]");
  // view/hide menu
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
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

// poses ----------------------------------------------------
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
      .join(""),
  );
  // add to dom
  posesDiv.innerHTML = posesHTML.slice(10).join("");
};
getPoses();

// translation  ----------------------------------------------------
async function setLanguage(lang) {
  const translations = await loadTranslations(lang);
  // nav
  document.getElementById("navbar-about").innerHTML = translations.navbar.about;
  document.getElementById("navbar-where").innerHTML = translations.navbar.where;
  document.getElementById("navbar-classes").innerHTML = translations.navbar.classes;
  document.getElementById("navbar-contact").innerHTML = translations.navbar.contact;
  // hero
  document.getElementById("hero-subtitle").innerHTML = translations.hero.subtitle;
  // about
  document.getElementById("about-heading").innerHTML = translations.about.heading;
  document.getElementById("about-content").innerHTML = translations.about.content;
  //where
  document.getElementById("where-heading").innerHTML = translations.where.heading;
  document.getElementById("where-content").innerHTML = translations.where.content;
  //classes
  document.getElementById("classes-heading").innerHTML = translations.classes.heading;
  document.getElementById("classes-content").innerHTML = translations.classes.content;  
  //contact
  document.getElementById("contact-heading").innerHTML = translations.contact.heading;
  document.getElementById("contact-content").innerHTML = translations.contact.content;
  //footer
  document.getElementById("footer-content").innerHTML = translations.footer.content;
}
// onClick flag will set language
englishFlag.addEventListener("click", () => setLanguage("en"));
spanishFlag.addEventListener("click", () => setLanguage("es"));

// Set the default language when the page loads
document.addEventListener("DOMContentLoaded", () => setLanguage("es"));


