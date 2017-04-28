<template>
  <div class="roll shuping">
    <div @click="roll">{{msg}}</div>
  </div>
</template>

<script>
import G from '../js/G' //摇一摇
import axios from 'axios'
export default {
  name: 'roll',
  data () {
    return {
      msg: '摇'
    }
  },
  methods:{
    roll () {
      this.$router.push('/rollsucc')
    }
  },
  mounted(){
    document.documentElement.style.fontSize = sessionStorage.getItem('fontsize')
    document.body.style.height = sessionStorage.getItem('bodyheight')

    sessionStorage.setItem('isroll',1)// 可以roll
    let vm = this
    G.setcb(function(data){
      var isroll = sessionStorage.getItem('isroll')
      if (isroll == '1'){
        vm.msg = '摇一摇。。。'
        setTimeout(function(){
          axios.post('http://192.168.1.112:8080/Linki2uCenterTest/xinhuaroll',{
            wechatid:sessionStorage.getItem('wechatid'),
            createdtime:sessionStorage.getItem('createdtime')
          }).then(function(data){
            let result = data.data.message
            if (result == '9') {
              alert('没有同步用户信息')
            } else if (result == '8') {
              alert('当前微信用户已经中奖')
            } else if (result == '1') {
              sessionStorage.setItem('type','1');
              vm.$router.push('/rollsucc')
            } else if (result == '0') {
              var failcount = sessionStorage.getItem('failcount') == null ? 0 : parseInt(sessionStorage.getItem('failcount'))
              if (failcount < 2) {
                failcount += 1;
                sessionStorage.setItem('failcount',failcount)
                vm.$router.push('/rollfail')
              } else {
                vm.$router.push('/nochance')
              }
            }
          }).catch(function(err){
            alert('请求失败')
          })
        },1000)
      }
      sessionStorage.setItem('isroll',0)// 禁止roll
    });
    G.addevent();// 添加绑定事件
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
