import dbService from './indexeddb'

export default {
  vm: {},
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $db: { get: () => dbService }
    })
  }
}
