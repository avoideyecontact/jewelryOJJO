'use strict';
var pageHeader = document.querySelector('.page-header');
var menuToggle = document.querySelector('.page-header__toggle');
var pageBody = document.querySelector('.page-body');

menuToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
    pageBody.classList.add('noscroll')
  }
  else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
    pageBody.classList.remove('noscroll')
  }
});
