<template>
	<div class="container">
		
		<h3 class="title">“{{product}}”服务风险揭示书</h3>
		
		<p class="block indent">
			“{{product}}”是掌柜金服向出借人（以下或称“投资人”）和借款人提供的个人投融资服务，“{{product}}”服务项下的个人借贷活动涉及到资金和权益的处分，
		由此带来的潜在风险需要借款人和出借人自行衡量和承担。掌柜金服仅提供信息搜集、信息发布、资信评估、信息交互、借贷撮合等服务，不承担因交易产生的风险或代替交易方履约的责任。
		以下主要风险揭示内容请投资者详细阅读，在充分了解并清楚知晓本产品蕴含风险的基础上，通过理性判断自主参与交易，并自愿承担相关风险。
		</p>
		<p class="block indent">
			1.借款人违约风险
		</p>
		<p class="block indent">
			尽管“{{product}}”服务由保险公司向投资人（即出借人，下同）提供个人借款保证保险保障，但借款人逾期支付本息的违约风险依然存在，即投资人仍可能面临无法在约定时间获得当期还款的风险。
		</p>
		<p class="block indent">
			2.保险责任免除风险
		</p>
		<p class="block indent">
			根据保险条款如发生保险责任免除情形的，保险公司不承担理赔责任。此时若借款人不能按时足额偿还本息时，投资人将面临无法收回借款本金和利息的风险。
		</p>
		<p class="block indent">
			3.借款人提前还款风险
		</p>
		<p class="block indent">
			借款人可于起息日起至最终到期日前倒数第二个月的还款日止的期间内申请提前全额还款。如借款人提前全额还款，投资人的收益将会受到影响。
		</p>
		<p class="block indent">
			4.流动性风险
		</p>
		<p class="block indent">
			除非另有约定，投资人没有提前终止出借的权利。借款存续期间，投资人不得要求支取、使用出借本金的全部或任何部分，不得再设定其他任何第三方权益。
		</p>
		<p class="block indent">
			5.操作性风险
		</p>
		<p class="block indent">
			发生不可预测或无法控制的系统故障、设备故障、通讯故障、停电等突发事故，或发生自然灾害、战争、恐怖袭击或其他无法控制的事件，投资人有可能遭受损失。
		</p>
		<p class="block indent">
			※以上并不能揭示“{{product}}”的全部风险及市场的全部情形。
		</p>
	</div>
</template>

<script>
//风险揭示书
export default {
	data () {
		return {
			
		}
	},
	computed: {
		product () {
			return this.$route.params.product
		}
	}
}
</script>

<style scoped="scoped" lang="less">
.container{
	padding: 0.8rem 0.4rem 0 0.4rem;
}
.bold{
	font-weight: bold;
}
.indent{
	text-indent: 2em;
	display: block;
}
.title{
	display: block;
	text-align: center;
	margin: 0.666666rem 0;
}
.block{
	margin-bottom: 0.666666rem;
}
</style>