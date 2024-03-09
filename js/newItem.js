$(function () {

  var new_Slides = document.querySelector('#new_slide_wrap');
  var new_Slide = document.querySelectorAll('#new_slide_wrap .prd');
  var img_wrap = document.querySelectorAll('.prd_wrap .prd_img');
  var new_currentIdx = 0;
  var new_slideCount = new_Slide.length;
  var slideWidth = 280;
  var slideMargin = 20;
  var moveAmt = slideWidth + slideMargin;
  var maxSlides = 4;
  var s_maxSlides = 2;
  var newslide;
  var newslideWidth;
  var new_prevButton = document.querySelector('.new_item .prev');
  var new_nextButton = document.querySelector('.new_item .next');

  newslideWidth = slideWidth;


  // clone
  for (var i = 0; i < maxSlides; i++) {
    var cloneSlide = new_Slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    new_Slides.appendChild(cloneSlide);
  }
  for (var i = new_slideCount - 1; i >= 0; i--) {
    var cloneSlide = new_Slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    new_Slides.prepend(cloneSlide);
  }

  // 가로배열하기
  function slideLayout(sw, sm) {
    newslide = document.querySelectorAll('#new_slide_wrap .prd');
    moveAmt = sw + sm;
    newslide.forEach(function (item, index) {
      item.style.left = moveAmt * index + 'px';
      item.style.width = sw + 'px';
    });
  }
  slideLayout(slideWidth, slideMargin);

  //중앙 배치하기 
  function setSlide() {
    var ulMoveAmt = -new_slideCount * moveAmt + 'px';
    new_Slides.style.transform = 'translateX(' + ulMoveAmt + ')';
    new_Slides.classList.add('animated');
  }
  setSlide();

  //좌우 버튼으로 이동하기
  new_nextButton.addEventListener('click', function () {
    moveSlide(new_currentIdx + 1);
  });
  new_prevButton.addEventListener('click', function () {
    moveSlide(new_currentIdx - 1);
  });

  //   //moveSlide 함수
  function moveSlide(num) {
    new_Slides.style.left = moveAmt * -num + 'px';
    new_currentIdx = num;

    if (new_currentIdx == new_slideCount || new_currentIdx == -new_slideCount) {
      setTimeout(function () {
        new_Slides.classList.remove('animated');
        new_Slides.style.left = '0px';
        new_currentIdx = 0;
      }, 500);

      setTimeout(function () {
        new_Slides.classList.add('animated');
      }, 600);
    }
  }

  //자동슬라이드
  var timer = undefined;
  var slideWrapper = document.querySelector('.new_item .con_wrap');

  function autoSlide() {
    if (timer == undefined) {
      timer = setInterval(function () {
        moveSlide(new_currentIdx + 1);
      }, 3000);
    }
  }
  autoSlide();

  function stopSlide() {
    clearInterval(timer);
    timer = undefined;
  }

  slideWrapper.addEventListener('mouseenter', function () {
    stopSlide();
  });

  slideWrapper.addEventListener('mouseleave', function () {
    autoSlide();
  });

  //반응형 슬라이드
  window.addEventListener('resize', function () {
    var currentWidth = document.querySelector('body').offsetWidth;

    if (currentWidth < 767) {
      var slidesWidth = new_Slides.offsetWidth;
      var img_wrapWidth = img_wrap.offsetHeight;
      var newslideHeight = new_Slide.offsetHeight;
      newslideWidth = (slidesWidth - (slideMargin * s_maxSlides - 1)) / 2;
      img_wrapWidth = newslideWidth;
      newslideHeight = img_wrapWidth
    } else {
      newslideWidth = slideWidth;

    }

    if (currentWidth <= 400) {
      newslideWidth = new_Slides.offsetWidth;
    }
    slideLayout(newslideWidth, slideMargin);
    setSlide();

  });


  $('.prd_wrap .prd', this).mouseover(function () {

    var windowWidth = window.outerWidth;

    if (windowWidth < 767) {
      $('.prd_img img', this).stop(true).css({
        transform: 'scale(1.1)',
        transition: 'transform .5s'
      })
    } else {
      $('.prd_img img', this).stop(true).css({
        transform: 'scale(1.1)',
        transition: 'transform .5s'
      })
      $('.prd_txt', this).stop(true).animate({
        bottom: 0
      }, 300);
    }
  });

  $('.prd_wrap .prd', this).mouseout(function () {

    var windowWidth = window.outerWidth;

    if (windowWidth < 767) {
      $('.prd_img img', this).stop(true).css({
        transform: 'scale(1)',
        transition: 'transform .5s'
      })
    } else {
      $('.prd_img img', this).stop(true).css({
        transform: 'scale(1)',
        transition: 'transform .5s'
      })
      $('.prd_txt', this).stop(true).animate({
        bottom: '-50%'
      }, 300);
    }
  });

})