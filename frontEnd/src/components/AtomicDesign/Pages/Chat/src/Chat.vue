<template>
  <div class="page">
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
import { ref } from "vue";
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
