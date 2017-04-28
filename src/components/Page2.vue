<template>
  <div class="page2 shuping">
    <img src="../assets/2page.png" class="page2-img">
    <img @click="showrules = !showrules" src="../assets/rollinstructions.png" class="rollinstructions">
    <img @click="toPage3" src="../assets/click-roll.png" class="click-roll">
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
.page2-img{
  width:85%;
  display: block;
  margin: auto;
}
.rollinstructions{
  width: 1.76rem;
  position: absolute;
  top: 8.97rem;
  left: 50%;
  transform: translateX(-50%);
}
.click-roll{
  width: 1.9rem;
  position: absolute;
  top: 9.87rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
