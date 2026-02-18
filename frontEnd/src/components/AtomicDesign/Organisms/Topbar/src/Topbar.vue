<template>
  <div class="Gridlayout border">
    <Label label="サイト名ロゴ" class="title"></Label>
    <div class="pageTransitionButtons Gridlayout">
      <Label label="MENU" class=""></Label>
      <div v-for="menu in topMenu">
        <Button
          :title="menu.title"
          class="simplicityButton topButton shimmerEffect"
          @click="handleSubmit(menu.handleSubmit)"
        ></Button>
      </div>
    </div>
    <Button title="ログイン" class="right-align-start"></Button>
  </div>
</template>
<script lang="ts" setup>
import Button from "@A/Atoms/Button/Button";
import Label from "@A/Atoms/Label/Label";
import { useRouter } from "vue-router";

const topMenu = [
  { handleSubmit: "recruitment", title: "募集一覧" },
  { handleSubmit: "create", title: "募集作成" },
  { handleSubmit: "AttendList", title: "参加予定" },
  { handleSubmit: "heldList", title: "開催途中" },
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
    default:
      break;
  }
};
</script>
<style scoped>
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
.shimmerEffect::before {
  animation: shimmer 0.6s;
}
</style>
