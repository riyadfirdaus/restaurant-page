import { createHeader, createFooter } from "./layout";
import loadHome from "./main/home";
import createNav from "./navbar";

function createMain() {
  const main = document.createElement("div");
  main.setAttribute("id", "main");
  main.classList.add("main");
  return main;
}

function initializeWeb() {
  const content = document.getElementById("content");
  console.log(content);
  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createMain());
  loadHome();
  content.appendChild(createFooter());
  //   content.appendChild(createMain());
  //   content.appendChild(createFooter());
}
initializeWeb();
