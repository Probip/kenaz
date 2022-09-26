import './scss/main.scss';
import 'jquery';
require('slick-carousel');
console.log('Heloooooo world!');

$(document).ready(function(){
    console.log('koristi se jQuery');
    $(".slick-slider").slick({
        slidesToShow: 1,
        infinite:true,
        slidesToScroll: 1,
        //autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
       });
     
    
})
