import * as types from '../../mutation-types'
import { INVITE_RED_PACKET_INFO, INVITE_RED_PACKET_TOTAL, INVITE_RED_PACKET_LIST, } from '@/config/url'
import { postModelTwo, analy } from '@/tool/net'

const state = {
	unGet: 0,
	couldGet: 0,
	got: 0,
	totalProfit: 0,
	total: 0, //记录总条数
	current: 1, //当前页数
	list: [], //集合
}


const actions = {
	loanAgreementGet ({ commit }, obj){
		fetch(INVITE_RED_PACKET_INFO, postModelTwo(obj)).then(analy).then(
			(datas)=> datas ? commit(types.INVITE_RED_PACKET_INFO, datas) : ''
			).catch(function(error) {
			    
			  });
  	}
}

const mutations = {
	[types.INVITE_RED_PACKET_INFO] (state, obj) {
		state.unGet = obj.unGet
		state.couldGet = obj.couldGet
		state.got = obj.got
		state.totalProfit = obj.totalProfit
    }
}


export default{
	state,
	actions,
	mutations
}
