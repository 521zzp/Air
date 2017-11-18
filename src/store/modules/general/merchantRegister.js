import * as types from '../../mutation-types'
import { REGISTER_SEND_CODE,
		VALICODE_IDCARD,
		PROMOTE_REGISTER_ALLOWED,
		VALICODE_PHONE_CODE,
		MERCHANT_IMAGE_UPLOAD,
		MERCHANT_REGISTER,
		GET_GEOLOCATION,  } from '@/config/url'
import { postModelTwo, analy, getModel } from '@/tool/net'
import { feedback, loading } from '@/tool/talk'
import router from '@/router'

const state = {
	clock: null, //倒计时定时器
	text: '发送验证码',
	sendAbel: true,
	sendCodeLoading: false,
	step: 1,
	params: {
		account: '',
		phoneCode: '',
		password: '',
		invitor: '',
		name: '', //真实姓名
		idCard: '',//身份证号
		gelocation: '', //定位
		addr: '', //补充详细地址
		fzrPhone: '', //商户负责人手机号
		customers: '', //日人流量
		turnover: '', //日营业额
		imgOne: '',
		imgTwo: '',
		imgThree: '',
		imgFour: '',
		imgFive: '',
		imgSix: '',
		imgSeven: '',
		imgEight: '',
		imgNine: '',
	}
}


const actions = {
	async merchantRegistSendCode ({ commit }, obj){
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
  	async merchantValiCode ({ commit }, obj) {
  		const result = await fetch(VALICODE_PHONE_CODE, postModelTwo(obj)).then(analy)
  		result ? commit(types.MERCHANT_REGISTER_VALI_CODE, obj) : ''
  	},
  	async merchantBaseInfoNext ({ commit }, obj) {
  		//验证身份证信息,然后进行下一步
  		const result = await fetch(VALICODE_IDCARD, postModelTwo(obj)).then(analy)
  		result ? commit(types.MERCHANT_VALI_IDCARD_NEXT, obj) : ''
  		
  	},
  	async merchantImageUpload ({ commit }, obj) {
  		loading(true)
  		const form = new FormData()
  		for (let img in obj) {
  			obj[img] ? form.append(img, obj[img]) : ''
  		}
  		try {
  			const imgs = await fetch(MERCHANT_IMAGE_UPLOAD, {
	  			method: 'post',
	  			credentials: 'include',
	  			body: form
	  		}).then(analy)
	  		loading(false)
	  		/*
	  		 * 看当前在第几步，
	  		 * 如果第三步上传，返回结果后直接发送注册请求
	  		 * 如果第二部上传，把返回地址存储到本地，step加一
	  		 */
	  		if (state.step === 2) {
	  			commit(types.MERCHANT_IMAGE_UPLOAD, imgs)
	  			
	  		} else if (state.step === 3){
	  			const register = {
	  				type: 1, //1表示商户认证，2表示注册
		  			account: state.params.account,
		  			phoneCode: state.params.phoneCode,
		  			password: state.params.password,
		  			invitor: state.params.invitor,
		  			name: state.params.name,
		  			idCard: state.params.idCard,
		  			gelocation: state.params.gelocation,
		  			addr: state.params.addr,
		  			fzrPhone: state.params.fzrPhone,
		  			customers: state.params.customers,
		  			turnover: state.params.turnover,
		  			imgOne: state.params.imgOne,
		  			imgTwo: state.params.imgTwo,
		  			imgThree: state.params.imgThree,
		  			imgFour: state.params.imgFour,
		  			imgFive: imgs.imgFive,
		  			imgSix: imgs.imgSix,
		  			imgSeven: imgs.imgSeven,
		  			imgEight: imgs.imgEight,
		  			imgNine: imgs.imgNine,
		  		}
		  		const result = await fetch(MERCHANT_REGISTER, postModelTwo(register) ).then(analy)
		  		result ? commit(types.MERCHANT_STEP_CHANGE, 4) : ''
		  		
	  		}
	  		
  		} catch (e) {
  			loading(false)
  			throw e
  		}
  	},
  	merchantStepChange ({ commit }, obj) {
  		commit(types.MERCHANT_STEP_CHANGE, obj)
  	},
  	async merchantGetGeolocation ({ commit }, obj) {
  		const place = await fetch(GET_GEOLOCATION, postModelTwo(obj)).then(analy)
  		commit(types.MERCHANT_GEOLOCATION_UPDATE, place)
  	},
  	async merchantRegisterAllowed ({ commit }, obj) {
  		const result = await fetch(PROMOTE_REGISTER_ALLOWED, getModel()).then(analy)
  		if (!result.allow) {
  			if (obj.invitor) {
  				router.push(`/register?invitor=${obj.invitor}`)
  			} else{
  				router.push(`/register`)
  			}
  			
  		} 
  	}
}

const mutations = {
	[types.MERCHANT_REGISTER_VALI_CODE] (state, obj) {
		state.step = 1
		state.params.account = obj.account
		state.params.phoneCode = obj.phoneCode
		state.params.password = obj.password
		state.params.invitor = obj.invitor
		router.push(`/merchant-register-more?invitor=${obj.invitor}`)
   	},
   	[types.MERCHANT_STEP_CHANGE] (state, obj) {
   		state.step = obj
   	},
   	[types.MERCHANT_GEOLOCATION_UPDATE] (state, { place }) {
   		state.params.gelocation = place
   	},
   	[types.MERCHANT_REGISTER_TYPE_CHANGE] (state, type) {
   		state.type = type
   	},
   	[types.MERCHANT_VALI_IDCARD_NEXT] (state, obj) {
   		state.params.name = obj.name
   		state.params.idCard = obj.idCard
   		state.params.addr = obj.addr
   		state.params.fzrPhone = obj.fzrPhone
   		state.params.customers = obj.customers
   		state.params.turnover = obj.turnover
   		state.step++
   	},
   	[types.MERCHANT_IMAGE_UPLOAD] (state, imgs) {
   		for (let item in imgs) {
   			state.params[item] = imgs[item] ? imgs[item] : ''
   		}
   		if (state.step === 2) {
   			state.step++
   		}
   	}
}


export default{
	state,
	actions,
	mutations
}
