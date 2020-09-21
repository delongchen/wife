<template>
  <div class="text-content">
    <h1>{{ NODE.title }}</h1>
    <p>{{ NODE.content }}</p>
    <button @click="add"><h1>click</h1></button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "TestPage",
  components: {},
  data() {
    return {
      count: 1
    }
  },
  computed: {
    ...mapGetters('textService', ['NODE'])
  },
  methods: {
    add() {
      this.$db.add([
        {id: 'test', title: 1},
        {id: 'test', title: 2},
      ]).then(() => {
        console.log('okkk')
      }).catch(reason => {
        console.log(reason.target.error)
      })
    }
  }
}
</script>

<style scoped>
.text-content {
}
</style>
