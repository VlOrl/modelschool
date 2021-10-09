$('.burger_header').click(function(event){
    $('.burger_header, nav, .header_inner').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.btn_moduls_block1').click(function(event){
    $('.btn_moduls_block1, .active_block_moduls1').toggleClass('active');
});
$('.btn_moduls_block2').click(function(event){
  $('.btn_moduls_block2, .active_block_moduls2').toggleClass('active');
});
$('.btn_moduls_block3').click(function(event){
  $('.btn_moduls_block3, .active_block_moduls3').toggleClass('active');
});
$('.btn_moduls_block4').click(function(event){
  $('.btn_moduls_block4, .active_block_moduls4').toggleClass('active');
});
$('.btn_moduls_block5').click(function(event){
  $('.btn_moduls_block5, .active_block_moduls5').toggleClass('active');
});
$('.btn_moduls_block1').click(function () {
  if($(this).attr('data-show') === "true") {
      $(this).text("ПОДРОБНЕЕ");
      $(this).attr('data-show', "false"); 
  }
  else {
      $(this).text("СКРЫТЬ");
      $(this).attr('data-show', "true"); 
  }
});
$('.btn_moduls_block2').click(function () {
  if($(this).attr('data-show') === "true") {
      $(this).text("ПОДРОБНЕЕ");
      $(this).attr('data-show', "false"); 
  }
  else {
      $(this).text("СКРЫТЬ");
      $(this).attr('data-show', "true"); 
  }
});
$('.btn_moduls_block3').click(function () {
  if($(this).attr('data-show') === "true") {
      $(this).text("ПОДРОБНЕЕ");
      $(this).attr('data-show', "false"); 
  }
  else {
      $(this).text("СКРЫТЬ");
      $(this).attr('data-show', "true"); 
  }
});
$('.btn_moduls_block4').click(function () {
  if($(this).attr('data-show') === "true") {
      $(this).text("ПОДРОБНЕЕ");
      $(this).attr('data-show', "false"); 
  }
  else {
      $(this).text("СКРЫТЬ");
      $(this).attr('data-show', "true"); 
  }
});
$('.btn_moduls_block5').click(function () {
  if($(this).attr('data-show') === "true") {
      $(this).text("ПОДРОБНЕЕ");
      $(this).attr('data-show', "false"); 
  }
  else {
      $(this).text("СКРЫТЬ");
      $(this).attr('data-show', "true"); 
  }
});

const anchors = document.querySelectorAll('a[href*="@"]')

// for (let anchor of anchors) {
//   anchor.addEventListener("click", function(event){
//     event.preventDefault();
//     const blockID = anchor.getAttribute('href')
//     document.querySelectorAll('' + blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     })
//   })
// }
$('a[href^="#"').on('click', function() {
  $('nav').remove('active');
  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});