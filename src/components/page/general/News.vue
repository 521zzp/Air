<template>
	<div class="container">
		<span class="title">{{news.title}}</span>
		<div class="content" v-html="news.content"></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	computed: {
		news () {
			return this.$store.state.news.item
		}
	},
	mounted () {
		const id = this.$route.params.id
		this.$store.dispatch('getNews', {id})
	}
}
</script>



<style lang="less">
@import url("../../../config/base.less");
.container{
	overflow: hidden;
	min-height: calc(100vh);
	padding: 0.4rem 0.4rem;
	border-radius: 4px;
}
.title{
	font-size: 0.64rem;
	display: block;
	margin: 0.133333rem 0;
	text-align: center;
}
.content{
	font-size: 0.373333rem;
	padding: 0.533333rem ;
	z-index: 10;
}

</style>

