
var burger = document.getElementById('burger');
var menu = document.getElementById('menu');
var logo = document.getElementById('logo');

burger.addEventListener('click', openMenu);

function openMenu(){
    burger.classList.toggle("opened");
    menu.classList.toggle("opened");
    logo.classList.toggle("opened");
}