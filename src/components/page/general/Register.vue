<template>
	<div style="width: 100%;" class="register-container">
		<img :src="topImg" alt="" style="width: 100%;"/>
		<div class="regist-group">
			<img class="group-bg-border" :src="groupBorder" alt="" />
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
			<div class="rigist-item-wrap geetest" ref="geetest">
			</div>
			<div v-show="invitorShow" class="rigist-item-wrap">
				 <input class="inp" type="text" v-model="form.invitor.value" maxlength="11" placeholder="邀请人号码（选填）"/>
			</div>
			<div class="rigist-item-agree">
				 <mu-checkbox v-model="agree" iconClass="agree-check" class="agree-btn"/>
				<span class="agree-wrap">同意掌柜金服<span class="agree" @click="dialog = true">《注册协议》</span></span>
			</div>
			<div class="rigist-item-wrap">
				 <mu-raised-button  @click="formSubmit(form, rules)" label="注册并领取理财礼券" class="regist-item regist-submit" fullWidth/>
			</div>
			<div class="rigist-item-wrap" >
				
				<router-link to="/app" class="to-download-app"><mu-raised-button label="下载APP" class="regist-item regist-submit" fullWidth/></router-link>
			</div>
			
			<mu-dialog :open="dialog"  @close="dialog = flase" scrollable >
				<Agreement class="agree-content"/>
			</mu-dialog>
		</div>
		<img :src="introduceImg" alt="" style="width: 100%;" class="intro-img" />
	</div>
</template>

<script>
import {checkNotNull, checkPhone, checkInvitorPhone, checkPwd, validateAlert, resultTraversal} from '@/tool/regx'
import Agreement from '@/components/page/stationary/Agreement'
import { isPc } from '@/tool/tool'
import { notice } from '@/tool/talk'
import { IMG } from '@/config/url'



export default {
	data () {
		return {
			topImg: IMG + '/register/top-image.png',
			groupBorder: IMG + '/register/border.png',
			introduceImg: IMG + '/register/introduce.png',
			pwdOpen: false,
			eye: false,
			dialog: false,
			invitorShow: true,
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
		
		
		const geetest = this.$refs.geetest
		this.$store.dispatch('registerGeetestInit', geetest)

	},
	/*beforeRouteEnter (to, from, next) {
		const invitor = to.query.invitor
		if (isPc()) {
			if (invitor) {
				window.location = 'http://www.zhangguijf.com/register?invitor=' + invitor
			} else{
				window.location = 'http://www.zhangguijf.com/register'
			}
		} else {
			next()
		}
	},*/
	computed: {
		text () {
			return this.$store.state.register.text
		},
		sendCodeLoading () {
			return this.$store.state.register.sendCodeLoading
		}
	},
	methods: {
		vali (form, rules, field) {
			//  validateAlert(form, rules, field) 
		},
		async sendCode () {
 			if (this.form.account.bool || await validateAlert(this.form, this.rules, 'account') ) {
					this.$store.dispatch('registSendCode',{ account: this.form.account.value})
			}
		},
		async formSubmit (form, rules) {
			if (await resultTraversal(form, rules)) {
				let obj = {
					account: this.form.account.value,
					phoneCode: this.form.phoneCode.value,
					password: this.form.password.value,
					invitor: this.form.invitor.value,
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

<style type="text/css" lang="less">
@import url("../../../config/base.less");
.agree-check{
	color: @white;
	border-color: @white;
	width: 0.48rem;
}
</style>
<style scoped="scoped" lang="less">

@import url("../../../config/base.less");


.geetest{
	width: 8rem;
	vertical-align: middle;
	border-radius: 0.64rem;
	overflow: hidden;
}

.loading-circle{
	line-height: 1;
	margin-right: .2em;
	vertical-align: middle;
	color: @theme;
}
.to-download-app{
	color: @white;
	font-size: 0.48rem;
}
.intro-img{
	position: relative;
	width: 100%;
	top: -1.333333rem;
}
.group-bg-border{
	position: absolute;
	width: 100%;
	bottom: 0;
}
.agree-btn{
	width: 0.32rem;
}
.inp{
	width: 8rem;
	height: 1.28rem;
	border-radius: 0.64rem;
	font-size: 0.373333rem;
	border: none;
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
.register-container{
	width: 100%;
	background-color: @theme;
	min-height: 100vh;
}
.agree-wrap{
	font-size: 0.32rem;
	color: @white;
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
.link-home{
	display: block;
	text-align: center;
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
.rigist-item-wrap{
	width: 8rem;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	margin-top: 0.266666rem;
	position: relative;
}
.regist-item{
	width: 100%;
}
.regist-submit{
	font-size: 0.48rem;
	color: #FFFFFF;
	background-color: orangered;
	background-color: #ffe401;
	color: @theme;
	font-size: 0.453333rem;
	width: 8rem;
	height: 1.28rem;
	border-radius: 0.64rem;
}
.regist-group{
	width: 100%;
	padding: 0.666666rem 0;
	position: relative;
	top: -1.333333rem;
}

</style>