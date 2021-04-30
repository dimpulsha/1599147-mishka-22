let addCarts = document.querySelectorAll(".production-item__add-cart");
const addPromo = document.querySelector(".promo__order-button");
const addPopup = document.querySelector(".page-content__modal");
const addPopupClose = document.querySelector(".modal__close-button");
//promo__order-button

for (let i = 0; i < addCarts.length; i++) {
  let addCart = addCarts[i];
  addCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    addPopup.classList.add("page-content__modal--open");
  });
};

addPromo.addEventListener ("click", function (evt) {
  evt.preventDefault();
  addPopup.classList.add("page-content__modal--open");
});

addPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addPopup.classList.remove("page-content__modal--open");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    addPopup.classList.remove("page-content__modal--open");
  }
});
