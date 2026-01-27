<template>
  <div class="parent list">
    <Label label="作成" class="title"></Label>

    <Label label="名前"></Label>
    <CustomForm v-bind="nameConfig" v-model="formData.name" />

    <Label label="内容"></Label>
    <CustomForm v-bind="contentConfig" v-model="formData.content" />

    <Label label="時刻"></Label>
    <input type="datetime-local" />

    <Button title="投稿" class="defaultButton" @click="handleSubmit"></Button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import CustomForm from "@/components/AtomicDesign/Atoms/Form/Form.ts";
import Button from "@/components/AtomicDesign/Atoms/Button/Button.ts";
import Label from "@/components/AtomicDesign/Atoms/Label/Label";

const formData = reactive({
  name: "",
  content: "",
  time: "",
});

const nameConfig = {
  numberOfLines: 1,
  width: 400,
  placeholder: "名前を入力",
};

const contentConfig = {
  numberOfLines: 6,
  width: 400,
  placeholder: "内容を入力",
};

const handleSubmit = () => {
  console.log("送信データ:", formData);
};
</script>

<style scoped>
.parent {
  background-color: black;
  padding: 20px;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}
</style>
