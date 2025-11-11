window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const homeSection = document.getElementById('home');
  const homeHeight = homeSection.offsetHeight;

  if (window.scrollY > homeHeight) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
});

// Tutup menu saat klik link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('show');
  });
});

// Sticky Navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('sticky', window.scrollY > 100);
});

// Scroll ke kiri
function scrollLeft() {
  const slider = document.getElementById("guruSlider");
  slider.scrollBy({
    left: -200, 
    behavior: "smooth"
  });
}

// Scroll ke kanan
function scrollRight() {
  const slider = document.getElementById("guruSlider");
  slider.scrollBy({
    left: 200, 
    behavior: "smooth"
  });
}


