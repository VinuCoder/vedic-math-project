console.log('vinu');
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList= document.querySelector('.nav_list');


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h_nav');
    navList.classList.toggle('v_nav');
})