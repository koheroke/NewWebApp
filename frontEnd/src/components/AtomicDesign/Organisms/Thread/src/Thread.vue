<template>
  <div class="thread list">
    <div v-for="postdata in postdatas" class="datas">
      <PostBox v-bind="postdata"></PostBox>
    </div>
  </div>
</template>
<script lang="ts" setup>
import PostBox from "@/components/AtomicDesign/Molecules/PostBox/src/PostBox.vue";
import { type postBox } from "@/components/Interfaces/web/post";
const theadDatas = defineProps<{ postdatas: postBox[] }>();
</script>
<style scoped>
.thread {
  width: 90%;
  height: 100%;
  gap: 20px;
}
</style>
