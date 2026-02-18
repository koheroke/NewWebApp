<template>
  <div class="Gridlayout">
    <div class="labelAndfrom">
      <Inputfield
        v-model="inputData"
        v-bind="fromConfig"
        class="fromClass"
        @click="holdfrom()"
      ></Inputfield>
    </div>
    <Button title="Search" class="defaultButton" @click="onButton"></Button>
  </div>
</template>
<script lang="ts" setup>
import Inputfield from "@A/Atoms/Inputfield/Inputfield";
import Button from "@A/Atoms/Button/Button";
import {
  type inputfromConfig,
  type ConfigKey,
} from "@/components/Hooks/web/formConfig";

const fromConfig = defineProps<
  Partial<inputfromConfig> & { configType: ConfigKey }
>();
const emit = defineEmits<{
  (e: "hold"): void;
  (e: "search"): void;
}>();

const onButton = () => {
  emit("search");
};
const holdfrom = () => {
  emit("hold");
};

const inputData = defineModel<string>();
</script>

<style scoped>
.labelAndfrom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.defaultButton {
  background-color: rgb(134, 194, 247);
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: rgb(172, 203, 230);
  }
}
.fontSize {
  size: 20px;
}
.fromClass {
  background-color: black;
  color: white;
  font-weight: 900;
  height: 100%;
}
</style>
