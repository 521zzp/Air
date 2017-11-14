<template>
	<div class="step-two-container">
		<Step :step="step"/>
		<StepOne v-if="step === 1" @stepChange="stepChange"/>
		<StepTwo v-if="step === 2" @stepChange="stepChange"/>
		<StepThree v-if="step === 3"/>
	</div>

</template>

<script>
import { notice } from '@/tool/talk'
import Step from '@/components/pure/general/register/Step'
import StepOne from '@/components/pure/general/register/StepOne'
import StepTwo from '@/components/pure/general/register/StepTwo'
import StepThree from '@/components/pure/general/register/StepThree'

export default {
	data () {
		return {
			picOnePath: '',
		}
	},
	computed: {
		account () {
			return this.$store.state.promoteRegister.params.account
		},
		step () {
			return this.$store.state.promoteRegister.step
		}
	},
	mounted () {
		const type =  this.$route.params.type
		const invitor = this.$route.query.invitor
		if (!this.account) {
			this.$router.push(`/promote-register/${type}?invitor=${invitor}`)
		}
	},
	methods: {
		stepChange (step) {
			this.$store.dispatch('promoteStepChange', step)
		}
	},
	components:{
		Step,
		StepOne,
		StepTwo,
		StepThree,
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