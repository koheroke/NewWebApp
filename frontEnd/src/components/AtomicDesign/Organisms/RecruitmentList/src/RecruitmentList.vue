<template>
  <div class="list">
    <div
      v-for="RecruitmentData in props.RecruitmentCards"
      :key="RecruitmentData.name"
    >
      <RecruitmentCard v-bind="RecruitmentData"></RecruitmentCard>
    </div>
  </div>
</template>
<script lang="ts" setup>
import RecruitmentCard from "@/components/AtomicDesign/Molecules/RecruitmentCard/src/RecruitmentCard.vue";
import { type RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard";
// import {
//   RecruitmentCards,
//   RecruitmentApi,
// } from "@/components/Hooks/web/useSocket";
// const recruitmentApi = new RecruitmentApi();
// recruitmentApi.request();

//フロントエンドのみの開発環境
const props = defineProps<{
  RecruitmentCards: RecruitmentCardType[];
}>();
</script>
<style scoped></style>
