<template>
  <div class="parent">
    <div class="list">
      <Label label="募集を作成" class="title"></Label>

      <div v-for="item in fromConfig" :key="item.key" class="Gridlayout form">
        <Label
          :label="item.label"
          :class="[
            'formLabel',
            { notFilledin: notFilledinKeys.includes(item.key) },
          ]"
        ></Label>
        <Inputfield
          v-if="item.type === 'input' || item.type === 'text'"
          :configType="item.type"
          :placeholder="item.placeholder"
          v-model="fromData[item.key]"
          @click="onfrom(item.content)"
        />

        <input
          v-else-if="item.type === 'datetime'"
          type="datetime-local"
          v-model="fromData[item.key]"
          @click="onfrom(item.content)"
        />
        <Button
          v-else-if="item.type === 'tag-button'"
          title="<タグを追加>"
          class="simplicityButton"
          @click="handleClick"
        ></Button>
        <Label
          label="!記入が必要です"
          v-show="notFilledinKeys.includes(item.key)"
          class="caveat"
        ></Label>
      </div>
      <Button
        title="投稿"
        class="defaultButton post"
        @click="handleSubmit"
      ></Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import Inputfield from "@/components/AtomicDesign/Atoms/Inputfield/Inputfield";
import Button from "@/components/AtomicDesign/Atoms/Button/Button";
import { RecruitmentApi } from "@/components/Hooks/web/useSocket";
import Label from "@/components/AtomicDesign/Atoms/Label/Label";
import { generateId } from "@/components/Hooks/web/id";
import { type RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard";
import { ref } from "vue";
const recruitmentApi = new RecruitmentApi();
const notFilledinKeys = ref<(keyof RecruitmentCardType)[]>([]);
const fromConfig = [
  {
    key: "name",
    label: "名前",
    type: "input",
    placeholder: "名前を入力",
    content: "name",
  },
  {
    key: "time",
    label: "時刻",
    type: "datetime",
    placeholder: "",
    content: "time",
  },
  {
    key: "detail",
    label: "概要",
    type: "text",
    placeholder: "内容を入力",
    content: "detail",
  },
  {
    key: "tags",
    label: "タグ",
    type: "tag-button",
    placeholder: "",
    content: "tag",
  },
];

const absoluteKeys: (keyof RecruitmentCardType)[] = ["name", "time"];

const props = defineProps({
  addTag: {
    type: Function,
    required: true,
  },
});

const handleClick = () => {
  props.addTag();
};

const fromData: RecruitmentCardType = reactive({
  name: "",
  detail: "",
  tag: [],
  time: "",
  people: 1,
  id: generateId(),
  data: Date.now(),
});
3;
const handleSubmit = () => {
  notFilledinKeys.value = absoluteKeys.filter((key) => {
    return fromData[key] === "";
  });
  if (notFilledinKeys.value.length > 0) {
    return;
  }
  recruitmentApi.create(fromData);
};

const onfrom = (from: string) => {
  notFilledinKeys.value = notFilledinKeys.value.filter((key) => key !== from);
};
</script>
<style scoped>
.parent {
  padding: 30px 0px;
}
.title {
  font-size: 20px;
  width: auto;
}
.list {
  margin-top: 30px;
  gap: 20px;
}
.form {
  padding: 0 30px;
  white-space: nowrap;
}
.Gridlayout {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 10px;
}
.notFilledin {
  background-color: #f70d1a !important;
  color: white;
}
.formLabel {
  height: auto;
  background-color: greenyellow;
  border-radius: 10px;
  padding: 10px;
}
.post {
  margin-top: auto;
}
</style>
