import * as types from '@/store/mutation-types'
import { YCT_REGISTER_SEND_CODE, YCT_REGISTER, YCT_REGISTER_GEETEST_INIT } from '@/config/url'
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
	geetestOpen: 0, //极验开关，0 ：关 1 ： 开
}


const actions = {
	async yctRegistSendCode ({ commit }, obj){
		if (state.sendAbel) {
			state.sendAbel = false
			state.sendCodeLoading = true
			fetch(YCT_REGISTER_SEND_CODE, postModelTwo(obj)).then(analy)
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
  	async yctRegister ({ commit }, obj) {
  		const vali = state.captchaObj ? state.captchaObj.getValidate() : false;
  		
  		if (state.captchaObj && !vali) { 
  			notice('请先完成验证!') 
  		} else {
  			const valiResult = {
  				geetest_challenge: vali.geetest_challenge,
                geetest_validate: vali.geetest_validate,
                geetest_seccode: vali.geetest_seccode
  			}
  			const result = await fetch(YCT_REGISTER, postModelTwo({ ...obj, ...valiResult  })).then(analy)
  			if (result) {
  				feedback( 'ok', result.msg, () => router.push('/yct-register/success'))
  			} else{
  				state.captchaObj && state.captchaObj.reset()
  			}
  			
  		}
  		
  	},
  	async yctRegisterGeetestInit ({ commit }, domNode) {
  		const data = await fetch(YCT_REGISTER_GEETEST_INIT, getModel()).then(analy)
		commit(types.YCT_REGISTER_GEETEST_SWITCH, data.register)
		if (data.register) {
			//极验初始化
			gt()
	  		initGeetest({
			   	// 以下配置参数来自服务端 SDK
			   	gt: data.gt,
			   	challenge: data.challenge,
			   	offline: !data.success,
			   	new_captcha: true,
			   	width: '100%',
			}, function (captchaObj) {
				commit(types.YCT_REGISTER_GEETEST_INIT, captchaObj)
				captchaObj.appendTo(domNode)
				
				captchaObj.onSuccess(() => {
					const elementNode = document.querySelector('.geetest_holder.geetest_wind .geetest_success_logo')
					const parentNode = elementNode.parentNode
					parentNode.removeChild(elementNode)
				})
				
				setTimeout(() => {
					const elementNode = document.querySelector('.geetest_holder.geetest_wind .geetest_logo')
					const parentNode = elementNode.parentNode
					parentNode.removeChild(elementNode)
				}, 900)
				
			   	// 这里可以调用验证实例 captchaObj 的实例方法
			})
		}
  		
  	}
}

const mutations = {
    [types.YCT_REGISTER_GEETEST_INIT] (state, obj) {
   		state.captchaObj = obj
    },
    [types.YCT_REGISTER_GEETEST_SWITCH] (state, obj) {
    	state.geetestOpen = obj
    }
}


export default{
	state,
	actions,
	mutations
}
