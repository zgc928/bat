Page({
  data:
  {
    inputValue:'',
  },
  input : function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  addthings: function () {
    var inputValue = this.data.inputValue
      var db = wx.cloud.database()
      db.collection("remind").add({
        data: {
          things: inputValue
        },
        success: function (res) {
          console.log(res)
        }

      })
      wx.showToast({ title: '增加成功', icon: 'success', duration: 1000 })
    }
})