<template>
  <div class="page">
    <ChatTopBar v-bind="schedules"></ChatTopBar>
    <div class="main scroll-y">
      <div class="thread">
        <Thread :postdatas="postdatas"></Thread>
      </div>
    </div>
    <div class="buttom">
      <div><sendMessageBar></sendMessageBar></div>
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
import { onMounted } from "vue";
import { computed } from "vue";
import { RecruitmentCards } from "@/components/Hooks/web/useRecruitmentData";
const route = useRoute();
let id: string | null = null;
onMounted(() => {
  id = String(route.query.id);
});
const schedules = computed(() => {
  if (id == null) return;
  const card = RecruitmentCards.value.find((item) => item.id === id);
  return {
    name: card?.name,
    people: card?.apo_people,
  };
});
const postdatas: postBox[] = getAllData();
</script>
<style scoped>
.buttom {
  position: fixed;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  bottom: 0%;
}
.main {
  width: 100vw;
  height: 100vh;
}

.thread {
  padding: 30px;
  box-sizing: border-box;
}
</style>
