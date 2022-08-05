var burger=document.getElementById('burger');

burger.addEventListener('click', openBurger);

function openBurger(){
    var menu=document.getElementById('menu');
    menu.classList.toggle('open');
    burger.classList.toggle('open');
}