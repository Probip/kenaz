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
        console.log(activeImg);
        $(".zoom-slider img").each(($i,$img)=>{
            /*slike se pojavljuju više puta u slideru, treba svakoj slici koja ima isti src tj. naziv dodijeliti klasu active */
            if($img.getAttribute('src')==activeImg){
                $img.classList.add('active');
            }
        })
        $('.zoom-slider-container:hover').css("backgroundImage", "url('"+activeImg+"')");
        $('.zoom-slider-container .zoom-img-lg').attr('src',activeImg);
    });
    
    //$('.zoom-slider-container .photo').zoom({url: '../assets/Layer\ 36.png'});
   // $('#test').zoom();

    $(".zoom-slider-container").mousemove((e)=>{ 
       if(e.target.className=='slick-list draggable'){
            var x,y;
            x = e.offsetX/e.target.offsetWidth*100;
            y = e.offsetY/e.target.offsetHeight*100;
            x=x+'%';
            y=y+'%';
            $('.zoom-slider-container').css("backgroundPositionX", x);
            $('.zoom-slider-container').css("backgroundPositionY", y);
            //console.log("e.offsetX : "+e.offsetX + ",e.offsetY : " + e.offsetY );
            //console.log("e.target.offsetWidth : "+e.target.offsetWidth + ",e.target.offsetHeight : " + e.target.offsetHeight );
            //console.log('x je: ',x,' y je: ',y);
        }
    });
    /*$('.zoom-slider-container .slick-prev').click(()=>{
        $(".zoom-slider").find('img.active').removeClass('active');
        $('.zoom-slider img:last').addClass('active');
        console.log( $('.zoom-slider img:last'));
    });*/
    $(".tag-item").click((e)=>{
        $(".tag-container").find('button.tag-item.active').removeClass('active');
        $(e.target).addClass('active');
        //ako više tagova može biti aktivno u isto vrijeme:
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