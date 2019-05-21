// pages/account.js
const app=getApp();
Page({
  data: {
    cartCounter: app.globalData.cartCounter,
    purchased: [
      {
        "title": "python全栈开发从入门到精通",
        "direction": "共20课时，300分钟",
        "img": "http://www.baizhiedu.com/wp-content/uploads/2019/01/20190102174709_42941.png"
      },
      {
        "title": "java进阶，企业级应用教程",
        "direction": "共91课时，600分钟",
        "img": "http://static.baizhiedu.com/baizhiedu-ztnew/pc2017/inform/img/jsyf0001.jpg"
      }
    ]
  },
  go: function () {
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
    this.setData({
      cartCounter: this.data.purchased.length
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    app.globalData.cartCounter = this.data.purchased.length;
    console.log(app.globalData.cartCounter)
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
  userSelect:function(re){
    console.log(re.currentTarget.id);
    this.setData({
      clickID:re.currentTarget.id
    })
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