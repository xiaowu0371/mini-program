//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "list": [
      {
        "title": "Java企业应用软件工程师",
        "intr": "Java EE+大数据双重定向，让你的技能更专业。",
        "img": "../../image/java.png"
      },
      {
        "title": "Python互联网工程师",
        "intr": "人工智能、爬虫、WEB开发覆盖面广",
        "img": "../../image/python.png"
      },
      {
        "title": "UI培训-UI设计师",
        "intr": "做UI设计师，薪水“高人一等”",
        "img": "../../image/ui.png"
      },
      {
        "title": "大数据工程师",
        "intr": "大数据与云计算是指将包括硬件软件的一切资源",
        "img": "../../image/bigdata.png"
      },
      {
        "title": "web前端开发",
        "intr": "前端要素：HTML、CSS和JavaScript",
        "img": "../../image/h5.png"
      },
      {
        "title": "云计算工程师",
        "intr": "基于互联网的相关服务的增加、使用和交互模式",
        "img": "../../image/it.png"
      }
    ]
  },

  /**
   * 时间处理函数
   */
  go:function(){
    wx.navigateTo({
      url: '../post/post',
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
    var _this=this;

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
