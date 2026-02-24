<template>
  <div
    class="Gridlayout"
    :class="{ downing: poping, poping: !poping }"
    v-show="poping"
  >
    <div v-if="type == 'log'">
      <el-icon :size="25" color="green">
        <i-ep-SuccessFilled></i-ep-SuccessFilled>
      </el-icon>
    </div>
    <div v-if="type == 'error'">
      <el-icon :size="25" color="red">
        <i-ep-WarningFilled></i-ep-WarningFilled>
      </el-icon>
    </div>
    <Label :label="label" class="notification"></Label>
  </div>
</template>
<script lang="ts" setup>
import Label from "@A/Atoms/Label/Label";
const props = defineProps<{
  label: string;
  type: "error" | "log";
  poping: boolean;
}>();
</script>
<style scoped>
.notification {
  color: green;
}
.Gridlayout {
  position: absolute;
  background-color: rgba(172, 255, 47, 0.583);
  width: 100vw;
  height: auto;
  border-radius: 10px;
  gap: 10px;
  padding: 2px 10px;
  z-index: 2;
}
</style>
