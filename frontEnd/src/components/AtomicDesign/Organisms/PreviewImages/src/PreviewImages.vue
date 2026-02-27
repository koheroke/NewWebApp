<template>
  <div class="previewImages Gridlayout">
    <div v-for="index in imageHook.previewImages">
      <img :key="index.id" :src="index.data" alt="preview" class="image" />
      <el-icon
        :size="10"
        color="white"
        class="deleteButton"
        @click="deletePreview(index.id)"
      >
        <i-ep-CloseBold></i-ep-CloseBold>
      </el-icon>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { imageHook } from "@/components/Hooks/web/ImageHook";
const deletePreview = (id: string) => {
  console.log("id", id);
  imageHook.removePreviewImageURL(id);
};
</script>
<style scoped>
.previewImages {
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  gap: 5px;
  height: auto;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: white;
}
.image {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
}
.deleteButton {
  position: absolute;
  background-color: rgb(255, 0, 0);
  border: 1px solid black;
  border-radius: 100%;
  transition: 0.2s Scale;
  z-index: 10;
}
.deleteButton:hover {
  transform: scale(1.1);
}
</style>
