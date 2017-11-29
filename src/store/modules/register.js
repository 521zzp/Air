import * as types from '../mutation-types'
import { REGISTER_SEND_CODE, REGISTER, REGISTER_GEETEST_INIT } from '@/config/url'
import { postModelTwo, analy, getModel } from '@/tool/net'
import { feedback, notice } from '@/tool/talk'
import store from '@/store'
import router from '@/router'
import gt from '@/tool/gt'

const state = {
	text: '发送验证码',
	sendAbel: true,
	sendCodeLoading: false,
	captchaObj: null, //极验实例
}


const actions = {
	async registSendCode ({ commit }, obj){
		if (state.sendAbel) {
			state.sendAbel = false
			state.sendCodeLoading = true
			fetch(REGISTER_SEND_CODE, postModelTwo(obj)).then(analy)
				.then((datas)=>{
					state.sendCodeLoading = false
					if (datas) {
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
							feedback('error', datas.msg)
							clearInterval(state.clock)
							state.text = '发送验证码'
							state.sendAbel = true
						}
					} else {
						clearInterval(state.clock)
						state.text = '发送验证码'
						state.sendAbel = true
					}
			}).catch(function(error) {
				feedback('waring', '网络异常')
				state.sendAbel = true;
				state.sendCodeLoading = false
			})
		}
  	},
  	async register ({ commit }, obj) {
  		const vali = state.captchaObj ? state.captchaObj.getValidate() : false;
  		
  		
  		if (!vali) { 
  			notice('请先完成验证!') 
  		} else {
  			const valiResult = {
  				geetest_challenge: vali.geetest_challenge,
                geetest_validate: vali.geetest_validate,
                geetest_seccode: vali.geetest_seccode
  			}
  			const result = await fetch(REGISTER, postModelTwo({ ...obj, ...valiResult  })).then(analy)
  			if (result) {
  				feedback( 'ok', result.msg, () => router.push('/app'))
  			} else{
  				state.captchaObj && state.captchaObj.reset()
  			}
  			
  		}
  		
  	},
  	async registerGeetestInit ({ commit }, domNode) {
  		const data = await fetch(REGISTER_GEETEST_INIT, getModel()).then(analy)
  		console.log('data', data)
  		gt()
  		
  		initGeetest({
		   	// 以下配置参数来自服务端 SDK
		   	gt: data.gt,
		   	challenge: data.challenge,
		   	offline: !data.success,
		   	new_captcha: true,
		   	width: '100%',
		}, function (captchaObj) {
			commit(types.REGISTER_GEETEST_INIT, captchaObj)
			captchaObj.appendTo(domNode)
		   	// 这里可以调用验证实例 captchaObj 的实例方法
		})
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
    },
    [types.REGISTER_GEETEST_INIT] (state, obj) {
   		state.captchaObj = obj
    }
}


export default{
	state,
	actions,
	mutations
}
