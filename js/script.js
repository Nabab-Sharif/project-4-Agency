

$('.main_slider').slick({
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-angle-left left"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right right"></i>',
  responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});


// for banner slide 

$('.banner_slide').slick({
  arrows: false,
  dots: true
});