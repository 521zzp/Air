<template>
  <div id="app">
  <transition :name="nca">
    <router-view></router-view>
    </transition>
    <Global/>
  </div>
</template>

<script>
import Global from '@/components/page/Global'
export default {
  name: 'app',
   computed: {
    nca () {
  		return this.$store.state.nca
  	}
  },
  components:{
  	Global
  }
}
</script>

<style>

.vux-pop-in-enter-active,.vux-pop-in-leave-active,.vux-pop-out-enter-active,.vux-pop-out-leave-active {
	 will-change:transform;
	 -webkit-transition:all .5s;
	 transition:all .5s;
	 height:100%;
	 position:absolute;
	 -webkit-backface-visibility:hidden;
	 backface-visibility:hidden;
	 -webkit-perspective:1000;
	 perspective:1000;
}
.vux-pop-out-enter {
 opacity:0;
 -webkit-transform:translate3d(-100%,0,0);
 transform:translate3d(-100%,0,0);
}
.vux-pop-in-enter,.vux-pop-out-leave-active {
 opacity:0;
 -webkit-transform:translate3d(100%,0,0);
 transform:translate3d(100%,0,0);
}
.vux-pop-in-leave-active {
 opacity:0;
 -webkit-transform:translate3d(-100%,0,0);
 transform:translate3d(-100%,0,0);
}
</style>
