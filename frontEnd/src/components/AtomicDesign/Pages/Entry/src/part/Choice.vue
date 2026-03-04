<template>
  <div class="page">
    <div class="list">
      <GoogleLogin :callback="callback" scope="email profile openid" />
      <Button
        title="メールアドレスでログイン"
        class="entryButton"
        @click="router.push('/entry/inputEmail')"
      ></Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "@A/Atoms/Button/src/Button.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const callback = (response: any) => {
  console.log("ログイン成功:", response);
};
</script>
<style scoped src="../../style/button.css"></style>
<style scoped>
.list {
  width: 60%;
  height: auto;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.title {
  font-weight: 300 !important;
  font-size: 14px;
}
</style>
