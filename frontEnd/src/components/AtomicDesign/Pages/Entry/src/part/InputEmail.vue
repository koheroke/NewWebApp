<template>
  <div class="page recativeCenter">
    <div class="form recativeCenter">
      <div class="titleArea recativeCenter">
        <div class="title">
          <Label label="メールアドレスで登録"></Label>
        </div>
      </div>
      <inputForm
        class="scroll-y form"
        :configList="fromConfig"
        :onEmitButton="onEmitButton"
        formLabel="募集を作成"
        v-model="loginData"
      ></inputForm>
    </div>
  </div>
</template>
<script lang="ts" setup>
import inputForm from "@A/Organisms/InputForm/InputForm";
import { reactive, markRaw } from "vue";
import { type formItemType } from "@A/Molecules/FormItem/Interface";
import Inputfield from "@A/Atoms/Inputfield/Inputfield";
import Label from "@A/Atoms/Label/src/Label.vue";
interface loginType {
  email: string;
  password: string;
}
const loginData: loginType = reactive({
  name: "",
  email: "",
  password: "",
});

const onEmitButton = () => {};

const fromConfig: formItemType[] = [
  {
    props: {
      configType: "input",
      placeholder: "入力",
    },
    id: "name",
    component: markRaw(Inputfield),
    label: "ユーザー名",
    required: true,
  },
  {
    props: {
      configType: "input",
      placeholder: "メールアドレスを入力",
    },
    id: "email",
    component: markRaw(Inputfield),
    label: "メールアドレス",
    required: true,
  },
  {
    props: {
      configType: "input",
      placeholder: "パスワードを入力",
    },
    id: "password",
    component: markRaw(Inputfield),
    label: "パスワード",
    required: true,
  },
];
</script>
<style scoped>
.form {
  width: 80%;
  height: 80%;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 0px;
  background-color: rgb(255, 255, 255) !important;
}
.titleArea {
  height: 100%;
  width: auto;
  border-right: 1px solid rgb(227, 224, 224);
  padding: 30px;
  box-sizing: border-box;
}
</style>
