<template>
  <div class="card">
    <div class="list">
      <div class="topArea Gridlayout">
        <Label :label="boxProps.clientMessageId"></Label>
        <Label :label="data"></Label>
      </div>
      <div class="content">
        <Textbox :text="boxProps.content"></Textbox>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Label from "@/components/AtomicDesign/Atoms/Label/src/Label.vue";
import Textbox from "@/components/AtomicDesign/Atoms/Textbox/src/Textbox.vue";
import { ref } from "vue";
import { type postBox } from "@/components/Interfaces/web/post";
const boxProps = defineProps<postBox>();
const data = ref(String(boxProps.createdAt));
</script>
<style scoped>
.card {
  padding: 10px;
  background-color: white;
  border-radius: 10px;
}
</style>
