$(function(){
   /*--------  安装步骤 切换  --------*/
   $('#main>.middle_content>.install_step>ul a').on('mouseover',function(){
       var $a=$(this);
       var $as=$('#main>.middle_content>.install_step>ul a');
       var i=parseInt($as.index($a)+1);
       $(`#main>.middle_content>.install_step>ul>li:nth-child(${i})>a`).addClass('act').parent().siblings().children().removeClass('act');
       $(`#main>.middle_content>.install_step>.step_img>div:nth-child(${i})`).removeClass('none').siblings().addClass('none');
   })
})