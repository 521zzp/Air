<template>
	<div class="container">
		<router-link to="/">
			<img class="act-img" src="http://192.168.3.4/mobile/531-H5.jpg"/>
		</router-link>
		<mu-raised-button :label="btnText"  class="buy" style="background-color: #FF3030;color: #ffffff;"/>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				color: 'red',
				btnText: '立即抢购'
			}
		}
	}
</script>

<style scoped="scoped" lang="less">


.act-img{
	width: 100%;
	line-height: 0;
}
.container{
	line-height: 0;
	overflow: hidden;
}
.buy{
	position: fixed;
	bottom: 10px;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
}
</style>