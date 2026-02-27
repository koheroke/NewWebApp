<template>
  <div
    class="page"
    @dragenter.prevent="onDragEnter"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop"
  >
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
import Thread from "@/components/AtomicDesign/Organisms/Thread/src/Thread.vue";
import { getAllData } from "@/testmodule/chat";
import { type postBox } from "@/components/Interfaces/web/post";
import ChatTopBar from "@/components/AtomicDesign/Organisms/ChatTopBar/src/ChatTopBar.vue";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import { RecruitmentCards } from "@H/api/useRecruitmentData";
let dragCounter = 0;
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
    dragBool: dragBool.value,
    title: card?.name,
    people: card?.apo_people,
  };
});
const postdatas: postBox[] = getAllData();
</script>
<style scoped>
.buttom {
  display: flex;
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
</style>
