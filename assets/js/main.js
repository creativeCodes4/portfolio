// Menu Interaction...

// Getting Components...

const menuTrigger = document.querySelector('#menu-trigger');
const closeMenu = document.querySelector('#close-menu');
const nav = document.querySelector('nav');
const trigger = document.querySelector('.trigger');
const navLinks = document.querySelectorAll('ul li');

function close() {
  closeMenu.style.opacity = '0';
  closeMenu.classList.toggle('toggle');
  trigger.classList.remove('triggeranimation');
  nav.style.visibility = 'hidden';
  //   Resetting The Animation...
  navLinks.forEach((link) => {
    link.style.animation = '';
  });
}

function open() {
  trigger.style.display = 'block';
  trigger.classList.toggle('triggeranimation');
  setTimeout(() => {
    closeMenu.style.opacity = '1';
    closeMenu.classList.toggle('toggle');
    nav.style.visibility = 'visible';
    trigger.style.display = 'none';
  }, 500);
  // Animate Links...
  navLinks.forEach((link, index) => {
    if (link.style.animation === '') {
      link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.4}s`;
    }
  });
  // Close After Click
  navLinks.forEach((link) => {
    link.addEventListener('click', close);
  });
}

// Adding Event Listeners...

menuTrigger.addEventListener('click', open);

closeMenu.addEventListener('click', close);
