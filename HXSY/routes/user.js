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





module.exports=router;

