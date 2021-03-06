import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import { actions } from './actions'
import { mutations } from './mutations'
import register from './modules/register'
import news from './modules/news'
import activity from './modules/activity'
import productInfo from './modules/stationary/productInfo'
import loanAgreement from './modules/stationary/loanAgreement'
import customerService from './modules/service/customerService' //客服
import promoteRegister from './modules/general/promoteRegister' //推广注册
import merchantRegister from './modules/general/merchantRegister' //商户注册
import yuncaitang from './modules/activity/17-12/yuncaitang' //商户注册

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
		productInfo,
		loanAgreement,
		customerService,
		promoteRegister,
		merchantRegister,
		yuncaitang,
	}
})

export default store
