let addCarts = document.querySelectorAll(".production-item__add-cart");
let addPromo = document.querySelector(".promo__order-button");
let addPopup = document.querySelector(".page-body__modal");
let addPopupClose = document.querySelector(".modal__close-button");
//promo__order-button

if (addCarts) {
for (let i = 0; i < addCarts.length; i++) {
  let addCart = addCarts[i];
  addCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    addPopup.classList.add("page-body__modal--open");
  });
};
};

if (addPromo) {
  addPromo.addEventListener("click", function (evt) {
    evt.preventDefault();
    addPopup.classList.add("page-body__modal--open");
  });
};

addPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addPopup.classList.remove("page-body__modal--open");
  console.log("popupclose press");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    addPopup.classList.remove("page-body__modal--open");
  }
});
