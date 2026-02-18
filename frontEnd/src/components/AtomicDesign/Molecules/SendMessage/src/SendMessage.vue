<template>
  <div class="parent">
    <div class="textArea">
      <Inputfield
        placeholder="メッセージを送信"
        configType="message"
        class="fromClass"
      ></Inputfield>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Inputfield from "@A/Atoms/Inputfield/Inputfield";
import Button from "@A/Atoms/Button/Button.ts";
</script>
<style scoped>
.parent {
  position: relative;
  width: 90vw;
  height: auto;
  border-radius: 10px;
  display: flex;
  background-color: white;
  box-sizing: border-box;
}
.textArea {
  width: 100%;
  padding: 20px;
  border-radius: 10px;
}
</style>
