$(document).ready(function() {
  var $slider = $('.tea-section3__blocks');

  $slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var $dots = $(this).find('.slick-dots li');
    var activeDotIndex = currentSlide;
    $dots.removeClass('custom-active').slice(0, activeDotIndex + 1).addClass('custom-active');
  });

  $slider.slick({
    dots: true,
    arrows: true,
    infinite: false,
    dotsClass: 'slick-dots slider__dots',
    slidesToShow: 5.5,
    slidesToScroll: 1,
    prevArrow: '.tea-section3__arrow-left',
    nextArrow: '.tea-section3__arrow-right',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4.5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.5,
        }
      },
    ]
  });
});