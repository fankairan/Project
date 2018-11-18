var commonJS='common.js';
document.write('<script type="text/javascript" src="+commonJS+"></script>');


var chPhone=false;
var chUpwd=false;
var chUser_name=false;
var chidCard=false;
var chverCode=false;

//---------验证手机号
function verPhone(){
    var xhr=createXhr();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var res=xhr.responseText
            if(res=='0'){

                $('phone').style.borderColor='#ef3737';
                $('error').style.display='inline-block';
                $('error').innerHTML='该手机号码已经被注册';
            }else if(res=='1'){
                $('phone').style.borderColor='#ccc';
                $('error').style.display='none';
                chPhone=true;
            }else{
                $('phone').style.borderColor='#ef3737';
                $('error').style.display='inline-block';
                $('error').innerHTML=res;
            }
        }
    }

    xhr.open('post','/user/verPhone',true);
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    var phone=$('phone').value;
    var formData='phone='+phone;
    xhr.send(formData);
}


// ---------验证用户密码
function verUpwd(){
    var upwd=$('upwd').value;
    if(!upwd){

    }

}
