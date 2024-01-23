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
    $('input').attr('placeholder', '')
});