$(function(){
    $('#main>.middle_content>.content>.checkerboard>a').on('mouseover',function(){
        var $a=$(this);
        var $as= $('#main>.middle_content>.content>.checkerboard>a');
        var i=parseInt($as.index($a)+1);
        
        $(`.middle_content>.content>.checkerboard>div:nth-child(${i+19})`).removeClass('none').siblings('div').addClass('none');
    })
})