$(function(){
/* mainslide scroll interaction */

var sectionMainVisual = $('.main_slide');
var header = $('.header');
var sectionMainTop;
var sectionMainBottom;
// maincontent
var mainContent = $('.main_content');
var mainSlide = $('.main_con_slide');
var scrollHeight;
var scrollRealHeight;
var percent;
var titRight = $('.main_content .main_tit h2')
var s_titRight = $('.main_con_slide .con_slide_tit h3');

/*리사이즈, 스크롤 할 때 변해야 할 값들*/
var winScrollTop;//스크롤 위치를 담을 변수 선언
var sectionIsMoving = false;//섹션이 이동 중인지 체크하는 변수

// slide


function setProperty(){ //스크롤 할 때 변할 값들을 세팅하는 함수

  winScrollTop = $(window).scrollTop();
  sectionMainTop = sectionMainVisual.offset().top;
  sectionMainBottom = sectionMainTop + sectionMainVisual.height(); //섹션의 BOTTOM값을 구함.
  
  scrollHeight = mainContent.height();
  scrollRealHeight = scrollHeight - $(window).height() - mainSlide.height();
  var scrollPercent = winScrollTop / scrollRealHeight;
  percent = scrollPercent * 100;
  // console.log(percent);
  
}

function changeS_titRight() {
  if(percent >= 1000) {
    s_titRight.css({
      animation: 's_tit_right 2.5s linear',
      animationDelay: '0.5s',
      WebkitTextFillColor:'yellow',
      textShadow: '3px 3px 10px yellow',
      WebkitTextStroke: '1.5px #000'
    })
  }
}

function moveStartRender() {//섹션 이동 처리 함수

  if(!header.hasClass('active')){ //해더 클래스가 없을 경우에는 아래로 내려오는 상황

    header.addClass('active');
    titRight.css({
      animation: 'tit_right 2.5s linear',
      WebkitTextFillColor:'yellow',
      textShadow: '3px 3px 10px yellow',
      WebkitTextStroke: '2px #000'
    });
    s_titRight.css({
      animation: 's_tit_right 2.5s linear',
      animationDelay: '1s',
      WebkitTextFillColor:'yellow',
      textShadow: '3px 3px 10px yellow',
      WebkitTextStroke: '1.5px #000'
    });


    $('html').stop(true).animate({
      scrollTop: sectionMainBottom + 1//IE버그 반복 버그 처리를 위해 1을 추가.
    },500, function(){
      sectionIsMoving = false; //섹션이 이동 중인지 체크하는 변수
    })
  } else{  //해더 클래스가 있을 경우 위로 올라가는 상황
    header.removeClass('active');
    titRight.css({
      animation: 'none',
      textShadow: 'none',
      WebkitTextFillColor:'transparent',
      WebkitTextStroke: '2px rgb(0, 0, 0)'
    });
    s_titRight.css({
      animation: 'none',
      textShadow: 'none',
      WebkitTextFillColor:'transparent',
      WebkitTextStroke: '1.5px #000'
    });
    $('html').stop(true).animate({
      scrollTop: sectionMainTop
    },500, function(){
      sectionIsMoving = false; //섹션이 이동 중인지 체크하는 변수
    })
  }
}

function activeCheck() {//새로고침을 할 때 페이지가 아래에서 시작할 경우 액티브돼야 할 요소들을 처리
  header.addClass('active');
  titRight.css({
    animation: 'tit_right 2.5s linear',
    WebkitTextFillColor:'yellow',
    textShadow: '3px 3px 10px yellow',
    WebkitTextStroke: '2px #000'
  });
  s_titRight.css({
    animation: 's_tit_right 2.5s linear',
    animationDelay: '1s',
    WebkitTextFillColor:'yellow',
    textShadow: '3px 3px 10px yellow',
    WebkitTextStroke: '1.5px #000'
  });
}

function moveSection(){//스크롤 할 때 호출함
  setProperty(); //스크롤 할 때 변해야 할 값들의 변수를 선언한 함수
  changeS_titRight();

  if(winScrollTop > sectionMainTop && winScrollTop < sectionMainBottom) { //섹션에 진입했는지 체크합니다.

    if(!sectionIsMoving){ //애니메이션이 진행 중인지 체크합니다.
      sectionIsMoving = true; //섹션이 이동 중인지 체크하는 변수
      moveStartRender(); //섹션 이동을 처리하는 함수
    }//한번만 적용되기 때문에 콜백 함수를 적용시켜줌
    
  }

  if(winScrollTop >= sectionMainBottom) {
    activeCheck(); //새로고침을 할 때 페이지가 아래에서 시작할 경우 액티브돼야 할 요소들을 처리
  }

}

function init(){
  moveSection();
};

$(window).scroll(function(e){
  moveSection();
});

init();
//////////////


/*

// mainslide scroll interaction */

$('.check_con_main img.garden').mouseover(function(){
  $('.garden').stop(true).css({transform: 'scale(1.1)',filter: 'drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3))'}),
  $('.check_con_main span').css(({opacity: 1}))
}).mouseout(function(){
  $('.garden').stop(true).css({transform: 'scale(1)',filter: 'none'}),
  $('.check_con_main span').css(({opacity: 0}))
});

$('.shirt_conWrap img.shirt, .shirt_conWrap .txt_box').mouseover(function(){
  $('.shirt_conWrap img.shirt').stop(true).css({transform: 'scale(1.1)',filter: 'drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3))'})
}).mouseout(function(){
  $('.shirt_conWrap img.shirt').stop(true).css({transform: 'scale(1) rotate(10deg)',filter: 'none'})
});

$('.onepiece_conWrap img.onepiece, .onepiece_conWrap .txt_box').mouseover(function(){
  $('.onepiece_conWrap img.onepiece').stop(true).css({transform: 'scale(1.1)',filter: 'drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3))'})
}).mouseout(function(){
  $('.onepiece_conWrap img.onepiece').stop(true).css({transform: 'scale(1) rotate(-5deg)',filter: 'none'})
});

$('.onepiece_conWrap img.onepiece, .onepiece_conWrap .txt_box').mouseover(function(){
  $('.onepiece_conWrap img.onepiece').stop(true).css({transform: 'scale(1.1)',filter: 'drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3))'})
}).mouseout(function(){
  $('.onepiece_conWrap img.onepiece').stop(true).css({transform: 'scale(1) rotate(-5deg)',filter: 'none'})
});

$('.shose_conWrap img.shose, .shose_conWrap .txt_box').mouseover(function(){
  $('.shose_conWrap img.shose').stop(true).css({transform: 'scale(1.1) rotate(-15deg)',filter: 'drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3))'})
}).mouseout(function(){
  $('.shose_conWrap img.shose').stop(true).css({transform: 'scale(1) rotate(-5deg)',filter: 'none'})
});

$('.con_slide_wrap').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 3000
});

$('.styling_box',this).mouseover(function(){
  $(this).stop(true).css({filter: 'drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3))'}),
  $('.styling_box_bg',this).css(({opacity: 0})),
  $('.styling_txt',this).css({opacity: 0})
}).mouseout(function(){
  $(this).stop(true).css({filter: 'drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.2))'}),
  $('.styling_box_bg',this).css(({opacity: 1})),
  $('.styling_txt',this).css({opacity: 1})
});

})