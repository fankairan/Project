
$(function(){
//-----box1 底部按钮切换大图-----
$('#main_body>.main_box_1>.box_bott_part li a').on('click',function(e){
        e.preventDefault();
        var $a=$(this);
        var $as=$('#main_body>.main_box_1>.box_bott_part li a');
        var i=parseInt($as.index($a));
        $a.css('background-position',`-${i*159}px -100px`).parent().siblings().children().css('background-position','').removeClass('act');

        $(`#main_body>.main_box_1>.box_top_part ul>li:nth-child(${i+1})`).removeClass('none').siblings().addClass('none');
});

//--------box2 头部a切换--------
 $('#main_box_2>.box_top_2 li a').on('click',function(e){
    e.preventDefault();
    var $a=$(this);
    var $as=$('#main_box_2>.box_top_2 li a');
    var i=parseInt($as.index($a)+1);
    $a.addClass('act').parent().siblings().children().removeClass('act');
    $(`#main_box_2>div:nth-child(${i+1})`).removeClass('none').siblings().addClass('none');
    $('#main_box_2>div:first-child').removeClass('none');

 });



//--------------职业选择按钮--------------

var $jBtns=$('#main_box_2>div:nth-child(2)>div:first-child');
$jBtns.on('mouseover',function(e){
    var $a=$(e.target);
    if($a.is('a')){
        var $as=$('#main_box_2>div:nth-child(2)>div:first-child li a');
        var i=$as.index($a)+1;
        $a.parent().addClass('pro_style')
          .siblings().removeClass('pro_style');
           //--------------切换职业大图--------------
        $(`#main_box_2>div:nth-child(2)      >div:last-child>div:nth-child(${i})`)
        .removeClass('hidden').siblings().addClass('hidden');
    }

});


//--------------职业上下滑动 按钮--------------
$('#main_box_2>div:nth-child(2)>a').on('click',function(){
    var $a=$(this);
    if($a.hasClass('btn_bot')){
        $a.prev().prev().css('top','-53px').removeClass('flowhide');
        $a.prev().removeClass('hidden');
        $a.addClass('hidden');
    }else{
        $a.prev().addClass('flowhide').css('top','0');
        $a.next().removeClass('hidden');
        $a.addClass('hidden');
    }
})



//----------  触发视频播放  -----------
$('#main_box_2>div:nth-child(2)>div:last-child>div>a').on('click',function(e){
    e.preventDefault();
    var $a=$(this);
    var $as=$('#main_box_2>div:nth-child(2)>div:last-child a');
    //--  获取对应视频ID  --
    var i=parseInt($as.index($a)+1);
    //---------------------------------
    $('#video_player').addClass('act_play');
    $('#cover_up').removeClass('none');
     //----  视频关闭按钮  ----
       $('#video_player>.close').on('click',function(e){
            e.preventDefault();
            $('#video_player').removeClass('act_play')
            $('#cover_up').addClass('none');
        })

     //--------动态获取 index视频路径----------3
     var vid=i;
     $.ajax({
        url:'http://127.0.0.1:3000/video/indexVideo',
        type:'get',
        data:{vid},
        dataType:'json',
        success:function(res){
            var data=res[0];
            var vName=data.video_name;
            var vSrc=data.video_src;
            var html=`<div class='v_box'>
                        <h2>${vName}</h2>
                        <video src='${vSrc}' id='v_index' controls autoplay></video>
                      </div>`;
            $('div.v_box').remove();
            $('#video_player').append(html);     
        }
     })
  })

})



