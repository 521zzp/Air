<template>
	<div class="two-festival-container">
		<img class="bg-img" :src="img" alt="" />
		<!--<mu-raised-button v-if="!iOS" class="buy-btn" @click="buy" label="立即投资"/>-->
	</div>
</template>

<script>
import { IMG } from '@/config/url'	
import { callAppRouter } from '@/tool/bridge'
import { os } from '@/tool/tool'
export default {
	data () {
		return {
			img: IMG + '/activity/two-festival/bg.png'
		}
	},
	computed: {
		iOS () {
			return os().isPhone
		}
	},
	methods: {
		buy () {
			if (window.bridge) {
				callAppRouter('twoFestivalBuy', null, () => {})
			} else{
				this.$router.push('/app')
			}
		}
	}
}
	
</script>

<style scoped="scoped">
	
.two-festival-container{
	background-color: #d61c19;
	overflow: hidden;
	min-height: 100vh;
}
.bg-img{
	width: 100%;
}
.buy-btn{
	width: 7.733333rem;
	height: 1.386666rem;
	border-radius: 0.693333rem;
	border: none;
	font-size: 0.48rem;
	color: #d61c19;
	background-color: #f4c41d;
	display: block;
	margin: 0.533333rem auto;
}
</style>