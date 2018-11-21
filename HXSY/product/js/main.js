
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
})