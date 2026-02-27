<template>
  <div class="page recativeCenter">
    <Label
      label="ようこそ'サイト名'へ"
      class="title"
      :class="{ moveTitle: moveing }"
    ></Label>
    <div>
      <Button
        title="ログインして始める"
        @click="onButton()"
        class="startButton"
        :class="{ fadeInAnm: moveing }"
      ></Button>
      <Button
        title="ログインせず始める"
        @click="onButton()"
        :class="{ fadeInAnm: moveing }"
      ></Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Inputfield from "@A/Atoms/Inputfield/Inputfield";
import Button from "@A/Atoms/Button/Button.ts";
import Label from "@A/Atoms/Label/Label";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const moveing = ref(false);
const onButton = () => {
  router.push("/recruitment");
};

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
.startButton {
  font-size: 90px;
  font-weight: 600;
  color: white;
  -webkit-text-stroke: 1px #13bac6; /* 枠線の太さと色 */
}
</style>
