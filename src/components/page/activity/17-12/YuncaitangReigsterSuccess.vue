<template>
	<div class="yct-success-container">
		<svg class="iconfont success"  aria-hidden="true" >
		    <use xlink:href="#icon-success"></use>
		</svg>
		<span class="success-msg">恭喜您，注册成功！</span>
		<img class="welfare-img" :src="img"/>
		<router-link to="/app" ><mu-raised-button label="下载APP" class="to-download-app"  fullWidth/></router-link>
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
	width: 100%;
	margin-top: 1.866666rem;
}
.to-download-app{
	width: 7.333333rem;
	height: 1.386666rem;
	line-height: 1.386666rem;
	color: @theme;
	background-color: #FFE401;
	border-radius: 0.693333rem;
	display: block;
	margin-left: auto;
	margin-right: auto;
	font-size: 0.453333rem;
	margin-top: 1.4rem;
}
.success-msg{
	display: block;
	text-align: center;
	color: #FFFFFF;
	font-size: 0.4rem;
	margin-top: 0.773333rem;
}
.success{
	font-size: 1.6rem;
	color: #FFFFFF;
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 1.066666rem;
}
.yct-success-container{
	min-height: 100vh;
	background-color: #F70F49;
	overflow: hidden;
}
</style>