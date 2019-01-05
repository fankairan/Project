// pages/msgdel/msgdel.js
Page({
  //获取信息详情数据
  getMsg:function(){
    var id=this.data.id;
      wx.request({
        url: 'http://127.0.0.1:3000/getMsgDel?',
        data:{id},
        success:(result)=>{
          result.data.msg[0].ctime = result.data.msg[0].ctime.split('T')[0];
          var data=result.data.msg[0];
             this.setData({
               msg:data
             })
             console.log(this.data.msg);
        }
      })
  },
  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    msg:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        id:options.id
      })
      this.getMsg();

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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})