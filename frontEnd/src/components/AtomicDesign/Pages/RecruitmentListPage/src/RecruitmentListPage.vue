<template>
  <div class="page">
    <Notification
      label="募集されました!"
      type="log"
      :poping="notification"
    ></Notification>
    <PopingElement :trigger="popingElementTrigger" class="tagArea">
      <Tags :tagTrigger="tagTrigger"></Tags>
    </PopingElement>
    <div class="scroll-y">
      <div class="Gridlayout topArea">
        <RadioButton
          title=""
          :elements="listSwitch"
          v-model="RadioList_selected"
          class="menu"
        ></RadioButton>
        <div class="Gridlayout right-align-start">
          <RadioButton
            title=""
            :elements="searchSwitch"
            v-model="RadioSearch_selected"
            class="radioButton"
          ></RadioButton>
          <Search
            v-model="fromData"
            configType="input"
            placeholder="募集を検索"
            @focus="focusSearchArea"
            @search="search"
            class="search"
          ></Search>
        </div>
      </div>
      <div class="list">
        <RecruitmentList
          :RecruitmentCards="rawData"
          title="募集一覧"
        ></RecruitmentList>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import RecruitmentList from "@A/Organisms/RecruitmentList/src/RecruitmentList.vue";
import RadioButton from "@A/Molecules/RadioButton/RadioButton";
import Search from "@A/Molecules/Search/Search";
import { computed, ref, watch } from "vue";
import Tags from "@A/Organisms/Tags/Tags";
import PopingElement from "@A/Templetes/PopingElement/PopingElement";
import { searchResults, andResults } from "@/components/Hooks/web/saerch";
import {
  RecruitmentCards,
  recruitmentApi,
} from "@/components/Hooks/web/useRecruitmentData";

// import { getTestData } from "@/testmodule/InputFromWebsocket";
const notification = ref(false);
recruitmentApi.request();

import Notification from "@A/Molecules/Notification/Notification";
const listSwitch = [
  { id: "new", name: "新着順" },
  { id: "people", name: "人数順" },
  { id: "data", name: "時刻順" },
];
const searchSwitch = [
  { id: "tag", name: "タグで検索" },
  { id: "name", name: "名前で検索" },
];

const RadioSearch_selected = ref("tag");
const RadioList_selected = ref("new");
const fromData = ref<string>("");

const sortedBaseData = computed(() => {
  const base = [...RecruitmentCards.value];
  // const base = [...getTestData()];
  switch (RadioList_selected.value) {
    case "people":
      return base.sort((a, b) => b.apo_people - a.apo_people);
    case "data":
      return base.sort((a, b) => a.data - b.data);
    case "new":
      return base;
    default:
      return base;
  }
});

const rawData = computed(() => {
  const baseData = sortedBaseData.value;
  if (fromData.value === "") {
    return baseData;
  }
  switch (RadioSearch_selected.value) {
    case "tag":
      const tags = fromData.value.trim().split(/\s+/);
      return andResults(baseData, tags);
    case "name":
      return searchResults(baseData, fromData.value);
    default:
      return baseData;
  }
});

const tagTrigger = (tag: string) => {
  fromData.value += (fromData.value === "" ? "" : " ") + tag;
};

const popingElementTrigger = ref(false);
const focusSearchArea = () => {
  if (RadioSearch_selected.value == "tag") {
    popingElementTrigger.value = !popingElementTrigger.value;
  }
};
const search = () => {
  popingElementTrigger.value = false;
};

watch(
  () => rawData.value.length,
  (newValue) => {
    if (rawData.value[newValue - 1]?.id) {
    }
  },
);
</script>
<style scoped>
.list {
  padding: 20px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 100%;
  height: auto;
  align-items: center;
  padding-bottom: 100px;
  z-index: 1;
  box-sizing: border-box;
}
.menu {
  margin-right: auto;
  margin-left: 0;
}
.topArea {
  padding: 10px 30px;
  height: 50px;
}
.tagArea {
  z-index: 10 !important;
}
</style>
