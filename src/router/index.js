import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter)

import WifeMainLayout from "@/layout/WifeMainLayout";

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: WifeMainLayout
    }
  ]
})
