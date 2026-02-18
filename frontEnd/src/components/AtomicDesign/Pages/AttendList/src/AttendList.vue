<script lang="ts" setup>
import { ref, computed } from "vue";
import Button from "@A/Atoms/Button/Button";
import RecruitmentList from "@A/Organisms/RecruitmentList/src/RecruitmentList.vue";
import { useLocalStorage } from "@/components/Hooks/web/useLocalStorage";
import { getTestData } from "@/testmodule/InputFromWebsocket";
import { type RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard";
const storage = useLocalStorage();
const hullData = getTestData();
const getSchedule = (
  idData: string[],
  hullData: RecruitmentCardType[],
): RecruitmentCardType[] => {
  const schedule_ids: string[] = idData ? idData : storage.getItem("schedule");
  if (schedule_ids == null || schedule_ids == undefined) hullData;
  const scheduleData = hullData.filter(
    (this_scheduleData: RecruitmentCardType) => {
      return schedule_ids.includes(this_scheduleData.id);
    },
  );
  return scheduleData;
};

const scheduledIds = ref<string[]>(storage.getItem("schedule") || []);
const schedules = computed(() => {
  return getSchedule(scheduledIds.value, hullData);
});
</script>

<template>
  <div class="body page">
    <Button title="参加予定" class="defaultButton gradient"></Button>
    <div class="RecruitmentList">
      <RecruitmentList :RecruitmentCards="schedules" class="card" />
    </div>
  </div>
</template>

<style scoped>
.defaultButton {
  width: auto;
  margin: 20px;
  padding: 10px;
}
.body {
  padding-bottom: 120px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.card {
  align-items: center;
  margin: 0 30px;
  height: auto;
}
</style>
