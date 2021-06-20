"use strict";

const x = document.querySelectorAll(".hero-slider--mySlides");
let dots = document.getElementsByClassName("demo");
let slideIndex = 1;
let myIndex = 0;
let i;

showDivs(slideIndex);
carousel();

function carousel() {
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  setTimeout(carousel, 7000);
  slideIndex++;
}

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
