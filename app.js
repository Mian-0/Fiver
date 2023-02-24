// Header Section
const burgermobile = document.querySelector('.offcanvasTogler1');
const burger = document.querySelector('.offcanvasTogler2');
const offcanvas = document.querySelector('.offcanvasHeader');
const offcanvasOverlay = document.querySelector('.offcanvasHeaderOverlay');
const navSlide = ()=> {
    // Toggle Nav
    burgermobile.addEventListener('click' ,() => {
        offcanvas.classList.add('offcanvasHeaderActive');
        offcanvasOverlay.classList.add('offcanvasHeaderActive');
        console.log("ToglerMobile");
    });
}
const navSlide2 = ()=> {
    burger.addEventListener('click' ,() => {
        offcanvas.classList.add('offcanvasHeaderActive');
        offcanvasOverlay.classList.add('offcanvasHeaderActive');
        console.log("ToglerTablet");
    });

}

const navClose = ()=> {
    offcanvasOverlay.addEventListener('click' ,() => {
    offcanvas.classList.remove('offcanvasHeaderActive');
    offcanvasOverlay.classList.remove('offcanvasHeaderActive');
    console.log("Close");
});

}

navSlide();
navSlide2();
navClose();
// Header Section Completed

// Hero Section
// Hero Section Completed