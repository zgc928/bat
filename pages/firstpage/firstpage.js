const app = getApp()
Page({
  data: {
    currentData: 0,        //currentdata默认值是0.
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46',
    
      color: "#ff6f10",
      disabled: false,
      getCode: "启动闹钟",
    time:5,


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  //获取当前滑块的index   data-current绑定。
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },

  

tap1:function()
{
  wx.showToast({ title: '切换成功', icon: 'success', duration: 1000 })
  this.setData({
    src: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_57566652&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
  })
},

  tap2: function () {
    wx.showToast({ title: '切换成功', icon: 'success', duration: 1000 })
    this.setData({
      src: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_51573741&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
    })

  },
  tap3: function () {
    wx.showToast({ title: '切换成功', icon: 'success', duration: 1000 })
    this.setData({
      src: 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_40602735&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
    })

  },
addthing:function()
{
  wx.navigateTo({
    url: '../backthing/backthing',
  })
},
  sendCode: function (e) {
    var that = this;
   var time=this.data.time;
    var i = setInterval(function () {
      time--
      if (time < 0) {

        that.setData({
          color: "#ff6f10",
          disabled: false,
          getCode: "启动闹钟",
        })
        clearInterval(i)
wx.playBackgroundAudio({
  dataUrl: that.data.src,
})
      } else {
        that.setData({
          getCode: "报警" + time + "s",
          color: "#999",
          disabled: true
        })
      }
    }, 1000)
    
    console.log(time)
    if (time < 3) {

    }
  },
addtime:function()
{
var time=this.data.time
this.setData({
  time:6*10000+time
})
  console.log(this.data.time)
},
  cuttime: function () {
    var time = this.data.time
    this.setData({
      time:time-6*10000
    })
    console.log(this.data.time)
  },
accack:function(){
  var time=this.data.time;

  }

})





