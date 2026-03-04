<template>
  <div
    class="page"
    @dragenter.prevent="onDragEnter"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop"
  >
    <ImagePostArea
      :title="schedules.title"
      :dragBool="dragBool"
      clickPreview
    ></ImagePostArea>
    <div
      class="ImageViewer absoluteCenter"
      v-if="imageHook.viewerImage.value != undefined"
    >
      <ImageViewer :image="imageHook.viewerImage.value"></ImageViewer>
    </div>
    <ChatTopBar v-bind="schedules"></ChatTopBar>
    <div class="main scroll-y">
      <div class="thread">
        <Thread :postdatas="postdatas"></Thread>
      </div>
    </div>
    <div class="buttom">
      <div style="width: 100%">
        <sendMessageBar v-bind="schedules"></sendMessageBar>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import sendMessageBar from "@A/Organisms/sendMessageBar/sendMessageBar";
import ImagePostArea from "@A/Organisms/ImagePostArea/ImagePostArea";
import Thread from "@A/Organisms/Thread/src/Thread.vue";
import { getAllData } from "@/testmodule/chat";
import { type postBox } from "@I/web/post";
import ChatTopBar from "@A/Organisms/ChatTopBar/src/ChatTopBar.vue";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import { RecruitmentCards } from "@H/api/useRecruitmentData";
import { imageHook } from "@/components/Hooks/web/ImageHook";
import ImageViewer from "@A/Organisms/ImageViewer/ImageViewer";
let dragCounter = 0;
const fromData = defineModel();
const dragBool = ref(false);
const onDragEnter = () => {
  dragCounter++;
  dragBool.value = true;
};
const onDragLeave = () => {
  dragCounter--;
  if (dragCounter <= 0) {
    dragCounter = 0;
    dragBool.value = false;
  }
};
const onDrop = () => {
  dragCounter = 0;
  dragBool.value = false;
};
const onDragOver = (e: DragEvent) => {
  e.preventDefault();
};
const route = useRoute();
const chatId = computed(() => (route.query.id ? String(route.query.id) : null));
const schedules = computed(() => {
  if (!chatId.value) return { title: "なし", people: 0 };
  const card = RecruitmentCards.value.find((item) => item.id === chatId.value);
  return {
    title: card?.name,
    people: card?.apo_people,
  };
});
const postdatas: postBox[] = getAllData();
</script>
<style scoped>
.buttom {
  display: flex;
  height: auto;
  justify-content: center;
  width: 100%;
}
.main {
  width: 100vw;
  height: 100vh;
}
.thread {
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.ImageViewer {
  position: absolute;
  width: 90%;
  height: 90%;
  z-index: 30;
}
</style>
