<template>
  <div class="parent">
    <div class="list">
      <Button title="募集一覧" class="defaultButton"></Button>
      <div
        v-for="RecruitmentData in RecruitmentDatas"
        :key="RecruitmentData.name"
      >
        <RecruitmentCard v-bind="RecruitmentData"></RecruitmentCard>
      </div>
      <Button title="<さらに読み込む>" class="defaultButton"></Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "@/components/AtomicDesign/Atoms/Button/Button.ts";
import { getTestData } from "@/testmodule/InputFromWebsocket.ts";
import type { RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard";
import RecruitmentCard from "@/components/AtomicDesign/Molecules/RecruitmentCard/src/RecruitmentCard.vue";
import { ref } from "vue";
const RecruitmentDatas = ref<RecruitmentCardType[]>([]);
RecruitmentDatas.value = getTestData();
</script>
