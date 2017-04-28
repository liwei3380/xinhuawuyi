<template>
  <div class="page1 shuping">
    <v-touch v-on:swipeup="onSwipeUp" class="toucharea">
      <img src="../assets/1page.png" class="page1-img">
      <img src="../assets/swipedown.png" class="swipeup">
    </v-touch>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      msg: '激情假日，新华助你出行'
    }
  },
  methods: {
    onSwipeUp () {
      this.$router.push('/page2')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page1{
  background: #34AEFF;
}
.page1-img{
  height: 100%;
  display: block;
  margin: auto;
}
.swipeup{
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0.84rem;
}
.toucharea{
  height: 100%;
}
</style>
