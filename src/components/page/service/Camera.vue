<template>
	<div class="camera-container">
		<video ref="video" id="video" autoplay=""style='width:100%;height:100%'></video>  
		
		<canvas ref="canvas" id="" width="100vw" height="100vh"></canvas>
		
	</div>
</template>

<script>

export default {
	data () {
		return {
			
		}
	},
	computed:{
		video () {
			return this.$refs.video
		},
		canvas () {
			return this.$refs.canvas
		}
	},
	mounted () {
		console.log(this.video)
		const video = this.video
		const canvas = this.canvas
		
		
		var promisifiedOldGUM = function(constraints) {
		
		  // First get ahold of getUserMedia, if present
		  var getUserMedia = (navigator.getUserMedia ||
		      navigator.webkitGetUserMedia ||
		      navigator.mozGetUserMedia);
		
		  // Some browsers just don't implement it - return a rejected promise with an error
		  // to keep a consistent interface
		  if(!getUserMedia) {
		    return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
		  }
		
		  // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
		  return new Promise(function(resolve, reject) {
		    getUserMedia.call(navigator, constraints, resolve, reject);
		  });
				
		}
		
		// Older browsers might not implement mediaDevices at all, so we set an empty object first
		if(navigator.mediaDevices === undefined) {
		  navigator.mediaDevices = {};
		}
		
		// Some browsers partially implement mediaDevices. We can't just assign an object
		// with getUserMedia as it would overwrite existing properties.
		// Here, we will just add the getUserMedia property if it's missing.
		if(navigator.mediaDevices.getUserMedia === undefined) {
		  navigator.mediaDevices.getUserMedia = promisifiedOldGUM;
		}
		
		var front = true;
		// Prefer camera resolution nearest to 1280x720.
		var constraints = { video: true };
		
		navigator.mediaDevices.getUserMedia(constraints)
		.then(function(stream) {
		  var video = document.querySelector('video');
		  video.src = window.URL.createObjectURL(stream);
		  video.onloadedmetadata = function(e) {
		    video.play();
		  };
		})
		.catch(function(err) {
		  console.log(err.name + ": " + err.message);
		  alert('打开摄像头失败！')
		});
		
		/*const constraints = {
			video: { facingMode: { exact: "environment" } }
		}
		
		navigator.mediaDevices.getUserMedia(constraints)
		.then(function(mediaStream) { 
			alert('打开摄像头成功')
			
		})
		.catch(function(error) { 
			alert('打开摄像头失败')
		})*/
				
		/*var errocb=function(){  
           alert('打开摄像头失败')
        }  
		
		if(navigator.getUserMedia){  
            navigator.getUserMedia({"video":true},function(stream){  
                video.src=stream;  
                video.play();  
            },errocb);  
        }else if(navigator.webkitGetUserMedia){  
            navigator.webkitGetUserMedia({"video":true},function(stream){  
                video.src=window.webkitURL.createObjectURL(stream);  
                video.play();  
            },errocb);  
        } */
	}
}

</script>

<style scoped="scoped">
	
.camera-container{
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
}


</style>