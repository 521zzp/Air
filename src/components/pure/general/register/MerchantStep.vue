<template>
	<div class="step-container">
		<div class="aaa">
			<div class="step-one"><span class="dot" :class="{ active: step >= 1 }">1</span></div>
			<div class="step-two"><span class="dot" :class="{ active: step >= 2 }">2</span></div>
			<div class="step-three"><span class="dot" :class="{ active: step >= 3 }">3</span></div>
			<div class="step-three"><span class="dot" :class="{ active: step >= 4 }">4</span></div>
			<div class="line">
				<div class="fl" :class="{ active: step > 1  }"></div>
				<div class="fl" :class="{ active: step > 2  }"></div>
				<div class="fr" :class="{ active: step > 3  }"></div>
			</div>			
		</div>
		<div class="xxx">
		 	<span>基本信息</span>
		 	<span>上传照片</span>
		 	<span>商户照片</span>
		 	<span>进行审核</span>
		</div>
	</div>
</template>

<script>

export default {
	props: [ 'step' ],
	data () {
		return {
		}
	},
}

</script>

<style scoped="scoped" lang="less">
@import url("../../../../config/base.less");
.step-container{
	padding: 0.533333rem 0;
	background-color: #f0f0f3;
}
.dot{
	display: inline-block;
	width: 0.64rem;
	height: 0.64rem;
	border-radius: 50%;
	background-color: #999;
	line-height: 0.64rem;
	color: #FFF;
}
.dot.active{
	background-color: @theme;
}
.line{
	position: absolute;
	z-index: -1;
	height: 0.08rem;
	width: 6.8rem;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
 	background-color: #999;
 	& div{
 		display: inline-block;
 		width: 33.33333%;
 		height: 100%;
 	}
 	& div.active{
 		background-color: @theme;
 	}
}
.aaa{
	z-index: 0;
	position: relative;
	padding: 0 0.746666rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.step-one{
	width: 1.466666rem;
	text-align: center;
}
.step-two{
	width: 1.466666rem;
	text-align: center;
}
.step-three{
	width: 1.466666rem;
	text-align: center;
}
.xxx{
	margin-top: 0.4rem;
	padding: 0 0.746666rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
}
</style>