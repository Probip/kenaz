import data from '../data/data.json'
console.log("učitan je file.js koji je u js folderu!");
var cat='news',news='';
console.log(data.news[0].title);
$(document).ready(function(){

    function categoryMainContent(cat){
        news='<div class="news-list-item"><h2>'+cat[0].toUpperCase()+cat.slice(1)+'</h2></div>';
        $(data[cat]).each((i,value)=>{
            news +='<div class="news-list-item"><h2>'+value.title+'</h2>';
            news +='<div class="row"><p class="date"><img src="./imgs/calendar.svg" alt="kalendar">'+value.date+'</p><p class="date">'+value.author+'</p><p class="date">'+value.comments+' Comments</p></div>';
            news +='<div class="row-grid"><img src="'+value.img+'" alt="article img"><p>'+value.text+'</p><button class="btn-news"><a href="./single.html">Read article</a></button></div></div><hr class="line"/>';
        })
        news +='<div class="page-number row"><div class="number">1</div><div class="number">2</div><div class="number">3</div><div class="number active">4</div><div class="number">5</div><div class="number">6</div><div class="number">7</div><div class="number">8</div><div class="number">9</div><div class="number">10</div></div>';
        return news;
    }
    
    $('.categories li').click((e)=>{
        $('.categories').find('li.active').removeClass('active');
        $(e.target).parent().addClass('active');
        cat=e.target.innerText;
        cat=cat.toLowerCase();
        $('#category-main-content').html(categoryMainContent(cat));
    })
   
    $('#category-main-content').html(categoryMainContent(cat));


    /* $('#testbutton').click(()=>{
        console.log('klik na test button.');
        $.getJSON("../data/data.json",(obj)=>{
            $.each(obj, (key,val)=>{
                $('#testjson').append('<li>'+obj.title+'</li>')
                console.log(obj,obj.title);
            })
        })
    })*/
})