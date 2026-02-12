<template>
  <div class="body page">
    <Button title="開催中" class="defaultButton" @click="doListClick('held')">
    </Button>
    <RecruitmentList
      :RecruitmentCards="getTestData()"
      class="card"
      v-show="isClosingHeld"
    ></RecruitmentList>
    <Button
      title="参加予定"
      class="defaultButton"
      @click="doListClick('schedule')"
    ></Button>
    <RecruitmentList
      :RecruitmentCards="getTestData()"
      class="card"
      v-show="isClosingSchedule"
    ></RecruitmentList>
  </div>
</template>
<script lang="ts" setup>
import Button from "@/components/AtomicDesign/Atoms/Button/Button";
import RecruitmentList from "@/components/AtomicDesign/Organisms/RecruitmentList/src/RecruitmentList.vue";
import { getTestData } from "@/testmodule/InputfromWebsocket";

import { ref } from "vue";
const isClosingHeld = ref(true);
const isClosingSchedule = ref(true);
const doListClick = (id: string) => {
  switch (id) {
    case "held":
      isClosingHeld.value = !isClosingHeld.value;
      break;
    case "schedule":
      isClosingSchedule.value = !isClosingSchedule.value;
      break;
  }
};
</script>
<style scoped>
.defaultButton {
  width: 90%;
  margin: 20px;
}
.body {
  align-items: center;
  padding-bottom: 120px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
