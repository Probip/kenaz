import 'jquery';
import { event } from 'jquery';
//import 'zoom';
//import zoom from 'jquery-zoom';
import '@zeitiger/elevatezoom';
//import { ids } from 'webpack';
require('slick-carousel');

$(document).ready(function(){
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
            /*slike se pojavljuju više puta u slideru, treba svakoj slici koja ima isti src tj. naziv dodijeliti klasu active */
            if($img.getAttribute('src')==activeImg){
                $img.classList.add('active');
            }
        })
    });
    //$('.zoom-slider-container .photo').zoom({url: '../assets/Layer\ 36.png'});
   // $('#test').zoom();
    $('.zoom-slider-container').click(()=>{
        console.log('klik na zoom sliku');
    });
    $(".zoom-slider-container").bind('mousemove',function(e){ 
        console.log("e.pageX: "+e.pageX + ", e.pageY: " + e.pageY); 
    });
   
    $(".tag-item").click((e)=>{
        $(".tag-container").find('button.tag-item.active').removeClass('active');
        $(e.target).addClass('active');
        //ako više tagova može biti aktivno u isto vrijeme (umjesto linija 41 i 42):
        //$(e.target).toggleClass('active');
    });
    var activeTab;
    $('.tabs-list li').click((e)=>{
        //console.log(e.target);
        var br=1;
        $('.tabs-list').find('li.active').removeClass('active');
        $('.tabs-list li').each(($i,$li)=>{
            if($li==e.target){
                e.target.classList.add('active');
                activeTab="#tab-"+br;
                console.log(activeTab);
                $('.tabs-content').removeClass('active');
                $(activeTab).addClass('active');
            }
            br++;
        });
    });
})