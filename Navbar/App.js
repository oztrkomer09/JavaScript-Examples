const menu = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

menu.addEventListener("click", function () {
  let linkList = links.classList;

  if (linkList.contains("show-links")) {
    linkList.remove("show-links");
  } else {
    linkList.add("show-links");
  }
});
