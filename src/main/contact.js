export default function loadContact() {
  const main = document.getElementById("main");
  const map = document.createElement("div");
  const container = document.createElement("section");
  const textContainer = document.createElement("div");
  const description = document.createElement("p");
  const h2 = document.createElement("h2");

  main.innerHTML = "";
  container.classList.add("contact-us");
  textContainer.classList.add("contact-text");
  h2.classList.add("title");
  h2.textContent = "Location and Hours";

  description.innerHTML =
    "500 Terry Francine Street<br>San Francisco, CA 94158<br><br>Open Monday to Friday 12pm to 10pm<br>Saturday to Sunday 12pm to 11pm";

  map.classList.add("map");
  map.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.021392456862!2d108.53444368909425!3d-6.738673768479371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1dec526731e5%3A0x7feba65303cbac4e!2sWarung%20Nasi%20Sederhana!5e0!3m2!1sen!2sid!4v1693452516821!5m2!1sen!2sid" height= 200px; style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  textContainer.appendChild(h2);
  textContainer.appendChild(description);
  container.appendChild(textContainer);
  container.appendChild(map);
  main.appendChild(container);
}
