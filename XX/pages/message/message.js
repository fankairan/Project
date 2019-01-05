// pages/message/message.js
Page({
  //跳转信息详情页事件
  handleJump:function(e){
      var id=e.target.dataset.id;
      console.log(id);
      wx.navigateTo({
        url: '/pages/msgdel/msgdel?id='+id,
      })
  },

  /** 
   * 页面的初始数据
   */
  data: {
      list:[],  //当前页内容
      pageIndex:0, //当前页码
      hasMore:true, //是否有下一页
      pageSize:2   //页大小
  },

  loadMore:function(){
    //1:如果没有下一页停止函数执行
    if(!this.data.hasMore){return;}
    //2:获取二个参数 pno pageSize
    var pno=this.data.pageIndex+1;
    var ps=this.data.pageSize;
    //3:创建ajax请求
    wx.request({
      url: 'http://127.0.0.1:3000/getMessage',
      data:{pno:pno,pageSize:ps},
      success:(res)=>{
        console.log(res);
        var msg=res.data.data;
        for(var i=0;i<ps;i++){
          msg[i].ctime=msg[i].ctime.split('T')[0];
        }
        //4:接收返回数据
        //5:拼接数组
        var rows=this.data.list.concat(msg);
        //6:获取总页数判断是否有下一页
        var pageCount=res.data.pageCount;
        var flag=pno<pageCount;
        //7:将返回数据保存data属性
        this.setData({
          list:rows,
          hasMore:flag,
          pageIndex:pno
        });
        //8:添加动态效果 添加'加载动画'
        wx.showLoading({
          title: '小主请稍等~~',
        });
        //9:'加载动画'隐藏
        setTimeout(function(){
          wx.hideLoading();
        },2500)
      

      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})