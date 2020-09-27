<template>
  <main>
    <side-bar/>
    <article>
      <div class="d-container">
        <router-view/>
      </div>
    </article>
  </main>
</template>

<script>
import SideBar from './SideBar'

export default {
  name: "MainContainer",
  components: {
    SideBar
  }
}
</script>

<style scoped>
main {
  width: 100%;
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
}

article {
  margin-left: 20%;
  height: 100%;
}

.d-container {
  background: white;
  margin-left: 20%;
  margin-right: 20%;
  height: 100%
}
</style>
