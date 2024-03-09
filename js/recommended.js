$(function(){
  const recommended = new Swiper('.recommended_wrap', {
    slidesPerView : 2,
    observer: true,
    observeParents: true,
    spaceBetween: 70,
    centeredSlides: false,
    breakpoints: {

      280: {
        slidesPerView: 1,  //브라우저가 768보다 클 때
        spaceBetween: 40,
        slidesPerView: "auto",
        centeredSlides: true,
      },
      500: {
        slidesPerView: 1, 
        spaceBetween: 40,
        slidesPerView: "auto",
        centeredSlides: true,
      },
      767: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      1261: {
        slidesPerView: 2,  //브라우저가 1024보다 클 때

      },
    },
  });
  
})