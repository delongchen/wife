<template>
  <div class="text-content">
    <h1>{{ NODE.title }}</h1>
    <p v-if="NODE.content">{{ NODE.content }}</p>
    <p v-else>no content</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "index",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('textService', ['NODE'])
  }
}
</script>

<style scoped>
.text-content {
}
</style>
