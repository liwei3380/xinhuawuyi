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
  		this.$router.push('/page3')
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
  background: #69C3FF;
}
.page2-img{
  width:100%;
}
.rollinstructions{
  width: 1.96rem;
  position: absolute;
  top: 10.55rem;
  left: 50%;
  transform: translateX(-50%);
}
.click-roll{
  width: 2.59rem;
  position: absolute;
  top: 11.5rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
