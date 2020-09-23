<template>
  <div class="text-content">
    <h1>{{ NODE.title }}</h1>
    <p>{{ NODE.content }}</p>
    <description-list :li="NODE.descriptions"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import DescriptionList from './DescriptionList'

export default {
  name: "TestPage",
  components: {
    DescriptionList
  },
  data() {
    return {
      count: 1
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
