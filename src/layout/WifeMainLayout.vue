<template>
  <div class="wife">
    <global-header/>
    <main-container/>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
//import GlobalFooter from '@/components/GlobalFooter'
import MainContainer from '@/components/MainContainer'

export default {
  name: "WifeMainLayout",
  components: {
    GlobalHeader,
    MainContainer,
  }
}
</script>

<style scoped>
</style>
