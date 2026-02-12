<template>
  <div class="Gridlayout">
    <div class="labelAndfrom">
      <Label label="search" class="fontSize"></Label>
      <Inputfield
        v-model="fromData"
        v-bind="fromConfig"
        class="fromClass"
        @click="holdfrom()"
      ></Inputfield>
    </div>
    <Button title="Search" class="defaultButton" @click="onButton"></Button>
  </div>
</template>
<script lang="ts" setup>
import Inputfield from "@/components/AtomicDesign/Atoms/Inputfield/Inputfield";
import Button from "@/components/AtomicDesign/Atoms/Button/Button";
import Label from "@/components/AtomicDesign/Atoms/Label/src/Label.vue";
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

const fromData = defineModel();
</script>

<style scoped>
.labelAndfrom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.fontSize {
  size: 20px;
}
.fromClass {
  background-color: black;
  color: white;
  font-weight: 900;
}
</style>
