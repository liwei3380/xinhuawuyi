<template>
  <div class="page2 shuping">
    <img src="../assets/title-logo.png" class="title-logo">
    <div class="img-box">
      <img src="../assets/ball.png" class="page2-img">
      <img @click="showrules = !showrules" src="../assets/rollinstructions.png" class="rollinstructions">
      <img @click="toPage3" src="../assets/click-roll.png" class="click-roll">
    </div>
    <rollrules v-show=showrules @click="showrules = !showrules"></rollrules>
  </div>
</template>

<script>
import Rollrules from './Rollrules'

export default {
  name: 'page2',
  data () {
    return {
      msg: '值此五一之际，新华红利基金正式发行，特派发现金红包，祝您五一激情出游，快点击抽取',
      showrules: false
    }
  },
  methods: {
  	toPage3 () {
  		this.$router.push('/worldmap')
  	}
  },
  components:{
    Rollrules
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page2{
  background: linear-gradient(#34AEFF, #69C3FF);
}
.title-logo{
  width: 4.38rem;
  margin-left: 0.25rem;
}
.page2-img{
  width:6.75rem;
  display: block;
  margin: auto;
}
.img-box{
  position: relative;
}
.rollinstructions{
  width: 1.76rem;
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
}
.click-roll{
  width: 1.9rem;
  position: absolute;
  bottom: 0.45rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
