<template>
	<div class="product-info-container">
		
		<div class="group">
			<div class="tite border">项目说明</div>
			<div class="item border"><span class="fl title">退出方式</span><span class="fr">{{ project.exit }}</span></div>
			<div class="item border"><span class="fl title">到期处理</span><span class="fr">{{ project.expire }}</span></div>
			<div class="item"><span class="fl title">收益方式</span><span class="fr">{{ project.profit }}</span></div>
		</div>
		
		<div class="group">
			<div v-if="show" class="tite border">借款方介绍</div>
			<div v-if="show" class="item border"><span class="fl title">借款方</span><span class="fr value">{{ debtor.name }}</span></div>
			<div v-if="show" class="item border"><span class="fl title">借款金额</span><span class="fr value">{{ debtor.money }}</span></div>
			<div v-if="show" class="item border"><span class="fl title">借款用途</span><span class="fr value">{{ debtor.purpose }}</span></div>
			<div v-if="show" class="item border"><span class="fl title">安全措施</span><span class="fr value" v-html="debtor.safe"></span></div>
			<div v-if="show" class="item"><span class="fl title">还款来源</span><span class="fr value" v-html="debtor.repayment">{{ debtor.name }}</span></div>
			<div class="desc" v-html="debtor.desc"></div>
		</div>
		
		<div class="group">
			<div class="tite border">借款人安全审核信息</div>
			<div class="item border"><span class="fl title">营业执照</span><span class="fr">{{ report.businessLicense ? '已审核' : '未审核' }}</span></div>
			<div class="item border"><span class="fl title">信用机构代码</span><span class="fr">{{ report.creditInstitution ? '已审核' : '未审核' }}</span></div>
			<div class="item border"><span class="fl title">开户许可证</span><span class="fr">{{ report.openingPermit ? '已审核' : '未审核' }}</span></div>
			<div class="item border"><span class="fl title">公司章程</span><span class="fr">{{ report.articlesOfAssociation ? '已审核' : '未审核' }}</span></div>
			<div class="item border"><span class="fl title">法人身份证复印件</span><span class="fr">{{ report.corporation ? '已审核' : '未审核' }}</span></div>
			<div class="item border"><span class="fl title">企业征信报告</span><span class="fr">{{ report.creditReport ? '已审核' : '未审核' }}</span></div>
			<div class="item border"><span class="fl title">企业近期财务报表</span><span class="fr">{{ report.financeReport ? '已审核' : '未审核' }}</span></div>
			<div class="item"><span class="fl title">企业近期审计报告</span><span class="fr">{{ report.auditReport ? '已审核' : '未审核' }}</span></div>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
		}
	},
	computed: {
		show () {
			return this.$store.state.productInfo.isShow
		},
		project () {
			return this.$store.state.productInfo.project
		},
		debtor () {
			return this.$store.state.productInfo.debtor
		},
		report () {
			return this.$store.state.productInfo.report
		},
	},
	created () {
		const id = this.$route.params.id
		this.$store.dispatch('getProductInfoById', { id })
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../../config/base.less");

.act-img{
}
.border{
	border-bottom: 1px solid #dcdcdc;
}
.product-info-container{
	background-color: #f0f0f3;
	
	.group{
		background-color: @white;
		margin-bottom: 0.266666rem;
		font-size: 0.453333rem;	
		margin-bottom: 0.266666rem;
				
		.tite{
			height: 1.386666rem;
			line-height: 1.386666rem;
			padding-left: 0.453333rem;
			color: #666666;
		}
		
		.item{
			line-height: 1.426666rem;
			margin-left: 0.453333rem;
			padding-right: 0.453333rem;
			overflow: hidden;
			.title{
				color: #999999;
				height: 100%;
			}
			.value{
				max-width: 6.666666rem;
			}
		}
		
		.desc{
			padding: 0.4rem 0.453333rem;
			background-color: #fff5f5;
			font-size: 0.346666rem;
			color: #999999;
		}
	}
}	

</style>