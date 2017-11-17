<template>
	<div class="step-two-container">
		<div class="item">
			<div class="title">
				<span class="line"></span>
				<span>负责人手持身份证照片（1张）</span>
			</div>
			<div class="content merchant-img-one">
				<input type="file" style="display: none;" ref="picOne" @change="imgSelected(one)" accept="image/*" />
				<img v-if="one.preview" class="preview" :src="one.preview" alt="" />
				<svg v-if="one.preview !== '' " class="iconfont delete" aria-hidden="true" @click="clear(one)">
				    <use xlink:href="#icon-trash"></use>
				</svg>
			</div>
			<mu-raised-button label="选择图片" class="upload" @click="toSelect(one)"/>
		</div>
		<div class="item">
			<div class="title">
				<span class="line"></span>
				<span>负责人与渠道人员合照（1张）</span>
			</div>
			<div class="content merchant-img-two">
				<input type="file" style="display: none;" ref="picTwo" @change="imgSelected(two)" accept="image/*" />
				<img v-if="two.preview" class="preview" :src="two.preview" alt="" />
				<svg v-if="two.preview !== '' " class="iconfont delete" aria-hidden="true" @click="clear(two)">
				    <use xlink:href="#icon-trash"></use>
				</svg>
			</div>
			<mu-raised-button label="选择图片" class="upload" @click="toSelect(two)" />
		</div>
		<div class="item">
			<div class="title">
				<span class="line"></span>
				<span>商户营业执照（1张）</span>
			</div>
			<div class="content merchant-img-three">
				<input type="file" style="display: none;" ref="picThree" @change="imgSelected(three)" accept="image/*" />
				<img v-if="three.preview" class="preview" :src="three.preview" alt="" />
				<svg v-if="three.preview !== '' " class="iconfont delete" aria-hidden="true" @click="clear(three)">
				    <use xlink:href="#icon-trash"></use>
				</svg>
			</div>
			<mu-raised-button label="选择图片" class="upload" @click="toSelect(three)"/>
		</div>
		<div class="item">
			<div class="title">
				<span class="line"></span>
				<span>与我方签订的协议照片</span>
			</div>
			<div class="content merchant-img-four">
				<input type="file" style="display: none;" ref="picFour" @change="imgSelected(four)" accept="image/*" />
				<img v-if="four.preview" class="preview" :src="four.preview" alt="" />
				<svg v-if="four.preview !== '' " class="iconfont delete" aria-hidden="true" @click="clear(four)">
				    <use xlink:href="#icon-trash"></use>
				</svg>
			</div>
			<mu-raised-button label="选择图片" class="upload" @click="toSelect(four)"/>
		</div>
		<div class="btn-group clearfix">
			<mu-raised-button label="上一步" class="prev btn-item fl" @click="back"/>
			<mu-raised-button label="提交" class="submit btn-item fr" @click="submit"/>
		</div>
	</div>
</template>

<script>
import { notice } from '@/tool/talk'

export default {
	data () {
		return {
			one: {
				inp: 'picOne',
				preview: '',
			},
			two: {
				inp: 'picTwo',
				preview: '',
			},
			three: {
				inp: 'picThree',
				preview: '',
			},
			four: {
				inp: 'picFour',
				preview: '',
			},
		}
	},
	computed: {
		type () {
			return this.$store.state.promoteRegister.type
		},
	},
	methods: {
		toSelect (item) {
			this.$refs[item.inp].value = null
			this.$refs[item.inp].click()
		},
		imgSelected (item) {
			const file = this.$refs[item.inp].files[0]
			/*const windowURL = window.URL || window.webkitURL;
			item.preview = windowURL.createObjectURL(file);*/
		
			const fr = new FileReader()
			fr.readAsDataURL(file)
			fr.onload = function (e) {
				item.preview = this.result
			}
			
			fr.onabort = function () {
				notice('读取文件错误请稍后拍摄')
				item.preview = ''
			}
			
			fr.onerror = function () {
				notice('读取文件错误请稍后拍摄')
				item.preview = ''
			}
		},
		clear (item) {
			this.$refs[item.inp].value = null
			item.preview = ''
		},
		submit () {
			if (!this.one.preview) {
				notice('请选择手持身份证的照片')
			} else if (!this.two.preview){
				notice('请选择与渠道人员的合照')
			} else if (!this.three.preview) {
				notice('商户营业执照照片')
			} else if (!this.four.preview) {
				notice('请选择与平台签订协议的照片')
			} else{
				const imgOne = this.$refs[this.one.inp].files[0] 
				const imgTwo = this.$refs[this.two.inp].files[0]
				const imgThree = this.$refs[this.three.inp].files[0]
				const imgFour = this.$refs[this.four.inp].files[0]
				this.$store.dispatch('merchantImageUpload', { imgOne, imgTwo, imgThree, imgFour })
			}
		},
		back () {
			this.$emit('stepChange', 1)
		}
	}
}

</script>

<style scoped="scoped" lang="less">
@import url("../../../../config/base.less");


.delete{
	position: absolute;
	right: 0.133333rem;
	top: 0.133333rem;
	padding: 0.133333rem;
	font-size: 0.64rem;
	background-color: rgba(255, 255, 255, 0.6);
	border-radius: 0.08rem;
}
.btn-group{
	padding: 0.533333rem 0;
	width: 8.533333rem;
	margin-left: auto;
	margin-right: auto;
}
.btn-item{
	height: 1.386666rem;
	width: 4rem;
	border-radius: 0.693333rem;
	font-size: 0.453333rem;
}
.prev{
	color: #666666;
}
.submit{
	background-color: @theme;
	color: #FFFFFF
}
.upload{
	width: 8.533333rem;
	margin: 0.266666rem auto;
	display: block;
	height: 1.066666rem;
	color: #ff3333;
	font-size: 0.4rem;
	
}
.content{
	position: relative;
	background-size: 100% 100%;
	width: 8.533333rem;
	height: 4.266666rem;
	margin-left: auto;
	margin-right: auto;
	background-color: #f0f0f3;
	.preview{
		position: absolute;
		width: 100%;
		height: 100%;
	}
}
.content:before{
	top: 0;
	display: block;
	content: '';
	position: absolute;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	background-image: url('@{image}/promote-register/watermark.png');
}
.merchant-img-one{
	background-image: url('@{image}/promote-register/idCard.png');
}
.merchant-img-two{
	background-image: url('@{image}/promote-register/fzr-group-photo.png');
}
.merchant-img-three{
	background-image: url('@{image}/promote-register/business-licence.png');
}
.merchant-img-four{
	background-image: url('@{image}/promote-register/protocol.png');
}

.title{
	height: 1.6rem;
	line-height: 1.6rem;
	font-size: 0.4rem;
}
.line{
	display: inline-block;
	width: 0.08rem;
	height: 0.453333rem;
	border-radius: 0.04rem;
	background-color: #ff6d33;
	margin-left: 0.453333rem;
	vertical-align: -0.08rem;
}
.item{
	background-color: #FFFFFF;
	overflow: hidden;
	margin-bottom: 0.266666rem;
	box-shadow: 0 2px 7px rgba(0,0,0,.15);
}


</style>