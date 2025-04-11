$(function(){
  $('.btn').on('click', function(){
    const message = 'クリックされました！';
    $('.text-box').val(message); 
    console.log(message + $('.text-box').val());
  });
});