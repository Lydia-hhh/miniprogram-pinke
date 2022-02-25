// components/eduContent/EduContent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    start:{
      type:String,
      value:""
    },
    now:{
      type:String,
      value:""
    },
    array:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    new_edu:{
      eduStart:'--',
      eduEnd:'--',
      school:'',
      major:'',
      qualification:'--',
      edu_location:'',
      edu_detail:''
    },
    index1:0,
    show:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
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

  }
})
