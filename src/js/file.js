import data from '../data/data.json';
var cat='news',news='',name,email,text,d,hours,timeOfTheDay,minutes,date,htmlComment='';


$(document).ready(function(){


    //NAČIN 1:
  /*function categoryMainContent(cat){
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


    
    function createComment(name,email,text,date,hours) {
        htmlComment='<div class="row pt-45 m-50-30-0-30"><img src="./imgs/user1.png" alt="user image"><span><div class="row space-between p-0"><div class="row p-0"><p class="user p-0">';
        htmlComment+=name+'</p><p class="date p-0">'+date+' '+hours+'</p></div><a class="reply">Reply</a></div>';
        htmlComment+='<p class="p-0 text-comment">'+text+'</p></span></div>';
        return htmlComment;
    }


    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    $('#submit-comment').click((e)=>{
        
        e.preventDefault();
        name=$('form #name').val();
        email=$('form #email').val();
        text=$('form #text').val();
        if((name!='')&&(email!='')&&text!=''){
            $('form #name').val('');
            $('form #email').val('');
            $('form #text').val('');
            d=new Date();
            
            hours=d.getHours();
            timeOfTheDay='am';
            if(hours>12){
                hours=hours-12;
                timeOfTheDay='pm';
            }
            minutes=d.getMinutes();
            if(minutes<10){
                minutes='0'+minutes;
            }
            hours=hours+':'+minutes+' '+timeOfTheDay;
            date=month[d.getMonth()]+' '+d.getDate()+','+d.getFullYear();
            console.log(name,email,text,date,hours);


            data.comments.push({"name":name,"email":email,"text":text,"date":date,"hours":hours});
            console.log(data.comments);


            //da se novi komentar prikaže prvi među svim komentarima:
            //$('#comments h2:first-of-type').after(createComment(name,email,text,date,hours));
            $('#comments h2:last-of-type').before(createComment(name,email,text,date,hours));
        }
        else{
            alert('Kako biste uspješno objavili komentar obavezno je ispuniti sve podatke.');
        }
    })
    */




   //NAČIN 2 (getJSON)

    $('.categories li').click((e)=>{
        $('.categories').find('li.active').removeClass('active');
        $(e.target).parent().addClass('active');
        cat=e.target.innerText;
        cat=cat.toLowerCase();
    })//isto


    function categoryMainContent(cat,v){
        news='<div class="news-list-item"><h2>'+cat[0].toUpperCase()+cat.slice(1)+'</h2></div>';
        $(v).each((i,value)=>{
            news +='<div class="news-list-item"><h2>'+value.title+'</h2>';
            news +='<div class="row"><p class="date"><img src="./imgs/calendar.svg" alt="kalendar">'+value.date+'</p><p class="date">'+value.author+'</p><p class="date">'+value.comments+' Comments</p></div>';
            news +='<div class="row-grid"><img src="'+value.img+'" alt="article img"><p>'+value.text+'</p><button class="btn-news"><a href="./single.html">Read article</a></button></div></div><hr class="line"/>';
        })
        news +='<div class="page-number row"><div class="number">1</div><div class="number">2</div><div class="number">3</div><div class="number active">4</div><div class="number">5</div><div class="number">6</div><div class="number">7</div><div class="number">8</div><div class="number">9</div><div class="number">10</div></div>';
        return news;
    }//dodan parametar v


     $('.categories li a').click(()=>{
        console.log('klik na test button.');
        $.getJSON("./data/data.json",(obj)=>{
            $.each(obj, (category,val)=>{
                if(category==cat){   
                    $('#category-main-content').html(categoryMainContent(cat,val));
                }
            })
        })
    })//novo
if(cat=='news'){
    $.getJSON("../data/data.json",(obj)=>{
        var value=obj[cat];
        console.log(cat)
        $('#category-main-content').html(categoryMainContent(cat,value));
    })
}
    function createComment(name,email,text,date,hours) {
        htmlComment='<div class="row pt-45 m-50-30-0-30"><img src="./imgs/user1.png" alt="user image"><span><div class="row space-between p-0"><div class="row p-0"><p class="user p-0">';
        htmlComment+=name+'</p><p class="date p-0">'+date+' '+hours+'</p></div><a class="reply">Reply</a></div>';
        htmlComment+='<p class="p-0 text-comment">'+text+'</p></span></div>';
        return htmlComment;
    }//isto


    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    $('#submit-comment').click((e)=>{
        e.preventDefault();
        name=$('form #name').val();
        email=$('form #email').val();
        text=$('form #text').val();
        if((name!='')&&(email!='')&&text!=''){
            $('form #name').val('');
            $('form #email').val('');
            $('form #text').val('');
            d=new Date();
            
            hours=d.getHours();
            timeOfTheDay='am';
            if(hours>12){
                hours=hours-12;
                timeOfTheDay='pm';
            }
            minutes=d.getMinutes();
            if(minutes<10){
                minutes='0'+minutes;
            }
            hours=hours+':'+minutes+' '+timeOfTheDay;
            date=month[d.getMonth()]+' '+d.getDate()+','+d.getFullYear();
            console.log(name,email,text,date,hours);
            //do tu je isto

            $.getJSON("../data/data.json",(obj)=>{
                $.each(obj, (key,val)=>{
                    if(key=='comments'){
                        console.log(key,val);
                        val.push({"name":name,"email":email,"text":text,"date":date,"hours":hours});
                    } 
                })
            })//novo
            $('#comments h2:last-of-type').before(createComment(name,email,text,date,hours));     
        }
        else{
            alert('Molimo upišite sve podatke.');
        }
    })
})