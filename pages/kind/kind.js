Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  onShareAppMessage() {
    return {
      title: '小程序官方组件展示',
      path: 'page/kind/kind'
    }
  },

  data: {
    list: [
      {
        id: 'view',
        name: '教材与教辅资料',
        open: false,
        pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
      }, {
        id: 'content',
        name: '文艺青年',
        open: false,
        pages: ['text', 'icon', 'progress', 'rich-text']
      }, {
        id: 'form',
        name: '我为钱狂',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: 'nav',
        name: 'English Study',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '恋爱中人',
        open: false,
        pages: ['image', 'audio', 'video', 'camera']
      }, {
        id: 'map',
        name: '程序员与工程师',
        open: false,
        pages: ['map']
      }
    ]
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})
