import loadContact from "./main/contact";
import loadHome from "./main/home";
import loadMenu from "./main/menu";
import loadRecipe from "./main/menu";

function setActive(button) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createNav() {
  const navlist = [
    { name: "Home", fn: loadHome },
    { name: "Menu", fn: loadMenu },
    { name: "Contact", fn: loadContact },
  ];

  const navbar = document.createElement("nav");
  const ul = document.createElement("ul");
  navbar.classList.add("navContainer");
  ul.classList.add("nav-list");

  navlist.forEach((nav) => {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.textContent = nav.name;
    button.addEventListener("click", (e) => {
      setActive(button);
      nav.fn();
    });
    li.appendChild(button);
    ul.appendChild(li);
  });
  navbar.appendChild(ul);
  return navbar;
}

export default createNav;
