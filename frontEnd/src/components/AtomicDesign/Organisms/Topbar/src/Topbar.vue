<template>
  <div class="Gridlayout border">
    <Label label="サイト名を記入" class="title"></Label>
    <div class="pageTransitionButtons Gridlayout">
      <Label label="MENU" class=""></Label>
      <Radio
        title=""
        :elements="topMenu"
        :onClick="handleSubmit"
        :buttonComponent="RadioButton"
        class="RadioButton"
      ></Radio>
    </div>
    <div class="Gridlayout right-align-start buttons">
      <Button
        title="登録"
        class="entryButton button"
        @click="handleSubmit('entry')"
      ></Button>
      <Button
        title="ログイン"
        class="loginButton button"
        @click="handleSubmit('login')"
      ></Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "@A/Atoms/Button/Button";
import Label from "@A/Atoms/Label/Label";
import { useRouter } from "vue-router";
import Radio from "@A/Molecules/Radio/Radio";
import RadioButton from "@A/Atoms/RadioButton/src/RadioButton.vue";

const topMenu = [
  { id: "recruitment", title: "募集一覧" },
  { id: "create", title: "募集作成" },
  { id: "AttendList", title: "参加予定" },
];

const router = useRouter();
const handleSubmit = (id: String) => {
  switch (id) {
    case "recruitment":
      router.push("/recruitment");
      break;
    case "create":
      router.push("/create");
      break;
    case "AttendList":
      router.push("/AttendList");
      break;
    case "heldList":
      router.push("/heldList");
      break;
    case "login":
      router.push("/login");
      break;
    case "entry":
      router.push("/entry");
      break;
    default:
      break;
  }
};
</script>
<style scoped>
.buttons {
  gap: 5px;
  align-items: center;
  height: auto;
}
.button {
  padding: 4px 10px;
  border-radius: 5px;
  border: 1px solid rgba(26, 13, 98, 0.274);
  font-size: 17px;
  transition: 0.2s background-color;
  box-shadow: 10px 5px 35px -5px rgba(7, 37, 63, 0.4);
}

.button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.pageTransitionButtons {
  font-weight: 900;
  padding-top: 20px;
  padding-left: 10px;
  gap: 10px;
}
.border {
  width: 100%;
  padding: 0 20px 15px 5px;
  height: auto;
  box-sizing: border-box;
  background: linear-gradient(45deg, #a96fe7 0%, #2575fc 100%);
  color: rgb(255, 255, 255);
}
.title {
  font-weight: 900;
  padding: 5px 20px;
  font-size: 30px !important;
}
.topButton {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0) !important;
  border: 2px solid white;
  font-size: 23px !important;
  color: #ffffff;
  transition: background-color 0.3s ease;
}
.topButton:hover {
  background-color: rgba(255, 255, 255, 0.171) !important;
  border: 2px solid rgba(255, 255, 255, 0.763);
  box-shadow: 10px 5px 35px -5px rgba(146, 189, 226, 0.4);
}
.RadioButton {
  gap: 10px !important;
  font-size: 20px;
}
.shimmerEffect::before {
  animation: shimmer 0.6s;
}
</style>
