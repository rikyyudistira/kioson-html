$( document ).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      0:{
        items:1
      },
      992:{
        items: 2.5
      },
    }
  })

  $('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      0:{
        items:1
      },
      992:{
        items: 2
      },
    }
  })

});
