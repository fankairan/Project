var inputUname = "";
var inputUpwd = "";
Page({
  /**
   * 页面的初始数据
   * 初始化两个输入值
   */
  data: {
    isLogin: false
  },
  //获取用户输入的值a
  inputUname: function (e) {
    inputUname = e.detail.value;
    console.log("输入的账号：" + inputUname);
  },
  //获取用户输入的值b
  inputUpwd: function (e) {
    inputUpwd = e.detail.value;
    console.log("输入的密码：" + inputUpwd);
  },
  // 注册
  register: function () {
    var that = this;
    var isrightful = that.checkInput();
    if (isrightful) {
      wx.request({
        url: 'http://localhost:8080/user/testSave',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: {
          name: inputuName,
          password: inputUpwd
        },
        success: function (res) {
          console.log(res)
          if (res.statusCode != 200) {
            wx.showToast({ //这里提示失败原因
              title: res.data.message,
              icon: 'loading',
              duration: 1500
            })
          } else {
            wx.showToast({
              title: '注册成功', //这里成功
              icon: 'success',
              duration: 1000
            });
            that.setData({
              isLogin: true,
            }
            )
          }
        },
        fail: function (res) {
          console.log(res)
          wx.showToast({
            title: '请求失败',
            icon: 'none',
            duration: 1500
          })
        }
      });
    }
  },
  // 登陆
  login: function () {
    var that = this;
    var isrightful = that.checkInput();
    if (isrightful) {
      wx.request({
        url: 'http://127.0.0.1:3000/login',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: {
          name: inputUname,
          password: inputUpwd
        },
        success: function (res) {
          console.log(res)
          if (res.statusCode != 200) {
            wx.showToast({ //这里提示失败原因
              title: res.data.message,
              icon: 'loading',
              duration: 1500
            })
          } else {
            wx.showToast({
              title: '登陆成功', //这里成功
              icon: 'success',
              duration: 1000
            });
            that.setData({
              isLogin: true,
            }
            )
          }
        },
        fail: function (res) {
          console.log(res)
          wx.showToast({
            title: '请求失败',
            icon: 'none',
            duration: 1500
          })
        }
      });
    }
  },
  //检测输入值
  checkInput: function () {
    if (inputUname == "" || inputUname == null ||
      inputUname == undefined) {
      this.showErrorToastUtils('请输入用户名');
    } else if (inputUpwd == "" || inputUpwd == null || inputUpwd == undefined) {
      this.showErrorToastUtils('请输入密码');
    } else if (inputUpwd.length < 6) {
      this.showErrorToastUtils('密码至少要6位');
    }
    return true;
  },

  // 错误提示
  showErrorToastUtils: function (e) {
    wx.showModal({
      title: '提示！',
      confirmText: '朕知道了',
      showCancel: false,
      content: e,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
})
