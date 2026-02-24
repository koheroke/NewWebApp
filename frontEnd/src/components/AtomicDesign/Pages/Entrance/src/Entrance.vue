<template>
  <div class="page recativeCenter">
    <Label
      label="ようこそ'サイト名'へ"
      class="title"
      :class="{ moveTitle: moveing }"
    ></Label>
    <div></div>
  </div>
</template>
<script lang="ts" setup>
import Inputfield from "@A/Atoms/Inputfield/Inputfield";
import Button from "@A/Atoms/Button/Button.ts";
import Label from "@A/Atoms/Label/Label";
import { ref } from "vue";
const moveing = ref(false);

setTimeout(() => {
  moveing.value = true;
}, 100);
</script>
<style scoped src="../anm.css"></style>
<style scoped>
.title {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-size: 50px;
}
.login {
  font-size: 20px;
  font-weight: 600;
}
</style>
