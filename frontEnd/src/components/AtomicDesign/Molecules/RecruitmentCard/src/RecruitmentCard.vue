<template>
  <div class="Gridlayout parent gap">
    <Label :label="props.name"></Label>
    <Label :label="props.time"></Label>
    <Label :label="props.people"></Label>
    <Button title="詳細" class="defaultButton right-align-start"></Button>
    <Button title="参加表明" class="defaultButton"></Button>
  </div>
  <div class="Gridlayout tags gap">
    <Label label="タグ:"></Label>
    <div v-for="tag in props.tag" :key="tag">
      <Label :label="tag"></Label>
    </div>
  </div>
</template>
<style scoped>
.parent {
  align-items: center;
  background-color: beige;
}
.tags {
  padding: 10px;
  background-color: rgb(245, 245, 232);
}
.gap {
  gap: 10px;
  width: 80vw;
  padding: 10px;
}
</style>
<script lang="ts" setup>
import Button from "@/components/AtomicDesign/Atoms/Button/Button.ts";
import Label from "@/components/AtomicDesign/Atoms/Label/Label";
import type recruitmentCard from "@/components/Interfaces/web/recruitmentCard";
const props = defineProps<recruitmentCard>();
</script>
