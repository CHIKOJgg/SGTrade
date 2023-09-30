const catalogMenuBtn = document.getElementById('catalog');
const catalogMenuDropdown = document.querySelector('.dropdown-add-info');
const menuButton = document.querySelector('.menu-button');
const headerMenu = document.querySelector('.header-menu-opened');
console.log(menuButton);

let isDropdownMenuOpened = menuButton.getAttribute('data-is-opened');

menuButton.addEventListener('click', function () {
  if (isDropdownMenuOpened == 0) {
    isDropdownMenuOpened++;
    headerMenu.classList.add('opened');
    headerMenu.classList.remove('closed');
  } else if (isDropdownMenuOpened == 1) {
    isDropdownMenuOpened--;
    headerMenu.classList.remove('opened');
    headerMenu.classList.add('closed');
  }
});
