import * as types from '../mutation-types'
import { ACTIVITY_SHOW_IMG } from '@/config/url'
import { postModelTwo, analy } from '@/tool/net'

const state = {
	activityShowImg: '',
	activityShowStatus: true,
}


const actions = {
	getActivityShowImg ({ commit }, obj){
		fetch(ACTIVITY_SHOW_IMG, postModelTwo(obj)).then(analy)
				.then((datas)=>{
				commit(types.ACTIVITY_SHOW_IMG, datas);
			}).catch(function(error) {
			    commit(types.ACTIVITY_SHOW_IMG, { path: '' });
			  });
  	}
}

const mutations = {
	[types.ACTIVITY_SHOW_IMG] (state, { path }) {
		state.activityShowImg = path
		state.activityShowStatus = !!path
    }
}


export default{
	state,
	actions,
	mutations
}
