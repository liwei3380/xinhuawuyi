<template>
  <div class="rollsucc shuping">
    <img src="../assets/roll-prompt.png" class="rollprompt">
    <div class="roll-text">
      <div>恭喜您，中奖了！</div>
      {{msg()}}
    </div>
    <img src="../assets/click-get.png" @click="lingqu" class="clickget">
  </div>
</template>

<script>
export default {
  name: 'rollsucc',
  methods:{
    lingqu () {
      this.$router.push('/lingqu')
    },
    msg () {
      var type = sessionStorage.getItem('type')
      var types = ['200','100','50','20']
      return '红利基金经理姚秋为您派发'+types[parseInt(type)-1]+'元旅行基金'
    }
  },
  mounted () {
    document.documentElement.style.fontSize = sessionStorage.getItem('fontsize')
    document.body.style.height = sessionStorage.getItem('bodyheight')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rollsucc{
  background: url("../assets/prise-page.png");
  background-size: cover;
  height: 100%;
  padding-top: 2.9rem;
}
.roll-text{
  width:4.50rem;
  height: 3.8rem;
  margin: auto;
  padding: 0.25rem;
  color: #F5B236;
  font-size: 24px;
  line-height: 36px;
}
.rollprompt{
  width: 4.65rem;
  margin: 0 auto 0 auto;
  display: block;
}
.clickget{
  width: 3.29rem;
  margin: 0 auto 0 auto;
  display: block;
}
</style>
