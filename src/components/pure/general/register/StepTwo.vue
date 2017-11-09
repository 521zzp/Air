<template>
	<div class="step-two-container">
		<div class="item">
			<div class="title">
				<span class="line"></span>
				<span>请上传您正面手持身份证的照片</span>
			</div>
			<div class="content">
				
			</div>
			<mu-raised-button label="点击上传" class="upload" />
		</div>
		<div class="item">
			<div class="title">
				<span class="line"></span>
				<span>正面手持10元人民币照片（1张）</span>
			</div>
			<div class="content">
				
			</div>
			<mu-raised-button label="点击上传" class="upload" />
		</div>
		<div class="item">
			<div class="title">
				<span class="line"></span>
				<span>与上级用户的合照（1张）</span>
			</div>
			<div class="content">
				
			</div>
			<mu-raised-button label="点击上传" class="upload" />
		</div>
		<div class="btn-group clearfix">
			<mu-raised-button label="上一步" class="prev btn-item fl" />
			<mu-raised-button label="提交" class="submit btn-item fr" />
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
@import url("../../../../config/base.less");

.btn-group{
	padding: 0.533333rem 0;
	width: 8.533333rem;
	margin-left: auto;
	margin-right: auto;
}
.btn-item{
	height: 1.386666rem;
	width: 4rem;
	border-radius: 0.693333rem;
	font-size: 0.453333rem;
}
.prev{
	color: #666666;
}
.submit{
	background-color: @theme;
	color: #FFFFFF
}
.upload{
	width: 8.533333rem;
	margin: 0.266666rem auto;
	display: block;
	height: 1.066666rem;
	color: #ff3333;
	font-size: 0.4rem;
	
}
.content{
	width: 8.533333rem;
	height: 4.266666rem;
	margin-left: auto;
	margin-right: auto;
	background-color: #f0f0f3;
}
.title{
	height: 1.6rem;
	line-height: 1.6rem;
	font-size: 0.4rem;
}
.line{
	display: inline-block;
	width: 0.08rem;
	height: 0.453333rem;
	border-radius: 0.04rem;
	background-color: #ff6d33;
	margin-left: 0.453333rem;
	vertical-align: -0.08rem;
}
.item{
	background-color: #FFFFFF;
	overflow: hidden;
	margin-bottom: 0.266666rem;
}


</style>