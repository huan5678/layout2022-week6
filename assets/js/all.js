"use strict";

var state = 'closed';
$('[data-toggle="menu"]').on('click', function () {
  if (state === 'open') {
    $('.nav__list').addClass('max-h-0 -translate-y-full');
    $('[data-toggle="menu"]').children("span:contains('close')").text('drag_handle');
    return state = 'closed';
  }

  if (state === 'closed') {
    $('.nav__list').removeClass('max-h-0 -translate-y-full');
    $('[data-toggle="menu"]').children("span:contains('drag_handle')").text('close');
    return state = 'open';
  }
});
var swiperClass = new Swiper('.swiperContainer', {
  slidesPerView: 3.2,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 4.2,
      spaceBetween: 12
    },
    992: {
      slidesPerView: 6.2,
      spaceBetween: 16
    },
    1440: {
      slidesPerView: 10.2,
      spaceBetween: 16
    }
  }
});
var swiperShare = new Swiper('.swiper-share', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var loginModal = false;
$('#login').on('click', function () {
  if (!loginModal) {
    $('#loginModal').removeClass('hidden');
    $('body').addClass('overflow-hidden');
    loginModal = true;
  } else {
    $('#loginModal').addClass('hidden');
    $('body').removeClass('overflow-hidden');
    loginModal = false;
  }
});
$('#ModalCloseButton').on('click', function () {
  $('#loginModal').addClass('hidden');
  $('body').removeClass('overflow-hidden');
  loginModal = false;
});
$('[data-target="backdrop"]').on('click', function () {
  $('#loginModal').addClass('hidden');
  $('body').removeClass('overflow-hidden');
  loginModal = false;
});
$('[data-dropdown-toggle="dropdown"]').on('click', function () {
  $('#dropdown').toggleClass('hidden');
});
var elem = document.querySelector('input[name="bookingDate"]');
var datepicker = elem && new Datepicker(elem, {
  language: 'zh-TW',
  prevArrow: '<span class="material-icons-outlined">keyboard_double_arrow_left</span>',
  nextArrow: '<span class="material-icons-outlined">keyboard_double_arrow_right</span>'
});
//# sourceMappingURL=all.js.map
