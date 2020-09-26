<template>
  <div>
    <a-button type="dashed" style="width: 100%" icon="plus">add</a-button>
  </div>
</template>

<script>
import ModalContent from "@/components/TestPage/DescriptionList/ModalContent";

export default {
  name: "DesTools",
  methods: {
    add() {
      this.$dialog(ModalContent,
        {

        },
        {
          title: 'new',
          width: 700,
          centered: true,
          maskClosable: false
        })
    }
  }
}
</script>

<style scoped>

</style>