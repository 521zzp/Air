import * as types from '../../mutation-types'
import { REGISTER_SEND_CODE, 
		PROMOTE_REGISTER_ALLOWED,
		PROMOTE_REGISTER_VALI_CODE,
		PROMOTE_IMAGE_UPLOAD,
		PROMOTE_REGISTER,
		PROMOTE_VALI_IDCARD_NEXT,
		VALICODE_IDCARD,
		GET_GEOLOCATION,  } from '@/config/url'
import { postModelTwo, analy, getModel } from '@/tool/net'
import { feedback, loading } from '@/tool/talk'
import router from '@/router'



const state = {
	type: 1, //1表示个人扫描二维码， 2表示扫描商户二维码
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
		imgIndex: 0, //手势索引
		imgOne: '',
	}
}


const actions = {
	async promoteRegistSendCode ({ commit }, obj){
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
  	async promoteValiCode ({ commit }, obj) {
  		//commit(types.PROMOTE_REGISTER_VALI_CODE, obj)
  		const result = await fetch(PROMOTE_REGISTER_VALI_CODE, postModelTwo(obj)).then(analy)
  		result ? commit(types.PROMOTE_REGISTER_VALI_CODE, obj) : ''
  	},
  	async promoteBaseInfoNext ({ commit }, obj) {
  		const result = await fetch(VALICODE_IDCARD, postModelTwo(obj)).then(analy)
  		result ? commit(types.PROMOTE_VALI_IDCARD_NEXT, obj) : ''
  		
  	},
  	async promoteImageUpload ({ commit }, obj) {
  		loading(true)
  		const form = new FormData()
  		form.append('imgOne', obj.imgOne)
  		//form.append('imgTwo', obj.imgTwo)
  		//form.append('imgThree', obj.imgThree)
  		try {
  			const imgs = await fetch(PROMOTE_IMAGE_UPLOAD, {
	  			method: 'post',
	  			credentials: 'include',
	  			body: form
	  		}).then(analy)
	  		loading(false)
	  		const register = {
	  			type: 2, //1表示商户认证，2表示注册
	  			account: state.params.account,
	  			phoneCode: state.params.phoneCode,
	  			password: state.params.password,
	  			invitor: state.params.invitor,
	  			name: state.params.name,
	  			idCard: state.params.idCard,
	  			gelocation: state.params.gelocation,
	  			addr: state.params.addr,
	  			imgIndex: obj.imgIndex,
	  			imgOne: imgs.imgOne,
	  			//imgTwo: imgs.imgTwo,
	  			//imgThree: imgs.imgThree,
	  		}
	  		const result = await fetch(PROMOTE_REGISTER, postModelTwo(register)).then(analy)
	  		result ? commit(types.PROMOTE_STEP_CHANGE, 3) : ''
  		} catch (e) {
  			loading(false)
  			throw e
  		}
  	},
  	promoteStepChange ({ commit }, obj) {
  		commit(types.PROMOTE_STEP_CHANGE, obj)
  	},
  	async promoteGetGeolocation ({ commit }, obj) {
  		const place = await fetch(GET_GEOLOCATION, postModelTwo(obj)).then(analy)
  		commit(types.PROMOTE_GEOLOCATION_UPDATE, place)
  	},
  	async promoteRegisterAllowed ({ commit }, obj) {
  		
  		console.log('邀请人', obj)
  		const result = await fetch(PROMOTE_REGISTER_ALLOWED, getModel()).then(analy)
  		if (!result.allow) {
  			if (obj.invitor) {
  				router.push(`/register?invitor=${obj.invitor}`)
  			} else{
  				router.push(`/register`)
  			}
  		} 
  	},
}

const mutations = {
	[types.PROMOTE_REGISTER_VALI_CODE] (state, obj) {
		state.step = 1
		state.params.account = obj.account
		state.params.phoneCode = obj.phoneCode
		state.params.password = obj.password
		state.params.invitor = obj.invitor
		router.push(`/promote-register-more?invitor=${obj.invitor}`)
   	},
   	[types.PROMOTE_STEP_CHANGE] (state, obj) {
   		state.step = obj
   	},
   	[types.PROMOTE_GEOLOCATION_UPDATE] (state, { place }) {
   		state.params.gelocation = place
   	},
   	[types.PROMOTE_VALI_IDCARD_NEXT] (state, obj) {
   		state.params.name = obj.name
   		state.params.idCard = obj.idCard
   		state.params.addr = obj.addr
   		state.step = 2
   	}
}


export default{
	state,
	actions,
	mutations
}
