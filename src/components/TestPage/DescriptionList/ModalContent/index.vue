<template>
  <div class="modal-content">
    <edit-area class="edit-area" v-model="content"/>
    <show-area class="show-area" :content="content"/>
  </div>
</template>

<script>
import EditArea from "@/components/TestPage/DescriptionList/ModalContent/EditArea";
import ShowArea from "@/components/TestPage/DescriptionList/ModalContent/ShowArea";

export default {
  name: "ModalContent",
  components: {
    EditArea,
    ShowArea
  },
  data() {
    return {
      content: ""
    }
  }
}
</script>

<style scoped>
.modal-content {
  display: flex;
}
.edit-area {

}
.show-area {
  flex: 1
}
</style>
