const express=require('express');
const pool=require('../pool.js');
var router=express.Router();


// 验证手机号路由
router.post('/verPhone',function(req,res){
   var $phone=req.body.phone;
   if(!$phone){
     res.send('请填写手机号码');
	 return;
   }else if($phone.length!=11){
     res.send('手机号格式不正确');
	 return;
   }

   var sql='SELECT * FROM phone_reg WHERE phone=?';
   pool.query(sql,$phone,function(err,result){
      if(err) throw err;
	  if(result.length>0){
	    res.send('0');
	  }else{
	    res.send('1');
	  }     
   });
});





module.exports=router;

