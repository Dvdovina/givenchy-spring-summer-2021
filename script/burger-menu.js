//Burger-Menu
//Variables
const popupMenu = document.querySelector('.popup-menu');
const popupCloseBtn = popupMenu.querySelector('.popup-menu__close-btn')
const popupOpenBtn = document.querySelector('.header__navigation-btn')


//Universal function to open popups
function openPopup(popup) {
  popup.classList.add('popup-menu_opened')
};

//Universal function to close popups
function closePopup(popup) {
  popup.classList.remove('popup-menu_opened')
};

// Open Burger-Menu
popupOpenBtn.addEventListener('click', function () {
  openPopup(popupMenu);
});

//Close Burger-Menu
popupCloseBtn.addEventListener('click', function () {
  closePopup(popupMenu);
});

