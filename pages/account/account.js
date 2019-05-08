// pages/account.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:app.globalData.money,
    userSelect:false,
    clickID:'',
    price:[
      {
        "price":10,
        "pay":9.5
      }, 
      {
        "price": 20,
        "pay": 19
      }, 
      {
        "price": 30,
        "pay": 29
      },
      {
        "price": 40,
        "pay": 38
      },
      {
        "price": 50,
        "pay": 46
      },
      {
        "price": 100,
        "pay": 90
      },
      {
        "price": 200,
        "pay": 180
      },
      {
        "price": 300,
        "pay": 270
      }, {
        "price": 500,
        "pay": 400
      }
    ]
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
  userSelect:function(res){
    console.log(res)
    this.setData({
      clickID:res.currentTarget.Id
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