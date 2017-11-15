<template>
	<div class="step-three-container">
		<div class="card">
			<div class="icon-wrap">
				<svg class="iconfont success"  aria-hidden="true" >
				    <use xlink:href="#icon-success"></use>
				</svg>
			</div>
			<div class="card-text">
				<span>您的资料已经提交成功！工作人员会在</span>
				<span>1-3个工作日内完成审核，请耐心等待</span>
			</div>
		</div>
		<div class="card-text text-two">
			<span>您可先下载掌柜金服APP</span>
			<span>开启您的理财之旅</span>
		</div>
		<router-link to="/app"><mu-raised-button label="下载掌柜金服APP" class="submit" /></router-link>
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
@import url("../../../../config/base.less");

.submit{
	width: 8rem;
	height: 1.386666rem;
	border-radius: 0.693333rem;
	color: #fff;
	font-size: 0.453333rem;
	display: block;
	margin-left: auto;
	margin-right: auto;
	background-color: @theme;
	margin-top: 0.8rem;
}
.icon-wrap{
	text-align: center;
	height: 1.6rem;
	margin-top: 0.666666rem;
}
.success{
	color: #3189ff;
	font-size: 1.386666rem;
}
.card-text{
	color: #666666;
	font-size: 0.4rem;
	margin-top: 0.4rem;	
	& span{
		display: block;
		text-align: center;
	}
}
.text-two{
	margin-top: 1.6rem;
}
.card{
	width: 8.533333rem;
	height: 5.333333rem;
	background-color: #FFFFFF;
	border-radius: 0.213333rem;
	margin-left: auto;
	margin-right: auto;
	overflow: hidden;
	box-shadow: 0 2px 7px rgba(0,0,0,.15);
}
</style>