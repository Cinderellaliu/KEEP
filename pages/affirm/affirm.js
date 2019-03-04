// pages/affirm/affirm.js
Page({
  data:{
    selectedProduceDate:'请选择课程申请的日期',
    time1:'--:--',
    time2:'--:--'
  },
  dateChange:function(e){
    var val = e.detail.value;
    var num = val.split('-');
    var str = num[0]+'年'+num[1]+'月'+num[2]+'日'+'周日'
    this.setData({
      selectedProduceDate:str
    })
  },
  changeTime:function(e){
    this.setData({
      time1: e.detail.value
    })
  },
  changeTime2: function (e) {
    this.setData({
      time2: e.detail.value
    })
  }

})