//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: ['part01', 'part02', 'part03'],
    imgUrls: [
      'images/ui.jpg',
      'images/java.jpg',
      'images/python.jpg'
    ],
    autoplay: true,
    interval: 2000,
    circular: true,
    menuArr: app.globalData.menuArr,
    money:app.globalData.money,
    cartCounter: app.globalData.cartCounter,
    userClick: false,
    userInfo:''
  },

  /**
   * 时间处理函数
   */
  go:function(){
    wx.navigateTo({
      url: '../post/post',
    })
  },
  goAccount:function(){
    wx.navigateTo({
      url: '../account/account',
    })
  },
  goCart:function(){
    wx.navigateTo({
      url: '../cart/cart',
    })
  },
  goShow:function(){
    wx.navigateTo({
      url: '../show/show',
    })
  },
  goOther:function(){
    wx.showModal({
      title: '功能建设中',
      content: '这是一个提示提示窗口',
      success:function(res){
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击取消确定')
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
  },
  getUserInfo: function (e) {
    console.log("dddd");
    console.log(e)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userClick:true,
        userInfo: e.detail.userInfo
      })
    }

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
    var count=0;
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      cartCounter: app.globalData.cartCounter
    })
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
