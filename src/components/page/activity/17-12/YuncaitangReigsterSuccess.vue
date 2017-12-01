<template>
	<div class="yct-success-container">
		<svg class="iconfont success"  aria-hidden="true" >
		    <use xlink:href="#icon-success"></use>
		</svg>
		<span class="success-msg">恭喜您，注册成功！</span>
		<img class="welfare-img" :src="img"/>
		<router-link to="/app" class="to-download-app" ></router-link>
	</div>
</template>

<script>
import { IMG } from '@/config/url'

export default {
	data () {
		return {
			img: IMG + '/activity/17-12/yuncaitang/welfare.png'
		}
	}
}

	
</script>

<style scoped="scoped" lang="less">
@import url("../../../../config/base.less");


.welfare-img{
	width: 7.36rem;
	display: block;
	margin-right: auto;
	margin-left: auto;
	margin-top: 1.333333rem;
}
.to-download-app{
	width: 7.573333rem;
	height: 1.626666rem;
	color: #FFFFFF;
	border-radius: 0.813333rem;
	display: block;
	margin-left: auto;
	margin-right: auto;
	font-size: 0.453333rem;
	background-image: url('@{image}/activity/17-12/yuncaitang/download-btn.png');
	background-size: cover;
	margin-top: 0.6rem;
}
.success-msg{
	display: block;
	text-align: center;
	font-size: 0.4rem;
	margin-top: 0.773333rem;
}
.success{
	font-size: 1.6rem;
	color: @theme;
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 1.066666rem;
}
.yct-success-container{
	min-height: 100vh;
	background-color: #EFEFF4;
	overflow: hidden;
}
</style>