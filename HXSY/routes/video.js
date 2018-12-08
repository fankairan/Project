const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

//获取首页视频路由
router.get('/indexVideo',(req,res)=>{
    var $vid=req.query.vid;
    if(!$vid){
        res.send('vid不能为空！');
        return;
    }

    var sql='SELECT * FROM index_video WHERE vid=?';
    pool.query(sql,[$vid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send('视频地址不存在！');
        }
    });
});


module.exports=router;