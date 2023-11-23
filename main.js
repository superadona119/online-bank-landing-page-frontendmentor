//menu/* 
let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.links');
let closeMenu = document.querySelector('.close-icon');

//open menu-icon
menuIcon.onclick = () => {
    closeMenu.classList.add("appear");
    menuIcon.classList.add("disappear");
    menu.classList.add("show");
};

//close menu-icon
closeMenu.onclick = () => {
    menu.classList.remove("show");
    closeMenu.classList.remove("appear");
    menuIcon.classList.remove("disappear");
};
