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

// Services Section
function  movesliderServices() {
  const slider = document.getElementById('ServicesSlider');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
  });
}
// Services Section Completed

// Testimonials Section
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activetestimonial", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activetestimonial";
}
// Testimonials Section Completed

// Projects Section
function  movesliderProjects() {
  const slider = document.getElementById('ProjectsSlider');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
  });
}
// Projects Section Completed

// Footer
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// Footer Completed