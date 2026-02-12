<template>
  <div class="lavelClass">{{ label }}</div>
</template>
<script lang="ts" setup>
defineProps({
  label: String,
});
</script>
<style scoped>
.lavelClass {
  color: slategray;
  font-weight: 900;
  justify-content: center;
  align-items: center;
  display: flex;
  width: auto;
  height: auto;
}
.title {
  color: slategray;
  font-weight: 700;
  border-radius: 20px;
}
</style>
