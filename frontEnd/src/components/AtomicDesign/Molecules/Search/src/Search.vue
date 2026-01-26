<template>
  <div class="Gridlayout">
    <div class="labelAndForm">
      <Label label="検索" class="fontSize"></Label>
      <From v-bind="fromConfig" v-model="searchText" class="formClass"></From>
    </div>
    <Button title="Search" class="defaultButton"></Button>
  </div>
</template>
<script lang="ts" setup>
import From from "@/components/AtomicDesign/Atoms/Form/Form.ts";
import Button from "@/components/AtomicDesign/Atoms/Button/Button.ts";
import Label from "@/components/AtomicDesign/Atoms/Label/Label";
import { reactive, ref } from "vue";
const searchText = ref();
const fromConfig = reactive({
  numberOfLines: 1,
  size: { width: 200, height: 24 },
  placeholder: "サイトを検索",
});
</script>
<style scoped>
.labelAndForm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.fontSize {
  size: 20px;
}
.formClass {
  background-color: black;
  color: white;
  font-weight: 900;
}
</style>
