/*
// vanilla js
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

// input과 돋보기 아이콘을 클릭했을 때
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});
// inputbox 포커스가 될 때
searchInputEl.addEventListener('focus', function() {
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// inputbox 포커스를 잃을 때
searchInputEl.addEventListener('blur', function() {
  searchInputEl.setAttribute('placeholder', '');
});
*/

// jquery js
// input과 돋보기 아이콘을 클릭했을 때
$('.search').click(function() {
  $('input').focus();
});
// inputbox 포커스가 될 때
$('input').focus(function() {
  $('input').attr('placeholder', '통합검색');
});
// inputbox 포커스를 잃을 때
$('input').blur(function() {
  $('input').attr('placeholder', '');
});

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    //$('.badges').hide();
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to('header .badges', 0.4, {
      opacity: 0
    });
  } else {
    // 배지 보이기
    //$('.badges').show();
    gsap.to('header .badges', 0.4, {
      opacity: 1
    });
  }
}, 300)); // 0.3초


