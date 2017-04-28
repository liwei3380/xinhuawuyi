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
        title:'激情假日',
        desc:'新华祝你出行',
        link:'http://www.linki2u.com/wxjstxt/xinhuawuyi/dist/dao.html',
        imgurl:'',
        callback:cb
      });
}

export default init
