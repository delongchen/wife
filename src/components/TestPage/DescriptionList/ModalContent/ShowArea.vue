<template>
  <div>
    <div v-html="content"></div>
    <button @click="p">p</button>
    <div id="prism-container"></div>
  </div>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: "ShowArea",
  props: {
    content: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      container: null
    }
  },
  methods: {
    p() {

    }
  },
  watch: {
    content() {
      Prism.highlightAllUnder(this.container)
    }
  },
  mounted() {
    this.container = document.getElementById('prism-container')
  }
}
</script>

<style scoped>

</style>
