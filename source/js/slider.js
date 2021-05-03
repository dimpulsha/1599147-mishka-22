let forwardButton = document.querySelector(".slider__control--forward");
let backButton = document.querySelector(".slider__control--back");
let sliderList = document.querySelectorAll(".slider__item");
let countSlide = 0;

forwardButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderList[countSlide].classList.remove("slider__item--current");
  countSlide += 1;
  if (countSlide >= sliderList.length){
    countSlide = 0;
  }
  sliderList[countSlide].classList.add("slider__item--current");
});

backButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderList[countSlide].classList.remove("slider__item--current");
  countSlide -= 1;
  if (countSlide < 0){
    countSlide = sliderList.length - 1;
  }
  sliderList[countSlide].classList.add("slider__item--current");
});


