export const wxMakeAuthUrl = (path) => {
  var uri = encodeURIComponent(path);
  var appid = 'xxxxx'
  var state = 3
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_userinfo&state=${state}&connect_redirect=1#wechat_redirect`;
}

export const wxConfig = (id) => {
  let title = `title`,
    desc = `desc`,
    link = `/share/index.html`,
    imgUrl = `/share/thumb.jpg`;

  return {
    title,
    desc,
    link,
    imgUrl
  }
}

export const wxShare =  ({title, desc, link, imgUrl}, success, cancel)  => {
  wx.ready(() => {
    // “分享给朋友”
    wx.onMenuShareAppMessage({
      title,
      desc,
      link,
      imgUrl,
      success,
      cancel
    })
    // “分享到朋友圈”
    wx.onMenuShareTimeline({
      title,
      link,
      imgUrl,
      success,
      cancel
    })
    // 分享到QQ
    wx.onMenuShareQQ({
      title,
      desc,
      link,
      imgUrl,
      success,
      cancel
    })
    // 分享到腾讯微博
    wx.onMenuShareWeibo({
      title,
      desc,
      link,
      imgUrl,
      success,
      cancel
    })
    // 分享到QQ空间
    wx.onMenuShareQZone({
      title,
      desc,
      link,
      imgUrl,
      success,
      cancel
    })
  })
}
