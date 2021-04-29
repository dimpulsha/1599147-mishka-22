var navigation = document.querySelector(".page-nav");
var navControl = document.querySelector(".page-nav__button");

navigation.classList.remove("page-nav--nojs");

navControl.addEventListener("click", function () {
  navigation.classList.toggle("page-nav--open");
});
