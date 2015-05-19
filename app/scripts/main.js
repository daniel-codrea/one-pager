'use strict';

$('.slick-slides').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.slick-single-slide img').each(function() {
  var imgSrc = $(this).attr('src');
  $(this).parent('.slick-single-slide').css('background', 'url('+imgSrc+') center center no-repeat');
  $(this).remove();
});

new gnMenu( document.getElementById( 'gn-menu' ) );