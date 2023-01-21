smart_nav = document.querySelector(".smart-nav");
navbar = document.querySelector(".navbar");
nav_list = document.querySelector(".nav-list");
right_nav= document.querySelector(".rightnav");

smart_nav.addEventListener('click', ()=>{
    right_nav.classList.toggle('v-class-resp')
    nav_list.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})
