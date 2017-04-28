<template>
  <div class="page3 shuping" @click="toworldmap">
    <img src="../assets/mapbg.png" class="mapbg">
    <img src="../assets/landscap-prompt.png" class="ls-pt">
    <div class="shade"></div>
  </div>
</template>

<script>

export default {
  name: 'page3',
  data () {
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", this.hengshuping, false);
    return {
      msg: '横屏打开地图'
    }
  },
  methods: {
    hengshuping () {
      if (window.orientation == '90' || window.orientation == '-90'){
          this.$router.push('/worldmap')
          window.removeEventListener("onorientationchange" in window ? "orientationchange" : "resize", this.hengshuping, false);
        }
    },
    toworldmap(){
      this.$router.push('/worldmap')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page3{
  width:100%;
  height: 13rem;
  overflow-x: hidden;
}
.mapbg{
  height: 7.5rem;
  transform: rotate(90deg);
  transform-origin: 28% 50%;
}
.shade{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
}
.ls-pt{
  width: 3.55rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1;
}
</style>
