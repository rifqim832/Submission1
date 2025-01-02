// Select hamburger button and navbar list
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navbarList = document.getElementById('navbarList');

// Toggle navbar visibility on hamburger click
hamburgerMenu.addEventListener('click', () => {
    if (navbarList.style.display === 'flex') {
        navbarList.style.display = 'none';
    } else {
        navbarList.style.display = 'flex';
    }
});


// slide jumbotron image
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}

// Auto Slide   if you need auto slide ,remove the commit "//"

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//    var slides = document.getElementsByClassName("mySlides");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) { slideIndex = 1 }
//    slides[slideIndex - 1].style.display = "block";
//    setTimeout(showSlides, 2000); // Change image every 2 seconds
// }