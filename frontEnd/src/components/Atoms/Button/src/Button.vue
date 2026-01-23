<template>
  <div>{{ title }}</div>
</template>
<script lang="ts" setup>
defineProps({
  title: String,
});
</script>
<style scoped>
.defaultButton {
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
  }
}
</style>
