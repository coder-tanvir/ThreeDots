$(document).ready(function(){

$('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
})


$('.accordion-header').click(function(){
    $( '.accordion-body').slideUp(); 
    $(this).next('.accordion-body').slideDown();
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-'); 
    
})

});