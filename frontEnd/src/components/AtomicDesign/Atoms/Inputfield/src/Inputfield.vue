<template>
  <el-input
    v-model="inputData"
    :type="fromType.fromType"
    :autosize="autosizeConfig"
    :placeholder="fromType.placeholder"
    :input-style="inputInternalStyle"
    class="custom-round-input"
    @keydown.enter.exact="onEnterKey"
    @keydown.enter.shift.exact="onShiftEnterKey"
    resize="none"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ElInput } from "element-plus";
import {
  fromConfig,
  defaultConfig,
  type inputfromConfig,
  type ConfigKey,
} from "@/components/Hooks/web/formConfig";
import "element-plus/dist/index.css";
const propsData = defineProps<
  Partial<inputfromConfig> & { configType: ConfigKey }
>();
const props = computed(() => {
  const filtered = Object.fromEntries(
    Object.entries(propsData).filter(([_, value]) => value !== undefined),
  );
  return filtered as { configType: ConfigKey };
});

const inputData = defineModel<string>({ default: "" });
const type: ConfigKey = props.value.configType;
const fromType = {
  ...defaultConfig,
  ...{ ...fromConfig[type], ...props.value },
};
const autosizeConfig = computed(() => {
  if (fromType.resize === false) return false;
  return { minRows: fromType.numberOfLines, maxRows: 10 };
});
const newLineConfig = computed(() => {
  if (fromType.newLine === false) return false;
});
const fontRadius = 0.7;
const lineHeight = 25;
const fontSize = lineHeight * fontRadius;
const fromHeight = lineHeight * fromType.numberOfLines;

const inputInternalStyle = computed(
  () =>
    ({
      width: fromType.width ? `${fromType.width}px` : "flex: 1",
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
      height: autosizeConfig.value === false ? `${fromHeight}px` : "auto",
    }) as const,
);

const handleEnter = (value: string) => {
  let val = value;
  if (fromType.numberOfLines === 1) {
    val = value.replace(/\n/g, "");
  }
  inputData.value = val;
};

const onEnterKey = (e: Event) => {
  if (e instanceof KeyboardEvent) {
    if (e.isComposing || type == "text") return;
    e.preventDefault();
    handleEnter(inputData.value);
  }
};

const onShiftEnterKey = (e: Event) => {
  if (newLineConfig.value === false && autosizeConfig.value === false) {
    e.preventDefault();
    handleEnter(inputData.value);
  } else {
  }
};
</script>

<style scoped>
.custom-round-input {
  background-color: transparent !important;
}
.custom-round-input :deep(.el-input__wrapper),
.custom-round-input :deep(.el-textarea__inner) {
  border-radius: 10px !important;
}
</style>
