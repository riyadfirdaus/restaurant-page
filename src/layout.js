function createHeader() {
  const header = document.createElement("Header");
  header.classList.add("header");
  header.innerHTML = `<h1>Indonesian Cuisine<h1/>`;
  return header;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `Copyright &copy; Riyad Firdaus`;
  footer.classList.add("footer");
  footer.setAttribute("id", footer);
  return footer;
}

export { createHeader, createFooter };
