<template>
  <div>
    {{ content }}
  </div>
</template>

<script>
export default {
  name: "ShowArea",
  props: {
    content: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>

</style>
