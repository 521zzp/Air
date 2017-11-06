<template>
	<div class="invite-container">
		<img class="bg-img" :src="img" alt="" onclick="javascript: return false"/>
		
		<span class="what-vip" @click="introduceVIP">什么是vip用户>></span>
		<span class="invite" @click="share">立即邀请好友</span>
	</div>
</template>

<script>
import { IMG } from '@/config/url'
import { callAppRouter } from '@/tool/bridge'
import { os } from '@/tool/tool'

export default {
	data () {
		return {
			img: IMG + '/activity/invite-friend/bg.png',
		}
	},
	methods: {
		share () {
			if (os().isAndroid) {
				window.location = window.location + '?action=1'
			} else{
				callAppRouter('share', null, function (err, res) {
				})
			}
			
		},
		introduceVIP () {
			if (os().isAndroid) {
				window.location = window.location + '?action=2'
			} else{
				callAppRouter('introduceVIP', null, function (err, res) {
				})
			}
			
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../../../config/base.less");
.bg-img{
	width: 100%;
	display: block;
}
.invite{
	width: 7.733333rem;
	height: 1.6rem;
	text-align: center;
	line-height: 1.6rem;
	color: @white;
	font-size: 0.48rem;
	position: absolute;
	bottom: 0.8rem;
	background-image: url('@{image}/activity/invite-friend/invite-btn.png');
	background-size: cover ;
	display: block;
	left: 0;
	right: 0;
	margin: 0 auto;	
}
.what-vip{
	position: absolute;
	bottom: 2.72rem;
	display: block;
	width: 100%;
	text-align: center;
	font-size: 0.4rem;
	color: #e9bf80;
}
.invite-container{
	position: relative;
}

</style>