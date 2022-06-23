'use strict';
var menuToggle = document.querySelector('.main-sidebar');
var pageBody = document.querySelector('.page-body');

menuToggle.addEventListener('click', function () {
  if (menuToggle.classList.contains('main-sidebar--closed')) {
    menuToggle.classList.remove('main-sidebar--closed');
    menuToggle.classList.add('main-sidebar--opened');
    pageBody.classList.add('noscroll')
  }
  else {
    menuToggle.classList.add('main-sidebar--closed');
    menuToggle.classList.remove('main-sidebar--opened');
    pageBody.classList.remove('noscroll')
  }
});
