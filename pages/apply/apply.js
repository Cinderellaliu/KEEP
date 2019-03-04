// pages/apply/apply.js
Page({
  data: {
    lastX:0,
    lastY:0,
    flag: 0,
    weekStyle:'display:none;',
    tableStyle:'height:100%;',
    fixWeekStyle:'display:block;',
    swiperStyle:'height:2042rpx;',
    timeStyle:'position:static',
    dataStyle:'margin-bottom:128rpx;'
  },
  handletouchmove: function (event) {
    if (this.data.flag !== 0) {
      return
    }
    let currentX = event.touches[0].pageX;
    let currentY = event.touches[0].pageY;
    let tx = currentX - this.data.lastX;
    let ty = currentY - this.data.lastY;
    if (Math.abs(tx) > Math.abs(ty)) {
      if (ty < 0 || ty > 0) {
        this.data.flag = 1;
        console.log('shamgxioa');
        this.setData({
          weekStyle:'display:none',
          fixWeekStyle:'display:block',
          swiperStyle: 'height:2042rpx;'
        })
      }
    }
    this.data.lastX = currentX;
    this.data.lastY = currentY;
  },
  handletouchtart: function (event) {
    this.data.lastX = event.touches[0].pageX;
    this.data.lastY = event.touches[0].pageY;
  },
  handletouchend: function (event) {
    this.data.flag = 0
  },
  swiperChange: function (e) {
    this.setData({
      weekStyle :'display:block;',
      fixWeekStyle :'display:none;',
      swiperStyle: 'height:calc(100vh - 180rpx)',
      timeStyle: 'position:fixed;',
      tableStyle: 'height:calc(100vh - 300rpx)',
      dataStyle: 'margin-bottom:0;'
    })
  }
})