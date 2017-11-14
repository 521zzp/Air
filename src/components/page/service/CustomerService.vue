<template>
	<div class="customer-service-container" @click="operateSwitch(false)">
		<div v-show="busy" class="busy">
			<span class="busy-msg">
				抱歉！当前咨询人数较多，客服可能无法即时回复您的问题，
				建议转接电话客服。
			</span>
			<svg class="busy-close fr" aria-hidden="true" @click="busyClose">
			    <use xlink:href="#icon-close"></use>
			</svg>
			<div class="busy-phone">
				<a  href="tel:4000082623">拨打客服电话>></a>
			</div>
		</div>
		<div class="chat-content" :class=" {'chat-content-busy': busy }" :style="chatContentHeight" ref="chatContent">
			<div v-if="more" class="get-more-wrap">
				<span class="get-more" @click="getHistoryRecords">加载更多</span>
			</div>
			<div v-for="item,index in records" :key="index" :class="recordItemClass(item.sender)">
				<img  v-if="item.sender === 1" class="face" src="../../../assets/customerServer/customer.png"/>
				<img  v-else class="face" src="../../../assets/customerServer/servicer.png"/>
				<div class="content-wrap clearfix">
					<span class="time">{{timeFormat(item.time)}}</span>
					<span v-if="item.type === 1" class="content chat-content-text">{{item.content}}</span>
					<div  v-else-if="item.type === 2" class="content">
						<img @click="imageShowDetails(item.content)" :src="item.content" class="content-image" style="max-width: 100%;display: block;border-radius:;"  />
					</div>
				</div>
			</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
		</div>
		<ChatComponent  
			@send="textSend" 
			:operateShow="operateShow" 
			@operateSwitch="operateSwitch"
			@uploadImage="imageSend"
			/>
		<div v-transfer-dom @click="imgDialogShow=false">
	      <x-dialog v-model="imgDialogShow" class="only-customer-image-wrap" >
	          <img :src="imgDoalogImage" style="max-width:100%; max-height: 100vh; display: block;margin: 0 auto;">
	      </x-dialog>
	    </div>
	    
	    <!--<div v-transfer-dom>
	      <alert v-model="welcome"  title="欢迎" content="您好，欢迎来到掌柜金服人工客服，很高兴为您服务！人工客服在线时间9：00-18：30"></alert>
	    </div>-->
	    
	</div>
</template>

<script>
import ChatComponent from '@/components/page/service/ChatComponent'
import { XDialog, Alert, TransferDomDirective as TransferDom } from 'vux'
import { notice } from '@/tool/talk'

export default {
	directives: {
	    TransferDom
	  },
	data () {
		return {
			msg: '',
			account: '',
			welcome: false,
			busy: false,
			operateShow: false,
			imgDialogShow: false,
			imgDoalogImage: '',
		}
	},
	created () {
		const account = this.$route.params.account
		this.account = account
	},
	mounted () {
		/*this.welcome = true
		const vm = this
		setTimeout(()=>vm.welcome=false,3000)*/
		
		this.$store.dispatch('customerServiceEnquire', { account: this.account, content: '', type: 1 })
	},
	computed: {
		enquireFlag () {
			return this.$store.state.customerService.enquireFlag
		},
		socketOn () {
			return this.$store.state.customerService.socketOn
		},
		records () {
			return this.$store.state.customerService.records
		},
		scroll () {
			return this.$store.state.customerService.scroll
		},
		scrollBehavior () {
			return this.$store.state.customerService.scrollBehavior
		},
		more () {
			return this.$store.state.customerService.more
		},
		chatContentHeight () {
			let busy = this.busy ? 2.133333 : 0
			let operate = this.operateShow ? 6.4 : 1.6
			let decrease = busy + operate
			return {
				height: 'calc(100vh - '+ decrease +'rem)'
			}
		}
	},
	watch: {
		enquireFlag () {
			if (this.$store.state.customerService.connectable) {
				this.$store.dispatch('customerServiceSocketConnect', { account: this.account })
				this.busy = false
			} else {
				this.busy = true
				notice('当前客服离线中，暂时无法回复您！')
			}
		},
		scroll () {
			const vm = this
			setTimeout(function () {
				switch (vm.scrollBehavior){
					case 'stable':
						break;
					case 'top':
					vm.$refs.chatContent.scrollTop = 0
						break;
					case 'bottom':
						vm.$refs.chatContent.scrollTop = vm.$refs.chatContent.scrollHeight + 100
						break;
					default:
						break;
				}
				
			},100)
		},
		socketOn (){
			if (!this.$store.state.customerService.socketOn) {
				this.busy = true
				notice('当前客服离线中，暂时无法回复您！')
			}
		}
	},
	
	methods: {
		textSend (msg) {
			if (this.socketOn) {
				this.$store.dispatch('customerServiceSocketSend', { content: msg, sender: 1 })
			} else {
				this.$store.dispatch('customerServiceEnquire', { account: this.account, content: msg, type: 1 })
			}
		},
		imageSend (img){
			this.$store.dispatch('customerServiceSocketUploadImage', img)
		},
		busyClose () {
			this.busy = false
		},
		recordItemClass (sender) {
			return {
				clerk: sender === 0,
				customer: sender === 1
			}
		},
		timeFormat (time) {
			const length = new Date().getTime() - time
			if (length <  60 * 1000 ) {
				return Math.ceil(length / (  1000 )) + 1 + '秒前'
			} else if (length < 1000 * 60 * 60 * 24 ) {
				return new Date(time).Format('HH:mm')
			} else {
				return new Date(time).Format('yyyy-MM-dd HH:mm')
			}
		},
		getHistoryRecords () {
			this.$store.dispatch('customerServiceSocketGetHistoryRecords')
		},
		operateSwitch (flag) {
			console.log('operate swithc')
			console.log('flag')
			console.log(flag)
			console.log('socketon')
			console.log(this.socketOn)
			if (!this.socketOn) {
				if (flag) {
					this.$store.dispatch('customerServiceEnquire', { account: this.account, content: '', type: 1 })
				}
			} else {
				this.operateShow = flag
				if (flag) {
					const vm = this
					setTimeout(function () {
						switch (vm.scrollBehavior){
							case 'stable':
								break;
							case 'top':
							vm.$refs.chatContent.scrollTop = 0
								break;
							case 'bottom':
								vm.$refs.chatContent.scrollTop = vm.$refs.chatContent.scrollHeight 
								break;
							default:
								break;
						}
					}, 280)
				}
			}
			
		},
		imageShowDetails (path){
			console.log('img path')
			console.log(path)
			this.imgDoalogImage = path
			this.imgDialogShow = true
		}
	},
	components: {
		ChatComponent,
		Alert,
		XDialog
	}
}
</script>

<style type="text/css">

.only-customer-image-wrap .weui-dialog{
	width: 100% !important;
	max-width: 100% !important;
}

</style>
<style scoped="scoped">

.chat-content-text{
	word-break: break-all;
	word-wrap: break-word;
}
.content-image{
	max-width: 100%;
	display: block;
	border-radius: 0.266666rem;
}
.get-more-wrap{
	text-align: center;
	padding: 0.133333rem 0;
}
.get-more{
	background-color: #DCDCDC;
	padding: 0.066666rem 0.133333rem;
	border-radius: 0.053333rem;
}
.busy-close{
	width: 0.48rem;
	height: 0.48rem;
	position: absolute;
	right: 0.453333rem;
	top: 0.4rem;
}
.busy-msg{
	display: block;
	margin-right: 0.426666rem;
}
.busy-phone{
	text-align: center;
}
.busy{
	padding: 0.4rem 0.453333rem 0.266666rem 0.453333rem;
	height: 2.133333rem;
	background-color: #fff8f5;
	transition: all .3s; 
	z-index: 1;
}
.customer-service-container{
	background-color: #efeff4;
	height: calc(100vh);
	overflow: hidden;
}
.chat-content{
	overflow: auto;
	display: block;
	padding-top: 0.133333rem;
	transition: all .3s; 
}

.clerk,.customer{
	padding: 0 0.453333rem;
	margin-bottom: 0.266666rem;
}
.clerk .content-wrap{
	padding: 0 0 0 1.6rem ;
}
.clerk{
	animation: myLeftFadeIn .8s ease;
}
.customer{
	animation: myRightFadeIn .8s ease;
}
.clerk .face{
	float: left;
	width: 1.066666rem;
	height: 1.066666rem;
	margin-top: 0.346666rem;
}
.clerk .content{
	display: inherit;
	background-color: #e9e6fa;
	float: left;
	padding: 0.266666rem 0.266666rem;
	font-size: 0.426666rem;
	border-radius: 0.266666rem;
	position: relative;
	word-break: break-all;
}
.clerk .content:after{
	display: block;
	content: '';
	position: absolute;
	left: -10px;
	top: 10px;
	border-right: 10px solid #e9e6fa;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
}
.clerk .time{
	display: block;
	text-align: left;
	width: 100%;
	color: #999;
}

.customer .time{
	display: block;
	text-align: right;
	width: 100%;
	color: #999;
}
.customer .content-wrap{
	padding: 0 1.6rem 0 0;
}
.customer .face{
	float: right;
	width: 1.066666rem;
	height: 1.066666rem;
	margin-top: 0.346666rem;
}
.customer .content{
	display: inherit;
	background-color: #fae1e1;
	padding: 0.266666rem 0.266666rem;
	font-size: 0.426666rem;
	border-radius: 0.266666rem;
	position: relative;
	float: right;
	word-break: break-all;
}
.customer .content:after{
	display: block;
	content: '';
	position: absolute;
	right: -10px;
	top: 10px;
	border-left: 10px solid #fae1e1;
	border-top: 5px solid transparent;
	border-bottom: 5px solid transparent;
}


@keyframes mtFadeIn{
	from{
		opacity: 0;
		transform: translateY(-30px);
	}
	to{
		transform: translateY(0);
		opacity: 1;
	}
}
	
@keyframes myLeftFadeIn{
	from{
		opacity: 0;
		transform: translateX(-30px);
	}
	to{
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes myRightFadeIn{
	from{
		opacity: 0;
		transform: translateX(30px);
	}
	to{
		opacity: 1;
		transform: translateX(0);
	}
}

</style>