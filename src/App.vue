<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
  font-size: 12px;
  
}
#app {
  font-family: Yuanti SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.shuping{
  box-sizing: border-box;
  max-width: 7.5rem;
  margin: 0 auto;
  height:100%;
}
</style>
