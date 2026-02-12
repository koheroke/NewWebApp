<template>
  <div class="page">
    <div class="buttom">
      <sendMessageBar></sendMessageBar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import from from "@/components/AtomicDesign/Atoms/from/from.ts";
import Button from "@/components/AtomicDesign/Atoms/Button/Button.ts";
import Label from "@/components/AtomicDesign/Atoms/Label/Label";
import sendMessageBar from "@/components/AtomicDesign/Organisms/sendMessageBar/sendMessageBar";
</script>
<style scoped>
.buttom {
  position: absolute;
  bottom: 0%;
  left: 0%;
  width: 100%;
}
.page {
  background-color: rgb(244, 243, 243);
}
</style>
