<template>
  <div>
    <des-tools/>
    <des-list v-if="li && li.length !== 0" :li="li"/>
  </div>
</template>

<script>
import DesList from "@/components/TestPage/DescriptionList/DesList";
import DesTools from "@/components/TestPage/DescriptionList/DesTools";

export default {
  name: "DescriptionList",
  components: {
    DesList,
    DesTools
  },
  props: {
    li: {
      required: true
    }
  }
}
</script>

<style scoped>

</style>