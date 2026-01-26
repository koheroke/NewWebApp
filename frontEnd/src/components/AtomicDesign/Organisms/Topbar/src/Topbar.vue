<template>
  <div class="Gridlayout border">
    <Label label="サイト名" class="title"></Label>
    <div class="pageTransitionButtons Gridlayout">
      <Button title="Page" class="simplicityButton"></Button>
      <Button title="Page" class="simplicityButton"></Button>
      <Button title="Page" class="simplicityButton"></Button>
      <Button title="Page" class="simplicityButton"></Button>
      <Button title="Page" class="simplicityButton"></Button>
    </div>
    <Search></Search>
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
  border: 3px solid black;
  padding: 10px;
  width: 100%;
  height: auto;
}
</style>
