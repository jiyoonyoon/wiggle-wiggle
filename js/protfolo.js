$(function(){
  const right = new Swiper('#right',{
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 0,
    effect : 'fade',
    debugger: true,
    // autoHeight : true,
    fadeEffect: { 
    crossFade: true 
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    
    breakpoints: {

      280: {
        slidesPerView: 1,  //브라우저가 768보다 클 때
        spaceBetween: 0,
      },
      500: {
        slidesPerView: 1,  //브라우저가 768보다 클 때
      },
      767: {
        slidesPerView: 1,  //브라우저가 1024보다 클 때
      },
    },
    observer: true,  
    observeParents: true,

  })
  const left_up = new Swiper('#left_up',{
    loop: true,
    speed: 1000,
    slidesPerView: 2,
    effect : 'fade',
    debugger: true,
    // autoHeight : true,
    fadeEffect: { 
    crossFade: true 
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    observer: true,  
    observeParents: true,

  })
  const left_down = new Swiper('#left_down',{
    loop: true,
    speed: 1000,
    slidesPerView: 2,
    effect : 'fade',
    debugger: true,
    // autoHeight : true,
    fadeEffect: { 
    crossFade: true 
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    observer: true,  
    observeParents: true,

  })

  $('.protfolo_right .swiper-slide').on('mouseover', function(){
    right.autoplay.stop();
  });
  $('.protfolo_right .swiper-slide').on('mouseout', function(){
    right.autoplay.start();
  });

  $('.con_up .swiper-slide').on('mouseover', function(){
    left_up.autoplay.stop();
  });
  $('.con_up .swiper-slide').on('mouseout', function(){
    left_up.autoplay.start();
  });
  $('.con_down .swiper-slide').on('mouseover', function(){
    left_down.autoplay.stop();
  });
  $('.con_down .swiper-slide').on('mouseout', function(){
    left_down.autoplay.start();
  });

  $('.con_up .swiper-slide',this).mouseover(function(){
    $(this).find('.img_box img:last-child').stop(true).animate({
      opacity: 0
    },500)
  }).mouseout(function(){
    $(this).find('.img_box img:last-child').stop(true).animate({
      opacity: 1
    },500)
  });
  $('.con_down .swiper-slide',this).mouseover(function(){
    $(this).find('.img_box img:last-child').stop(true).animate({
      opacity: 0
    },500)
  }).mouseout(function(){
    $(this).find('.img_box img:last-child').stop(true).animate({
      opacity: 1
    },500)
  });
})