let navigation = document.querySelector(".page-nav");
let navControl = document.querySelector(".page-nav__button");

navigation.classList.remove("page-nav--nojs");

navControl.addEventListener("click", function () {
  navigation.classList.toggle("page-nav--open");
});
