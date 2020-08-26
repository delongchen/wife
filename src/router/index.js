import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter)

import WifeMainLayout from "@/layout/WifeMainLayout";
import TestPage from '@/components/TestPage'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: WifeMainLayout,
      redirect: '/test',
      children: [
        {
          path: '/test',
          component: TestPage
        }
      ]
    }
  ]
})
