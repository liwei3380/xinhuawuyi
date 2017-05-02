// 引入vue
import wxshare from './wxshare.js'
import config from './config.js'

function cb(data){
  if (data == 'ShareAppMessage Success') {
    
  } else if (data == 'ShareAppMessage cancel') {
    
  }
}
var init = function () {
  wxshare.init({
        signatureurl:config.hosturl+'/getsignature',
        appId:'wx3d5547d122fc289c',
        jsApiList:['onMenuShareTimeline','onMenuShareAppMessage'],
        title:'激情假日新华助您出行',
        desc:'保本明星姚秋携新华红利回报助您出行',
        link:'http://www.linki2u.com/wxjstxt/xinhuawuyi/dist/dao.html',
        imgurl:'http://www.linki2u.com/wxjstxt/xinhuawuyi/dist/share.png',
        callback:cb
      });
}

export default init
