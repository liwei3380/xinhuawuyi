<template>
  <div >
    <div @click="closeroll" class="shade"></div>
    <div class="img-box">
      <div :class=getrollstat>
        <img :src=imgsrc :class=textimg>
        <img :src=boximgsrc class="box-img">
        <img src="../assets/shake.png" class="shake">
      </div>
    </div>
  </div>
</template>

<script>
var rollfail = require('../assets/roll-fail.png')
var eiffel = require('../assets/european.png')
var greatwall = require('../assets/asia.png')
var jesus = require('../assets/south.png')
var pyramid = require('../assets/africa.png')
var statue = require('../assets/northern.png')
var sydney = require('../assets/oceania.png')
var mapasiaoceania = require('../assets/map-asia-oceania.png')
var mapboxafrica = require('../assets/mapbox-africa.png')
var mapboxeuropean = require('../assets/mapbox-european.png')
var mapboxnorthsouth = require('../assets/mapbox-northsouth.png')

let dazhous = [eiffel,greatwall,jesus,pyramid,statue,sydney,rollfail]
let dazhoubox = [mapboxeuropean,mapasiaoceania,mapboxnorthsouth,mapboxafrica,mapboxnorthsouth,mapasiaoceania]
export default {
  name: 'dazhou',
  props:['dazhouid','msgg','rollstat'],
  /*data () {
    console.log(dazhous[parseInt(this.dazhouid)].name)
    return {
      msg: dazhous[parseInt(this.dazhouid)].name,
      intro: dazhous[parseInt(this.dazhouid)].intro
    }
  },*/
  data () {
    return {
      textimg:'text-img'
    }
  },
  computed: {
    imgsrc () {
      if (this.msgg == false) {
        this.textimg = 'text-img ' + 'fail-text'
        return dazhous[6]
      } else {
        return dazhous[this.dazhouid] 
      }
    },
    boximgsrc () {
      return dazhoubox[this.dazhouid]
    },
    getrollstat () {
      console.log('dz',this.rollstat)
      return 'ani-wrap ' + this.rollstat
    }
  },
  methods:{
    roll () {
      this.$router.push('/roll')
    },
    closeroll () {
      this.$emit('click');
    }
  }/*,
  mounted () {
    let index = parseInt(this.dazhouid)
    this.msg = dazhous[parseInt(this.dazhouid)].name
    this.intro = dazhous[index].intro
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-box{
  width: 7.7rem;
  height: 5.65rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.fail-text{
  margin-top:0.75rem;
}
.text-img{
  width: 7.09rem;
  position: fixed;
  top: 0.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.box-img{
  width: 7.7rem;
  position: fixed;
  top: 0%;
  left: 0%;
}
.shade{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
}
.shake{
  width: 1.3rem;
  position: fixed;
  bottom: 0.25rem;
  right: 0.25rem;
}
.ani-wrap{
  width: 100%;
  height: 100%;
  position: relative;
}
.roll-animotion{
  display:inline-block;
  -webkit-animation: roll 0.8s;
}
@-webkit-keyframes roll{
    0% {transform: rotate(-15deg);
    -webkit-transform:rotate(-15deg);}
    20% {transform: rotate(15deg);
    -webkit-transform:rotate(15deg);}
  40% {transform: rotate(-15deg);
    -webkit-transform:rotate(-15deg);}
    60% {transform: rotate(15deg);
    -webkit-transform:rotate(15deg);}
  80% {transform: rotate(-15deg);
    -webkit-transform:rotate(-15deg);}
  100% {transform: rotate(15deg);
    -webkit-transform:rotate(15deg);}
}
</style>
