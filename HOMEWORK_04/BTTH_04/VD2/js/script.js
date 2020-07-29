$(function(){
    $(".ndmotkhoi").slideUp();
    $(".motkhoi h3").click(function(event){
        console.log("Đã kích rồi!")
        $(this).next(".ndmotkhoi").slideToggle();
        $(this).toggleClass("xanh")   
    });
});