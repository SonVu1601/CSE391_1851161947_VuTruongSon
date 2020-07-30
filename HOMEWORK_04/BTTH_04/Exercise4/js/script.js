$(document).ready(function(){
  
    $('.square1').on("click",function(){
   
        $(this).css({'width':'50px','height':"50px"});
      
    })
    $('.rectangle1').on('click',function(){
        $(this).css("margin-top","10px");
        
    })
      $(".circle1").on('click', function(){
        
        $(this).css("background-color","green");
    })
})