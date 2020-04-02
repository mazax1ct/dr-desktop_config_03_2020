var float = $('.js-float');

$(document).ready(function () {
  if ($(window).scrollTop() > 300) {
    float.addClass('is-active');
  } else {
    float.removeClass('is-active');
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    float.addClass('is-active');
  } else {
    float.removeClass('is-active');
  }
});
