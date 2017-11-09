<template>
	<div class="step-one-container">
		<div class="group">
			<div class="item border-bottom">
				<span class="name">真实姓名</span>
				<input class="value" value="" placeholder="请输入您的真实姓名"/>
			</div>
			<div class="item">
				<span class="name">身份证号</span>
				<input class="value" value="" placeholder="请输入您的身份证号"/>
			</div>
		</div>
		<div class="group group-two">
			<div class="item border-bottom">
				<span class="name">定位</span>
				<input class="value" value="" placeholder="请输入您的真实姓名"/>
			</div>
			<div class="item">
				<span class="name">详细地址</span>
				<input class="value" value="" placeholder="请补充详细地址"/>
			</div>
		</div>
		<mu-raised-button label="下一步" class="next" />
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


.next{
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
.group-two{
	margin-top: 0.533333rem;
}
.group{
	font-size: 0.4rem;
	background-color: #FFFFFF;
}
.value{
	height: 1.6rem;
	width: 7.2rem;
	border: none;
}
.item{
	height: 1.6rem;
	line-height: 1.6rem;
	overflow: hidden;
}
.name{
	display: inline-block;
	width: 2.133333rem;
	margin-left: 0.453333rem;
}
.border-bottom{
	border-bottom: 1px solid #DCDCDC;
}

</style>