//index.js
//获取应用实例
const app = getApp()

Page({
	getLunbo:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/lunbo',
      success: (res) => {
        var url = res.data.msg;
        this.setData({
          lb_url: url
        })

      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    lb_url:[],
    ic_box:[{id:1,title:"鳄梨是梨",img_url:'http://127.0.0.1:3000/icons/1.png'},
        {id:2,title:"优选苹果",img_url:'http://127.0.0.1:3000/icons/2.png'},
        {id:3,title:"新鲜葡萄",img_url:'http://127.0.0.1:3000/icons/3.png'},
        {id:4,title:"精选蔬菜",img_url:'http://127.0.0.1:3000/icons/4.png'},
        {id:5,title:"海鲜水产",img_url:'http://127.0.0.1:3000/icons/5.png'},
        {id:6,title:"有机蜂蜜",img_url:'http://127.0.0.1:3000/icons/6.png'},
        {id:7,title:"酒水饮料",img_url:'http://127.0.0.1:3000/icons/7.png'},
        {id:8,title:"品质牛奶",img_url:'http://127.0.0.1:3000/icons/8.png'},
        {id:9,title:"乳制品",img_url:'http://127.0.0.1:3000/icons/9.png'}
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getLunbo();
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