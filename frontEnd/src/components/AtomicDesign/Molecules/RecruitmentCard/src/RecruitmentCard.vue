<template>
  <div class="parent">
    <div class="Gridlayout gap upperPart">
      <Label :label="props.recruitmentListData.name"></Label>
      <Label :label="props.recruitmentListData.time"></Label>
      <Button title="詳細" class="simplicityButton right-align-start"></Button>
      <Button
        :title="props.recruitmentListData.ButtonTitile"
        class="defaultButton gradient shimmerEffect"
        @click="onJoinButton(props.recruitmentListData.id)"
      ></Button>
    </div>
    <div class="Gridlayout gap tags bottom">
      <div v-for="tag in props.recruitmentListData.tag" :key="tag" class="tag">
        <Label :label="tag"></Label>
      </div>
      <Label
        :label="props.recruitmentListData.people + '人'"
        class="people right-align-start"
      ></Label>
    </div>
  </div>
</template>
<style scoped>
.shimmerEffect:hover::before {
  animation: shimmer 0.6s ease-out;
}
.upperPart {
  padding: 20px;
}
.bottom {
  padding: 10px 20px;
  gap: 10px;
}

.parent {
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  transition: transform 0.2s;
}

.parent:hover {
  transform: scale(1.1) translateY(-10px);
  box-shadow: 0 5px 25px -2px rgba(79, 172, 254, 0.4);
}
.tag {
  background-color: rgb(239, 240, 241);
  border-radius: 5px;
  padding: 2px 3px;
  font-size: 15px;
}
.gap {
  width: 80vw;
}
.simplicityButton {
  color: rgb(95, 95, 95);
  border-radius: 0%;
  &:hover {
    background-color: rgb(246, 244, 244);
  }
}
</style>
<script lang="ts" setup>
import Button from "@A/Atoms/Button/Button";
import Label from "@A/Atoms/Label/Label";
import type { cardInList } from "@/components/Interfaces/web/recruitmentCard";
const props = defineProps<{
  clickJoinButton: (id: string, buttontitile: string) => void;
  recruitmentListData: cardInList;
}>();
const onJoinButton = (id: string) => {
  props.clickJoinButton(id, props.recruitmentListData.ButtonTitile);
};
</script>
