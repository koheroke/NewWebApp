<template>
  <div class="list page">
    <inputForm
      class="form scroll-y"
      :configList="fromConfig"
      :onEmitButton="onEmitButton"
      formLabel="募集を作成"
      v-model="formData"
    ></inputForm>
    <PopingElement :trigger="popingElementTrigger">
      <Tags :tagTrigger="tagTrigger"></Tags>
    </PopingElement>
  </div>
</template>
<script lang="ts" setup>
import { generateId } from "@H/web/id";
import Tags from "@A/Organisms/Tags/Tags";
import { ref, markRaw, reactive } from "vue";
import { PopingElement } from "@A/Templetes/PopingElement/PopingElement";
import inputForm from "@A/Organisms/InputForm/InputForm";
import Inputfield from "@A/Atoms/Inputfield/Inputfield";
import { type formItemType } from "@A/Molecules/FormItem/Interface";
import { type RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard";
import VariableList from "@/components/AtomicDesign/Molecules/VariableList/src/VariableList.vue";
import { ElDatePicker } from "element-plus";
import { recruitmentApi } from "@H/api/useRecruitmentData";
import { useRouter } from "vue-router";
import { useLocalStorage } from "@H/web/useLocalStorage";
import { display, data } from "@H/web/timeFormatting";
const storage = useLocalStorage();
const router = useRouter();
// const recruitmentApi = null; //開発用

const popingElementTrigger = ref(false);
const onTag = () => {
  popingElementTrigger.value = !popingElementTrigger.value;
};

const formData: RecruitmentCardType = reactive({
  name: "",
  detail: "",
  tag: [],
  scheduledtimeString: "",
  scheduledtime: 0,
  apo_people: 1,
  join_people: 0,
  id: generateId(),
  cleatedData: 0,
});

const tagTrigger = (tag: string) => {
  formData.tag.push(tag);
};

const onEmitButton = () => {
  formData.cleatedData = Date.now();
  formData.scheduledtime = data(formData.scheduledtimeString);
  formData.scheduledtimeString = display(formData.scheduledtimeString);
  recruitmentApi.create(formData);
  storage.setItem("schedule", formData.id);
  router.push("/recruitment");
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
      format: "M月d日 HH:mm",
    },
    label: "時刻",
    component: ElDatePicker,
    id: "scheduledtimeString",
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
  width: auto;
  height: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  background-color: rgb(255, 255, 255) !important;
}
</style>
