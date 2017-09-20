import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'
import register from './modules/register'
import news from './modules/news'
import activity from './modules/activity'

Vue.use(Vuex)
let token = '';
let user = null;

try{
	token = localStorage.getItem('token');
	user = JSON.parse(localStorage.getItem('user'));
}catch(e){
	token = '';
	user = null;
}

const store = new Vuex.Store({
	state: {
		token:token, //user online state
		nca: 'vux-pop-out',
		user: user ? user : {
			name: '未实名',
			img: '',
		},
		loading: false, //全局加载中
		notice: {
			state: 1,
			config: null
		},
		feedback: {
			state: 1,
			config: null,
			close: null,
		},
		simpleDialog: {
			state: 1,
			config: {
				title: '',
				content: '',
				onOk: () => {}
			}
		},
		confirmDialog: {
			state: 1,
			config: {
				title: '',
				content: '',
				onOk: () => {},
				onCancel: () => {}
			}
		},
	},
	mutations,
	actions,
	modules: {
		register,
		news,
		activity,
	}
})

export default store
