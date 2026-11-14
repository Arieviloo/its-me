const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);

  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener('scroll', animeScroll, { passive: true });
}

// Menu mobile (vanilla JS, sem jQuery)
const openMenuMobile = document.querySelector('.open-menu-mobile');
const menuMobileBtn = document.querySelector('.menu-mobile');
const closeBtn = document.querySelector('.close');
const listMenu = document.querySelector('.list-menu');

function toggleMenu() {
  if (openMenuMobile) {
    const isOpen = openMenuMobile.style.display === 'flex';
    openMenuMobile.style.display = isOpen ? 'none' : 'flex';
  }
}

if (menuMobileBtn) menuMobileBtn.addEventListener('click', toggleMenu);
if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
if (listMenu) listMenu.addEventListener('click', toggleMenu);
