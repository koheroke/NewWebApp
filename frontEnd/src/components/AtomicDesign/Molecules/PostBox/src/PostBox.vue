<template>
  <div class="card">
    <div class="list">
      <div class="topArea Gridlayout">
        <el-icon :size="25" color="white" class="userIcon">
          <i-ep-UserFilled></i-ep-UserFilled>
        </el-icon>
        <Label :label="boxProps.clientMessageId"></Label>
        <Label :label="data"></Label>
      </div>
      <div class="content left-align-start">
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
  padding: 10px 20px;
  background-color: white;
  border-radius: 10px;
}
.Gridlayout {
  gap: 10px !important;
}
.userIcon {
  background-color: rgb(0, 0, 0);
  border-radius: 3px;
}
</style>
