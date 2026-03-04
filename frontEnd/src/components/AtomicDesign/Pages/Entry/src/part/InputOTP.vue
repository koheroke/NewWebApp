<template>
  <div class="page recativeCenter">
    <div class="form recativeCenter list">
      <inputForm
        class="scroll-y form"
        :configList="fromConfig"
        :onEmitButton="onEmitButton"
        formLabel="募集を作成"
        v-model="loginData"
      ></inputForm>
      <div class="Gridlayout">
        <Label label="届きませんでしたか？:"></Label>
        <Button title="再送信" class="res"></Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import inputForm from "@A/Organisms/InputForm/InputForm";
import { reactive, markRaw } from "vue";
import { type formItemType } from "@A/Molecules/FormItem/Interface";
import Inputfield from "@A/Atoms/Inputfield/Inputfield";
import Button from "@A/Atoms/Button/src/Button.vue";
import Label from "@A/Atoms/Label/src/Label.vue";
interface loginType {
  otpinput: string;
}
const loginData: loginType = reactive({
  otpinput: "",
});
const onEmitButton = () => {};

const fromConfig: formItemType[] = [
  {
    props: {
      configType: "input",
      placeholder: "コードを入力",
    },
    id: "name",
    component: markRaw(Inputfield),
    label: "送信されたコードを入力",
    required: true,
  },
];
</script>
<style scoped>
.form {
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background-color: rgb(255, 255, 255) !important;
}
.res {
  color: rgb(114, 114, 239);
  font-weight: 900;
  font-size: 17px;
}
.res:hover {
  color: rgb(63, 63, 237);
}
</style>
