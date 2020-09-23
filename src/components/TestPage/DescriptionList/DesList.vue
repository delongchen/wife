<template>
  <a-card style="margin-top: 24px;" :bordered="false">
    <a-list
      size="large"
      itemLayout="vertical"
      :data-source="li"
    >

    </a-list>
  </a-card>
</template>

<script>
export default {
  name: "DesList",
  props: {
    li: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>