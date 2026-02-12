<template>
  <div class="parent">
    <div>
      <from type="message" class="fromClass"></from>
    </div>
    <Button title="送信" class="defaultButton"></Button>
  </div>
</template>
<script lang="ts" setup>
import from from "@/components/AtomicDesign/Atoms/from/from.ts";
import Button from "@/components/AtomicDesign/Atoms/Button/Button.ts";
</script>
<style scoped>
.parent {
  width: 100%;
  height: auto;
}
.defaultButton {
  width: auto;
}
</style>
