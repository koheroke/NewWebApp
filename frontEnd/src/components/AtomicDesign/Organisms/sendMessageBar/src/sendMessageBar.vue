<template>
  <div class="SendMessage">
    <ImagePostArea
      :title="title"
      :dragBool="dragBool"
      v-model="images"
    ></ImagePostArea>
    <SendMessage></SendMessage>
  </div>
</template>
<script lang="ts" setup>
import SendMessage from "@A/Molecules/SendMessage/src/SendMessage.vue";
import ImagePostArea from "../../ImagePostArea/src/ImagePostArea.vue";
const props = defineProps<{
  title?: string;
  people?: number;
  dragBool?: boolean;
}>();
import { ref } from "vue";
const images = ref<string[]>([]);
</script>
<style scoped>
.SendMessage {
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
