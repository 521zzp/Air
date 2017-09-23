<template>
	<div style="width: 100%;">
		<div class="regist-group">
			<div class="rigist-item-wrap">
				<mu-text-field hintText="手机号码" v-model="form.account.value" type="number" :maxLength="11" @input="vali(form, rules, 'account')" class="regist-item"
				 inputClass="regist-item-input" hintTextClass="regist-item-tips" :errorText="form.account.errorText"  />
			</div>
			<div class="rigist-item-wrap">
				<mu-text-field hintText="密码" :type="eye ? 'text' : 'password' " v-model="form.password.value" class="regist-item" @input="vali(form, rules, 'password')"
					hintTextClass="regist-item-tips" inputClass="regist-item-input" :errorText="form.password.errorText"  />
					<svg class="iconfont eye " aria-hidden="false" @click="eye = !eye">
					    <use :xlink:href="eye ? '#icon-eye' : '#icon-eye-close'"></use>
					</svg>
			</div>
			<div class="rigist-item-wrap">
				<mu-text-field hintText="手机验证码" v-model="form.phoneCode.value" type="number" class="regist-item" @input="vali(form, rules, 'phoneCode')"
					hintTextClass="regist-item-tips" inputClass="regist-item-input" :errorText="form.phoneCode.errorText"  />
					<span class="send-code" @click="sendCode">{{text}}</span>
			</div>
			<div v-show="invitorShow" class="rigist-item-wrap">
				<mu-text-field hintText="邀请人号码（选填）" v-model="form.invitor.value" type="number" :maxLength="11" @input="vali(form, rules, 'invitor')" class="regist-item"
				 inputClass="regist-item-input" hintTextClass="regist-item-tips" :errorText="form.invitor.errorText"  />
			</div>
			<div class="rigist-item-wrap">
				<mu-checkbox v-model="agree"  class="demo-checkbox"/> <span class="agree-wrap">同意掌柜金服<span class="agree" @click="dialog = true">《注册协议》</span></span>
			</div>
			<div class="rigist-item-wrap">
				 <mu-raised-button  @click="formSubmit(form, rules)" label="注册" class="regist-item regist-submit" fullWidth/>
			</div>
			
			<mu-dialog :open="dialog"  @close="dialog = flase" scrollable >
				<Agreement class="agree-content"/>
			</mu-dialog>
		</div>
	</div>
</template>

<script>
import {checkNotNull, checkPhone, checkInvitorPhone, checkPwd, validate, resultMerge} from '@/tool/regx'
import Agreement from '@/components/page/stationary/Agreement'
import { isPc } from '@/tool/tool'
import { notice } from '@/tool/talk'


export default {
	data () {
		return {
			pwdOpen: false,
			eye: false,
			dialog: false,
			invitorShow: true,
			agree: false,
			form:{
				account: {
					value: '',
					errorText: '',
					bool: false
				},
				phoneCode: {
					value: '',
					errorText: '',
					bool: false
				},
				password: {
					value: '',
					errorText: '',
					bool: false
				},
				invitor: {
					value: '',
					errorText: '',
					bool: true
				}
			},
			rules: {
				account: [
					{ check: checkNotNull, message: '电话号码不能为空' },
					{ check: checkPhone, message: '电话号码格式不正确' },
				],
				phoneCode: [
					{ check: checkNotNull, message: '验证码不能为空' },
				],
				password: [
					{ check: checkNotNull, message: '密码不能为空' },
					{ check: checkPwd, message: '密码为6~18位数字字母组合' },
				],
				invitor: [
					{ check: checkInvitorPhone, message: '邀请人手机号格式不正确' },
				]
			}
		}
	},
	mounted () {
		const invitor = this.$route.query.invitor
		invitor ? this.form.invitor.value = invitor : ''
		invitor ? this.invitorShow = false : ''
		if (isPc() && invitor) {
			//window.location = 'http://www.zhangguijf.com/register?invitor=' + invitor
		} else{
			//window.location = 'http://www.zhangguijf.com/register'	
		}
	},
	computed: {
		text () {
			return this.$store.state.register.text
		},
	},
	methods: {
		vali (form, rules, field) {
			  validate(form, rules, field) 
		},
		async sendCode () {
 			if (this.form.account.bool || await validate(this.form, this.rules, 'account') ) {
					this.$store.dispatch('registSendCode',{ account: this.form.account.value})
			}
		},
		async formSubmit (form, rules) {
			if (await resultMerge(form, rules)) {
				let obj = {
					account: this.form.account.value,
					phoneCode: this.form.phoneCode.value,
					password: this.form.password.value,
				}
				if (this.agree) {
					this.$store.dispatch('register', obj)
				} else{
					notice('请仔细阅读并同意掌柜金服注册协议！')
				}
				
				
			}
		},
	},
	components: {
		Agreement
	}
}

</script>

<style scoped="scoped" lang="less">

.agree-content{
	font-size: 0.32rem !important;
}
.agree{
	color: deepskyblue;
}
.agree-wrap{
	vertical-align: 0.186666rem;
}

.send-code{
	position: absolute;
	right: 0.133333rem;
	top: 0.266666rem;
	font-size: 0.426666rem;
}
.link-home{
	display: block;
	text-align: center;
}
.eye{
	position: absolute;
	right: 0.133333rem;
	top: 0;
	bottom: 0;
	font-size: 0.8rem;
}
.rigist-item-wrap{
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	position: relative;
}
.regist-item{
	width: 100%;
}
.regist-submit{
	margin-top: 0.4rem;
	margin-bottom: 0.266666rem;
	font-size: 0.48rem;
	color: #FFFFFF;
	background-color: orangered;
}
.regist-group{
	width: 100%;
}

</style>