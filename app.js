// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
const user=wx.getStorageSync('user');
if(!user.id){
  wx.navigateTo({
    url: '../login/login',
  })
}
  },
  globalData: {
    userInfo: null
  }
})
