
$(function(){ 

//   canvas绘图 获取随机验证码
  function checkNumber(){
      console.log(111);
        var c3=document.getElementsByClassName('c3')[0];
        var ctx=c3.getContext('2d');

        ctx.fillStyle=rc(150,230);
        ctx.fillRect=(0,0,113,28);

        var pool='ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwwxyz0123456789';
        for(var i=1;i<5;i++){
            var c=pool[rn(0,pool.length)];
            var fs=rn(20,25);
            
            ctx.font=fs+'px SimHei';
            ctx.textBaseline='top';
            ctx.fillStyle=rc(30,180);
            ctx.fillText(c,i*20,0);
        }
        
        for(var i=0;i<5;i++){
            ctx.beginPath();
            ctx.strokeStyle=rc(0,230);
            ctx.moveTo(rn(0,120),rn(0,30));
            ctx.lineTo(rn(0,120),rn(0,30));
            ctx.stroke();
        }
        
        for(var i=0;i<66;i++){
            ctx.fillStyle=rc(0,255);
            ctx.beginPath();
            ctx.arc(rn(0,120),rn(0,30),0.8,0,2*Math.PI);
            ctx.fill();
        }           
        function rn(min,max){
            var n=Math.random()*(max-min)+min;
            return Math.floor(n);
        }

        function rc(min,max){
            var r=rn(min,max);
            var g=rn(min,max);
            var b=rn(min,max);
            return `rgb(${r},${g},${b})`;
        }

    }

        checkNumber() 

    // 清楚画布方法
    function clearNumber(){
        var c3=document.getElementsByClassName('c3')[0];
        var ctx=c3.getContext('2d');
        ctx.clearRect(0,0,c3.width,c3.height);

    }

    // 换一张 切换随机验证码
    $('#user_reg>.reg_box>.reg_body>ul>.ver>.toHelp').on('click',function(){
        clearNumber()
        checkNumber()
    })



//切换注册方式
    $('#user_reg>.reg_header a').on('click',function(e){
        clearNumber()
        checkNumber() 
        e.preventDefault();
        var $a=$(this);
        var $as=$('#user_reg>.reg_header a');
        var i=parseInt($as.index($a)+1);
        $(`#user_reg>.reg_header>span:nth-child(${i})`).addClass('act').siblings().removeClass('act');

        //切换注册方式
        $(`#user_reg>.reg_box>div:nth-child(${i})`).removeClass('none').siblings().addClass('none');

    })



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
        $(`#main_box_2>div:nth-child(2)>div:last-child>div:nth-child(${i})`)
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



