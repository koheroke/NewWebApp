<template>
  <div class="Gridlayout border">
    <Label label="投票トーク" class="title"></Label>
    <div class="pageTransitionButtons Gridlayout">
      <Button title="Profile" class="simplicityButton"></Button>
      <Button title="history" class="simplicityButton"></Button>
      <Button title="create" class="simplicityButton"></Button>
      <Button title="Recruitment" class="simplicityButton"></Button>
    </div>
    <Search class="right-align-start"></Search>
  </div>
</template>
<script lang="ts" setup>
import Search from "@/components/AtomicDesign/Molecules/Search/Search.ts";
import Button from "@/components/AtomicDesign/Atoms/Button/Button.ts";
import Label from "@/components/AtomicDesign/Atoms/Label/Label.ts";
</script>
<style scoped>
.pageTransitionButtons {
  font-size: 20px;
  font-weight: 900;
  padding-top: 20px;
}
.border {
  width: 100%;
  padding: 0 20px 20px 20px;
  height: auto;
  box-sizing: border-box;
}
.title {
  font-weight: 900;
  color: rgb(0, 0, 0);
  padding: 20px;
  font-size: large;
  font-weight: bold;
}
</style>
