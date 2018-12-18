$(function(){

    $('#main .sub_nav .jobs_sel li a').on('click',function(){
        var $a=$(this);
        var $as= $('#main .sub_nav .jobs_sel li a');
        var i=parseInt($as.index($a)+1);
        $a.addClass('act').parent().siblings().children().removeClass('act');

        $(`#main>.middle_content>div:nth-child(${i})`).removeClass('none').siblings().addClass('none');
    })



    //----------  触发视频播放  -----------
$('.middle_content>.jobs>.intro>.jobs_video>a').on('click',function(e){
    e.preventDefault();
    var $a=$(this);
    var $as=$('.middle_content>.jobs>.intro>.jobs_video>a');
    //--  获取对应视频ID  --
    var i=parseInt($as.index($a)+3);
    console.log(i);
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