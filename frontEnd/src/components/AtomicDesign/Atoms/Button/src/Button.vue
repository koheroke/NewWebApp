<template>
  <div>{{ title }}</div>
</template>
<script lang="ts" setup>
defineProps({
  title: String,
});
</script>
<style scoped>
.ButtonStandard,
.defaultButton,
.simplicityButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding-right: 10px;
  padding-left: 10px;
}

/* それぞれの固有の色だけを分ける */
.defaultButton {
  background-color: #d95100;
  color: #eeddbb;
  font-weight: 900;
  &:hover {
    background-color: #f58d51;
  }
}

.simplicityButton {
  font-weight: 900;
  color: #232323;
  &:hover {
    color: #5a5a5a;
  }
}
</style>
