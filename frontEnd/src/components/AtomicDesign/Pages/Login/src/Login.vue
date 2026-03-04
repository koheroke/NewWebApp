<template>
  <div class="page recativeCenter">
    <div class="form recativeCenter">
      <div class="titleArea recativeCenter list">
        <div class="title">
          <Label label="アプリ名にログイン"></Label>
        </div>
        <div class="list">
          <div class="googleLogin">
            <GoogleLogin :callback="callback" scope="email profile openid" />
          </div>
          <Button
            title="指紋認証でログイン"
            class="entryButton"
            @click="router.push('/entry/inputEmail')"
          ></Button>
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
import { useRouter } from "vue-router";
const router = useRouter();
interface loginType {
  email: string;
  password: string;
}
const loginData: loginType = reactive({
  name: "",
  email: "",
  password: "",
});

const callback = (response: any) => {
  console.log("ログイン成功:", response);
};
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
];
</script>
<style scoped src="@A/Pages/Entry/style/button.css"></style>
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
  gap: 60px;
}
</style>
