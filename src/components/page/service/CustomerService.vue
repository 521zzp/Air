<template>
	<div class="customer-service-container">
		<div class="chat-content">
			<div class="clerk">
				<mu-avatar class="face"  color="deepOrange300" backgroundColor="purple500">MM</mu-avatar>
				<div class="content-wrap clearfix">
					<span class="time fl">10:21</span>
					<span class="content">jsdakhgndkflhklfdnkhldnfhnadkfhnaretujaerjsdakhgndkflhklfdnkhldnfhnadkfhnaretujaer
						jsdakhgndkflhklfdnkhldnfhnadkfhnaretujaerjsdakhgndkflhklfdnkhldnfhnadkfhnaretujaer</span>
				</div>
			</div>
			<div class="clerk">
				<mu-avatar class="face"  color="deepOrange300" backgroundColor="purple500">MM</mu-avatar>
				<div class="content-wrap clearfix">
					<span class="time fl">10:21</span>
					<span class="content">jsdakhgndkflhklfdnkhldnfhnadkfhnaretujaerjsdakhgndkflhklfdnkhldnfhnadkfhnaretujaer
						jsdakhgndkflhklfdnkhldnfhnadkfhnaretujaerjsdakhgndkflhklfdnkhldnfhnadkfhnaretujaer</span>
				</div>
			</div>
			<div class="clerk">
				<mu-avatar class="face"  color="deepOrange300" backgroundColor="purple500">MM</mu-avatar>
				<div class="content-wrap clearfix">
					<span class="time fl">10:21</span>
					<span class="content">jsdakhgndkflhklfdnkhldnfhnadkfhnaretujaerjsdakhgndkflhklfdnkhldnfhnadkfhnaretujaer
						jsdakhgndkflhklfdnkhldnfhnadkfhnaretujaerjsdakhgndkflhklfdnkhldnfhnadkfhnaretujaer</span>
				</div>
			</div>
			<div class="clerk">
				<mu-avatar class="face"  color="deepOrange300" backgroundColor="purple500">MM</mu-avatar>
				<div class="content-wrap clearfix">
					<span class="time fl">10:21</span>
					<span class="content">jsdakhgndkflhklfdnkhldnfhnadkfhnaretujaerjsdakhgndkflhklfdnkhldnfhnadkfhnaretujaer
						jsdakhgndkflhklfdnkhldnfhnadkfhnaretujaerjsdakhgndkflhklfdnkhldnfhnadkfhnaretujaer</span>
				</div>
			</div>
			<div class="clerk">
				<mu-avatar class="face"  color="deepOrange300" backgroundColor="purple500">MM</mu-avatar>
				<div class="content-wrap clearfix">
					<span class="time fl">10:21</span>
					<span class="content">jsdakhgndkflhklfdnkhldnfhnadkfhnaretujaerjsdakhgndkflhklfdnkhldnfhnadkfhnaretujaer
						jsdakhgndkflhklfdnkhldnfhnadkfhnaretujaerjsdakhgndkflhklfdnkhldnfhnadkfhnaretujaer</span>
				</div>
			</div>
			
			
			<div class="customer">
				<!--<Avatar class="face" icon="customer-service" />-->
				<mu-avatar class="face"  color="deepOrange300" backgroundColor="purple500">MM</mu-avatar>
				<div class="content-wrap clearfix">
					<span class="time fl">10:21</span>
					<span class="content">asafasfaf</span>
					
				</div>
			</div>
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
		//this.$store.dispatch('customerServiceSocketConnect', { account })
	},
	computed: {
		enquireFlag () {
			return this.$store.state.customerService.enquireFlag
		},
		socketOn () {
			return this.$store.state.customerService.socketOn
		}
	},
	watch: {
		enquireFlag () {
			if (this.$store.state.customerService.connectable) {
				this.$store.dispatch('customerServiceSocketConnect', { account: this.account })
			} else {
				this.busy = true
			}
		}
	},
	
	methods: {
		send () {
			if (this.socketOn) {
				
			} else {
				this.$store.dispatch('customerServiceEnquire', { account: this.account, content: this.msg })
			}
		}
	}
}

</script>

<style scoped="scoped">

.more{
	margin-left: 0.16rem;
	margin-top: 0.4rem;
	float: left;
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