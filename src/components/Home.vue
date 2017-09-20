<template>
	<div>
		<h1>本页为主页</h1>
		<router-link to="/" class="link">Hello</router-link>
		<router-link to="/home" class="link">Home</router-link>	
		<router-link to="/inner" class="link">Inner</router-link>	
	</div>
</template>

<script>
import { notice } from '@/tool/talk'	

export default {
	data () {
		return {
			nca: ''
		}
	},
	mounted () {
		notice('第6话 谎言分两种。关于过去的事实上的谎言以及关于未来的权利上的谎言。')
	}
}
</script>

<style scoped="scoped" lang="less">
.link{
		font-size: 0.666666rem;
		display: block;
	}
</style>