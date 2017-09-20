<template>
	<div class="container">
		<img v-if="status" class="act-img" src="http://192.168.3.4/mobile/531-H5.jpg"/>
		<span class="error-link" v-else="status">
			<svg class="iconfont" aria-hidden="true">
			    <use xlink:href="#icon-sad"></use>
			</svg>
			链接失效</span>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			}
		},
		mounted () {
			const id = this.$route.params.id
			this.$store.dispatch('getActivityShowImg',{ id })				
		},
		computed:{
			img () {
				return this.$store.state.activity.activityShowImg
			},
			status () {
				return this.$store.state.activity.activityShowStatus
			}
		}
	}
</script>

<style scoped="scoped" lang="less">

.error-link{
	line-height: 1.5;
	display: block;
	text-align: center;
	margin-top: 4.8rem;
	font-size: 0.773333rem;
}
.act-img{
	width: 100%;
	line-height: 0;
}
.container{
	line-height: 0;
	overflow: hidden;
}

</style>