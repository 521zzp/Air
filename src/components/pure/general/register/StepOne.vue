<template>
	<div class="step-one-container">
		<div class="group">
			<div class="item border-bottom">
				<span class="name">真实姓名</span>
				<input class="value" v-model="form.name.value" placeholder="请输入您的真实姓名"/>
			</div>
			<div class="item">
				<span class="name">身份证号</span>
				<input class="value" v-model="form.idCard.value" placeholder="请输入您的身份证号"/>
			</div>
		</div>
		<div class="group group-two">
			<div class="item border-bottom">
				<span class="name">定位</span>
				<span class="value" @click="getLocation">{{ gelocation ? gelocation : '点击获取定位' }}</span>
			</div>
			<div class="item">
				<span class="name">详细地址</span>
				<input class="value" v-model="form.addr.value" placeholder="请补充详细地址"/>
			</div>
		</div>
		<mu-raised-button label="下一步" class="next"  @click="formSubmit(form, rules)" />
	</div>
</template>

<script>
import {checkNotNull, checkIdcard, resultTraversal} from '@/tool/regx'
import { notice } from '@/tool/talk'

export default {
	data () {
		return {
			form:{
				name: {
					value: '',
					bool:false,
				},
				idCard: {
					value: '',
					bool: false,
				},
				addr: {
					value: '',
					bool: false,
				}
			},
			rules: {
				name: [
					{ check: checkNotNull, message: '真实姓名不能为空' },
				],
				idCard: [
					{ check: checkNotNull, message: '身份证号码不能为空' },
					{ check: checkIdcard, message: '身份证号码格式不正确' },
				],
				addr: [
					{ check: checkNotNull, message: '详细地址不能为空' },
				],
			}
		}
	},
	computed: {
		gelocation () {
			return this.$store.state.promoteRegister.params.gelocation
		}
	},
	mounted () {
		this.getLocation()
	},
	methods: {
		async formSubmit (form, rules) {
			if (await resultTraversal(form, rules)) {
				let obj = {
					name: this.form.name.value,
					idCard: this.form.idCard.value,
					addr: this.form.addr.value,
				}
				this.$store.dispatch('promoteBaseInfoNext', obj)
			}
		},
		getLocation () {
			const vm = this
			try{
				if ("geolocation" in navigator) {
				  	navigator.geolocation.getCurrentPosition(function(position) {
				  		const params = {
				  			latitude: position.coords.latitude,
				  			longitude: position.coords.longitude
				  		}
				  		vm.$store.dispatch('promoteGetGeolocation', params)
					});
				} else {
				  notice('地理位置不可用')
				}
			}catch(e){
				notice('地理位置不可用')
			}
		}
	}
}
</script>

<style scoped="scoped" lang="less">
@import url("../../../../config/base.less");


.next{
	width: 8rem;
	height: 1.386666rem;
	border-radius: 0.693333rem;
	color: #fff;
	font-size: 0.453333rem;
	display: block;
	margin-left: auto;
	margin-right: auto;
	background-color: @theme;
	margin-top: 0.8rem;
	
}
.group-two{
	margin-top: 0.533333rem;
}
.group{
	font-size: 0.4rem;
	background-color: #FFFFFF;
	box-shadow: 0 2px 7px rgba(0,0,0,.15);
}
.value{
	height: 1.6rem;
	width: 7.2rem;
	border: none;
}
.item{
	height: 1.6rem;
	line-height: 1.6rem;
	overflow: hidden;
}
.name{
	display: inline-block;
	width: 2.133333rem;
	margin-left: 0.453333rem;
}
.border-bottom{
	border-bottom: 1px solid #DCDCDC;
}

</style>