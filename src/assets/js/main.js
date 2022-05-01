/*============ show menu ============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*==== menu show ====*/
/* validate if const exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*==== menu hidden ====*/
/* validate if const exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==== remove menu mobile ====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // when click on each nav__link we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============ home swiper ============*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

/*============ change menu bg ============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // when scroll is greater than 100 viewport, add the scroll header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




/*============ new swiper ============*/

/*============ scroll sections active link ============*/

/*============ show scroll up ============*/

/*============ scroll reveal animation ============*/

/* show menu */

/* show menu */

/* show menu */

/* show menu */

/* show menu */

/* show menu */

/* show menu */

/* show menu */

/* show menu */