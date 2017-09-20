<template>
	<div>
		<h1>最内部组件</h1>
		<router-link to="/" class="link">Hello</router-link>
		<router-link to="/home" class="link">Home</router-link>	
		<router-link to="/inner" class="link">Inner</router-link>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			}
		},
	}
</script>

<style>
	.link{
		font-size: 0.666666rem;
		display: block;
	}
</style>