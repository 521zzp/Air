<template>
	<div class="invite-record-container">
		<mt-loadmore :bottom-method="loadBottom"
			:bottom-status.sync="bottomStatus"
			@bottom-status-change="handleBottomChange"
			:bottom-all-loaded="allLoaded" ref="loadmore">
			
			<span class="notice ">此页面仅记录接受您的邀请并完成实名认证的用户</span>
			<div class="records-title">
				<span class=" account">注册用户</span>
				<span class="center regist-time">注册时间</span>
				<span class="status fr">投资状态</span>
			</div>
			<ul class="records-group">
				<li v-for="item,index in list" class="record-item" :key="item">
					<span class=" account">183****5745</span>
					<span class="center regist-time">2017-07-13</span>
					<span class="status fr">已投资</span>
				</li>
			</ul>
			<div slot="bottom" class="mint-loadmore-bottom">
			    <span v-show="bottomStatus !== 'loading'" class="un-loading"  :class="{ rotate: bottomStatus === 'drop' }">↓</span>
			    <span v-show="bottomStatus === 'loading'">Loading...</span>
			</div>
		</mt-loadmore>

	</div>
</template>

<script>
	import { notice } from '@/tool/talk'
	/*:class="{ rotate: bottomStatus === 'drop' }"*/
	export default {
		data () {
			return {
				allLoaded: false,
				bottomStatus: 'loading',
				list: [1, 2, 3, 4, 5,]
			}
		},
		methods: {
			loadBottom() {
				notice('触发请求数据')
				//this.$refs.loadmore.onBottomLoaded();
			},
			handleBottomChange(status) {
				notice(status)
				
		        this.bottomStatus = status;
		    },
		},
	}
</script>

<style scoped="scoped" lang="less">
.un-loading{
	transform: rotateZ(0deg);
	transition: all .5s;
}
.un-loading.rotate{
	transform: rotateZ(180deg);
	display: block;
}
.invest{
	color: #666666;
}
.unInvest{
	color: #333333;
}
.records-group{
	background-color: #FFFFFF;
	color: #666666;
	font-size: 0.4rem;
}
.record-item{
	display: block;
	height: 1.6rem;
	border-bottom: 1px solid #EFEFF4;
	line-height: 1.6rem;
	padding: 0 0.453333rem;
	span{
		display: inline-block;
		width: 2.933333rem;
		overflow: hidden;
	}
	.center{
		text-align: center;
	}
	.status{
		text-align: right;
	}
}
.records-title{
	height: 1.173333rem;
	line-height: 1.173333rem;
	padding: 0 0.453333rem;
	color: #999;
	font-size: 0.4rem;
	span{
		display: inline-block;
		width: 2.933333rem;
		overflow: hidden;
	}
	.center{
		text-align: center;
	}
	.status{
		text-align: right;
	}
}

.notice{
	display: block;
	height: 0.96rem;
	line-height: 0.96rem;
	background-color: #FFF8F5;
	color: #ff7f4d;
	font-size: 0.346666rem;
	text-align: center;
}

.invite-record-container{
	background-color: #EFEFF4;
	min-height: 100vh;
}	

</style>