<template>
  <div class="parent">
    <div class="list">
      <div>
        <PreviewImages></PreviewImages>
      </div>
      <div class="textArea">
        <Inputfield
          placeholder="メッセージを送信"
          configType="message"
          :maxRows="6"
          v-model="inputData"
          class="fromClass"
        ></Inputfield>
        <div class="buttomMenus">
          <el-icon :size="22" color="gray" class="plusButton">
            <i-ep-Plus> </i-ep-Plus>
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
  </div>
</template>
<script lang="ts" setup>
import PreviewImages from "@/components/AtomicDesign/Organisms/PreviewImages/src/PreviewImages.vue";
import Inputfield from "@A/Atoms/Inputfield/Inputfield";
import { ref } from "vue";
const inputData = ref<string>("");
const isFilled = ref(true);
</script>
<style scoped>
.parent {
  position: relative;
  height: auto;
  border-radius: 10px;
  margin: 20px;
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
  width: 100%;
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
  background-color: rgba(0, 0, 0, 0.056);
  border-radius: 100%;
  padding: 5px;
}
.list {
  width: 100%;
}
.plusButton:hover {
  background-color: rgba(0, 0, 0, 0.18);
}
</style>
