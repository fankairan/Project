const express=require('express');
const pool=require('../pool.js');
var router=express.Router();


// 验证手机号路由
router.get('/verPhone',function(req,res){
   var $phone=req.query.phoneVal;
   console.log(11);
  //  if(!$phone){
  //    res.send('请填写手机号码');
	//  return;
  //  }else if($phone.length!=11){
  //    res.send('手机号格式不正确');
	//  return;
  //  }

   var sql='SELECT * FROM phone_reg WHERE phone=?';
   pool.query(sql,$phone,function(err,result){
      if(err) throw err;
	  if(result.length>0){
      res.send({code:0,mas:'手机号已注册'});
      console.log(result);
	  }else{
      res.send({code:1,msg:'手机号可用'});
      console.log(result);
	  }     
   });
});


//注册验证路由
router.post('/reg',function(req,res){
   var phone=req.body.phone;
   var upwd=req.body.upwd;
   var uname=req.body.uname;
   var card=req.body.card;
   var code=req.body.code;

   var sql="INSERT INTO phone_reg VALUES(?,?,?,?,?)";

   pool.query(sql,[null,phone,upwd,uname,card],function(err,result){
     if(err) throw error;
     if(result.affectedRows>0){
          res.send({code:200,msg:'注册成功！'});
     }else{
          res.send({code:301,msg:'注册失败！'});
     }
   })
})


module.exports=router;

