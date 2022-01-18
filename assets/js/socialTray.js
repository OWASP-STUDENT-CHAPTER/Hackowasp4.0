$( document ).ready(function() {

    $('.social').prepend('<i class="fa fa-plus social-toggle"></i>');
  
  
    $('.social-toggle').click(function(){
      $(this).toggleClass('fa-plus fa-minus');
      $(".social-drop").slideToggle("300");
    })
  
  });