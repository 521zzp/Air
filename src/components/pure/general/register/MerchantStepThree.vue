<template>
	<div class="step-two-container">
		<div class="item">
			<div class="title">
				<span class="line"></span>
				<span class="title-text">请上传最多5张商户照片，例正面照片+大堂照片+商户门头照片+外景照（至少上传3张）</span>
			</div>
			
			<div class="content merchant-img-five">
				<input type="file" style="display: none;" ref="picFive" @change="imgSelected(five)" accept="image/*" />
				<img v-if="five.preview" class="preview" :src="five.preview" alt="" />
				<svg v-if="five.preview !== '' " class="iconfont delete" aria-hidden="true" @click="clear(five)">
				    <use xlink:href="#icon-trash"></use>
				</svg>
			</div>
			<mu-raised-button label="选择图片" class="upload" @click="toSelect(five)" />
			
			<div class="content merchant-img-six">
				<input type="file" style="display: none;" ref="picSix" @change="imgSelected(six)" accept="image/*" />
				<img v-if="six.preview" class="preview" :src="six.preview" alt="" />
				<svg v-if="six.preview !== '' " class="iconfont delete" aria-hidden="true" @click="clear(six)">
				    <use xlink:href="#icon-trash"></use>
				</svg>
			</div>
			<mu-raised-button label="选择图片" class="upload" @click="toSelect(six)" />
			
			<div class="content merchant-img-seven">
				<input type="file" style="display: none;" ref="picSeven" @change="imgSelected(seven)" accept="image/*" />
				<img v-if="seven.preview" class="preview" :src="seven.preview" alt="" />
				<svg v-if="seven.preview !== '' " class="iconfont delete" aria-hidden="true" @click="clear(seven)">
				    <use xlink:href="#icon-trash"></use>
				</svg>
			</div>
			<mu-raised-button label="选择图片" class="upload" @click="toSelect(seven)" />
			
			<div class="content merchant-img-eight">
				<input type="file" style="display: none;" ref="picEight" @change="imgSelected(eight)" accept="image/*" />
				<img v-if="eight.preview" class="preview" :src="eight.preview" alt="" />
				<svg v-if="eight.preview !== '' " class="iconfont delete" aria-hidden="true" @click="clear(eight)">
				    <use xlink:href="#icon-trash"></use>
				</svg>
			</div>
			<mu-raised-button label="选择图片" class="upload" @click="toSelect(eight)" />
			
			<div class="content merchant-img-nine">
				<input type="file" style="display: none;" ref="picFour" @change="imgSelected(nine)" accept="image/*" />
				<img v-if="nine.preview" class="preview" :src="nine.preview" alt="" />
				<svg v-if="nine.preview !== '' " class="iconfont delete" aria-hidden="true" @click="clear(nine)">
				    <use xlink:href="#icon-trash"></use>
				</svg>
			</div>
			<mu-raised-button label="选择图片" class="upload" @click="toSelect(nine)"/>
			
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
			five: {
				inp: 'picFive',
				preview: '',
			},
			six: {
				inp: 'picSix',
				preview: '',
			},
			seven: {
				inp: 'picSeven',
				preview: '',
			},
			eight: {
				inp: 'picEight',
				preview: '',
			},
			nine: {
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
			let size = 0;
			if (this.nine.preview) size++;
			if (this.five.preview) size++;
			if (this.six.preview) size++;
			if (this.seven.preview) size++;
			if (this.eight.preview) size++;
			
			if (size >= 3) {
				const imgFive = this.five.preview ? this.$refs[this.five.inp].files[0] : undefined
				const imgSix = this.six.preview ? this.$refs[this.six.inp].files[0] : undefined
				const imgSeven = this.seven.preview ? this.$refs[this.seven.inp].files[0] : undefined
				const imgEight = this.eight.preview ? this.$refs[this.eight.inp].files[0] : undefined
				const imgNine = this.nine.preview ? this.$refs[this.nine.inp].files[0] : undefined
				
				const imgs = {
					imgFive,
					imgSix,
					imgSeven,
					imgEight,
					imgNine, 
				}
				
				
				this.$store.dispatch('merchantImageUpload', imgs)
			} else{
				notice('请至少选择3张图片')
			}
			
			
		},
		back () {
			this.$emit('stepChange', 2)
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
	margin-top: 0.266666rem;
	margin-bottom: 0.533333rem;
	margin-left: auto;
	margin-right: auto;
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
.merchant-img-five{
	background-image: url('@{image}/promote-register/merchant-five.jpg');
}
.merchant-img-six{
	background-image: url('@{image}/promote-register/merchant-six.jpg');
}
.merchant-img-seven{
	background-image: url('@{image}/promote-register/merchant-seven.jpg');
}
.merchant-img-eight{
	background-image: url('@{image}/promote-register/merchant-eight.jpg');
}
.merchant-img-nine{
	background-image: url('@{image}/promote-register/merchant-nine.jpg');
}
.title{
	line-height: 1.6rem;
	font-size: 0.4rem;
	margin-top: 0.533333rem;
}
.title-text{
	display: inline-block;
	width: 8.666666rem;
	line-height: 2;
	margin-left: 0.133333rem;
}
.line{
	display: inline-block;
	width: 0.08rem;
	height: 0.453333rem;
	border-radius: 0.04rem;
	background-color: #ff6d33;
	margin-left: 0.453333rem;
	vertical-align: 0.693333rem;
}
.item{
	background-color: #FFFFFF;
	overflow: hidden;
	margin-bottom: 0.266666rem;
	box-shadow: 0 2px 7px rgba(0,0,0,.15);
}


</style>