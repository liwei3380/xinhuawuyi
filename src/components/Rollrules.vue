<template>
  <div class="rollrules">
    <img src="../assets/roll-instructions-box.png" class="rollinstrubox">
    <img src="../assets/close.png" @click="mclick" class="close">
  </div>
</template>

<script>
export default {
  name: 'rollrules',
  data () {
    return {
      msg: '抽奖说明'
    }
  },
  methods: {
    mclick () {
      this.$emit('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rollrules{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.7);
}
.rollinstrubox{
  width: 5.96rem;
  margin: auto;
  margin-top:0.77rem;
  display: block;
}
.close{
  position: absolute;
  top:.55rem;
  right: .55rem;
  width: 0.8rem;
}
</style>
