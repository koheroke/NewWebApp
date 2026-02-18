<template>
  <div class="page">
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
            @hold="onSearchArea"
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
import { getTestData } from "@/testmodule/InputFromWebsocket";
import RadioButton from "@A/Molecules/RadioButton/RadioButton";
import Search from "@A/Molecules/Search/Search";
import { ref, watch } from "vue";
import Tags from "@A/Organisms/Tags/Tags";
import PopingElement from "@A/Templetes/PopingElement/PopingElement";
import { searchResults, andResults } from "@/components/Hooks/web/saerch";
import { type RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard";
import {
  RecruitmentCards,
  RecruitmentApi,
} from "@/components/Hooks/web/useRecruitmentData";
const recruitmentApi = new RecruitmentApi();
recruitmentApi.request();

const listSwitch = [
  { id: "new", name: "新着順" },
  { id: "people", name: "人数順" },
  { id: "data", name: "時刻順" },
];
const searchSwitch = [
  { id: "tag", name: "タグで検索" },
  { id: "name", name: "名前で検索" },
];
const rawData = ref<RecruitmentCardType[]>(RecruitmentCards.value);
const RadioSearch_selected = ref("tag");
const RadioList_selected = ref("new");
const fromData = ref<string>("");
const tagTrigger = (tag: string) => {
  if (fromData.value == "") {
    fromData.value += tag + "";
  } else {
    fromData.value += "" + tag;
  }
};

const popingElementTrigger = ref(false);
const onSearchArea = () => {
  if (RadioSearch_selected.value == "tag") {
    popingElementTrigger.value = !popingElementTrigger.value;
  }
};

watch(
  RadioList_selected,
  (newVal) => {
    switch (newVal) {
      case "people":
        rawData.value = [...getTestData()].sort((a, b) => b.people - a.people);
        break;
      case "new":
        rawData.value = getTestData();
        break;
      case "data":
        rawData.value = [...getTestData()].sort((a, b) => a.data - b.data);
        break;
    }
  },
  { immediate: true },
);
const search = () => {
  if (fromData.value == "") {
    rawData.value = getTestData();
    return;
  }
  switch (RadioSearch_selected.value) {
    case "tag":
      const tags = fromData.value.split(" ");
      rawData.value = andResults(getTestData(), tags);
      break;
    case "name":
      rawData.value = searchResults(getTestData(), fromData.value);
      break;
  }
};
//websocketで渡される操作　削除　追加　変更
//データ
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
