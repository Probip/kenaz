import 'jquery';
import { event, timers } from 'jquery';
//import 'zoom';
//import zoom from 'jquery-zoom';
import '@zeitiger/elevatezoom';
require('slick-carousel');
/*carousels */
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
        const activeImg=$(e.target).attr('src');
        var acImg;
        console.log(activeImg);
        $(".zoom-slider img").each(($i,$img)=>{
            /*slike se pojavljuju više puta u slideru, treba svakoj slici koja ima isti src tj. naziv dodijeliti klasu active */
            if($img.getAttribute('src')==activeImg){
                $img.classList.add('active');
            }
        })
        acImg=activeImg
        acImg=acImg.slice(5);
        console.log('aktivna slika ',acImg);
        $('.zoom-slider-container').css("backgroundImage", activeImg);
        $('.zoom-slider-container').append(activeImg);
    });
    //$('.zoom-slider-container .photo').zoom({url: '../assets/Layer\ 36.png'});
   // $('#test').zoom();
    $('.zoom-slider-container img-lg').click(()=>{
        console.log('klik na zoom sliku');
    });
    $(".zoom-slider-container").bind('mousemove',function(e){ 
        
        console.log("e.pageX: "+e.pageX + ", e.pageY: " + e.pageY); 
        console.log("e.offsetX : "+e.offsetX + ",e.offsetY : " + e.offsetY );
       console.log(e.target.className);
       if(e.target.className=='slick-list draggable'){
            var x,y,zoomer = e.target;
            x = e.offsetX/zoomer.offsetWidth*100;
            y = e.offsetY/zoomer.offsetHeight*100;
            x=x+'%';
            y=y+'%';
            console.log('x je: ',x,' y je: ',y);
            $('.zoom-slider-container').css("backgroundPositionX", x);
            $('.zoom-slider-container').css("backgroundPositionY", y);
        }
    });
   
    $(".tag-item").click((e)=>{
        $(".tag-container").find('button.tag-item.active').removeClass('active');
        $(e.target).addClass('active');
        //ako više tagova može biti aktivno u isto vrijeme (umjesto linija 41 i 42):
        //$(e.target).toggleClass('active');
    });


    /*tabovi u sidebaru */
    var activeTab;
    $('.tabs-list li').click((e)=>{
        //console.log(e.target);
        $('.tabs-list').find('li.active').removeClass('active');
        $('.tabs-list li').each((i,li)=>{
            if(li==e.target){
                e.target.classList.add('active');
                activeTab="#tab-"+(i+1);
                //console.log(activeTab);
                $('.tabs-content').removeClass('active');
                $(activeTab).addClass('active');
            }
        });
    });
})