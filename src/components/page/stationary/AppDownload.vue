<template>
	<div class="download-container">
		<img class="top-logo" :src="logo"/>
		<div class="download-group">
			<div class="download-item">
				<a class="link" href="https://itunes.apple.com/cn/app/id1287033031">
					<svg class="iconfont download-icon" aria-hidden="true">
					    <use xlink:href="#icon-ios"></use>
					</svg>
					iOS下载</a>
			</div>
			<div class="download-item">
				<a class="link" href="http://www.shangnongtou.com/static_img/apk/zgjf.apk" target="_blank" @click="androidDwonload">
					<svg class="iconfont download-icon" aria-hidden="true">
					    <use xlink:href="#icon-android"></use>
					</svg>
					Android下载</a>
			</div>
		</div>
		<div  v-show="isWX" class="wx-wrap">
			<img  :src="wxbrower" class="wx-img fr"/>
		</div>
		<img :src="footer" class="footer-img"/>
	</div>
</template>

<script>
import { IMG } from '@/config/url'

export default {
	data () {
		return {
			logo: IMG + '/app-download/logo-text.png',
			footer: IMG + '/app-download/footer-img.png',
			wxbrower: IMG + '/app-download/wx-app-download.png',
			isWX: false,
		}
	},
	computed: {
	},
	methods: {
		androidDwonload () {
			this.isWX = !!/MicroMessenger/i.test(navigator.userAgent)
			/*if (!!/MicroMessenger/i.test(navigator.userAgent)) {
				
			} else{
				
			}*/
		}
	}
}

</script>

<style scoped="scoped" lang="less">
@import url("../../../config/base.less");

.wx-img{
	max-width: 70%;
	max-height: 100%;
	margin-right: 0.4rem;
}
.wx-wrap{
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.7);
	position: absolute;
	top: 0;
	left: 0;
}
.footer-img{
	width: 100%;
	position: absolute;
	bottom: 0;
	z-index: -1;
}
.top-logo{
	width: 4.693333rem;
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 1.6rem ;
}
.download-icon{
	font-size: 0.773333rem;
}
.download-container{
	overflow: hidden;
	min-height: 100vh;
	position: relative;
}
.download-group{
	margin-top: 1.6rem;
}
.download-item{
	text-align: center;
}
.link{
	width: 8.533333rem;
	line-height: 1.6rem;
	font-size: 0.48rem;
	border-radius: 1.6rem;
	height: 1.6rem;
	color: @white;
	background-color: @theme;
	border: 1px solid @theme;
	margin: 0.333333rem;
	display: inline-block;
}


</style>