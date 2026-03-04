<template>
  <div
    class="previewImages Gridlayout"
    v-if="imageHook.previewImages.length > 0"
  >
    <div v-for="item in imageHook.previewImages">
      <div
        class="previewImage"
        v-on:mouseover="onPreview(item.id)"
        v-on:mouseleave="leavePreview(item.id)"
        @click="clickPreview(item.id)"
      >
        <div class="shadow"></div>
        <img :src="item.data" alt="preview" class="previewImage" />
        <el-icon
          :size="15"
          color="white"
          class="deleteButton"
          v-if="item.id === hoverPreview"
          @click="deletePreview(item.id)"
        >
          <i-ep-CloseBold></i-ep-CloseBold>
        </el-icon>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { imageHook } from "@/components/Hooks/web/ImageHook";
import { ref } from "vue";
const hoverPreview = ref<string>("");
const emit = defineEmits<{
  (e: "clickPreview", payload: File): void;
}>();
const onPreview = (id: string) => {
  hoverPreview.value = id;
};
const leavePreview = (id: string) => {
  hoverPreview.value = "";
};
const deletePreview = (id: string) => {
  imageHook.removePreviewImageURL(id);
};

const clickPreview = (id: string) => {
  const image = imageHook.getImage(id, imageHook.images);
  if (image == undefined || !(image.data instanceof File)) return;
  imageHook.viewerImage.value = image.data;
};
</script>
<style scoped>
.viewer {
  width: 90vw;
  height: 90vh;
  z-index: 20;
}
.previewImages {
  width: 100%;
  gap: 5px;
  height: auto;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
}
.previewImage {
  position: relative;
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
}
.deleteButton {
  position: absolute;
  top: -5%;
  right: -5%;
  background-color: rgb(75, 73, 73);
  color: white;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 100%;
  transition: 0.2s scale;
  z-index: 10;
}
.deleteButton:hover {
  transform: scale(1.1);
}
.shadow {
  position: absolute;
  top: 0%;
  border-radius: 10px;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(73, 72, 72, 0);
  z-index: 5;
  transition: background-color 0.3s ease;
}
.shadow:hover {
  background-color: rgba(73, 72, 72, 0.564);
}
</style>
