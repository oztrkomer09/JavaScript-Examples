const menu = document.querySelector(".sidebar-toggle");
const links = document.querySelector(".sidebar");
const close = document.querySelector(".close-btn");

menu.addEventListener("click", function () {
  let linkList = links.classList;
  if (linkList.contains("show-sidebar")) {
    linkList.remove("show-sidebar");
  } else {
    linkList.add("show-sidebar");
  }
});

close.addEventListener("click", function () {
  let linkList = links.classList;
  linkList.remove("show-sidebar");
});
