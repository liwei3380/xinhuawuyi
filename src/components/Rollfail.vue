<template>
  <div class="rollfail shuping">
    <div>{{msg}}</div>
    <button @click="again">再抽</button>
  </div>
</template>

<script>
export default {
  name: 'rollfail',
  data () {
    return {
      msg: '没中奖',
    }
  },
  methods:{
    again () {
      this.$router.push('/roll')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
