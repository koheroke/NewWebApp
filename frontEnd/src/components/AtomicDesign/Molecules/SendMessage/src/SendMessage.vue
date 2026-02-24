<template>
  <div class="parent">
    <div class="textArea">
      <Inputfield
        placeholder="メッセージを送信"
        configType="message"
        class="fromClass"
      ></Inputfield>
      <div class="buttomMenus">
        <el-icon :size="22" color="gray" class="plusButton">
          <i-ep-Plus> </i-ep-Plus>
        </el-icon>
        <el-icon :size="22" color="black">
          <i-ep-Picture></i-ep-Picture>
        </el-icon>
        <el-icon
          :size="22"
          color="white"
          @mouseenter="isFilled = true"
          @mouseleave="isFilled = false"
          class="postButton right-align-start"
        >
          <i-ep-Promotion v-show="isFilled"></i-ep-Promotion>
          <i-ep-Position v-show="!isFilled"></i-ep-Position>
        </el-icon>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Inputfield from "@A/Atoms/Inputfield/Inputfield";
import { ref } from "vue";
const isFilled = ref(true);
</script>
<style scoped>
.parent {
  position: relative;
  width: 90vw;
  height: auto;
  border-radius: 10px;
  display: flex;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
}
.textArea {
  width: 100%;
  padding: 5px;
}
.buttomMenus {
  height: auto;
  display: flex;
}
.postButton {
  background-color: green;
  border-radius: 5px;
  padding: 3px 10px;
  height: auto;
  width: auto;
}
.plusButton {
  background-color: rgba(0, 0, 0, 0.101);
  border-radius: 100%;
  padding: 5px;
}
</style>
