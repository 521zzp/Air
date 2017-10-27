<template>
	<div class="chat-component-wrap" :class="{ 'operate-show': operateShow }">
		<div class="chat-component">
			<svg class="iconfont operate more" aria-hidden="true" @click.stop="showOperate">
			    <use xlink:href="#icon-add1"></use>
			</svg>
			<textarea class="input-content" v-model="msg" ></textarea>
			<svg class="iconfont operate fr send" aria-hidden="true" @click="send">
			    <use xlink:href="#icon-send"></use>
			</svg>
		</div>
		<div class="more-operate">
			<div class="album">
				<input type="file" name="ss" id="ss"accept="image/png,image/jgpe,image/jpg,image/gif" @change="imgSelected" style="display: none;"/>
				<label for="ss" class="album">
					<img src="../../../assets/customerServer/album.png"/>
					<span>发送图片</span>
				</label>
			</div>
			<!--<div class="camera">
				<img src="../../../assets/customerServer/camera.png"/>
				<span>使用相机拍照</span>
			</div>-->
		</div>
		<!--<Camera />-->
	</div>
</template>

<script>
//import Camera from './Camera'
import { notice } from '@/tool/talk'

export default {
	props: [ 'operateShow' ],
	data () {
		return {
			msg: '',
			
		}
	},
	methods: {
		send (){
			console.log(5)
			if (this.msg !== '') {
				this.$emit('send', this.msg)
			}
			this.msg  = ''
		},
		showOperate (e) {
			if (this.operateShow) {
				this.$emit('operateSwitch', false)
			} else{
				this.$emit('operateSwitch', true)
			}
			
		},
		imgSelected (e) {
			notice('图片选择')
			const vm = this
			console.log(e)
			console.log(e.target)
			console.log(e.target.files[0])
			const file = e.target.files[0]
			this.$emit('uploadImage', file)			
		}
	},
	components: {
		//Camera
	}
}
</script>

<style scoped="scoped">
	
.send{
	margin-right: 0.24rem;
	margin-top: 0.4rem;
}
.album>span, .camera>span{
	display: block;
	text-align: center;
}
.album>img, .camera>img{
	width: 100%;
}
.album, .camera{
	width: 2.666666rem;
	height: 2.666666rem;
}
.operate{
	width: 0.8rem;
	height: 0.8rem;
	color: #999999;
}
.more-operate{
	height: 4.8rem;
	background-color: #FFFFFF;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.chat-component-wrap{
	height: 1.6rem;
	position: fixed;
	bottom: 0;
	width: 100%;
	transition: all .3s ease;
}
.chat-component-wrap.operate-show{
	height: 6.4rem;
}
.chat-component{
	background-color: #FFFFFF;
	height: 1.6rem;
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
.more{
	margin-left: 0.16rem;
	margin-top: 0.4rem;
	float: left;
}
</style>