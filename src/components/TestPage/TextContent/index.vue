<template>
  <div>
    {{ node }}
  </div>
</template>

<script>
export default {
  name: "TextContent",
  props: {
    node: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
