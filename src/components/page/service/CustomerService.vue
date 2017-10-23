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
		<div class="chat-content" :class=" {'chat-content-busy': busy }" ref="chatContent">
			<div v-if="more" class="get-more-wrap">
				<span class="get-more" @click="getHistoryRecords">加载更多</span>
			</div>
			<div v-for="item,index in records" :key="index" :class="recordItemClass(item.sender)">
				<!--<mu-avatar v-if="item.sender === 1" class="face" 
					:src="item.userImg"
					 color="deepOrange300" backgroundColor="purple500">
					{{ item.userImg ? '' : item.userNickName[0] }}
				</mu-avatar>-->
				<img  v-if="item.sender === 1" class="face" src="../../../assets/customerServer/customer.png"/>
				<img  v-else class="face" src="../../../assets/customerServer/servicer.png"/>
				<div class="content-wrap clearfix">
					<span class="time">{{timeFormat(item.time)}}</span>
					<span class="content">{{item.content}}</span>
				</div>
			</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
			<!--<div class="customer">
				<mu-avatar class="face"  color="deepOrange300" backgroundColor="purple500">MM</mu-avatar>
				<div class="content-wrap clearfix">
					<span class="time fl">10:21</span>
					<span class="content">asafasfaf</span>
				</div>
			</div>-->
		</div>
		<ChatComponent  @send="textSend" :operateShow="operateShow" @operateSwitch="operateSwitch"/>
	</div>
</template>

<script>
import ChatComponent from '@/components/page/service/ChatComponent'

export default {
	data () {
		return {
			msg: '呵呵哒！',
			account: '',
			busy: false,
			operateShow: false,
		}
	},
	created () {
		const account = this.$route.params.account
		this.account = account
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
		}
	},
	watch: {
		enquireFlag () {
			if (this.$store.state.customerService.connectable) {
				this.$store.dispatch('customerServiceSocketConnect', { account: this.account })
			} else {
				this.busy = true
			}
		},
		scroll () {
			console.log(this.scrollBehavior)
			const vm = this
			setTimeout(function () {
				switch (vm.scrollBehavior){
					case 'stable':
						break;
					case 'top':
					vm.$refs.chatContent.scrollTop = 0
						break;
					case 'bottom':
						console.log(vm.$refs.chatContent.scrollTop)
						console.log(vm.$refs.chatContent.scrollHeight)
						vm.$refs.chatContent.scrollTop = vm.$refs.chatContent.scrollHeight + 100
						break;
					default:
						break;
				}
				
			},100)
			
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
				return Math.ceil(length / (  1000 )) + '秒前'
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
			console.log(flag)
			this.operateShow = flag
			/*if (!this.socketOn) {
				this.$store.dispatch('customerServiceEnquire', { account: this.account, content: '', type: 1 })
			} else{
				this.operateShow = flag
			}*/
		}
	},
	components: {
		ChatComponent
	}
}
</script>


<style scoped="scoped">


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
	position: fixed;
	top: 0;
	height: 2.133333rem;
	background-color: #fff8f5;
	transition: all .3s; 
}
.customer-service-container{
	background-color: #efeff4;
	height: calc(100vh);
	overflow: hidden;
}
.chat-content{
	height: calc(100vh - 1.6rem);
	overflow: auto;
	display: block;
	padding-top: 0.133333rem;
	transition: all .3s; 
}
.chat-content-busy{
	height: calc(100vh - 3.733333rem);
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