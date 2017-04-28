<template>
  <div class="nochance shuping">
    <div>{{msg}}</div>
    <button @click="change">换个大洲</button>
  </div>
</template>

<script>
export default {
  name: 'nochance',
  data () {
    return {
      msg: '没中奖',
    }
  },
  methods:{
    change () {
      sessionStorage.setItem('failcount',0)
      this.$router.push('/worldmap')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
