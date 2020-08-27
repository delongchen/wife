<template>
  <aside>
    <h1 style="color: white; text-align: center">What is FE
    <button @click="sw" style="color: #2c3e50">switch</button>
    </h1>
    <text-list :collapsed="showList"/>
  </aside>
</template>

<script>
import TextList from "./TextList";
import { mapActions } from 'vuex'

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
  data() {
    return {
      showList: false
    }
  }
}
</script>

<style scoped>
  aside {
    background: #2c3e50;
    color: white;
    float: left;
    height: 100%;
    width: 20%;
    text-align: left;
  }
</style>
