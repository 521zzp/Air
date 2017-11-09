<template>
	<div class="step-two-container">
		<Step/>
		<StepOne v-if="step === 1"/>
		<StepTwo v-if="step === 2"/>
	</div>

</template>

<script>
import { notice } from '@/tool/talk'
import Step from '@/components/pure/general/register/Step'
import StepOne from '@/components/pure/general/register/StepOne'
import StepTwo from '@/components/pure/general/register/StepTwo'

export default {
	data () {
		return {
			picOnePath: '',
			step: 2,
		}
	},
	methods: {
		picOne (e) {
			e.preventDefault()
			console.log(e)
			console.log(e.target)
			const inp = e.target
			console.log(e.target.value)
			const file = e.target.files[0]
			console.log(file)
			
			if (file.size < 1024 * 1024) {
				var windowURL = window.URL || window.webkitURL;
				this.picOnePath = windowURL.createObjectURL(e.target.files[0]);
			} else{
				notice('图片过大')
				inp.value = ''
			}
			
		}
	},
	components:{
		Step,
		StepOne,
		StepTwo,
	}
}

</script>



<style scoped="scoped" lang="less">
@import url("../../../../config/base.less");

.step-two-container{
	background-color: #f0f0f3;
	min-height: 100vh;
}

</style>