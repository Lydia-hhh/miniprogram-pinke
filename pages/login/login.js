import {request} from '../../request/index'
Page({
  data: {
  username:'',
  password:'',
  phone:'',
  code:''
  },

input_code(e){
  this.setData({
    code:e.detail,
  })
},
input_phone(e){
  this.setData({
    phone:e.detail,
  })
},
input_username(e){
  this.setData({
    username:e.detail,
  })
},
input_password(e){
  this.setData({
    password:e.detail,
  })
},
 login(){
   if(this.data.display_idx==0){
     
   }
   if(this.data.display_idx==1){
   
  }


   //先构建请求的json
  //  let data={
  //    username:this.data.username,
  //    password:this.data.password,
  //    display_idx:0,
  //   }
  //发送请求给后台
//  request({
//    url:'/user/login',
//    method:'POST',
//    data:data,
//  }).then(res=>{
//    if(res){
//      wx.showToast({
//        title: '登录成功',
//        icon:'success'
//      })
    // wx.setStorageSync('user', res);
     setTimeout(()=>{
       wx.navigateTo({
       url: '../CVEntry/CVEntry',
     })
     },1000)

 },
 displayChoose(e){
   //console.log(e);
   let idx=e.currentTarget.dataset.idx;
   this.setData({
     display_idx:idx,
   })
 },
 onLoad(){
   this.setData({
     display_idx:0,
   })//最开始就是验证码登录
 }
 


})