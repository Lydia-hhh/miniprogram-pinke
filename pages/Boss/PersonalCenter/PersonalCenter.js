// pages/Boss/PersonalCenter/PersonalCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toWorker(){
    setTimeout(()=>{
      wx.navigateTo({
      url: '../MyWorker/MyWorker',
    })
    },1000)
  },
  toPublish(){
    setTimeout(()=>{
      wx.navigateTo({
      url: '',
    })
    },1000)
  },
  toJob(){
    setTimeout(()=>{
      wx.navigateTo({
      url: '../JobDetails/JobDetails',
    })
    },1000)
  },
  toCard(){
    setTimeout(()=>{
      wx.navigateTo({
      url: '',
    })
    },1000)
  },
  toJobHunter(){
    setTimeout(()=>{
      wx.navigateTo({
      url: '../../Seeker/PersonalCenter/PersonalCenter',
    })
    },1000)
  },
  toSearch(){
    setTimeout(()=>{
      wx.navigateTo({
      url: '../SearchWorker/SearchWorker',
    })
    },1000)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      backgroundColor: '#9ddfd3',
      frontColor: '#000000',
    })
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