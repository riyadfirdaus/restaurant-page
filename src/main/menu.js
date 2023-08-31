import MenuCard from "../components/menu-card";
import data from "../data/menu.json";

export default function loadMenu() {
  const main = document.getElementById("main");
  const container = document.createElement("section");
  const menuContainer = document.createElement("div");
  const h2 = document.createElement("h2");

  main.innerHTML = "";
  container.classList.add("menu");
  menuContainer.classList.add("menu-container");
  h2.classList.add("title");
  h2.textContent = "Menu";

  container.appendChild(h2);
  data.forEach((menu) => {
    menuContainer.appendChild(MenuCard(menu));
  });
  container.appendChild(menuContainer);
  main.appendChild(container);
}
