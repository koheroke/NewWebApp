<template>
  <div class="page">
    <PopingElement :trigger="popingElementTrigger">
      <Tags></Tags>
    </PopingElement>
    <div class="scroll-y">
      <div class="Gridlayout topArea">
        <RadioButton
          title="並べ替え"
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
          ></Search>
        </div>
      </div>
      <div class="list">
        <RecruitmentList
          :RecruitmentCards="recruitmentListData"
          title="募集一覧"
        ></RecruitmentList>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import RecruitmentList from "@/components/AtomicDesign/Organisms/RecruitmentList/src/RecruitmentList.vue";
import { getTestData } from "@/testmodule/InputFromWebsocket";
import RadioButton from "@/components/AtomicDesign/Molecules/RadioButton/RadioButton";
import Search from "@/components/AtomicDesign/Molecules/Search/Search";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { tagStore } from "@/components/Stores/appStore";
import Tags from "@/components/AtomicDesign/Organisms/Tags/Tags";
import PopingElement from "@/components/AtomicDesign/Templetes/PopingElement/PopingElement";
import { searchResults, andResults } from "@/components/Hooks/web/saerch";
const listSwitch = [
  { id: "new", name: "新着順" },
  { id: "people", name: "人数順" },
  { id: "data", name: "時刻順" },
];
const searchSwitch = [
  { id: "tag", name: "タグで検索" },
  { id: "name", name: "名前で検索" },
];
const recruitmentListData = ref(getTestData());
const RadioSearch_selected = ref("tag");
const RadioList_selected = ref("new");
const tagstore = tagStore();
const { tag } = storeToRefs(tagstore);
const fromData = ref("");
watch(
  tag,
  (newVal) => {
    if (newVal) {
      fromData.value = fromData.value ? `${fromData.value} ${newVal}` : newVal;
    }
  },
  { immediate: true },
);
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
        recruitmentListData.value = [...getTestData()].sort(
          (a, b) => b.people - a.people,
        );
        break;
      case "new":
        recruitmentListData.value = getTestData();
        break;
      case "data":
        recruitmentListData.value = [...getTestData()].sort(
          (a, b) => b.data - a.data,
        );
        break;
    }
  },
  { immediate: true },
);
const search = () => {
  if (fromData.value == "") {
    recruitmentListData.value = getTestData();
    return;
  }
  switch (RadioSearch_selected.value) {
    case "tag":
      const tags = fromData.value.split(" ");
      recruitmentListData.value = andResults(getTestData(), tags);
      break;
    case "name":
      recruitmentListData.value = searchResults(getTestData(), fromData.value);
      break;
  }
};
</script>
<style scoped>
.list {
  padding: 20px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-bottom: 120px;
}
.menu {
  margin-right: auto;
  margin-left: 0;
}
.topArea {
  padding: 10px 20px;
}
.radioButton {
  padding: 20px;
}
</style>
