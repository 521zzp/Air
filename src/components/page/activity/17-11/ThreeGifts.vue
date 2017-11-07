<template>
	<div class="three-gifts-container">
		
		<div class="word-content">
			<div class="first-line wrod-col">
				<img class="word animated bounceIn" style="animation-delay: .5s;" src="../../../../assets/activity/17-11/three-gifts/one.png"/>
				<img class="word animated bounceIn" style="animation-delay: .8s;" src="../../../../assets/activity/17-11/three-gifts/two.png"/>
			</div>
			<div class="wrod-col">
				<img class="word animated bounceIn" style="animation-delay: 1.1s;" src="../../../../assets/activity/17-11/three-gifts/three.png"/>
				<img class="word animated bounceIn" style="animation-delay: 1.4s;" src="../../../../assets/activity/17-11/three-gifts/four.png"/>
			</div>
		</div>
		<mu-raised-button  class="invite-btn" @click="invite" label="立即邀请"/>
	</div>
</template>

<script>
import { callAppRouter } from '@/tool/bridge'

export default {
	data () {
		return {
		}
	},
	methods: {
		invite () {
			callAppRouter('invite', null, function (err, res) {})
			
		},
	},
}
</script>

<style scoped="scoped" lang="less">
@import url("../../../../config/base.less");

.wrod-col{
	width: 4.8rem;
	margin-left: auto;
	margin-right: auto;
}
.first-line{
	margin-top: 3.04rem;
}
.word{
	width: 2.24rem;
	height: 2.24rem;
	animation-iteration-count: infinite;
}
.three-gifts-container{
	overflow: hidden;
	height: 57.066666rem;
	background-image: url('@{image}/activity/17-11/three-gifts/bg01.png');
	background-size: contain;
	position: relative;
	background-repeat: no-repeat;
	background-position: center;
}
.invite-btn{
	/*top: 27.466666rem;*/
	position: fixed;
	bottom: 0;
	/*background-image: url('@{image}/activity/17-11/three-gifts/invite-btn.png');*/
	width: 100%;
	color: white;
	height: 1.333333rem;
	font-size: 0.48rem;
	letter-spacing: .2em;
	background-color: #8e8cf5;
}
.look-btn{
	top: 39.733333rem;
	background-image: url('@{image}/activity/17-11/three-gifts/look-btn.png');
}	
.btn{
	position: absolute;
	width: 8rem;
	height: 1.253333rem;
	background-size: cover;
	border-radius: 0.626666rem;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
}
</style>