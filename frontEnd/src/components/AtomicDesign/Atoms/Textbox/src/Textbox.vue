<template>
  <div class="textbox">
    {{ text }}
  </div>
</template>
<script lang="ts" setup>
const textData = defineProps<{
  text: string;
}>();
</script>
<style scoped>
.textbox {
  width: auto;
  height: auto;
  overflow-wrap: break-word;
  font-weight: 500;
  font-size: 15px;
}
</style>
