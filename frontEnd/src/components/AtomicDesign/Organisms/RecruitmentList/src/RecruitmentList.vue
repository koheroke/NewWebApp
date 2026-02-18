<template>
  <div class="list">
    <div
      v-for="RecruitmentData in recruitmentListData"
      :key="RecruitmentData.name"
    >
      <RecruitmentCard
        :recruitmentListData="RecruitmentData"
        :clickJoinButton="clickJoinButton"
      ></RecruitmentCard>
    </div>
  </div>
</template>
<script lang="ts" setup>
import RecruitmentCard from "@A/Molecules/RecruitmentCard/src/RecruitmentCard.vue";
import { type RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard";
import { ref, computed } from "vue";
import { sortingButtonType } from "@/components/Hooks/web/RecruitmentListHook";
import { useLocalStorage } from "@/components/Hooks/web/useLocalStorage";
const storage = useLocalStorage();
const props = defineProps<{
  RecruitmentCards: RecruitmentCardType[];
  clickJoinButton?: (click?: string, id?: string) => void;
}>();

const scheduledIds = ref<string[]>(storage.getItem("schedule") || []);

const ongoingIds = computed<string[]>(() => {
  const nowData = Date.now();
  return props.RecruitmentCards.filter((item: RecruitmentCardType) => {
    return item.data <= nowData;
  }).map((item) => item.id);
});

const recruitmentListData = computed(() => {
  return sortingButtonType(
    scheduledIds.value,
    ongoingIds.value,
    props.RecruitmentCards,
  );
});

const clickJoinButton = (id: string, buttontitile: string) => {
  switch (buttontitile) {
    case "参加予約":
      storage.setItem("schedule", id);
      scheduledIds.value = storage.getItem("schedule") || [];
      break;
    case "参加取消":
      storage.deleteItem("schedule", id);
      storage.deleteItem("schedule", id);
      scheduledIds.value = storage.getItem("schedule") || [];
      break;
    case "参加":
      break;
  }
};
</script>
<style scoped>
.list {
  gap: 30px;
}
</style>
