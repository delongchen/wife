<template>
  <div class="text-content">
    <text-content v-if="NODE.children" :node="NODE"/>
    <no-text-content v-else/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TextContent from './TextContent'
import NoTextContent from './NoTextContent'

export default {
  name: "index",
  components: {
    TextContent,
    NoTextContent
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('textService', ['NODE'])
  },
  methods: {

  }
}
</script>

<style scoped>
.text-content {
}
</style>
