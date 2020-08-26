<template>
  <main>
    <aside>aside</aside>
    <article>
      <div style="margin-left: 20%; margin-right: 20%">
        <router-view/>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  name: "MainContainer"
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

aside {
  background: #2c3e50;
  float: left;
  height: 100%;
  width: 20%;
}

article {
  background: aqua;
  margin-left: 20%;
  height: 100%;
}
</style>
