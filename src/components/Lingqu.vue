<template>
  <div class="lingqu shuping">
    <img src="../assets/roll-prompt.png" class="rollprompt">
    <div class="input-wrap">
      <div>姓名</div>
      <input v-model=username type="text" name="name"  maxlength="11" placeholder="请填写姓名">
      <div>联系方式</div>
      <input v-model=phone type="tel" maxlength="11" name="phone" placeholder="请输入手机号">
      <img src="../assets/submit.png" @click="submit" class="submit">
    </div>
    <div v-show=issucc @click="issucc=!issucc" class="shade">
      <img src="../assets/submit-succ.png">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import myconfig from '../js/config'
import { Indicator } from 'mint-ui'

export default {
  name: 'lingqu',
  data () {
    return {
      username: '',
      phone: '',
      issucc: false
    }
  },
  methods:{
    submit () {
      if (this.username != '' && this.phone != '') {
        var vm = this
        Indicator.open();
        //myconfig.hosturl = 'http://192.168.1.112:8080/Linki2uCenterTest'
        axios.post(myconfig.hosturl+'/xinhuayurenjie',{
            name:this.username,
            phone:this.phone,
            wechatid:sessionStorage.getItem('wechatid'),
            createtime:sessionStorage.getItem('createdtime'),
            type:sessionStorage.getItem('type')
          }).then(function(res){
            Indicator.close();
            if (res.data.message=="0") {
              vm.issucc = true
            } else if(res.data.message == "1"){
              alert("重复的电话号")
            } else if(res.data.message == "8"){
              alert("未查到中奖信息")
            } else if(res.data.message == "9"){
              alert("未查到用户信息")
            }
          }).catch(function(err){
            Indicator.close();
            alert('请求失败')
          })
      } else {
        alert('请完善信息')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lingqu{
  background: url("../assets/prise-page.png");
  background-size: cover;
  height: 100%;
  padding-top: 2.9rem;
}
.rollprompt{
  width: 4.65rem;
  margin: 0 auto 0 auto;
  display: block;
}
.input-wrap{
  text-align: center;
  width:4.50rem;
  height: 3.8rem;
  margin: auto;
  padding: 0.25rem;
  color: #F5B236;
  font-size: 24px;
  line-height: 36px;
}
.input-wrap input{
  width:3.1rem;
  height: .6rem;
  line-height: .6rem;
  padding: 0 0.25rem;
  border: 1px solid #F5B236;
  border-radius: 5px;
}
.submit{
  width: 3.29rem;
  margin-top: 1rem;
}
.shade{
  position: fixed;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
}
.shade img{
  width: 4.09rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>
