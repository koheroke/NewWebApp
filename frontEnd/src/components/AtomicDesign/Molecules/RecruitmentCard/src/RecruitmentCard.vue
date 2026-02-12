<template>
  <div class="parent">
    <div class="Gridlayout gap">
      <Label :label="props.name"></Label>
      <Label :label="props.time"></Label>
      <Button title="詳細" class="simplicityButton right-align-start"></Button>
      <Button title="参加表明" class="defaultButton"></Button>
    </div>
    <div class="Gridlayout tags gap">
      <div v-for="tag in props.tag" :key="tag" class="tag">
        <Label :label="tag"></Label>
      </div>
      <Label
        :label="props.people + '人'"
        class="people right-align-start"
      ></Label>
    </div>
  </div>
</template>
<style scoped>
.parent {
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.people {
  padding: 0 10px;
}
.tags {
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}
.tag {
  background-color: rgb(237, 236, 236);
  border-radius: 10px;
  padding: 2px 5px;
}
.gap {
  gap: 10px;
  width: 80vw;
  padding: 10px;
}
.simplicityButton {
  background-color: rgb(237, 236, 236);
  border-radius: 0%;
  &:hover {
    background-color: rgb(246, 244, 244);
  }
}
</style>
<script lang="ts" setup>
import Button from "@/components/AtomicDesign/Atoms/Button/Button";
import Label from "@/components/AtomicDesign/Atoms/Label/Label";
import type { RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard";
const props = defineProps<RecruitmentCardType>();
</script>
