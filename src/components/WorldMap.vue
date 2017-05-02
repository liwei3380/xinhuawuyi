<template>
  <div class="worldmap">
    <img src="../assets/mapbg.png" class="wmbg">

    <div class="eiffel ani-tip">
      <div>点我</div>
      <img src="../assets/eiffel.png" @click="showdazhou(0)">
    </div>
    <div class="greatewall ani-tip">
      <div>点我</div>
      <img src="../assets/greatwall.png" @click="showdazhou(1)">
    </div>
    <div class="jesus ani-tip">
      <div>点我</div>
      <img src="../assets/jesus.png" @click="showdazhou(2)">
    </div>
    <div class="pyramid ani-tip">
      <div>点我</div>
      <img src="../assets/pyramid.png" @click="showdazhou(3)">
    </div>
    <div class="statue ani-tip">
      <div>点我</div>
      <img src="../assets/statue.png" @click="showdazhou(4)">
    </div>
    <div class="sydney ani-tip">
      <div>点我</div>
      <img src="../assets/sydney.png" @click="showdazhou(5)">
    </div>
    
    
    
    
    
    <div class="prompt">左右滑动查看</div>
    <dazhou v-show="dazhoushow" @click="closedazhou" class="dazhou" :rollstat="rollstat" :msgg="msgg" :dazhouid="dazhouid"></dazhou>
  </div>
</template>

<script>
import Dazhou from './Dazhou'
import G from '../js/G' //摇一摇
import axios from 'axios'
import myconfig from '../js/config'

export default {
  name: 'worldmap',
  data () {
    return {
      msg: '世界地图',
      dazhoushow: false,
      dazhouid: '0',
      rollstat: '',
      msgg: null
    }
  },
  components: {
    Dazhou
  },
  methods: {
    showdazhou(para){
      this.dazhoushow = true
      this.dazhouid = para
      this.msgg = true
      G.addevent()// 添加绑定事件
    },
    closedazhou () {
      this.dazhoushow = false
      G.removeevent()
    }
  },
  mounted () {
    /*var deviceWidth = document.documentElement.clientWidth // rem 单位
    if (deviceWidth > 1280) deviceWidth = 1280
    document.documentElement.style.fontSize = deviceWidth / 12.8 + 'px'
    var deviceHeight = document.documentElement.clientHeight
    document.body.style.height = deviceHeight+'px'*/
    var vm = this
    sessionStorage.setItem('isroll',1)// 可以roll
    G.setcb(function(data){
        var isroll = sessionStorage.getItem('isroll')
        if (isroll == '1'){

          vm.rollstat = 'roll-animotion'
          setTimeout(function(){
            vm.rollstat = ''
            axios.post(myconfig.hosturl + '/xinhuaroll',{
              wechatid:sessionStorage.getItem('wechatid'),
              createdtime:sessionStorage.getItem('createdtime')
            }).then(function(data){
              let result = data.data.message
              if (result == '9') {
                alert('没有同步用户信息')
              } else if (result == '8') {
                alert('当前微信用户已经中奖')
              } else if (result == '1') {
                sessionStorage.setItem('type','1')
                vm.$router.push('/rollsucc')
              } else if (result == '2') {
                sessionStorage.setItem('type','2')
                vm.$router.push('/rollsucc')
              } else if (result == '3') {
                sessionStorage.setItem('type','3')
                vm.$router.push('/rollsucc')
              } else if (result == '4') {
                sessionStorage.setItem('type','4')
                vm.$router.push('/rollsucc')
              } else if (result == '0') {
                sessionStorage.setItem('isroll',1)
                vm.msgg = false
              }
            }).catch(function(err){
              console.log(err)
              alert('请求失败')
            })
          },1000)
        }
        sessionStorage.setItem('isroll',0)// 禁止roll
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.worldmap{
  height: 100%;
}
.wmbg{
  height: 12.2rem;
}
.eiffel, .greatewall, .jesus, .pyramid, .statue, .sydney{
  position: absolute;
}
.eiffel{
  width: 0.94rem;
  top: 2.9rem;
  left:10.5rem;
}
.ani-tip img{
  width: 100%;
}
.ani-tip div{
  text-align: right;
  color: red;
}
.greatewall{
  width:1.1rem;
  top: 4.25rem;
  left: 16rem;
}
.jesus{
  width: 1.24rem;
  top: 6.9rem;
  left: 6.4rem;
}
.pyramid{
  width: 1.88rem;
  top: 5.8rem;
  left: 10.1rem;
}
.statue{
  width: .96rem;
  top: 3.4rem;
  left: 4.5rem;
}
.sydney{
  width: 1.87rem;
  top: 8.2rem;
  left: 17rem;
}
.dazhou{
  position: fixed;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
}
.prompt{
  position: fixed;
  bottom:0.8rem;
  left: 3rem;
  color: #F5B236;
  font-size: 16px;
}
.ani-tip{
  
  animation:zoomInNum3 2s 2s infinite;
}
@keyframes zoomInNum3 {
  0% {
    
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    
    transform: scale(1);
  }
}
</style>
