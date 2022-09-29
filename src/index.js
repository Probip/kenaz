import './scss/main.scss';
import 'jquery';
import { event } from 'jquery';
require('slick-carousel');
console.log('Heloooooo world!');

$(document).ready(function(){
    console.log('koristi se jQuery');
    $(".slick-slider.slider1").slick({
        slidesToShow: 1,
        infinite:true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: true,
       });
       $(".zoom-slider").slick({
        slidesToShow: 7,
        infinite:true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: true,
        //focusOnSelect: true,
       });
       $(".zoom-slider-img").click((e)=>{
        $(".zoom-slider").find('img.active').removeClass('active');
        const activeImg=$(e.target).attr('src');//ime slike na koju je korisnik kliknuo
        $(".zoom-slider img").each(($i,$img)=>{
            /*slike se pojavljuju više puta u slideru
            treba svakoj slici koja ima isti src tj. naziv 
            dodijeliti klasu active */
            if($img.getAttribute('src')==activeImg){
                //console.log('pronađena slika');
                $img.classList.add('active');
            }
        })
       });
       $(".zoom-slider-container").bind('mousemove',function(e){ 
        console.log("e.pageX: "+e.pageX + ", e.pageY: " + e.pageY); 
});
       $(".tag-item").click((e)=>{
        $(".tag-container").find('button.tag-item.active').removeClass('active');
        $(e.target).addClass('active');
        //ako više tagova može biti aktivno u isto vrijeme:
        //$(e.target).toggleClass('active');
       });
    
})
