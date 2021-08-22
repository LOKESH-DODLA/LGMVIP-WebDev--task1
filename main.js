let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});


var typed = new Typed('.typing-text',{
    strings : [' ','save earth','save trees','save animals','save birds','save nature'],
    loop : true,
    typeSpeed : 200
});