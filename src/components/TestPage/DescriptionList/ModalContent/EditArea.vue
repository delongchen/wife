<template>
  <div>
    <a-textarea @change="changeHandler"/>
  </div>
</template>

<script>
import marked from 'marked'
import debounce from 'lodash/debounce'

export default {
  name: "EditArea",
  model: {
    prop: 'content',
    event: 'change'
  },
  props: {
    content: String
  },
  methods: {
    changeHandler(ev) {
      this.$emit('change', marked(ev.target.value))
    }
  },
  created() {
    this.changeHandler = debounce(this.changeHandler, 1000)
  }
}
</script>

<style scoped>

</style>
