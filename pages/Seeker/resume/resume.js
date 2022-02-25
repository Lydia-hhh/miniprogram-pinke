// pages/Seeker/resume/resume.js
let util=require('../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    edu_show:false,
    cur:0,
    currentPage:0,
    name:'',
    baseInfo:{
      name:'',
      birthday:'--',
      qualification_new:'--',
      phone:'',
      email:'',
    },
    resume_edu:{
      eduStart:'--',
      eduEnd:'--',
      school:'',
      major:'',
      qualification:'--',
      edu_location:'',
      edu_detail:''
    },
    resume_extra:{
        extra_name:'',
        extra_detail:'',
    },
    resume_job:{
      jobStart:'--',
      jobEnd:'--',
      company:'',
      position:'',
      industry:'',
      job_type:'--',
      job_location:'',
      job_detail:''
    },
    resume_skill:{
      skill:'',
      skill_detail:'',
    },
    resume_exp:{
      exp_company:'',
      exp_position:'',
      exp_job_location:'',
      exp_salary:'',
      exp_job_type:'--',
      exp_detail:'',
    },
    new_edu:{
      eduStart:'--',
      eduEnd:'--',
      school:'',
      major:'',
      qualification:'--',
      edu_location:'',
      edu_detail:''
    },
    now:'',
    start:'',
    date:'',
    array:['博士','硕士','本科','MBA','EMBA','MPA','专科','中专','高中','初中','小学','其他'],
    jobTypes:['全职','兼职','实习'],
    index:0,
    index1:0,
    index2:0,
    index3:0,
  },
  input_name(e){
    let info=this.data.baseInfo;
    info.name=e.detail;
    this.setData({
      baseInfo:info,
    })
  },
  input_phone(e){
    let info=this.data.baseInfo;
    info.phone=e.detail;
    this.setData({
      baseInfo:info,
    })
  },
  input_mail(e){
    let info=this.data.baseInfo;
    info.email=e.detail;
    this.setData({
      baseInfo:info,
    })
  },
  input_school(e){
    let info=this.data.resume_edu;
    info.school=e.detail;
    this.setData({
      resume_edu:info,
    })
  },
  input_major(e){
    let info=this.data.resume_edu;
    info.major=e.detail;
    this.setData({
      resume_edu:info,
    })
  },
  input_location(e){
    let info=this.data.resume_edu;
    info.location=e.detail;
    this.setData({
      resume_edu:info,
    })
  },
  input_detail(e){
    let info=this.data.resume_edu;
    info.edu_detail=e.detail.value;
    this.setData({
      resume_edu:info,
    })
  },
  input_extraName(e){
    let info=this.data.resume_extra;
    info.extra_name=e.detail.value;
    this.setData({
      resume_extra:info,
    })
  },
  input_extraDetail(e){
    let info=this.data.resume_extra;
    info.extra_detail=e.detail.value;
    this.setData({
      resume_extra:info,
    })
  },
  input_company(e){
    let info=this.data.resume_job;
    info.company=e.detail.value;
    this.setData({
      resume_job:info,
    })
  },
  input_position(e){
    let info=this.data.resume_job;
    info.position=e.detail.value;
    this.setData({
      resume_job:info,
    })
  },
  input_industry(e){
    let info=this.data.resume_job;
    info.industry=e.detail.value;
    this.setData({
      resume_job:info,
    })
  },
  input_jobLocation(e){
    let info=this.data.resume_job;
    info.job_location=e.detail.value;
    this.setData({
      resume_job:info,
    })
  },
  input_jobDetail(e){
    let info=this.data.resume_job;
    info.job_detail=e.detail.value;
    this.setData({
      resume_job:info,
    })
  },
  input_skill(e){
    let info=this.data.resume_skill;
    info.skill=e.detail.value;
    this.setData({
      resume_skill:info,
    })
  },
  input_skillDetail(e){
    let info=this.data.resume_skill;
    info.skill_detail=e.detail.value;
    this.setData({
      resume_skill:info,
    })
  },
  input_expCompany(e){
    let info=this.data.resume_exp;
    info.exp_company=e.detail.value;
    this.setData({
      resume_exp:info,
    })
  },
  input_expPosition(e){
    let info=this.data.resume_exp;
    info.exp_position=e.detail.value;
    this.setData({
      resume_exp:info,
    })
  },
  input_expJobLoc(e){
    let info=this.data.resume_exp;
    info.exp_job_location=e.detail.value;
    this.setData({
      resume_exp:info,
    })
  },
  input_salary(e){
    let info=this.data.resume_exp;
    info.exp_salary=e.detail.value;
    this.setData({
      resume_exp:info,
    })
  },
  input_expDetail(e){
    let info=this.data.resume_exp;
    info.exp_detail=e.detail.value;
    this.setData({
      resume_exp:info,
    })
  },
  bindStartDateChange(e){
    let edu_info=this.data.resume_edu;
    edu_info.eduStart=e.detail.value;
    this.setData({
      resume_edu:edu_info,
    })
  },
  bindEndDateChange(e){
    let edu_info=this.data.resume_edu;
    edu_info.eduEnd=e.detail.value;
    this.setData({
      resume_edu:edu_info,
    })
  },
  bindJobStartDateChange(e){
    let job_info=this.data.resume_job;
    job_info.jobStart=e.detail.value;
    this.setData({
      resume_job:job_info,
    })
  },
  bindJobEndDateChange(e){
    let job_info=this.data.resume_job;
    job_info.jobEnd=e.detail.value;
    this.setData({
      resume_job:job_info,
    })
  },
  bindnewPickerChange(e){
    this.setData({
      index1: e.detail.value
    })
    let info=this.data.resume_edu;
    info.qualification=this.data.array[this.data.index1];
    this.setData({
      resume_edu:info,
    })
  },
  bindPickerChange1(e){
    this.setData({
      index2: e.detail.value
    })
    let info=this.data.resume_job;
    info.job_type=this.data.jobTypes[this.data.index2];
    this.setData({
      resume_job:info,
    })
  },
  bindPickerChange2(e){
    this.setData({
      index3: e.detail.value
    })
    let info=this.data.resume_exp;
    info.exp_job_type=this.data.jobTypes[this.data.index3];
    this.setData({
      resume_exp:info,
    })
  },
  bindDateChange(e){
    this.setData({
      date:e.detail.value,
    })
    //console.log(this.data.date)
    let startYear=parseInt(this.data.date.split('-')[0]);
    let nowYear=parseInt(this.data.now.split('-')[0]);
    let info=this.data.baseInfo;
    info.birthday=nowYear-startYear;
    this.setData({
       baseInfo:info,
    })
    console.log(this.data.baseInfo.birthday)
  },
  bindPickerChange(e){
    this.setData({
      index: e.detail.value
    })
    let info=this.data.baseInfo;
    info.qualification_new=this.data.array[this.data.index];
    this.setData({
      baseInfo:info,
    })
  },
  scroll(e){
    this.setData({
      currentPage:e.detail.current,
    })
  },

  changeTab(e){
    let idx=e.currentTarget.dataset.idx;
    this.setData({
      cur:idx,
    })
  },
//新增
  showEdu(e){
    this.setData({
      edu_show:true,
    })
  },
  hideEdu(e){
    this.setData({
      edu_show:false,
    })
  },
  bindStartDateChange1(e){
    let edu_info=this.data.new_edu;
    edu_info.eduStart=e.detail.value;
    this.setData({
      new_edu:edu_info,
    })
  },
  bindEndDateChange1(e){
    let edu_info=this.data.new_edu;
    edu_info.eduEnd=e.detail.value;
    this.setData({
      new_edu:edu_info,
    })
  },
  bindnewPickerChange1(e){
    this.setData({
      index1: e.detail.value
    })
    let info=this.data.new_edu;
    info.qualification=this.data.array[this.data.index1];
    this.setData({
      new_edu:info,
    })
  },
  input_school1(e){
    let info=this.data.new_edu;
    info.school=e.detail;
    this.setData({
      new_edu:info,
    })
  },
  input_major1(e){
    let info=this.data.new_edu;
    info.major=e.detail;
    this.setData({
      new_edu:info,
    })
  },
  input_location1(e){
    let info=this.data.new_edu;
    info.edu_location=e.detail;
    this.setData({
      new_edu:info,
    })
  },
  input_detail1(e){
    let info=this.data.new_edu;
    info.edu_detail=e.detail;
    this.setData({
      new_edu:info,
    })
  },
//新增



  toCenter(){
    setTimeout(()=>{
      wx.navigateTo({
      url: '../PersonalCenter/PersonalCenter',
    })
    },1000)
  },
  toCard(){
    setTimeout(()=>{
      wx.navigateTo({
      url: '../../BusinessCard/BusinessCard',
    })
    },1000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setNavigationBarColor({
    //   backgroundColor: '#dbf6e9',
    //   frontColor: '#000000',
    // })
    let DATE=util.formatDate(new Date());
    this.setData({
      currentPage:0,
      now:DATE
    })
   // console.log(this.data.now)
    let dates=this.data.now.split('-');
   // console.log(dates)
    let startYear=parseInt(dates[0])
   // console.log(startYear)
    this.setData({
      start:(startYear-65)+'-'+'1-1',
      date:this.data.now,
      edu_show:false,
    })
    //console.log(this.data.start)
   


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