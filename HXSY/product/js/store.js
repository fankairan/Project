
$(function(){
     /*------------  头部 时装轮播  -------------*/ 
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

     /*----------  鼠标 悬停停止轮播  -----------*/
     $('#content>.floor_1>.new_clothes>.img_box').on('mouseleave',function(){
        mClothesshow=setInterval(clothesShow,5000);
     });

     $('#content>.floor_1>.new_clothes>.img_box').on('mouseenter',function(){
        clearInterval(mClothesshow);
        mClothesshow=null;
     });


      /*------------  头部 时装轮播 切换  -------------*/ 
      $('#content>.floor_1>.new_clothes>.img_tabs a').click(function(e){
          e.preventDefault();
          var $a=$(this);
          var $as=$('.new_clothes>.img_tabs a');
          var i=parseInt($as.index($a)+1);
          
           $a.children(':first-child').removeClass('hide').next().addClass('hide').parent().siblings().children(':first-child').addClass('hide').next().removeClass('hide');

           $(`#content>.floor_1>.new_clothes>div:nth-child(${i})`).removeClass('none').siblings().addClass('none').parent().children(':last-child').removeClass('none');
      });

      /*------------  中部 鼠标跟随 放大镜 -------------*/ 
      
})