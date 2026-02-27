<template>
  <div class="elements Gridlayout">
    <div
      v-for="element in localElements"
      :key="element.id"
      @click="onElement(element)"
    >
      <component :is="buttonComponent" v-bind="element"></component>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
interface element {
  title: string;
  id: string;
  buttonBool?: boolean;
}

const localElements = ref<element[]>([]);
const props = defineProps<{
  elements: element[];
  buttonComponent: string | any;
  onClick?: (element: string) => void;
}>();

props.elements.map((element) => ({
  ...element,
  ...{ buttonBool: false },
}));
const selectedValue = defineModel<string>();
watch(
  () => props.elements,
  (newVal) => {
    localElements.value = newVal.map((el) => ({
      ...el,
      buttonBool: el.id === selectedValue.value,
    }));
  },
  { immediate: true, deep: true },
);
const onElement = (element: element) => {
  selectedValue.value = element.id;
  localElements.value.forEach((el) => {
    el.buttonBool = el.id === element.id;
  });
  if (props.onClick) props.onClick(element.id);
};
</script>

<style scoped>
.Gridlayout {
  width: auto;
  height: auto;
  box-sizing: border-box;
}
</style>
