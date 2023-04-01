
// ================================== noTouch
function noTouch() {
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        document.body.classList.remove('no-touch');
    } else {
        document.body.classList.add('no-touch');
    }
}
noTouch()
// ================================= burger
function burgerClick() {
   
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.header__nav')
    burger.addEventListener('click', function () {
        burger.classList.toggle('change')
       nav.classList.toggle('nav__active')
    })
}
burgerClick()






