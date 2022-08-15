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
