import store from '@/store'

export function boot() {
  store.dispatch('textService/GetTexts')
    .then(() => {
      console.log('booted')
    })
}
