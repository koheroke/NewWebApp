<template>
  <div class="menu Gridlayout">
    <Label :label="props.title"></Label>
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
  </div>
</template>
<script lang="ts" setup>
import Button from "@/components/AtomicDesign/Atoms/Button/Button.ts";
import Label from "@/components/AtomicDesign/Atoms/Label/src/Label.vue";

const props = defineProps<{
  title?: string;
  elements?: { name: string; id: string }[];
}>();
const selectedValue = defineModel<string>();

const onElement = (element: string) => {
  selectedValue.value = element;
};
</script>
<style scoped>
.defaultButton {
  background-color: #eaeaea;
  color: black;
  border-radius: 0%;
  border-radius: 5px;
  &:hover {
    background-color: rgb(228, 226, 224);
  }
}
.elements {
  gap: 0;
}
.defaultButton.selected {
  background-color: #dc6f02;
  color: white;
  font-weight: bold;
}
</style>
