<template>
  <div class="text-content">
    <h1>{{ NODE.title }}</h1>
    <p>{{ NODE.content }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "index",
  components: {
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
