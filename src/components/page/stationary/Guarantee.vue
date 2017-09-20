<template>
	<swiper class="container" :options="swiperOption"  ref="mySwiper" style="width: 100% !important;">
	    <!-- slides -->
	    <swiper-slide class="plant-one-wrap plant-one swiper-item" > 
	    		<div class="plant-one-header clearfix">
	        		<h2 class="plant-one-title bounceInLeft animated">多重机制解决投资顾虑</h2>
	        		<span class="plant-one-symbol bounceInRight animated">未雨绸缪防隐患  步步为营保安全</span>
	        	</div>
	        	<div class="clearfix plant-one-center">
	        		<div class="left-wave plant-wave clearfix fl">
	        			<div></div>
	        		</div>
	        		<div class="center-circle clearfix">
	        			<div class="circle-content">
	        				<div class="circle circle-one"></div>
			        		<div class="circle circle-two"></div>
			        		<div class="circle circle-three"></div>
			        		<div class="circle circle-shield"></div>
	        			</div>
		        	</div>
	        		<div class="right-wave plant-wave clearfix fr">
	        			<div></div>
	        		</div>
	        	</div>
	        	<div class="clearfix plant-one-footer">
	        		<div></div>
	        	</div>
	        	<div class="arrow-bottom arrow-box" >
			        <b class="bottom"><i class="bottom-arrow1"></i><i class="bottom-arrow2"></i></b>
			    </div>
			    <div class="arrow-down icon"></div>
	    	</div>
	    </swiper-slide>
	    <swiper-slide class="swiper-item" v-for="item,index in imgs" :key="index"><img class="item-img" :src="item"  /></swiper-slide>
	  </swiper>
	
</template>

<script>
//安全保障
import { IMG } from '@/config/url'

export default {
	data () {
		return {
			notNextTick: true,
       		swiperOption: {
       			direction: 'vertical',
		    	loop: false,
       		},
       		imgs: [
       			IMG + '/guarantee/aqbz-pic-2.png',
       			IMG + '/guarantee/aqbz-pic-3.png',
       			IMG + '/guarantee/aqbz-pic-4.png',
       			IMG + '/guarantee/aqbz-pic-5.png',
       			IMG + '/guarantee/aqbz-pic-6.png',
       		]
	    }
	},
	computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
}
</script>

<style scoped="scoped" lang="less">
@import url("../../../config/base.less");

.swiper-item{
}
.container{
	height: calc(100vh);
	overflow: hidden;
}
.plant-one-wrap{
	background-color: #ff3333;
	overflow: hidden;
}
.item-img{
	width: 100%;
	max-height: 100%;
}
.plant-one{
	color: #fff;
	text-align: center;
	position: relative;
}
.plant-one-title{
	display: block;
	width: 100%;
	margin: 10px auto;
}
.plant-one-symbol{
	display: block;
}
.plant-one-header{
	margin-top: 50px;
}
.plant-one-header span{
	animation-delay: 0.8s;
	-webkit-animation-delay: 0.8s;
}
.plant-one-center{
	margin-top: 1.2rem;
}
.circle-one{
	background-image: url(../../../assets/guarantee/plant_one_p3.png);
	animation: guaranteeRotateOne 5s linear infinite;
}
.circle-two{
	background-image: url(../../../assets/guarantee/plant_one_p5.png);
	animation: guaranteeRotateTwo 3s linear infinite;
}
.circle-three{
	background-image: url(../../../assets/guarantee/plant_one_p4.png);
}
.center-circle{
	width: 5rem;
	height: 5rem;
	margin: 0 auto;
	display: inline-block;
}
.circle-content{
	width: 100%;
	height: 100%;
	position: relative;
}
.circle-content .circle{
	width: 100%;
	height: 100%;
	background-size: 100% 100%;
	position: absolute;
}
.circle-content .circle-shield{
	width: 70%;
	height: 70%;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: -10px;
	background-image: url('@{image}/guarantee/plant_one_p1.png');
}
.plant-wave{
	height: 5rem;
	width: 1.25rem;
	display: inline-block;
}
.plant-wave>div{
	background-image: url(../../../assets/guarantee/plant_one_hile.png);
	background-repeat: repeat;
	width: 100%;
	height: 60px;
	background-size: 80px 60px;
	display: block;
	margin-top: 1.466666rem;
	animation: guaranteeRadarWave 3s linear infinite;
}
.plant-one-footer{
	width: 100%;
	position: absolute;
	bottom: 0;
	height: calc(10vh);
	background-image: url(../../../assets/guarantee/plant_one_p2.png);
	background-size: calc(100vw) calc(10vh);
	animation: guaranteeFootWaveOut 10s linear infinite;
}
.plant-one-footer>div{
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 80%;
	background-image: url(../../../assets/guarantee/plant_one_p2.png);
	background-size: calc(100vw) calc(8vh);
	background-repeat-x: inherit;
	background-position-x: calc(50vw);
	animation: guaranteeFootWaveInner 8s linear infinite;
}
.arrow-down.icon {
  color: #000;
  position: absolute;
  width: 1px;
  height: 16px;
}
.arrow-down{
	position: absolute;
	margin: 0 auto;
	left: 0;
	right: 0;
	bottom: 10px;
	transform: scale(0.8);
	animation: guaranteeDownTips 0.5s linear infinite;
}
.arrow-down.icon:before {
  content: '';
  position: absolute;
  left: -5px;
  top: 3px;
  width: 10px;
  height: 10px;
  border-top: solid 2px #fff;
  border-right: solid 2px #fff;
          transform: rotate(135deg);
}


</style>
<style type="text/css">
@keyframes guaranteeDownTips{
	from{
		bottom: 10px;
	}
	to{
		bottom: 2px;
	}
}

@keyframes guaranteeRotateOne{
	0%{
		transform: rotate(0);
	}
	30%{
		opacity: 1;
	}
	32%{
		opacity: 0;
	}
	35%{
		opacity: 0;
	}
	36%{
		opacity: 1;
	}
	40%{
		opacity: 1;
	}
	40%{
		opacity: 0;
	}
	43%{
		opacity: 0;
	}
	44%{
		opacity: 1;
	}
	100%{
		transform: rotate(360deg);
	}
}
@keyframes guaranteeRotateTwo{
	0%{
		transform: rotate(0);
	}
	30%{
		opacity: 1;
	}
	31%{
		opacity: 0;
	}
	35%{
		opacity: 0;
	}
	36%{
		opacity: 1;
	}
	40%{
		opacity: 1;
	}
	40%{
		opacity: 0;
	}
	45%{
		opacity: 0;
	}
	46%{
		opacity: 1;
	}
	100%{
		transform: rotate(-360deg);
	}
}

@keyframes guaranteeRadarWave {
	from{
		background-position-x: 0;
	}
	to{
		background-position-x: 240px;
	}
}
@keyframes guaranteeFootWaveOut{
	from{
		background-position-x: 0;
	}
	to{
		background-position-x: calc(-100vw);
	}
}
@keyframes guaranteeFootWaveInner{
	from{
		background-position-x: calc(50vw);
	}
	to{
		background-position-x: calc(-150vw);
	}
}
	
</style>