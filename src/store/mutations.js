import * as types from './mutation-types'
import router from '@/router'
import store from '@/store'

export const mutations = {
	/*[types.EXIT] (state,obj) {
		if (!obj.status) {
			store.state.token = '';
			store.state.user = {};
			message(obj.msg, 2, ()=>router.push('/'))
		}else{
			store.state.token = '';
			store.state.user = {};
			message('您已成功退出', 2, ()=>router.push('/'))
		}
    },*/
    [types.NAV_CHANGE_TYPE] (state, obj) {
    	
    	console.log('mutaions: ' + obj)
		state.nca = obj
    }
}
