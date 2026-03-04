<template>
  <div class="viewer recativeCenter list">
    <div class="Gridlayout">
      <Label :label="image?.name" class="left-align-start"></Label>
      <el-icon
        :size="22"
        color="gray"
        class="CloseBold right-align-start"
        @click="close"
      >
        <i-ep-CloseBold> </i-ep-CloseBold>
      </el-icon>
    </div>
    <img :src="viewerImage" alt="viewer" class="image" />
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onUnmounted } from "vue";
import Label from "@A/Atoms/Label/src/Label.vue";
import { imageHook } from "@/components/Hooks/web/ImageHook";
const props = defineProps<{
  image: File | undefined;
}>();
const viewerImage = ref<string | undefined>();
watch(
  () => props.image,
  (newVal) => {
    if (viewerImage.value) {
      URL.revokeObjectURL(viewerImage.value);
    }
    if (newVal) {
      viewerImage.value = URL.createObjectURL(newVal);
    } else {
      viewerImage.value = undefined;
    }
  },
  { immediate: true },
);
onUnmounted(() => {
  if (viewerImage.value) {
    URL.revokeObjectURL(viewerImage.value);
  }
});
const close = () => {
  viewerImage.value = undefined; //別物
  imageHook.viewerImage.value = undefined; //
};
</script>
<style scoped>
.viewer {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255) !important;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.image {
  height: 90%;
  width: auto;
}
.Gridlayout {
  width: 100%;
}
.CloseBold:hover {
  background-color: rgba(0, 0, 0, 0.283);
  border-radius: 5px;
}
</style>
