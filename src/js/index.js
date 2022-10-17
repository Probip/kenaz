import 'jquery';
import { event, timers } from 'jquery';
//import 'zoom';
//import zoom from 'jquery-zoom';
import '@zeitiger/elevatezoom';
require('slick-carousel');

$(document).ready(function(){
   var n=1;
    $(".slick-slider.slider1").slick({
        slidesToShow: 1,
        infinite:true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: true,
    });
    /*slideri na index stranici unutar category */
    $(".slick-slider.slider2").slick({
        slidesToShow: 1,
        infinite:true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
    $(".slick-slider.slider3").slick({
        slidesToShow: 1,
        infinite:true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: true,
        prevArrow: $('.prev3'),
        nextArrow: $('.next3')
    });
    $(".slick-slider.slider4").slick({
        slidesToShow: 2,
        infinite:true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        arrows: true,
        prevArrow: $('.prev4'),
        nextArrow: $('.next4')
    });
    $(".zoom-slider").slick({
        slidesToShow: 7,
        infinite:true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: true,
        focusOnSelect: true,
    });
    $(".zoom-slider-img").click((e)=>{
        $(".zoom-slider").find('img.active').removeClass('active');
        const activeImg=$(e.target).attr('src');
        console.log(activeImg);
        $(".zoom-slider img").each(($i,$img)=>{
            if($img.getAttribute('src')==activeImg){
                $img.classList.add('active');
            }
        })
        $('.zoom-slider-container .zoom-img-lg').attr('src',activeImg);
    });
   $('.zoom-img-icon').click(()=>{
        n=1;
        const activeImg=$(".zoom-slider").find('img.active').attr('src');
        $('.modal').css('visibility','visible');
        $('.modal-img').attr('src',activeImg);
        $('.modal-img').css('transform','scale('+n+')');
        $('.modal-img').css('display','block');
   })
   $('#close').click(()=>{
        $('.modal').css('visibility','hidden');
        $('.modal-img').css('display','none');
        n=1;
   });
   $('#zoom-in').click(()=>{
        if(n<=3){
            n=n+0.4;
        }
        $('.modal-img').css('transform','scale('+n+')');
    });
   $('#zoom-out').click(()=>{
        if(n>1){
            n=n-0.4;
        }
        $('.modal-img').css('transform','scale('+n+')');
    });

    /*uvećanje za hover preko slike */
    /*$(".zoom-slider-container").mousemove((e)=>{ 
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
    });*/
    $('.zoom-slider-container .slick-arrow').click(()=>{
        $(".zoom-slider").find('.active').removeClass('active');
        $('.slick-current img').addClass('active');
        const activeImg=$(".zoom-slider").find('.active').attr('src');
        $('.zoom-slider-container .zoom-img-lg').attr('src',activeImg);
    });

    /*footer tagovi */
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
    $('.categories li').click((e)=>{
        $('.categories').find('li.active').removeClass('active');
        //$('.categories li').css('display','flex');
        $(e.target).parent().addClass('active');
       // $('.categories ul').css('visibility','hidden');
        //$('.categories li.active').css('display','flex');
    })
   /* $('.categories li.active').click(()=>{  
        $('.categories li').css('display','flex');
    })*/
})