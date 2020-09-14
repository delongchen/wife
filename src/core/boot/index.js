import store from '@/store'

export function boot() {
  store.dispatch('textService/GetTexts')
    .then(value => {
      store.commit('textService/SET_TEXTS', value)
      console.log('booted')
    })
}
