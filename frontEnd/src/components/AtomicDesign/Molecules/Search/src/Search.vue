<template>
  <div class="Gridlayout">
    <Inputfield
      v-model="inputData"
      v-bind="fromConfig"
      class="fromClass"
      @focus="onFocus()"
    ></Inputfield>
    <el-icon :size="20" color="#409efc">
      <Edit />
    </el-icon>
  </div>
</template>
<script lang="ts" setup>
import Inputfield from "@A/Atoms/Inputfield/Inputfield";
import { type inputfromConfig, type ConfigKey } from "@H/web/formConfig";

const fromConfig = defineProps<
  Partial<inputfromConfig> & { configType: ConfigKey }
>();
const emit = defineEmits<{
  (e: "focus"): void;
}>();
const onFocus = () => {
  emit("focus");
};
const inputData = defineModel<string>();
</script>

<style scoped>
.fromClass {
  background-color: black;
  color: white;
  font-weight: 900;
  height: 100%;
}
</style>
