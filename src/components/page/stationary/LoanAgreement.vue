<template>
	<div class="container">
		<h3 class="title">借款协议</h3>
		<p class="block">
			<span class="row">合同编号：<span class="write">{{content.contractId}}</span></span>
			<span class="row">签约日期：<span class="write">{{content.signTime}}</span></span>
			<span class="row">协议三方定义：</span>
			<span class="row">出借人：<span class="write">{{content.lenderName}}</span>以下称“出借人”；<span class="write">( 身份证：{{content.lenderId}})</span>，</span>
			<span class="row">借款人：<span class="write">{{content.borrower}}</span>；</span>
			<span class="row">以下称“借款人”；</span>
			<span class="row">居间方: 上海蓬宝互联网金融信息服务有限公司，以下称“居间方”。</span>
		</p>

		<p class="block">
			<span class="row">鉴于:</span>
			<span class="row">（1）居间方上海蓬宝互联网金融信息服务有限公司，为借贷双方提供借贷信息、信用咨询及交易信息等服务。</span>
			<span class="row">（2）借款人应当将真实有效的信息其提供给居间方，并承诺杜绝发生各种恶意逃避还款义务的情况，包括但不限于借用他人身份信息、双重身份证件等。</span>
			<span class="row">（3）出借人承诺对本协议涉及的借款具有完全的支配能力，是其自有闲散资金，
				为其合法所得；并承诺其提供给居间方的信息是真实有效的，
				承担一切因虚假信息而导致债权不能实现的法律后果。</span>
			<span class="row">（4）出借人和借款人同意成立借贷关系，并由居间方提供平台化信息对接服务。
				各方经协商一致，特在居间方所在地签订如下协议，共同遵照履行。</span>
		</p>
		<p class="block">
			<span class="row">第一条 借款基本信息：</span>
			<span class="row">借款金额：<span class="write">{{content.money}}（人民币/元，大写）</span></span>
			<span class="row">借款利率：<span class="write"> {{content.rate}}（%/年）</span></span>
			<span class="row">借款出借日期： <span class="write">{{content.loanStartTime}}</span></span>
			<span class="row">借款到期日期：<span class="write">{{content.loanEndTime}}</span></span>
			<span class="row">起息日：<span class="write">{{content.rateStartDay}}</span></span>
			<span class="row">还款方式：<span class="write">{{content.repaymentWay}}。</span></span>
		</p>	
		
		<p class="block">
			<span class="row" >第二条 各方权利和义务：</span>
			<span class="indent" style="margin: 0.133333rem auto;">出借人的权利和义务 ：</span>
			<span class="row">（1）出借人同意居间方在本合同第一条项下借款审核完毕后将借款划拨给借款人。</span>
			<span class="row">（2）出借人享有其所出借款项所带来的利息收益。</span>
			<span class="row">（3）如借款人违约，借款人同意居间方将已获得的借款人的信息告知出借人。</span>
			<span class="row">（4）出借人应主动缴纳由利息所得带来的可能的税费。</span>
			<span class="row">（5）如借款人还款不足约定本金、利息、逾期罚息、违约金的，各方同意各自按照其借出款项比例收取还款。</span>
			<span class="row">（6）出借人可授权居间方代为追缴借款人逾期未还款项。</span>
			<span class="row">（7）按照居间方平台收费标准支付相应的账户居间费、提现费用等。</span>
			
			<span class="indent" style="margin: 0.133333rem auto;">借款人权利和义务：</span>
			<span class="row">（1）借款人必须按期足额向出借人支付本金和利息。</span>
			<span class="row">（2）借款人必须足额向居间方支付平台成交服务费、提现费、账户居间费等费用。</span>
			<span class="row">（3）借款人承诺所借款项不用于任何违法用途。 </span>
			<span class="row">（4）借款人应确保其提供的信息和联系方式的真实性，不得提供虚假信息或隐瞒重要事实。</span>
			<span class="row">（5）借款人有权了解其在居间方的信用评审进度及结果。</span>
			<span class="row">（6）借款人不得将本协议项下的任何权利义务转让给任何其他方。</span>
			<span class="row">（7）在借款人经营发生重大情况变更时及时通知居间方。</span>
			
			<span class="indent" style="margin: 0.133333rem auto;">借款人权利和义务：</span>
			<span class="row">（1）出借人和借款人同意居间方有权代出借人在有必要时对借款人进行催收工作，包括但不限于电话通知、发律师函、登门催讨、对借款人提起诉讼等。</span>
			<span class="row">（2）居间方有权向借款人和出借人收取约定的平台成交服务费、账户居间费、取现费等，并在有必要时对借款人进行催收工作，包括但不限于电话通知、发律师函、登门催讨、对借款人提起诉讼等。</span>
			<span class="row">（3）居间方作为出借人和借款人双方的居间人，促成双方交易，出借人和借款人双方行为所产生的法律后果由相应各方承担。如因借款人或出借人或其他方（包括但不限于技术问题）造成的延误或错误，居间方不承担任何责任。 </span>
			<span class="row">（4）居间方应对出借人和借款人的信息及本协议内容保密；如任何一方违约，或因相关权力部门要求（包括但不限于法院、仲裁机构、金融监管机构等），居间方有权披露。</span>
		</p>
		
		<p class="block">
			<span class="row">1、合同各方均应严格履行合同义务，非经各方协商一致或依照本协议约定，任何一方不得解除本协议。</span>
			<span class="row">
				2、任何一方违约，违约方应承担因违约使得其他各方产生的费用和损失，包括但不限于调查、诉讼费、律师费等，应由违约方承担。
				如违约方为借款人的，出借人有权立即解除本协议，并要求借款人立即偿还未偿还的本金、利息、逾期罚息、违约金等。
				如本协议提前解除时，借款人在网站的账户里有任何余款，居间方有权按照本协议第四条第3项的清偿顺序将借款人的余款用于清偿，并要求借款人支付因此产生的相关费用。
			</span>
			<span class="row">3、借款人的每期还款均应按照如下顺序清偿：</span>
			<span class="indent">（1）逾期罚息以及违约金；</span>
			<span class="indent">（2）平台逾期催收费；</span>
			<span class="indent">（3）拖欠的利息；</span>
			<span class="indent">（4）拖欠的本金；</span>
			<span class="indent">（5）正常的利息；</span>
			<span class="indent">（6）正常的本金；</span>
			<span class="indent">（7）根据本协议产生的其他全部费用；</span>
			
			<span class="row">4、借款人应严格履行还款义务，如借款人违约，则应按照下述条款向出借人支付违约金。</span>
			<span class="row">违约金= 未付本金 * 0.003*逾期天数</span>
			<span class="row">5、借款人应严格履行还款义务，如借款人逾期还款超过3天，居间方将收取平台逾期催收费作为网站电话提醒和催收服务的费用。</span>
			<span class="row">平台逾期催收费最低50元，最高为借款本金的1%。</span>
			<span class="row">6、如果借款人逾期支付任何一期还款超过30天，本协议项下的全部借款本息提前到期，借款人应立即清偿本协议下尚未偿付的全部本金、利息、逾期罚息、违约金及根据本协议产生的其他全部费用。</span>
			<span class="row">7、如果借款人逾期支付任何一期还款超过30天，平台方有权将借款人的“逾期记录”记入平台方逾期黑名单系统，平台方不承担任何法律责任。</span>
			<span class="row">8、如果借款人逾期支付任何一期还款超过30天，平台方有权将借款人违约失信的相关信息在媒体披露，平台方不承担任何责任。</span>
			<span class="row">9、在借款人还清全部本金、利息、逾期罚息、违约金之前，逾期罚息、违约金的计算不停止。 </span>
		</p>
		
		<p class="block">
			<span class="row">第五条 提前还款</span>
			<span class="row">1、借款人可在借款期间任何时候提前偿还剩余借款。</span>
			<span class="row">2、提前清偿全部剩余借款 。</span>
			<span class="row">借款人提前清偿全部剩余借款时，应向出借人支付当期应还本息，剩余本金及提前还款补偿（补偿金额为加收1个月利息）。</span>
			<span class="row">3、提前偿还部分借款 </span>
			<span class="row">（1）借款人提前偿还部分借款，对贷款的总期限及月偿还本息数额不产生影响。</span>
			<span class="row">（2）借款人提前偿还部分借款，仍应向出借人支付全部借款利息。 </span>
			<span class="row">4、任何形式的提前还款不影响平台方向借款人收取在本协议第三条中说明的借款平台成交服务费。</span>
		</p>
		
		<p class="block">
			<span class="row">第六条 法律及争议解决 </span>
			<span class="row">本协议的签订、履行、终止、解释均适用中华人民共和国法律，并由居间方所在地（济南市历下区）人民法院管辖。</span>
		</p>
		
		<p class="block">
			<span class="row">第七条 附则 </span>
			<span class="row">1、本协议采用电子文本形式制成，各方均认可该形式的法律效力。</span>
			<span class="row">2、本协议本合同第一条项下借款提交审核之日生效。 </span>
			<span class="row">3、本协议签订之日起至借款全部清偿之日止，借款人或出借人有义务在下列信息变更三日内提供更新后的信息给平台方:
				本人、本人的家庭联系人及紧急联系人、工作单位、居住地址、住所电话、手机号码、电子邮箱、银行账户的变更。
				若因任何一方不及时提供上述变更信息而带来的损失或额外费用应由该方承担。 </span>
			<span class="row">4、如果本协议中的任何一条或多条因违反法律法规而被认定无效，该无效条款并不影响本协议其他条款的效力。</span>
			<span class="row">特别提示：鉴于平台方是为借贷双方提供对接服务，促成双方建立借贷关系的一方，当平台方进行风控审核与财务审核时，
				发现风控审核与财务审核不符的，为了维护借贷双方的权益，保护借贷双方的资金安全，平台方有权取消该次交易，借贷双方扣缴的费用按照流标处理返还其各自账户，
				因借贷交易生成的列表予以删除。但借贷双方被第三方收取的费用（包含但不限于身份认证、学历认证等费用）不予返还。 借贷双方对此均无任何异议。</span>
		</p>
		
		<span class="row" style="color: #666;">（以下无正文）</span>
		<br/><br/><br/><br/><br/>
		
		<div class="agree-footer">
			<span class="row">出借人：  <span class="write"> {{content.lenderName}}   ( 身份证：{{content.lenderId}} )  </span>  </span>
			
			<span class="row">借款人： <span class="write">{{content.borrower}}；</span></span>
			
			<span class="row">通信地址： <span class="write">{{content.addr}}；</span></span>
			<div class="stamp-one">
				<span class="write">盖章：</span>
				<img :src="content.loanerSeal" alt="" />
			</div>
			
			<span class="row">居间方：<span class="write bold">上海蓬宝互联网金融信息服务有限公司</span></span>
			
			<span class="row"><span class="write"></span></span>
			
			<div class="stamp-two">
				<span class="write">盖章：</span>
				<img :src="content.platformSeal" alt="" />
			</div>
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
		content () {
			return this.$store.state.loanAgreement.content
		}
	},
	created () {
		const id = this.$route.params.id
		const account = this.$route.params.account
		const money = this.$route.params.money
		this.$store.dispatch('loanAgreementGet', { id, account, money })
	}
}
	
</script>

<style scoped="scoped" lang="less">


.write{
	display: inline-block;
	padding: 0 0.266666rem;
	border-bottom: 1px solid #495060;
	line-height: 1;
}
.container{
	padding: 0 0.4rem 2.666666rem 0.4rem;
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
	width: 100%;
	text-align: center;
	margin: 0.666666rem 0;
}
.block{
	margin-bottom: 0.666666rem;
}
.row{
	display: block;
}
</style>