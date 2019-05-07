//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:'11378',
    autoplay: true,
    interval: 2000,
    circular: true,
    indicatorDots: true,
    course: [{ "title": "礼品卡[[2人团]", "price": "47", "img": "../../image/java.jpg" },
      { "title": "Java基础入门", "price": "100", "img": "../../image/ui.jpg" },
      { "title": "Python入门", "price": "59", "img": "../../image/python.jpg" },      
      { "title": "Java基础入门", "price": "100", "img": "../../image/ui.jpg" },
      { "title": "Python入门", "price": "59", "img": "../../image/python.jpg" }
    ],
    courseMenu:[
      {
        "title":"java",
        "img":"../../image/java.png"
      },{
        "title": "python",
        "img": "../../image/python.png"
      }, {
        "title": "UI",
        "img": "../../image/ui.png"
      }, {
        "title": "大数据",
        "img": "../../image/bigdata.png"
      },
      {
        "title": "游戏开发",
        "img": "../../image/c.png"
      }, {
        "title": "嵌入式",
        "img": "../../image/Linux.png"
      }, {
        "title": "H5",
        "img": "../../image/h5.png"
      }, {
        "title": "物联网",
        "img": "../../image/it.png"
      }
    ],
    freeCourse:[
      {
        "title": "python全栈开发从入门到精通",
        "direction":"共20课时，300分钟",
        "price":"￥69",
        "number":"11378",
        "img":"http://www.baizhiedu.com/wp-content/uploads/2019/01/20190102174709_42941.png"
      },
      {
        "title": "java进阶，企业级应用教程",
        "direction": "共91课时，600分钟",
        "price": "￥99",
        "number": "12432",
        "img": "http://static.baizhiedu.com/baizhiedu-ztnew/pc2017/inform/img/jsyf0001.jpg"
      },
      {
        "title": "9小时搞定微信小程序开发",
        "direction": "共91课时，600分钟",
        "price": "￥99",
        "number": "438",
        "img": "http://static.baizhiedu.com/baizhiedu-ztnew/pc2017/inform/img/jsyf0002.jpg"
      }, {
        "title": "从UI到产品经理的必经之路",
        "direction": "共91课时，600分钟",
        "price": "￥99",
        "number": "78",
        "img": "http://static.baizhiedu.com/baizhiedu-ztnew/pc2017/inform/img/jsyf0003.jpg"
      }, {
        "title": "python全栈开发从入门到精通",
        "direction": "共20课时，300分钟",
        "price": "￥69",
        "number": "11378",
        "img": "http://static.baizhiedu.com/baizhiedu-ztnew/pc2017/inform/img/jsyf0004.jpg"
      },
      {
        "title": "java进阶，企业级应用教程",
        "direction": "共91课时，600分钟",
        "price": "￥99",
        "number": "12432",
        "img": "http://static.baizhiedu.com/baizhiedu-ztnew/pc2017/inform/img/jsyf0005.jpg"
      },
      {
        "title": "9小时搞定微信小程序开发",
        "direction": "共91课时，600分钟",
        "price": "￥99",
        "number": "438",
        "img": "http://static.baizhiedu.com/baizhiedu-ztnew/pc2017/inform/img/jsyf0006.jpg"
      }, {
        "title": "从UI到产品经理的必经之路",
        "direction": "共91课时，600分钟",
        "price": "￥99",
        "number": "78",
        "img": "http://static.baizhiedu.com/baizhiedu2019/pc/index-new/picture/works/works-16.jpg"
      }

    ]
  },

  /**
   * 时间处理函数
   */
  go:function(){
    wx.navigateTo({
      url: '../component/buy/index',
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
