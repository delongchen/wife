import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {textService} from "@/store/module/text";

export default new Vuex.Store({
  modules: {
    textService
  }
})
