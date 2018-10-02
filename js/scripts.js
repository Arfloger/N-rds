var link = document.querySelector(".modal-button");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
