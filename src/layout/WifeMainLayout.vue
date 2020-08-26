<template>
  <div class="wife">
    <global-header/>
    <main-container/>
    <global-footer/>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
import MainContainer from '@/components/MainContainer'

export default {
  name: "WifeMainLayout",
  components: {
    GlobalFooter,
    GlobalHeader,
    MainContainer
  }
}
</script>

<style scoped>
</style>
