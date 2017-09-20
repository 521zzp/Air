// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'whatwg-fetch' //兼容IE fetch
import '@/config/theme.less'


import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)


import MuseUI from 'muse-ui'
Vue.use(MuseUI)

import { Button, Cell, DatetimePicker  } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component('mt-button', Button)
Vue.component('mt-cell', Cell)
Vue.component(DatetimePicker.name, DatetimePicker)


import '@/tool/flexible.js'
import '@/config/icon/iconfont.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
