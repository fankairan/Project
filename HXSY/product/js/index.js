



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
     



})

//--------动态获取 index视频路径----------
