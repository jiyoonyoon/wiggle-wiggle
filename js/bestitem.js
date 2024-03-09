$(function(){

const life = new Swiper('.tab01 .swiper-container', {
  loop: true,
  speed : 500,
  initialSlide : 0,
  slidesPerView: 'auto',
  debugger: true,
  slidesPerView: 4,
  clickable: true,
  spaceBetween: 20,
  autoHeight : true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loopAdditionalSlides : 1,
  navigation: {
    //다음페이지 설정
    nextEl: '.swiper-button-next.life',
    //이전페이지 설정
    prevEl: '.swiper-button-prev.life',
  },
  breakpoints: {

    280: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1261: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  observer: true,
  observeParents: true,
});

const sports = new Swiper('.tab02 .swiper-container', {
  loop: true,
  initialSlide : 0,
  speed : 500,
  slidesPerView: 'auto',
  debugger: true,
  slidesPerView: 4,
  clickable: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loopAdditionalSlides : 1,
  navigation: {
    //다음페이지 설정
    nextEl: '.swiper-button-next.sports',
    //이전페이지 설정
    prevEl: '.swiper-button-prev.sports',
  },
  breakpoints: {

    280: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,  //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,  //브라우저가 1024보다 클 때
      spaceBetween: 20,
    },
    1261: {
      slidesPerView: 4,  //브라우저가 1024보다 클 때
      spaceBetween: 20,
    },
  },
  observer: true,
  observeParents: true,
});

const fashion = new Swiper('.tab03 .swiper-container', {
  loop: true,
  initialSlide : 0,
  speed : 500,
  slidesPerView: 'auto',
  debugger: true,
  slidesPerView: 4,
  clickable: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loopAdditionalSlides : 1,
  navigation: {
    //다음페이지 설정
    nextEl: '.swiper-button-next.fashion',
    //이전페이지 설정
    prevEl: '.swiper-button-prev.fashion',
  },
  breakpoints: {

    280: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,  //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,  //브라우저가 1024보다 클 때
      spaceBetween: 20,
    },
    1261: {
      slidesPerView: 4,  //브라우저가 1024보다 클 때
      spaceBetween: 20,
    },
  },
  observer: true,
  observeParents: true,
});

const tech = new Swiper('.tab04 .swiper-container', {
  loop: true,
  initialSlide : 0,
  speed : 500,
  slidesPerView: 'auto',
  debugger: true,
  slidesPerView: 4,
  clickable: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loopAdditionalSlides : 1,
  navigation: {
    //다음페이지 설정
    nextEl: '.swiper-button-next.tech',
    //이전페이지 설정
    prevEl: '.swiper-button-prev.tech',
  },
  breakpoints: {

    280: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,  //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,  //브라우저가 1024보다 클 때
      spaceBetween: 20,
    },
    1261: {
      slidesPerView: 4,  //브라우저가 1024보다 클 때
      spaceBetween: 20,
    },
  },
  observer: true,
  observeParents: true,
});

const pet = new Swiper('.tab05 .swiper-container', {
  loop: true,
  initialSlide : 0,
  speed : 500,
  slidesPerView: 'auto',
  debugger: true,
  slidesPerView: 4,
  clickable: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loopAdditionalSlides : 1,
  navigation: {
    //다음페이지 설정
    nextEl: '.swiper-button-next.pet',
    //이전페이지 설정
    prevEl: '.swiper-button-prev.pet',
  },
  breakpoints: {

    280: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,  //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,  //브라우저가 1024보다 클 때
      spaceBetween: 20,
    },
    1261: {
      slidesPerView: 4,  //브라우저가 1024보다 클 때
      spaceBetween: 20,
    },
  },
  observer: true,
  observeParents: true,
});

const collabo = new Swiper('.tab06 .swiper-container', {
  loop: true,
  initialSlide : 0,
  speed : 500,
  slidesPerView: 'auto',
  debugger: true,
  slidesPerView: 4,
  clickable: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
  navigation: {
    //다음페이지 설정
    nextEl: '.swiper-button-next.collabo',
    //이전페이지 설정
    prevEl: '.swiper-button-prev.collabo',
  },
  breakpoints: {

    280: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,  //브라우저가 768보다 클 때
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,  //브라우저가 1024보다 클 때
      spaceBetween: 20,
    },
    1261: {
      slidesPerView: 4,  //브라우저가 1024보다 클 때
      spaceBetween: 20,
    },
  },
  observer: true,
  observeParents: true,
});

$('.swiper-slide').on('mouseover', function(){
  life.autoplay.stop();
  sports.autoplay.stop();
  fashion.autoplay.stop();
  tech.autoplay.stop();
  pet.autoplay.stop();
  collabo.autoplay.stop();
});
$('.swiper-slide').on('mouseout', function(){
  life.autoplay.start();
  sports.autoplay.start();
  fashion.autoplay.start();
  tech.autoplay.start();
  pet.autoplay.start();
  collabo.autoplay.start();
});



const tabList = document.querySelectorAll('.best_item .tab_links li');
const contents = document.querySelectorAll('.best_item .tab_content')
let activeCont = '' // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)



  for(var i = 0; i < tabList.length; i++) {

    tabList[i].querySelector('.tab_btn').addEventListener('click',function(e){
      e.preventDefault();
      for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('active');

        contents[j].style.display = 'none';
      }

      this.parentNode.classList.add('active');

      activeCont = this.getAttribute('href');
      document.querySelector(activeCont).style.display = 'block';

      startFunction();
    })
  }

  function startFunction(){
    activelife();
    activesports();
    activefashion();
    activetech();
    activepet();
    activecollabo();
  };

  function activelife(){

    if ($('.best_item .tab_links li:nth-child(1)').hasClass('active')){
      life.autoplay.start();
    } else {
      life.update();
      life.autoplay.stop();
    };
  };
  function activesports(){
    if ($('.best_item .tab_links li:nth-child(2)').hasClass('active')){
      sports.autoplay.start();
    } else {
      sports.update();
      sports.autoplay.stop();
    };
  };
  function activefashion(){
    if ($('.best_item .tab_links li:nth-child(3)').hasClass('active')){
      fashion.autoplay.start();
    } else {
      fashion.update();
      fashion.autoplay.stop();
    };
  };
  function activetech(){
    if ($('.best_item .tab_links li:nth-child(4)').hasClass('active')){
      tech.autoplay.start();
    } else {
      tech.update();
      tech.autoplay.stop();
    };
  };
  function activepet(){
    if ($('.best_item .tab_links li:nth-child(5)').hasClass('active')){
      pet.autoplay.start();
    } else {
      pet.update();
      pet.autoplay.stop();
    };
  };
  function activecollabo(){
    if ($('.best_item .tab_links li:nth-child(6)').hasClass('active')){
      collabo.autoplay.start();
    } else {
      collabo.update();
      collabo.autoplay.stop();
    };
  };
  
  $('.best_item .prd img',this).mouseover(function() {
    $(this).stop(true).css({
      transform: 'scale(1.05)',
      transition: 'transform .5s'
    })
  });
  $('.best_item .prd img',this).mouseout(function() {
    $(this).stop(true).css({
      transform: 'scale(1)',
      transition: 'transform .5s'
    })
  });

});