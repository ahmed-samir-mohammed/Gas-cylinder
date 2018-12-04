
// Smoth Scroll
var scroll = new SmoothScroll('.go-to[href*="#"]', {
  offset: 50
});

// Add class to Navbar 
let navBar = document.querySelector('.navbar');
let sticky = navBar.offsetTop + 50;
window.onscroll = () => {
  if (window.pageYOffset > sticky) {
    console.log('Say Hello');
    navBar.classList.add('backColor');
  } else {
    navBar.classList.remove('backColor');
  }
}

// ScrollOut Setting
ScrollOut({
  threshold	: .5
});

// Hide Navbar Collapse on Click
$('.navbar-nav>li').on('click', function () {
  $('.navbar-collapse').collapse('hide');
})

















/* Smoth Scroll
let goToSection = document.querySelectorAll('.go-to');
for (i = 0; i < goToSection.length; i++) {
  goToSection[i].onclick = function (e) {
    e.preventDefault();
    let start = window.scrollY;
    let end = document.querySelector(this.getAttribute('href')).offsetTop - 50;
    let step = start < end ? 10 : -10;
    let scrolling = setInterval(function () {
      window.scrollBy(0, step);
      console.log(window.pageYOffset);
      if ((step > 0 && window.scrollY >= end) || (step < 0 && window.scrollY <= end)) clearInterval(scrolling);
      
    }, 50)
  }
}
*/