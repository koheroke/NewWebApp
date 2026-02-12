<template>
  <div class="Gridlayout border">
    <Label label="投票トーク" class="title"></Label>
    <div class="pageTransitionButtons Gridlayout">
      <Button
        title="募集一覧"
        class="simplicityButton topButton"
        @click="handleSubmit('recruitment')"
      ></Button>
      <Button
        title="募集作成"
        class="simplicityButton topButton"
        @click="handleSubmit('create')"
      ></Button>
      <Button
        title="参加予定"
        class="simplicityButton topButton"
        @click="handleSubmit('AttendList')"
      ></Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "@/components/AtomicDesign/Atoms/Button/Button";
import Label from "@/components/AtomicDesign/Atoms/Label/Label";
import { useRouter } from "vue-router";

const router = useRouter();
const handleSubmit = (id: String) => {
  switch (id) {
    case "recruitment":
      router.push("/recruitment");
      break;
    case "history":
      router.push("/history");
      break;
    case "create":
      router.push("/create");
      break;
    case "AttendList":
      router.push("/AttendList");
      break;
    default:
      break;
  }
};
</script>
<style scoped>
.pageTransitionButtons {
  font-size: 20px;
  font-weight: 900;
  padding-top: 20px;
  padding-left: 10px;
  gap: 20px;
}
.border {
  width: 100%;
  padding: 0 20px 20px 20px;
  height: auto;
  box-sizing: border-box;
}
.title {
  font-weight: 900;
  padding: 0px 20px;
}
.topButton {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
</style>
