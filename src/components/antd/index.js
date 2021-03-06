import Vue from 'vue'

import {
  Menu,
  Icon,
  Modal,
  Card,
  List,
  Button,
  Input,
  notification,
  message
} from 'ant-design-vue'

Vue.use(Menu)
Vue.use(Icon)
Vue.use(Modal)
Vue.use(List)
Vue.use(Card)
Vue.use(Button)
Vue.use(Input)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning

import Dialog from "@/components/Dialog";
Vue.use(Dialog)
