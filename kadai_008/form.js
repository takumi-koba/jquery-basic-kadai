$(function(){
  $('.btn').on('click', function(){
    const message = 'クリックしました！';
    $('.text-box').val(message); 
    console.log(message + $('.text-box').val());
  });
});