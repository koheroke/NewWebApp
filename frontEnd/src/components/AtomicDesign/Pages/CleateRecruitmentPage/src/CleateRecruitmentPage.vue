<template>
  <div class="page">
    <inputForm
      class="form scroll-y absoluteCenter"
      :configList="fromConfig"
      :onEmitButton="onEmitButton"
      formLabel="募集を作成"
      v-model="fromData"
    ></inputForm>
    <PopingElement :trigger="popingElementTrigger">
      <Tags :tagTrigger="tagTrigger"></Tags>
    </PopingElement>
  </div>
</template>
<script lang="ts" setup>
import { generateId } from "@/components/Hooks/web/id";
import Tags from "@A/Organisms/Tags/Tags";
import { ref, markRaw, reactive } from "vue";
import { PopingElement } from "@A/Templetes/PopingElement/PopingElement";
import inputForm from "@A/Organisms/InputForm/InputForm";
import Inputfield from "@A/Atoms/Inputfield/Inputfield";
import { type formItemType } from "@A/Molecules/FormItem/Interface";
import { type RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard";
import VariableList from "@/components/AtomicDesign/Molecules/VariableList/src/VariableList.vue";
import { ElDatePicker } from "element-plus";
const popingElementTrigger = ref(false);
const onTag = () => {
  popingElementTrigger.value = !popingElementTrigger.value;
};

const fromData: RecruitmentCardType = reactive({
  name: "",
  detail: "",
  tag: [],
  time: "",
  people: 1,
  id: generateId(),
  data: 0,
});

const tagTrigger = (tag: string) => {
  fromData.tag.push(tag);
};

const onEmitButton = () => {
  console.log("soketEmit" + JSON.stringify(fromData));
  fromData.data = Date.now();
};

const fromConfig: formItemType[] = [
  {
    props: {
      configType: "input",
      placeholder: "名前を入力",
    },
    id: "name",
    component: markRaw(Inputfield),
    label: "名前",
    required: true,
  },
  {
    props: {
      type: "datetime",
      placeholder: "",
    },
    label: "時刻",
    component: ElDatePicker,
    id: "time",
    required: true,
  },
  {
    props: {
      configType: "text",
      placeholder: "内容を入力",
    },
    label: "概要",
    component: markRaw(Inputfield),
    id: "detail",
    required: false,
  },
  {
    props: {
      title: "タグを追加",
      click: onTag,
    },
    label: "タグ",
    component: markRaw(VariableList),
    id: "tag",
    required: false,
  },
];
</script>
<style scoped>
.form {
  position: absolute;
  top: 45%;
  width: 70%;
  height: 80%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255) !important;
}
</style>
