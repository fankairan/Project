
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
              img_url:''
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
    if(this.checkInput()){
      var that = this;
      var isrightful = that.checkInput();
      if (isrightful) {
        wx.request({
          url: 'http://127.0.0.1:3000/user/login',
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          data: {
            uname: inputUname,
            upwd: inputUpwd
          },
          success: function (res) {
            console.log(res)

            var pages = getCurrentPages();
            var currPage = pages[pages.length - 1];
            var prevPage = pages[pages.length - 2];

            if (res.data.code != 200) {
              wx.showToast({ //这里提示失败原因
                title: res.data.msg,
                icon: 'loading',
                duration: 1500
              })
            } else {
              wx.showToast({
                title: '登陆成功', //这里成功
                icon: 'success',
                duration: 1500
              });

                 that.setData({
                  isLogin: true,
                  img_url: res.data.data[0].avatar

                 })

                prevPage.setData({
                  data:that.data
                })
            
              
                setTimeout(()=>{
                  wx.navigateBack({})
                },1500)
               
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
    }
  },
  //检测输入值
  checkInput: function () {
    if (inputUname == "" || inputUname == null ||
      inputUname == undefined) {
      this.showErrorToastUtils('请输入用户名');
      return false;
    } else if (inputUpwd == "" || inputUpwd == null || inputUpwd == undefined) {
      this.showErrorToastUtils('请输入密码');
      return false;
    } else if (inputUpwd.length < 6 || inputUpwd.length>12) {
      this.showErrorToastUtils('密码长度在6到12位之间');
      return false;
    }
    return true;
  },

  // 错误提示
  showErrorToastUtils: function (msg) {
    wx.showModal({
      title: '提示！',
      confirmText: '朕知道了',
      showCancel: false,
      content: msg,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
})
