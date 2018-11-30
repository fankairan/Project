
/*  ----------  左侧媒体模块 ----------  */
$('#content .left_media a img').click(function(){
    alert('系统维护中，敬请谅解');
})


/*  ----------  中央轮播图 ----------  */
$(function(){
    function task(){
        var $li=$('#middle>.main_carousel li.show');
        if($li.next().html()){
            $li.next().removeClass('hide').addClass('show')
            .siblings().removeClass('show').addClass('hide');
        }else{
            $li.parent().children(':first-child').removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide');
        }
            var i=parseInt($li.index())+2;
            $(`#middle>.main_carousel>
            .carousel_btn>a:nth-child(${i==8? 1:i})`).addClass('act_style').siblings().removeClass('act_style');
       
    }
      setInterval(task,5000);

         /*------------  story轮播  -------------*/ 
      function story(){
         var $li=$('#middle>.story_show>.story_body li.show');
         if($li.next().html()){
            $li.next().removeClass('hide').addClass('show')
            .siblings().removeClass('show').addClass('hide');
         }else{
            $li.parent().children(':first-child').removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide');
         }    
      }
       var clStory=setInterval(story,5000);
       /*------------  story页眉切换  -------------*/ 
       $('#middle>.story_show>.story_header a').on('mouseover',function(){
        var $a=$(this);
        var i=parseInt($a.index()+1);
        $a.addClass('story_act').siblings().removeClass('story_act');
        $(`#middle>.story_show>.story_body>div:nth-child(${i})`).removeClass('none').siblings('div').addClass('none');
    
        var $ps=$('.story_show>.story_body p');
            $($ps[i-1]).removeClass('none').siblings('p').addClass('none');
     })
           /*----------  story按钮切换  ----------*/ 
      $('#middle>.story_show>.story_body>a').click(function(){
            var $a=$(this);
            var $lis=$('.story_show>.story_body li');
            var $li=$('.story_show>.story_body li.show');
            var i=parseInt($li.index()+1);
            if($a.hasClass('st_prev')){
                $(`.story_show>.story_body ul>li:nth-child(${i==1? $li.length:i-1})`).removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide');   
            }else{
                $(`.story_show>.story_body ul>li:nth-child(${i==$li.length? 1:i+1})`).removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide');   
            }
     })
    
     /*----------  story 鼠标经过停止轮播  ----------*/ 

     $('.story_show>.story_body').on('mouseleave',function(){
        var clStory=setInterval(story,5000);
    });
    
     $('.story_show>.story_body').on('mouseenter',function(event){
        clearInterval(clStory);  
        console.log(111);
     });
     
    
})


/*  ----------  中央新闻栏 切换 ----------  */
    $('#middle>.main_news>ul:first-child').on('mouseover','a',function(){
        var $a=$(this);
        $a.addClass('title_act').parent().siblings().children().removeClass('title_act');
        var $as=$('#middle>.main_news>ul:first-child a');
        var i=parseInt($as.index($a))+1;
            $(`#middle>.main_news>.news_box>div:nth-child(${i})`).removeClass('none').siblings().addClass('none');
    })


/*  ----------  职业选项卡 切换 ----------  */
  $('#middle>.the_job>.job_tabs li').on('mouseover',function(){
        var $li=$(this);
        var i=parseInt($li.index()+1);
        $li.children().addClass('job_act').parent().siblings().children().removeClass('job_act')
        //切换职业大图 
        $(`#middle>.the_job>.job_intr:nth-child(${i})`).removeClass('none').siblings().addClass('none');
  })


