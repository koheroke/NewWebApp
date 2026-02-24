<template>
  <div class="elements Gridlayout">
    <div
      v-for="element in elements"
      :key="element.id"
      class="defaultButton"
      @click="onElement(element.id)"
      :class="{ 'doClick selected': selectedValue === element.id }"
    >
      <Button :title="element.name"></Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "@A/Atoms/Button/Button.ts";
const props = defineProps<{
  elements?: { name: string; id: string }[];
  onClick?: (element: string) => void;
}>();
const selectedValue = defineModel<string>();

const onElement = (element: string) => {
  selectedValue.value = element;
  if (props.onClick) props.onClick(element);
};
</script>
<style scoped>
.defaultButton {
  background-color: #ffffffd5;
  color: black;
  border-radius: 0%;
  border-radius: 5px;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
}
.defaultButton.selected {
  background: linear-gradient(135deg, #3398f0 0%, #00f2fe 100%);
  color: white;
  font-weight: bold;
}
.Gridlayout {
  gap: 0px;
}
</style>
