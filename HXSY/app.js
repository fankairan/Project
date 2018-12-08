const bodyParser=require('body-parser');
const express=require('express');
const userRouter=require('./routes/user.js');
const videoRouter=require('./routes/video.js');

var app=express();
app.listen(3000,function(){
   console.log('创建成功');
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('product'));
app.use(express.static('video'));


app.use('/user',userRouter);
app.use('/video',videoRouter);








