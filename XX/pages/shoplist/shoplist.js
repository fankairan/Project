// pages/shoplist/shoplist.js
Page({
  
  //跳转商品详情页
  handleJump: function (e) {
    var id = e.target.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '/pages/details/details?id=' + id,
    })

  },

  //获取商品列表
  getList:function(){
      var pid=this.data.pid;
      console.log(pid);
      //加载下一页数据
      //1:获取二个数值 pno pageSize
      var pno = this.data.pageIndex + 1;
      var ps = this.data.pageSize;
      //2:发送ajax请求
      wx.request({
        url: 'http://127.0.0.1:3000/getList?',
        data: {pid:pid, pno:pno,pageSize:ps},
        success: (result) => {
          //console.log(result.data.data);
          //2.1:保存返回数据 拼接
          var rows = this.data.list.concat(
            result.data.data
          );
          this.setData({
            list: rows,
            pageIndex: pno
          });
          console.log(this.data.list);
          //2.2:显示加载动画
          wx.showLoading({
            title: '正在努力加载数据....',
          });
          //2.3:卸载加载动画
          setTimeout(function () {
            wx.hideLoading();
          }, 1500);
          //3:在shoplist.wxml 显示列表数据
        }
      })
    //4:上拉触顶加载下一页 
  },
  /**
   * 页面的初始数据
   */
  data: {
    pid:0,
    list: [],     //当前页内容
    pageIndex: 0, //页码
    pageSize: 6   //页大小
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
        pid:options.pid,
   });
    this.getList();
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
    this.getList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})