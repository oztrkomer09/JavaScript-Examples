const openButton = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-btn");

openButton.addEventListener("click", function () {
  let modalList = modal.classList;
  modalList.add("open-modal");
});

closeButton.addEventListener("click", function () {
  let modalList = modal.classList;
  modalList.remove("open-modal");
});
