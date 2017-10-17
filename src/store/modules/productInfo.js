import * as types from '../mutation-types'
import { PRODUCT_INFO } from '@/config/url'
import { postModelTwo, analy } from '@/tool/net'

const state = {
	isShow: false,
	project: {
		exit: '',
		expire: '',
		profit: '',
	},
	debtor: {
		name: '',
		money: '',
		purpose: '',
		safe: '',
		repayment: '',
	},
	report: {
		businessLicense: false,
		creditInstitution: false,
		openingPermit: false,
		articlesOfAssociation: false,
		corporation: false,
		creditReport: false,
		financeReport: false,
		auditReport: false,
	}
}
const actions = {
	getProductInfoById ({ commit }, obj){
		fetch(PRODUCT_INFO, postModelTwo(obj)).then(analy)
				.then((datas)=>{
				datas ? commit(types.PRODUCT_INFO, datas) : ''
			}).catch(function(error) {
			    commit(types.PRODUCT_INFO, { project: {}, debtor: {}, report: {}, isShow: false });
			  });
  	}
}

const mutations = {
	[types.PRODUCT_INFO] (state, { project, debtor, report, isShow }) {
		state.project = project ? project : ''
		state.debtor = debtor ? debtor : ''
		state.report = report ? report : ''
		state.isShow = isShow ? isShow : ''
    }
}
export default{
	state,
	actions,
	mutations
}
