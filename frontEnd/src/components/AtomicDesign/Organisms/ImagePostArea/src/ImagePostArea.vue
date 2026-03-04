<template>
  <div
    class="dropArea recativeCenter"
    v-show="isDragging"
    @drop.prevent="onDrop"
  >
    <Label :label="title + 'に画像をドロップ'"></Label>
  </div>
</template>
<script lang="ts" setup>
import Label from "@A/Atoms/Label/Label";
import { ref, computed } from "vue";
import { imageHook, type postimage } from "@H/web/ImageHook";
const prop = defineProps<{
  title: string | undefined;
  dragBool: boolean;
}>();
const isDragging = computed(() => prop.dragBool);
const file = ref<postimage | null>(null);
const onDrop = (event: any) => {
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    file.value = {
      data: files[0],
      id: files[0].size + Math.floor(Math.random() * 900) + 100,
    };
    if (file.value != null) {
      imageHook.add(file.value);
    }
  }
};
</script>
<style scoped>
.dropArea {
  background-color: rgba(255, 255, 255, 0.416);
  position: absolute;
  top: 0vh;
  left: 0vw;
  width: 100vw;
  height: 100vh;
  z-index: 20;
}
</style>
