// pages/Boss/MyWorker/MyWorker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    display_idx:0,
    showDelete:0,
  },
  displayChoose(e){
    //console.log(e);
    let idx=e.currentTarget.dataset.idx;
    this.setData({
      display_idx:idx,
    })
  },
  toCenter(){
    setTimeout(()=>{
      wx.navigateTo({
      url: '../PersonalCenter/PersonalCenter',
    })
    },1000)
  },
  showDeleteEle(){
    this.setData({
      showDelete:1,
    })
  },
  hideDeleteEle(){
    this.setData({
      showDelete:0,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的求职者'
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