<template>
	<div class="lucky-draw-container">
		<div class="content" style="">
			<div class="rotate" :class="{preparing: rotating}" :style="{ animationPlayState: aniationPause ?  'paused' : 'running', transform: 'rotateZ('+currentRotate+'deg)', transitionDuration: '10s'  }"><img :src="img"/></div>
		</div>
		
		 <mu-raised-button label="昨夜西风凋碧树" class="demo-raised-button" primary @click="switchClick"/>
		
		<div>奖品列表:</div>
		<div v-for="item,index in myPrizes" :key="index">{{item}}</div>
		 
	</div>
</template>

<script>
import { IMG } from '@/config/url'	
	
export default {
	data () {
		return {
			img: IMG + '/expand/lucky-draw/timg.png',
			rotating: false,
			aniationPause: true,
			current: 0,
			rotateFlag: false,
			currentRotate: 0,
			prizes: [ '10元现金', '1000元体验金', '京东E卡100元', '空气加湿器', '拉杆箱', 'iPad mini', 'iPhone 6s plus', 'Macbook pro' ],
			myPrizes: [],
		}
	},
	methods: {
		switchClick () {
			this.rotating = !this.rotating
			if (this.aniationPause) {
				console.log(this.aniationPause)
				this.aniationPause = !this.aniationPause
				console.log(this.aniationPause)
				const vm = this
				const random = parseInt((Math.random()*8 ), 10)
				
				setTimeout(function () {
					
					const fisrstStep = vm.rotateFlag ? 0 : -22.5
					
					vm.rotateFlag = true
					
					vm.currentRotate = vm.currentRotate + (vm.current - random) * 45 + 360 * 10 + fisrstStep
					vm.current = random
					vm.rotating = !vm.rotating
					console.log('get' + random)
					setTimeout(() => {
						vm.aniationPause = true
						vm.myPrizes.push(vm.prizes[random])
						console.log(vm.currentRotate)
					}, 3000)
				}, 5000)
			}
		}
	}
	
}

</script>

<style scoped="scoped" lang="less">

.lucky-draw-container{
	min-height: 100vh;
}

.rotate{
	transition-timing-function:  cubic-bezier(0.1,0.5,0.4,1);
	img{
		width: 100%;
	}	
}

.preparing{
	animation: rotating .3s linear infinite;
}

@keyframes rotating{
	from{
		transform: rotateZ(0);
	}
	to{
		transform: rotateZ(360deg);
	}
}
	
</style>