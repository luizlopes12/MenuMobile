const menu = document.querySelector('.menu')
const btnMenuOpen = document.querySelector('.btn-menu-open');
const btnMenuClose = document.querySelector('.btn-menu-close');

btnMenuOpen.addEventListener('click', function(){
    menu.classList.add('menu_open');
})
btnMenuClose.addEventListener('click', function(){
    menu.classList.remove('menu_open')
})