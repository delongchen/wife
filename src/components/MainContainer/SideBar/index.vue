<template>
  <aside>
    <h1 style="color: #2c3e50; text-align: center">{{ TEXTS.title }}
      <button @click="sw" style="color: #2c3e50">col</button>
    </h1>
    <text-list :collapsed="showList"/>
  </aside>
</template>

<script>
import TextList from "./TextList";
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "SideBar",
  components: {
    TextList
  },
  methods: {
    ...mapActions('textService', ['GetTexts']),
    sw() {
      this.showList = !this.showList
    }
  },
  computed: {
    ...mapGetters('textService', ['TEXTS'])
  },
  data() {
    return {
      showList: false
    }
  }
}
</script>

<style scoped>
  aside {
    float: left;
    height: 100%;
    width: 20%;
    text-align: left;
  }
</style>
