const menuBurger = document.querySelector('.menu');
const menuCloseIcon = document.querySelector('#imgM');
const menuOpenIcon = document.querySelector('#open');
const divPr = document.querySelector('.menuBurger');
const READMOREopen = document.querySelector('#READMORE');
const READMOREclose = document.querySelector('#imgL');
const READMORE = document.querySelector('.LeerMas');

menuOpenIcon.addEventListener('click', openBurguer);
menuCloseIcon.addEventListener('click', closeBurguer);

READMOREopen.addEventListener('click',openREADMORE);
READMOREclose.addEventListener('click', closeREADMORE)

window.addEventListener('resize',closeResiZe)

function openBurguer() {
    const menuPlay = menuBurger.classList.remove('inactive')
        if (menuPlay) {
        closeBurguer();
    }
}
    function closeBurguer() {
    const menuOn = menuBurger.classList.add('inactive');
    if (menuOn) {
        menuBurger.classList.remove('inactive')
    }
} 

function closeResiZe() {
    if (window.innerWidth >= 650) {
        closeBurguer();
    }
}


function openREADMORE() {
    const menuPlay = READMORE.classList.remove('inactive')
        if (menuPlay) {
        closeREADMORE();
    }
}
    function closeREADMORE() {
    const menuOn = READMORE.classList.add('inactive');
    if (menuOn) {
        READMORE.classList.remove('inactive')
    }
} 
