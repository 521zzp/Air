<template>
	<div class="invite-red-packet-container">
		<section class="section">
			<div class="title border-bottom">
				<span class="line"></span>
				<span class="title-text">30元红包</span>
			</div>
			<div class="red-record">
				<div class="record-block" style="border-bottom: 1px solid #EFEFF4;">
					<div class="main-info">
						<span class="info-title">待领红包（元）</span>
						<span class="info-value">
							<countup :start-val="0.00" :end-val="300.00" :decimals="2" :duration="duration"></countup>
						</span>
					</div>
					<div class="extra-info">(投资金额<1000元：
						<countup :start-val="0" :end-val="10" :duration="duration"></countup>
						人(含未投资))</div>
				</div>
				<div class="record-block">
					<div class="main-info">
						<span class="info-title">可领红包（元）</span>
						<span class="info-value">
							<countup :start-val="0.00" :end-val="90.00" :decimals="2" :duration="duration"></countup>
						</span>
					</div>
					<div class="extra-info">(投资金额1000元：
						<countup :start-val="0" :end-val="3"  :duration="duration"></countup>
						人)</div>
				</div>
				<mu-raised-button  class="get-btn"  label="立即领取"/>
				
			</div>
			<div class="bottom-border"></div>
			<div class="total-record">
				<div class="total-record-top">
					<span class="fl total-record-title">总计</span>
					<router-link class="fr link" :to="'/inviteReceiveRecord/' + account">点击查看</router-link>
				</div>
				<div class="total-record-type-one border-bottom">
					<span class="fl">已邀请并实名（人）</span>
					<span class="fr">
						<countup :start-val="0" :end-val="13"  :duration="duration"></countup>
					</span>
				</div>
				<div class="total-record-type-two border-bottom">
					<span class="fl">邀请投资红包累计金额（元）</span>
					<span class="fr">
						<countup :start-val="0.00" :end-val="300.00" :decimals="2" :duration="duration"></countup>
					</span>
				</div>
				<div class="total-record-type-two">
					<span class="fl">累计已领金额（元）</span>
					<span class="fr">
						<countup :start-val="0.00" :end-val="400.00" :decimals="2" :duration="duration"></countup>
					</span>
				</div>
			</div>
		</section>		
		<section class="section section-two ">
			<div class="title border-bottom">
				<span class="line"></span>
				<span class="title-text">20元红包</span>
			</div>
			<div class="red-record ">
				<div class="record-block">
					<div class="main-info">
						<span class="info-title">累计已获取金额（元）</span>
						<span class="info-value">
							<countup :start-val="0.00" :end-val="260.00" :decimals="2" :duration="duration"></countup>
						</span>
					</div>
					<div class="extra-info">（此金额自动转入余额）</div>
				</div>
			</div>
		</section>
		<section class="section section-three">
			<div class="title border-bottom">
				<span class="line"></span>
				<span class="title-text">活动说明</span>
			</div>
			<div class="illustrate">
				<p>1.每次邀请好友并完成实名认证后您可获得30元待领红包。另外赠送20元注册实名红包（注册实名红包自动转入余额）。</p>
				<p>2.当您邀请的好友进行投资后（投资金额≥1000元），待领红包自动转为可领红包。</p>
				<p>3.若您当前的理财金额不小于1000元，点击立即领取即可领取红包，领取后红包金额转入余额。</p>
				<p>4.以上邀请好友仅限您本人邀请的第一级好友，二三级好友不包含在内，本活动最终解释权掌柜金服所有。</p>
			</div>
		</section>
	</div>
</template>

<script>
import { Countup } from 'vux'

export default {
	data () {
		return {
			duration: 3,
			account: '',
		}
	},
	created() {
		this.account = this.$route.params.account
	},
	components: {
		Countup
	}
}

</script>

<style scoped="scoped" lang="less">

.illustrate{
	padding: 0.266666rem 0.8rem;
	font-size: 0.373333rem;
	color: #999999;
	line-height: 2;
}
.section-two, .section-three{
	margin-top: 0.266666rem ;
}
.invite-red-packet-container{
	background-color: #efeff4;
	padding: 0.4rem 0.266666rem;	
}
.total-record-type-two{
	height: 1.066666rem;
	line-height: 1.066666rem;
	font-size: 0.346666rem;
	.fl{
		color: #999999;
	}
	.fr{
		color: #666666;
	}
}
.total-record-type-one{
	height: 0.8rem;
	line-height: 0.8rem;
	font-size: 0.346666rem;
	.fl{
		color: #999999;
	}
	.fr{
		color: #666666;
	}
}
.total-record-top{
	height: 1.386666rem;
	line-height: 1.386666rem;
	font-size: 0.4rem;
	span{
		
	}
}
.total-record{
	padding: 0  0.8rem;
	background-color: #fff8f5;
}
.section{
	background-color: #FFFFFF;
	border-radius: 0.213333rem;
	overflow: hidden;
}
.title{
	height: 1.386666rem;
	line-height: 1.386666rem;
	.line{
		height: 0.453333rem;
		width: 0.106666rem;
		background-color: #ff7f4d; 
		border-radius: 0.053333rem;
		display: inline-block;
		vertical-align: -0.053333rem;
		margin-left: 0.4rem;
	}
	.title-text{
		color: #999;
		font-size: 0.426666rem;
		margin-left: 0.293333rem;
	}
}

.red-record{
	padding: 0 0.8rem;
}
.record-block{
	height: 2.133333rem;
}
.main-info{
	overflow: hidden;
	height: 1.386666rem;
	font-size: 0.4rem;
	color: #000000;
	position: relative;
	span{
		position: absolute;
		height: 1.386666rem;
		display: block;
		line-height: 1.386666rem;
		width: 100% ;
		height: 1.386666rem;
	}
}
.info-title{
	text-align: left;
}
.info-value{
	text-align: right;
}
.extra-info{
	height: 0.746666rem;
	color: #999999;
	font-size: 0.346666rem;
}
.get-btn{
	border-radius: 0.106666rem;
	background-color: #ff7f4d;
	width: 100%;
	color: #fff;
	font-size: 0.4rem;
	height: 1.173333rem;
	margin-top: 0.133333rem;
}
.bottom-border{
	height: 0.4rem;
	background-image: url(../../../assets/general/inviteRedPacket/border.png);
	background-size: cover;
	margin-top: 0.266666rem;
}
.border-bottom{
	border-bottom: 1px solid #EFEFF4;
}
</style>