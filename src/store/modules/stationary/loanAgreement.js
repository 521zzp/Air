import * as types from '../../mutation-types'
import { LOAN_AGREEMENT } from '@/config/url'
import { postModelTwo, analy } from '@/tool/net'

const state = {
	content: {
		contractId: '', //合同编号
		signTime: '', //签约日期
		lenderName: '', //出借人姓名
		lenderId: '', //出借人身份证号
		borrower: '', //借款人
		money: '', //金额
		rate: '', //利率
		loanStartTime: '', //出借日期
		loanEndTime: '', //到期日期
		rateStartDay: '', //起息日
		repaymentWay: '', //还款方式
		addr: '',//通信地址
		loanerSeal: '', //借款方印章图片
		platformSeal: '', //平台印章图片
	}
}


const actions = {
	loanAgreementGet ({ commit }, obj){
		fetch(LOAN_AGREEMENT, postModelTwo(obj)).then(analy).then(
			(datas)=> datas ? commit(types.LOAN_AGREEMENT, datas) : ''
			).catch(function(error) {
			    
			  });
  	}
}

const mutations = {
	[types.LOAN_AGREEMENT] (state, obj) {
		if (obj.msg) {
			delete obj.msg
		}
		state.content = obj
    }
}


export default{
	state,
	actions,
	mutations
}
