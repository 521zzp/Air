<template>
	<div class="step-two-container">
		<Step :step="step"/>
		<MerchantStepOne v-if="step === 1" @stepChange="stepChange"/>
		<MerchantStepTwo v-if="step === 2" @stepChange="stepChange"/>
		<!--<MerchantStepThree v-if="step === 3" @stepChange="stepChange"/>-->
		<StepThree v-if="step === 3" />
	</div>
</template>


<script>

//import MerchantStep from '@/components/pure/general/register/MerchantStep'
import Step from '@/components/pure/general/register/Step'

import MerchantStepOne from '@/components/pure/general/register/MerchantStepOne'
import MerchantStepTwo from '@/components/pure/general/register/MerchantStepTwo'
//import MerchantStepThree from '@/components/pure/general/register/MerchantStepThree'
import MerchantStepFour from '@/components/pure/general/register/MerchantStepFour'
import StepThree from '@/components/pure/general/register/StepThree'

export default {
	data () {
		return {
			
		}
	},
	computed:{
		account () {
			return this.$store.state.merchantRegister.params.account
		},
		step () {
			return this.$store.state.merchantRegister.step
		}
	},
	mounted () {
		const invitor = this.$route.query.invitor
		if (!this.account) {
			this.$router.push(`/merchant-register?invitor=${invitor}`)
		}
	},
	methods: {
		stepChange (step) {
			this.$store.dispatch('merchantStepChange', step)
		}
	},
	components: {
		Step,
		MerchantStepOne,
		MerchantStepTwo,
		/*MerchantStepThree,*/
		MerchantStepFour,
		StepThree,
	}
	
}
</script>

<style scoped="scoped" lang="less">

.step-two-container{
	background-color: #f0f0f3;
	min-height: 100vh;
}
</style>