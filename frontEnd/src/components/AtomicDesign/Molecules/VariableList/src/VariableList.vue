<template>
  <div class="parent Gridlayout">
    <div v-for="tag in tagData" :key="tag">
      <div class="tags">{{ tag }}</div>
    </div>
    <Button :title="title" class="defaultButton" @click="onButton"></Button>
  </div>
</template>
<script lang="ts" setup>
import Button from "@A/Atoms/Button/Button.ts";
const props = defineProps<{
  title: string;
  click: () => void;
}>();
const tagData = defineModel();
const onButton = () => {
  props.click();
};
</script>
<style scoped>
.parent {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: white;
}
.tags {
  background: linear-gradient(to right, #ff7e5f, #feb47b) !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
