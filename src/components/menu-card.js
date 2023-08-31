export default function MenuCard(data) {
  const container = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("span");
  const description = document.createElement("span");
  const price = document.createElement("span");

  container.classList.add("menu-card");
  description.classList.add("description");

  title.textContent = `${data.name}`;
  description.textContent = `${data.description}`;
  price.textContent = `Rp${data.price}`;

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(price);

  return container;
}
