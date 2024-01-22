// document.querySelectorAll('.category-button').forEach(button => {
//   button.addEventListener("click", event => {
//     document.querySelector('#active-category-button').removeAttribute('id');
//     button.setAttribute('id', 'active-category-button');
//     // console.log("클릭 발생");
//   })
// })
$('.category-button').each(function(index, value){
  value.addEventListener("click", event => {
    // console.log('test'); // 디버깅
    // $('#active-category-button').removeAttribute('id');
    document.querySelector('#active-category-button').removeAttribute
    value.setAttribute('id', 'active-category-button');
  })
})