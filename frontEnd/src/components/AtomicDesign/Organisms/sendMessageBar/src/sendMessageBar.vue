<template>
  <div class="SendMessage">
    <SendMessage></SendMessage>
  </div>
</template>
<script lang="ts" setup>
import SendMessage from "@A/Molecules/SendMessage/src/SendMessage.vue";
</script>
<style scoped>
.bar {
  width: 100%;
}
.SendMessage {
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  background-color: rgba(231, 136, 64, 0.486);
}
</style>
