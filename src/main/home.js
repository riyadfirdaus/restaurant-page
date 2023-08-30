export default function loadHome() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  const home = document.createElement("div");
  const hero = document.createElement("section");
  let p = document.createElement("p");
  home.classList.add("home");
  hero.classList.add("hero");

  p.innerHTML = `INDONESIAN CUISINE`;
  p.classList.add("unselectable");
  hero.appendChild(p);

  //Create Quote Section
  const quote = document.createElement("section");
  quote.classList.add("quoteContainer");
  quote.classList.add("unselectable");
  p = document.createElement("p");
  p.innerHTML = "Indonesian Cuisine";
  p.classList.add("subtitle");
  quote.appendChild(p);

  p = document.createElement("p");
  p.innerHTML =
    "“Eating Indonesian food is like taking a journey through the country’s history and culture.”";
  p.classList.add("quote");
  quote.appendChild(p);

  home.appendChild(hero);
  home.appendChild(quote);
  main.appendChild(home);
}
