import * as types from '../mutation-types'
import { REGISTER_SEND_CODE, REGISTER } from '@/config/url'
import { postModelTwo, analy } from '@/tool/net'
import { feedback } from '@/tool/talk'
import store from '@/store'
import router from '@/router'

const state = {
	text: '发送验证码',
	sendAbel: true,
}


const actions = {
	async registSendCode ({ commit }, obj){
		if (state.sendAbel) {
			state.sendAbel = false
			fetch(REGISTER_SEND_CODE, postModelTwo(obj)).then(analy)
				.then((datas)=>{
					if (datas.code === 200){
						feedback('ok', datas.msg)
						let time = 60
						state.text = time + 's后重新发送'
						state.clock = setInterval(function () {
							time--
							state.text = time + 's后重新发送'
							if(time==0){
								state.text = '发送验证码'
								clearInterval(state.clock)
								state.sendAbel = true
							}
						},1000)
					}else{
						feedback('waring', datas.msg)
						clearInterval(state.clock)
						state.text = '发送验证码'
						state.sendAbel = true
					}
			}).catch(function(error) {
				state.sendAbel = true;
			  })
		}
  	},
  	async register ({ commit }, obj) {
  		const result = await fetch(REGISTER, postModelTwo(obj)).then(analy)
  		result ? feedback( 'ok', result.msg, () => router.push('/app')) : ''
  	}
}

const mutations = {
	[types.REGISTER_SEND_CODE] (state, obj) {
		if (obj.code === 200) {
			store.state.token = obj.token;
			store.state.user = obj.obj;
			feedback(obj.msg, 2, ()=>router.push('/'));
		}else{
			feedback(obj.msg, 4)
		}
    }
}


export default{
	state,
	actions,
	mutations
}
