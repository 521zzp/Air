<template>
	<div class="jackaroo-welfare">
		<img class="bg-img" :src="img" alt=""/>
		<span class="what-raise"><span @click="showRaise = true">什么是加息券>></span></span>
		<mu-raised-button class="reg-btn" @click="register" label="立即注册"/>
		
		<div v-transfer-dom>
	      	<x-dialog v-model="showRaise" class="jackaroo-welfare-dialog">
	        	<div class="dialog-title">加息券说明</div>
	        	<div class="content">
	        		<p>可用于增加理财项目的预期年化收益，使用加息券后，投资的理财项目将按照增加后的预期年化收益率计算预期收益。若加息券有券面限制时间，则该加息券的加息时间在限制时间内。</p>
   					<p>例如：1%的加息券限时15天，则使用后在第16天利率恢复到标的原利率。</p>
	        	</div>
		        <div @click="showRaise = false">
		          <span class="dialog-close" >我知道了</span>
		        </div>
	   	 	</x-dialog>
   		</div>
	</div>
</template>

<script>

import { IMG } from '@/config/url'
import { XDialog, TransferDomDirective as TransferDom } from 'vux'
import { callAppRouter } from '@/tool/bridge'

export default {
	directives: {
	    TransferDom
	},
	data () {
		return {
			img: IMG + '/activity/jackaroo-welfare/bg.png',
			showRaise: false
		}
	},
	components: {
		XDialog
	},
	methods: {
		register () {
			if (window.bridge) {
				callAppRouter('jackarooRegister', null, () => {})
			} else{
				this.$router.push('/register')
			}
		}
	}
}

</script>

<style type="text/css">
.jackaroo-welfare-dialog .weui-dialog{
	
	border-radius: 0.426666rem;
 
}
</style>
<style scoped="scoped" lang="less">
@import url("../../../../config/base.less");

@import '~vux/src/styles/close';


.dialog-title {
    font-size: 0.48rem;
    height: 1.386666rem;
    line-height: 1.386666rem;
    border-bottom: 1px solid #dcdcdc;
    color: @theme;
    
  }
.jackaroo-welfare{
	min-height: 100vh;
	position: relative;
}
.dialog-close{
	height: 1.386666rem;
	display: block;
	text-align: center;
	background-color: @theme;
	line-height: 1.386666rem;
	color: @white;
	font-size: 0.48rem;
}
.content{
	padding: 0.533333rem 0.426666rem;
	text-align: left;
	text-indent: 2em;
	font-size: 0.4rem;
	line-height: 2;
}
.bg-img{
	width: 100%;
	display: block;
}
.what-raise{
	font-size: 0.4rem;
	color: @white;
	position: absolute;
	top: 11.333333rem;
	display: block;
	width: 100%;
	text-align: center;
}
.reg-btn{
	width: 7.733333rem;
	height: 1.533333rem;
	position: absolute;
	bottom: 0.8rem;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	font-size: 0.48rem;
	color: #f5d58b;
	border-radius: 0.8rem;	
	background-image: url('@{image}/activity/jackaroo-welfare/btn-bg.png');
	background-size: 100% 100%;
}

</style>