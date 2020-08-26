"use strict";

var root = document.documentElement;
var modal = document.querySelector(".modal"),
    previews = document.querySelectorAll(".photo img"),
    originalImg = document.querySelector(".full-img"),
    caption = document.querySelector(".caption");
previews.forEach(function (preview) {
  preview.addEventListener("mousemove", function (e) {
    console.log(e); // let xRate = (e.offsetX > 120) ? 5 : 3;
    // let yRate = (e.offsetY > 120) ? 5 : 3;

    preview.style.transformOrigin = e.offsetX / 3 + "% " + e.offsetY / 3 + "%";
  });
  preview.addEventListener('click', function () {
    modal.classList.add("modal-open");
    originalImg.classList.add("img-open"); // dynamically change text and image

    var originalSrc = preview.getAttribute('data-original');
    originalImg.src = "./assets/".concat(originalSrc);
    var altText = preview.alt;
    caption.textContent = altText;
  });
});
modal.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    modal.classList.remove("modal-open");
    originalImg.classList.remove("img-open");
  }
});