$(function(){
  var mobileNavOpenBtn = document.querySelector('.mobileNavOpenBtn');
  var mobileNavCloseBtn = document.querySelector('.mobileNavCloseBtn');
  var mobileNavBg = document.querySelector('.mobileNavBg');
  var mobileNavWrap = document.getElementById('mobileNavWrap');

  function mobileNavOpen() {
    mobileNavBg.style.display = 'block';
    mobileNavWrap.style.width = '75%';
    mobileNavOpenBtn.classList.add('on');
    mobileNavCloseBtn.style.display = 'block';
  }

  function mobileNavClose() {
    mobileNavBg.style.display = 'none';
    mobileNavWrap.style.width = '0%';
    mobileNavOpenBtn.classList.remove('on');
    mobileNavCloseBtn.style.display = 'none';
  }

  mobileNavOpenBtn.addEventListener("click",function() {
    mobileNavOpen();
  });
  mobileNavCloseBtn.addEventListener("click",function() {
    mobileNavClose();
  });
  mobileNavBg.addEventListener("click",function() {
    mobileNavClose();
  });

  var gnbSearch = document.querySelector('#gnbSearchWrap');
  var searchBtnClose = document.querySelector('.searchBtnClose');
  var searchBtn =document.querySelector('.searchBtn');
  var mobilSearchBtn =document.querySelector('.newsearch');
  var gnbSearchBg =document.querySelector('.gnbSearchBg');

  function gnbSearchOpen() {
    gnbSearchBg.style.display = 'block';
    gnbSearch.style.height = '100px';
  }

  function gnbSearchClose() {
    gnbSearchBg.style.display = 'none';
    gnbSearch.style.height = '0px';
  }

  searchBtn.addEventListener("click",function() {
    gnbSearchOpen();
  });
  mobilSearchBtn.addEventListener("click",function() {
    gnbSearchOpen();
  });
  searchBtnClose.addEventListener("click",function() {
    gnbSearchClose();
  });
  gnbSearchBg.addEventListener("click",function() {
    gnbSearchClose();
  });



});