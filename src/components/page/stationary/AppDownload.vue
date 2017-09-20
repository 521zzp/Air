<template>
	<div>
		<div class="download-group">
			<div class="download-item">
				<a class="link" href="http://139.196.25.57/dl/yhb-2.0.6.6.apk">
					<svg class="iconfont" aria-hidden="true">
					    <use xlink:href="#icon-android"></use>
					</svg>
					Android</a>
			</div>
			<div class="download-item">
				<a class="link" href="https://itunes.apple.com/cn/app/id1180849280">
					<svg class="iconfont" aria-hidden="true">
					    <use xlink:href="#icon-ios"></use>
					</svg>
					iOS</a>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	

export default {
	data () {
		return {
			
		}
	}
}

</script>

<style scoped="scoped" lang="less">

.download-group{
	margin-top: 4rem;
}
.download-item{
	text-align: center;
}
.link{
	width: 4rem;
	line-height: 1.333333rem;
	font-size: 0.64rem;
	border-radius: 6px;
	height: 1.333333rem;
	border: 1px solid #57a3f3;
	margin: 0.333333rem;
	display: inline-block;
}


</style>