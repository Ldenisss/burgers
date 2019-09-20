var body = document.querySelector("body");
const openMenu = document.querySelector(".header__menu-phone");

openMenu.addEventListener('click', function(e) {
    body.classList.toggle('overlay');
})
