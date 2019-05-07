//index.js
//获取应用实例
const app = getApp()

Page({

  /** 页面的初始数据 **/
  data: {
    cont:0,
    arr: ['part01', 'part02', 'part03'],
    imgUrls: [
      'images/ui.jpg',
      'images/java.jpg',
      'images/python.jpg'
    ],
    autoplay: true,
    interval: 3000,
    circular: true,
    indicatorDots:true,
    vertical:true,
    menuArr: app.globalData.menuArr,
    userInfo:null,
    hasUserInfo: false,
    info:{
      infoTitle:'资讯',
      infoHot:[
        "python入门基础教程",
        "中科软程序员晕倒,这也太巧啦！",
        "马云谈'996',每天应工作12个小时",
        "java大数据发展前进",
        "ui设计妹子真的很多啊吗！！"
      ]
    },
    newsList:[
      "预测：激荡十年：云计算的过去、现在和未来",
      "咨询：百知java就业喜报！",
      "吐槽：python人工智能就业大吐槽",
      "课程：云计算大数据的算法大全"
    ],
    course: [{ "title": "礼品卡[[2人团]", "price": "47", "img": "images/hot-01.jpg" },
      { "title": "Java基础入门", "price": "100", "img": "images/hot-02.jpg"},
      { "title": "Python入门", "price": "59", "img": "images/hot-03.jpg"}
    ],
  teacher: {
    items:[],
    list:[{
      "title": "Java开发实战",
      "cont": "26|Nuxt解决了那些问题？",
      "intr": "刘春阳|百知教育教学总监",
      "img": "images/lcy.png"
    }, {
        "title": "Hibernate3.2框架",
        "cont": "21|Hibernate3.2框架",
        "intr": "胡鑫喆|百知java资深讲师",
        "img": "images/hxz.png"
      }, {
        "title": "CDH技术",
        "cont": "21|CDH技术的熟练应用",
        "intr": "孙帅|百知java资深讲师",
        "img": "images/ss.png"
      }, {
        "title": "WebServices编程",
        "cont": "AJAX框架Query",
        "intr": "杨艳玲|百知java资深讲师",
        "img": "images/yyl.png"
      }],
  }
  },
  getUserInfo: function (e) {
    console.log("dddd");
    console.log(e)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    } else {
      this.openSetting();
    }

  },
  login: function () {
    console.log(111)
    var that = this
    var thist = this;
    // if (typeof success == "function") {
    //   console.log(6);
    //   console.log('success');
    //   this.data.getUserInfoSuccess = success
    // }
    wx.login({
      success: function (res) {
        var code = res.code;
        console.log(code);
        wx.getUserInfo({
          success: function (res) {
            console.log(res);
            wx.request({
              url: app.server.hostUrl + '/api/auth/login_by_weixin.do',//自己的服务接口地址,这里是去拿到code去后台进行业务处理，调用微信接口拿到用户openid和凭证，在解密拿到用户数据
              method: 'post',
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data: { encryptedData: res.encryptedData, iv: res.iv, code: code },
              success: function (data) {
                wx.setStorage({
                  key: "userif",
                  data: data.data.userinfo
                })
                console.info(data);
                //4.解密成功后 获取自己服务器返回的结果
                if (data.data.code == 1) {
                  var userInfo_ = data.data.userinfo;
                  console.log(7);
                  app.globalData.userInfo = userInfo_
                  that.setData({
                    getUserInfoFail: false,
                    userInf: userInfo_,
                    hasUserInfo: true

                  })
                  thist.setData({
                    datas: userInfo_,
                    index: 1
                  })
                  console.log(userInfo_)
                  that.onLoad();
                } else {
                  console.log('解密失败')
                }

              },
              fail: function () {
                console.log('系统错误')
              }
            })

            //平台登录
          },
          fail: function (res) {
            console.log(8);
            console.log(res);
            that.setData({
              getUserInfoFail: true
            })
          }
        })
      }
    })
  },
  //跳转设置页面授权
  openSetting: function () {
    var that = this
    if (wx.openSetting) {
      wx.openSetting({
        success: function (res) {
          console.log(9);
          //尝试再次登录
          that.login()
        }
      })
    } else {
      console.log(10);
      wx.showModal({
        title: '授权提示',
        content: '小程序需要您的微信授权才能使用哦~ 错过授权页面的处理方法：删除小程序->重新搜索进入->点击授权按钮'
      })
    }
  },

  //跳转设置页面授权
  openSetting: function () {
    var that = this
    if (wx.openSetting) {
      wx.openSetting({
        success: function (res) {
          console.log(9);
          //尝试再次登录
          that.login()
        }
      })
    } else {
      console.log(10);
      wx.showModal({
        title: '授权提示',
        content: '小程序需要您的微信授权才能使用哦~ 错过授权页面的处理方法：删除小程序->重新搜索进入->点击授权按钮'
      })
    }
  },
  /**时间处理函数**/
  goArticle:function(){
    wx.navigateTo({
      url: '../component/article/article',
    })
  },
  goBuy:function(){
    wx.navigateTo({
      url: '../component/buy/index',
    })
  },
  teacherChange:function(){
    var arr=[];
    for (var i=0;i<3;i++) {
      arr.push(this.data.teacher.list[this.data.teacher.list.length-i-1]);
    }
    this.setData({
      teacher:{
        items: arr,
        list: this.data.teacher.list,
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var arr = [];
    for (var i = 0; i < 3; i++) {
      arr.push(this.data.teacher.list[i]);
    }
    this.setData({
      teacher: {
        items: arr,
        list: this.data.teacher.list,
      }
    })
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
