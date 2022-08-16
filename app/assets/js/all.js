let state = 'closed';
$('[data-toggle="menu"]').on('click', () => {
  if (state === 'open') {
    $('.nav__list').addClass('max-h-0 -translate-y-full');
    $('[data-toggle="menu"]').children("span:contains('close')").text('drag_handle');
    return (state = 'closed');
  }
  if (state === 'closed') {
    $('.nav__list').removeClass('max-h-0 -translate-y-full');
    $('[data-toggle="menu"]').children("span:contains('drag_handle')").text('close');
    return (state = 'open');
  }
});

const swiper = new Swiper('.swiperContainer', {
  slidesPerView: 3.2,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 4.2,
      spaceBetween: 12,
    },
    992: {
      slidesPerView: 6.2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 10.2,
      spaceBetween: 16,
    },
  },
});