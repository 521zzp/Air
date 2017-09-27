<template>
	<div>
		<video class="video" height="" ref="video" >
			<source :src="source" type="video/mp4"></source>
			
			<object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf" >
				<param name="movie" value="myvideo.swf" />
				<param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
			</object>
			当前浏览器不支持 video直接播放，点击这里下载视频： <a href="myvideo.webm">下载视频</a>
		</video>	
		
		<div class="control">
			<mu-raised-button label="播放/暂停" class="" secondary @click="playPause"/>
			<mu-raised-button label="声音+" class="" secondary @click="voiceChange('add')"/>
			<mu-raised-button label="声音-" class="" secondary @click="voiceChange"/>
		</div>
	</div>
</template>

<script>
import { IMG } from '@/config/url'


export default {
	data () {
		return {
			source: IMG + '/expand/video-player/魔道祖师 · 手书.mp4',
			//svideo: this.$refs.video
		}
	},
	computed: {
		video () {
			return this.$refs.video
		}
	},
	methods: {
		playPause () {
			console.log(this.video)
			if (this.video.paused) {
				this.video.play()
			} else{
				this.video.pause()				
			}
		},
		voiceChange (type) {
			console.log(this.video.volume)
			if (type === 'add') {
				if (this.video.volume < 0.95) {
					this.video.volume = this.video.volume + 0.05
				} else{
					this.video.volume = 1
				}
			} else{
				if (this.video.volume > 0.05) {
					this.video.volume = this.video.volume - 0.05
				} else{
					this.video.volume = 0
				}
				
			}
		}
	}
}

</script>

<style scoped="scoped">
.video{
	width: 100%;
}


</style>