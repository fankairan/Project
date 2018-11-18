const userRouter=require('./routes/user.js');
const bodyParser=require('body-parser');
const express=require('express');
var app=express();
app.listen(3000,function(){
   console.log('创建成功');
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('product'));


app.use('/user',userRouter);







