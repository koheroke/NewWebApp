<template>
  <div class="topbar Gridlayout gradient">
    <Label :label="title" class="title"></Label>
    <el-icon :size="20" color="white" class="content right-align-start">
      <i-ep-UserFilled></i-ep-UserFilled>
    </el-icon>
    <Label :label="people + '人'"></Label>
  </div>
</template>
<script lang="ts" setup>
import Label from "@A/Atoms/Label/Label";
const props = defineProps<{
  title?: string;
  people?: number;
}>();
</script>
<style scoped>
.topbar {
  padding: 10px 20px;
  height: auto;
  gap: 10px;
}
</style>
