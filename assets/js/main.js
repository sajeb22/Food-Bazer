/*=============== Show Menu ==============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
// Validate that variable exist
    if(toggle && nav){
        // we add the show-menu class to the div teg with the nav__menu class
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
     // we add the show-menu class to the div teg with the nav__menu class
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*============== Change Background Header =====*/
function scrollHeader(){
    const nav = document.getElementById('header')
    //When the scroll is greather then 200 viewport height, add the scroll-header class to the header teg
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*============= Show Scroll Top ===========*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    //When the scroll is greather then 200 viewport height, add the scroll-header class to the header teg
    if(this.scrollY >= 500) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)

/*====================Dark Light Theme=============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'
//previously selected topic ( if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
//We obtain the current theme that the interface has by validating the dark-theme class
const getCurentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'Light'
const getCurentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

//we validate if the user previusly chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)

}


//activete / deactivete the theme manually with the button
themeButton.addEventListener('click', ()=> {
    //add or romove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon thet the user chose
    localStorage.setItem('selected-theme', getCurentTheme())
    localStorage.setItem('selected-icon', getCurentIcon())
})
/*============ Scroll Reval Animation =============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});
sr.reveal(`.home__data, .home__img, .about__data, .about__img, .services__content, .menu__content, .app__data, .app__img, .contact__data, contact__button, .footer__content`, {
    interval: 200
})