// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'whatwg-fetch' //兼容IE fetch
import '@/config/theme.less'
import {dateFormat} from '@/tool/date'
import '@/tool/flexible.js'
import '@/config/icon/iconfont.js'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)


import MuseUI from 'muse-ui'
Vue.use(MuseUI)

import { Button, Cell, DatetimePicker  } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component('mt-button', Button)
Vue.component('mt-cell', Cell)
Vue.component(DatetimePicker.name, DatetimePicker)



dateFormat(); //给日期添加格式化方法

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
