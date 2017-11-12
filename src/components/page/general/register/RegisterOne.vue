<template>
	<div class="register-one-container">
		<img :src="logoImg" class="logo"/>
		<div class="register-group">
			<div class="rigist-item-wrap">
				 <input class="inp" type="text"  v-model="form.account.value" placeholder="手机号码"/>
			</div>
			<div class="rigist-item-wrap">
					<input class="inp" type="text" v-model="form.phoneCode.value"  placeholder="验证码"/>
					<span v-if="sendCodeLoading" class="send-code" @click="sendCode">
						<mu-circular-progress v-if="sendCodeLoading" :strokeWidth="2" class="loading-circle" :size="18" color="#ff3333"/>
						正在发送……
					</span>
					<span v-else class="send-code" @click="sendCode">{{text}}</span>
			</div>
			<div class="rigist-item-wrap">
					<input v-if="eye" class="inp" type="text"  v-model="form.password.value" placeholder="密码为6~18位数字字母组合"/>
					<input v-else class="inp" type="password"  v-model="form.password.value" placeholder="密码为6~18位数字字母组合"/>
					<svg class="iconfont eye " aria-hidden="false" @click="eye = !eye">
					    <use :xlink:href="eye ? '#icon-ios-eye-outline' : '#icon-ios-eye-off-outline'"></use>
					</svg>
			</div>
			<div v-show="invitorShow" class="rigist-item-wrap">
				 <input class="inp" type="text" v-model="form.invitor.value" maxlength="11" placeholder="邀请人号码（选填）"/>
			</div>
			<div class="rigist-item-agree">
				 <mu-checkbox v-model="agree" iconClass="agree-check" class="agree-btn"/>
				<span class="agree-wrap">同意掌柜金服<span class="agree" @click="dialog = true">《注册协议》</span></span>
			</div>
			<div class="rigist-item-wrap">
				 <mu-raised-button  @click="formSubmit(form, rules)" label="下一步" class="regist-item regist-submit" fullWidth/>
			</div>
			
			<mu-dialog :open="dialog"  @close="dialog = flase" scrollable >
				<Agreement class="agree-content"/>
			</mu-dialog>
			
		</div>
		
	</div>
</template>

<script>
import {checkNotNull, checkPhone, checkPwd, validateAlert, resultTraversal} from '@/tool/regx'
import Agreement from '@/components/page/stationary/Agreement'
import { IMG } from '@/config/url'
import { notice } from '@/tool/talk'

export default {
	data () {
		return {
			logoImg: IMG + '/promote-register/logo-img.png',
			pwdOpen: false,
			eye: false,
			dialog: false,
			invitorShow: false,
			agree: false,
			form:{
				account: {
					value: '',
					bool: false
				},
				phoneCode: {
					value: '',
					bool: false
				},
				password: {
					value: '',
					bool: false
				},
				invitor: {
					value: '',
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
			}
		}
	},
	computed: {
		text () {
			return this.$store.state.promoteRegister.text
		},
		sendCodeLoading () {
			return this.$store.state.promoteRegister.sendCodeLoading
		},
		type () {
			return this.$store.state.promoteRegister.type
		}
	},
	created () {
		const type = this.$route.params.type
		this.$store.dispatch('promoteTypeChange', type)
	},
	methods: {
		async sendCode () {
 			if (this.form.account.bool || await validateAlert(this.form, this.rules, 'account') ) {
					this.$store.dispatch('promoteRegistSendCode', { account: this.form.account.value})
			}
		},
		async formSubmit (form, rules) {
			if (await resultTraversal(form, rules)) {
				let obj = {
					account: this.form.account.value,
					phoneCode: this.form.phoneCode.value,
					password: this.form.password.value,
					invitor: this.form.invitor.value,
					type: this.$route.params.type
				}
				if (this.agree) {
					this.$store.dispatch('promoteValiCode', obj)
				} else{
					notice('请仔细阅读并同意掌柜金服注册协议！')
				}
			}
		},
	},
	mounted () {
		const invitor = this.$route.query.invitor
		this.form.invitor.value = invitor
	},
	components: {
		Agreement
	}
}
	
</script>

<style type="text/css" lang="less">
@import url("../../../../config/base.less");
.agree-check{
	color: #dcdcdc;
	border-color: #dcdcdc;
	width: 0.48rem;
}
</style>
<style scoped="scoped" lang="less">
@import url("../../../../config/base.less");

.logo{
	display: block;
	width: 3.333333rem;
	height: 3.2rem;
	margin: 1.066666rem auto 1.333333rem auto;
}
.register-group{
	width: 100%;
	position: relative;
}
.loading-circle{
	line-height: 1;
	margin-right: .2em;
	vertical-align: middle;
	color: @theme;
}
.rigist-item-wrap{
	width: 8rem;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	margin-top: 0.4rem;
	position: relative;
}
.regist-item{
	width: 100%;
}
.eye{
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0.533333rem;
	font-size: 0.8rem;
	margin-top: auto;
	margin-bottom: auto;
}
.agree-wrap{
	font-size: 0.32rem;
	color: #999;
	vertical-align: 0.24rem;
	margin-left: .6em;
	display: inline-block;
}
.agree-content{
	font-size: 0.32rem !important;
 }
.agree{
	color: deepskyblue;
}
.send-code{
	position: absolute;
	right: 0.533333rem;
	color: @theme;
	font-size: 0.373333reme;
	line-height: 1.28rem;
	top: 0;
}

.agree-btn{
	width: 0.32rem;
}
.inp{
	width: 8rem;
	height: 1.28rem;
	border-radius: 0.64rem;
	font-size: 0.373333rem;
	border: 1px solid #DCDCDC;
	padding-left: 0.533333rem;
	display: inline-block;
}
.rigist-item-agree{
	position: relative;
	width: 8rem;
	margin-left: auto;
	margin-right: auto;
	padding-left: 0.533333rem;
	height: 0.853333rem;	
	vertical-align: middle;
	line-height: 0.853333rem;
}
.regist-submit{
	font-size: 0.48rem;
	color: #FFFFFF;
	background-color: @theme;
	color: #fffff;
	font-size: 0.453333rem;
	width: 8rem;
	height: 1.28rem;
	border-radius: 0.64rem;
}
</style>