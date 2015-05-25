'use strict';

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });
});

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