<template>
  <div v-for="element in elements">
    <component
      :is="cardComponent"
      v-bind="element"
      @clock="componentClick(element)"
    ></component>
  </div>
</template>
<script lang="ts" setup>
import { type Component } from "vue";
interface element {
  id: string;
  name: string;
}
const props = defineProps<{
  slideBool: boolean;
  cardComponent: Component;
  elements: element[];
  onclick: (id: string) => void;
}>();
const componentClick = (element: element) => {
  props.onclick(element.id);
};
</script>
<style scoped></style>
