<template>
  <div class="SendMessage">
    <SendMessage></SendMessage>
  </div>
</template>
<script lang="ts" setup>
import SendMessage from "@A/Molecules/SendMessage/src/SendMessage.vue";

const props = defineProps<{
  people?: number;
}>();
</script>
<style scoped>
.SendMessage {
  position: relative;
  flex-direction: column;
  height: 100%;
  display: flex;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
