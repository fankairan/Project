
$(function(){
     /*------------  一楼 时装轮播  -------------*/ 
    function clothesShow(){
       
        var $img=$('#content>.floor_1>.new_clothes>.img_box>img.show');
        var $imgs=$('.new_clothes>.img_box>img');
        var i=$imgs.index($img)+1;

        if(i<3){
            $img.next().addClass('show').siblings().removeClass('show');
        }else{
            $img.parent().children(':first-child').addClass('show').siblings().removeClass('show');
        }
    }
        var mClothesshow=setInterval(clothesShow,5000);

     /*----------  一楼 悬停停止轮播  -----------*/
     $('#content>.floor_1>.new_clothes>.img_box').on('mouseleave',function(){
        mClothesshow=setInterval(clothesShow,5000);
     });

     $('#content>.floor_1>.new_clothes>.img_box').on('mouseenter',function(){
        clearInterval(mClothesshow);
        mClothesshow=null;
     });


      /*------------  一楼 时装轮播 切换  -------------*/ 
      $('#content>.floor_1>.new_clothes>.img_tabs a').click(function(e){
          e.preventDefault();
          var $a=$(this);
          var $as=$('.new_clothes>.img_tabs a');
          var i=parseInt($as.index($a)+1);
          
           $a.children(':first-child').removeClass('hide').next().addClass('hide').parent().siblings().children(':first-child').addClass('hide').next().removeClass('hide');

           $(`#content>.floor_1>.new_clothes>div:nth-child(${i})`).removeClass('none').siblings().addClass('none').parent().children(':last-child').removeClass('none');
      });

       /*----------  二楼 鼠标跟随 放大镜 -----------*/ 
                    // 鼠标进入时
       $('#content>.floor_2>ul>li').on('mouseenter',function(e){
           e.preventDefault();
        var $li=$(this);
        var $lis= $('#content>.floor_2 ul li');
        var i=parseInt($lis.index($li)+1);

        // !!! 不可通过获取元素数组 再使用下标的方式给单个元素添加样式---报错 function is not defined!  !!!
        // var $pic=$('body>.pic_box>.zoom_pic')[i];
        
        var $pic=$(`body>.pic_box>div:nth-child(${i})`);
        // console.log($pic);
      // 获取鼠标当前位置
        var mx=0;
        var my=0;
       
          $('#content>.floor_2>ul>li').on('mousemove',function(e){
              mx=e.clientX;
              my=e.clientY+$(document).scrollTop();
            if(i>=1 && i<=3 || i>=7 && i<=9 || i>=13 && i<=15 || i>=19 && i<=21){
                $pic.css({'display':'block',
                          'left':`${mx+30}px`,
                          'top':`${my-250}px`
                         }).siblings().css({'display':'none',
                                          'left':'0px',
                                          'top':'0px'
                                        })
            }else{
                $pic.css({'display':'block',
                          'left':`${mx-530}px`,
                          'top':`${my-250}px`
                         }).siblings().css({'display':'none',
                                          'left':'0px',
                                          'top':'0px'
                                        })
            }

        })
        //   console.log(mx+'|'+my);
    })
              // 鼠标离开时
    $('#content>.floor_2>ul>li').on('mouseleave',function(){
        var $li=$(this);
        var $lis= $('#content>.floor_2 ul li');
        var i=parseInt($lis.index($li)+1);
        var $pic=$(`body>.pic_box>div:nth-child(${i})`);

            $pic.css({'display':'none',
                      'left':'0px',
                      'top':'0px'
                   })
    })

        /*--------  三楼 鼠标经过 切换相框图片 --------*/
        $('#content>.floor_3>.recommend>.hair').on('mouseover','a',function(){
            var $a=$(this);
            var $as= $('#content>.floor_3>.recommend>.hair a');
            var i=parseInt($as.index($a)+1);
            if(i<=9){
                var $img_l=$(`#content>.floor_3>.recommend>.hair>.rec_left>img:nth-child(${i})`);

                $img_l.removeClass('none').siblings().addClass('none');
                $a.addClass('act').siblings().removeClass('act');
                
            }else{
                var $img_r=$(`#content>.floor_3>.recommend>.hair>.rec_right>img:nth-child(${i-9})`);

                $img_r.removeClass('none').siblings().addClass('none');
                $a.addClass('act').siblings().removeClass('act');
            }
        })

})

