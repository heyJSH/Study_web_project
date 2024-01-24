// // vanilla js
// // 서브 메뉴 => 검색
// const searchE1 = document.querySelector('.search');
// const searchInputE1 = document.querySelector('input');

// input과 돋보기 아이콘을 클릭했을 때
// searchE1.addEventListener('click', function() {
//     console.log('이벤트 발생');
//     searchInputE1.focus();
// });

// // inputbox 포커스가 될 때 => 통합검색
// searchInputE1.addEventListener('focus', function() {
//     searchInputE1.setAttribute('placeholder', '통합검색');
// });

// // inputbox 포커스를 잃을 때
// searchInputE1.addEventListener('blur', function() {
//     searchInputE1.setAttribute('placeholder', '');
// });

// ======================================================
// jquery js
// const searchE12 = $('.search');
// const searchInputE12 = $('input');

// input과 돋보기 아이콘을 클릭했을 때
$('.search').click(function () {
    console.log('이벤트 발생'); // 디버깅
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

// 스크롤 내리면 배지 숨기기
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY > 500) {
      //  배지 숨기기
    //   $('.badges').hide();
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to('header .badges', 0.4, {
        opacity: 0,
        diaplay: "none"
      });
    }else{
      // 배지 보이기
    //   $('.badges').show();
      gsap.to('header .badges', 0.4, {
          opacity: 1,
          display: "block"
      });
    }
  
  }, 300)); // 0.3초

// visual 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(value, index) {
  // 디버깅
  console.log('index:' + index, value);
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(value, 1, {
    delay: (index + 1) * 0.7, // 0.7초 → 1.4초 → 2.1초 → 2.8초
    opacity: 1,
  })
});

// notice swiper rolling
new Swiper('.notice-line .swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true, // 반복재생여부
  // autoplay: true   // 속도가 느려 아래와 같은 코드를 사용
  autoplay: {
    delay: 2000,  // 단위는 ms
  }
});

// promotion swiper rolling
// ★슬라이드 보여줄 개수와 크기를 맞추는 것이 중요★
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드를 중앙에 위치
  autoplay: { // 자동재생여부
    delay: 3000,  // 3초마다 슬라이드 바뀜
  },
  loop: true, // 반복재생여부
  // swipe - pagination
  pagination: {   // 페이지 번호 사용
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true,  // 페이지 번호 클릭 제어 가능
  },
  // swipe - navigation
  navigation: { // 슬라이드 이전/다음 버튼 사용
    prevE1: '.promotion .swiper-prev',
    nextE1: '.promotion .swiper-next'
  }
});

// promotion 슬라이드 토글 기능
const promotionE1 = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  // 누를때마다 boolean 값이 반대로 됨 => JS 비행기 예시 참조
  isHidePromotion = !isHidePromotion;

  if(isHidePromotion) {
    promotionE1.classList.add('hide');
  } else {
    promotionE1.classList.remove('hide');
  }
});