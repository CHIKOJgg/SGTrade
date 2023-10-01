const catalogMenuBtn = document.getElementById('catalog');
const catalogMenuDropdown = document.querySelector('.dropdown-add-info');
const menuButton = document.querySelector('.menu-button');
const menuButtonImg = document.querySelector('.menu-button-img');
const headerMenu = document.querySelector('.header-menu-opened');
const whyUsInfoButton = document.querySelector('#why-us-info-button');
const form = document.querySelector('#form');
let isDropdownMenuOpened = menuButton.getAttribute('data-is-opened');
console.log(form);
console.log(whyUsInfoButton);
menuButton.addEventListener('click', function () {
  if (isDropdownMenuOpened == 0) {
    isDropdownMenuOpened++;
    headerMenu.classList.add('opened');
    headerMenu.classList.remove('closed');
    menuButton.style.backgroundImage = "url('./imgs/closeCross.svg')";
  } else if (isDropdownMenuOpened == 1) {
    isDropdownMenuOpened--;
    headerMenu.classList.remove('opened');
    headerMenu.classList.add('closed');
    menuButton.style.backgroundImage = "url('./imgs/menu-2.svg')";
  }
});
whyUsInfoButton.addEventListener('click', function () {
  form.style.display = 'block';
});
