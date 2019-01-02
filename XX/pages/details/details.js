// pages/details/details.js
Page({

  //获取商品详情
  getDetails(){
    var id=this.data.id;
    console.log(id);
    wx.request({
      url: 'http://127.0.0.1:3000/getDetails',
      data:{id:id},
      success:(result)=>{
        this.setData({
          list:result.data
        })
        console.log(this.data.list);
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })

    this.getDetails();
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