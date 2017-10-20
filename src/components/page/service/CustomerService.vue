<template>
	<div class="customer-service-container">
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
		
		<div class="chat-component">
			<svg class="iconfont operate more" aria-hidden="true">
			    <use xlink:href="#icon-add1"></use>
			</svg>
			<textarea class="input-content" v-model="msg" ></textarea>
			<svg class="iconfont operate fr send" aria-hidden="true" @click="send">
			    <use xlink:href="#icon-send"></use>
			</svg>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			msg: '呵呵哒！',
			account: '',
			busy: false,
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
		send () {
			if (this.msg !== '') {
				if (this.socketOn) {
					this.$store.dispatch('customerServiceSocketSend', { content: this.msg, sender: 1 })
				} else {
					this.$store.dispatch('customerServiceEnquire', { account: this.account, content: this.msg, type: 1 })
				}
				this.msg = ''
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
		}
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
.more{
	margin-left: 0.16rem;
	margin-top: 0.4rem;
	float: left;
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
.send{
	margin-right: 0.24rem;
	margin-top: 0.4rem;
}
.operate{
	width: 0.8rem;
	height: 0.8rem;
	color: #999999;
}
.chat-component{
	background-color: #FFFFFF;
	height: 1.6rem;
	width: 100%;
	bottom: 0;
	position: fixed;
}
.input-content{
	width: 7.52rem;
	height: 1.066666rem;
	background-color: #efeff4;
	border-radius: 0.106666rem;
	border: none;
	margin-top: 0.266666rem;
	resize: none;
	font-size: 0.48rem;
	padding: 0.186666rem 0.133333rem;
	display: inline-block;
	position: absolute;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
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
	margin-bottom: 0.266666rem;
}
.clerk .content-wrap{
	padding: 0 0 0 1.6rem ;
}
.clerk, .customer{
	padding: 0 0.453333rem;
	animation: mtFadeIn .8s ease;
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
	
</style>