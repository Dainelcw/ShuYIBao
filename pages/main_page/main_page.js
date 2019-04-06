// client/pages/main_page/main_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    datas: [
      {
        image: '../../image/book/BWCT.png',
        name: '宽带无线通信技术'
      },
      {
        image: '../../image/book/EC.png',
        name: '电子商务'
      },
      {
        image: '../../image/book/MKP.png',
        name: '市场营销原理'
      },
      {
        image: '../../image/book/OFC.png',
        name: '光纤通信'
      },
      {
        image: '../../image/book/JAVA.png',
        name: 'Java编程技术与项目实践'
      },
      {
        image: '../../image/book/LEDP.png',
        name: 'LED可见光通信技术'
      },
      {
        image: '../../image/book/VSP.png',
        name: '语音信号处理'
      },
      {
        image: '../../image/book/WN.png',
        name: '无线网络教程'
      },
      
    ],
    xindex : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  /* 这里实现控制中间凸显图片的样式 */
  handleChange: function (e) {
    this.setData({
      xindex : e.detail.current
    })
  },
  /*实现界面跳转*/
  toINFO: function(){
    wx.navigateTo({
      url: '../Info/info'//实际路径要写全
    })
  }

})