<template>
	
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    
    <router-link to="/" class="link">Hello</router-link>
	<router-link to="/home" class="link">Home</router-link>	
	<router-link to="/inner" class="link">Inner</router-link>
<router-link to="/register" class="link">register</router-link>
  </div>
 
</template>

<script>
import { Group, Cell, CellFormPreview, XInput, XNumber, Step, StepItem, XButton, XHr} from 'vux'

export default {
  name: 'hello',
  data () {
    return {
      nca: '',
      msg: 'Welcome to Your Vue.js App',
      name: '山无陵',
      age: '',
      phone: '',
      number: '',
      pickerValue: '',
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }],
      step1: 1,
      step2: 0
    }
  },
  methods: {
    nextStep () {
      this.step2 ++
    },
    openPicker() {
      this.$refs.picker.open();
    },
    testVali () {
    	return { valid: false, msg: '仅仅支持天国的手机号' }
    }
  },
  components: {
  	Group,
  	Cell, 
  	CellFormPreview,
  	XInput,
  	XNumber,
  	Step,
    StepItem,
    XButton,
    XHr
  }
}
</script>

<style type="text/css">
	.vux-step-item-title{
		font-size: 0.226666rem !important;
	}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.link{
		font-size: 0.666666rem;
		display: block;
	}
.btn_wrap {
  padding: 0 1rem;
  margin-top: 2rem;
}
</style>
