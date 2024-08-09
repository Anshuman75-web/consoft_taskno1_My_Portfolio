/* let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}; */
// JavaScript to toggle the navigation menu

// Selecting the menu icon and the navigation bar
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

// Function to toggle the 'active' class on the navigation bar
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});
