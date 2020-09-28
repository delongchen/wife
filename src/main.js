import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import {VueAxios} from "@/utils/request";
import MyDb from '@/core/db'
import '@/components/antd'
import {boot} from "@/core/boot";

Vue.config.productionTip = false

Vue.use(VueAxios)
Vue.use(MyDb)

new Vue({
  render: h => h(App),
  router,
  store,
  created: boot,
}).$mount('#app')
