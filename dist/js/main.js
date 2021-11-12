//Select DOM Items
const menuBtn1 = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-items');

//set initial state of menu
let showMenu = false;

menuBtn1.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn1.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item=>item.classList.add('show'));
        //set menu state
        showMenu=true;
    }else{
        menuBtn1.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item=>item.classList.remove('show'));
        //set menu state
        showMenu=false;
    }
}