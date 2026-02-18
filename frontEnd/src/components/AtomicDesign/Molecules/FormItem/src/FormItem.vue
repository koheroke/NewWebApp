<template>
  <div class="list">
    <div class="Gridlayout">
      <Label
        :label="required"
        :class="['formLabel gradient', { notFilledin: alert }]"
      ></Label>
      <Label :label="formConfig.label"></Label>
      <component
        :is="formConfig.component"
        v-model="fromData"
        v-bind="formConfig.props"
        @focus="onFocus"
        class="component"
      />
    </div>
    <Label
      label="!記入が必要です"
      v-show="alert"
      class="caveat left-align-start"
    ></Label>
  </div>
</template>
<script lang="ts" setup>
import Label from "@A/Atoms/Label/Label";
import { ref } from "vue";
import { type formItemType } from "../Interface";
const alert = ref(false);
const formConfig = defineProps<formItemType>();
const fromData = defineModel();
const required = ref(formConfig.required ? "必須" : "任意");
const post = () => {
  if (formConfig.isValid) {
    const valid = formConfig.isValid(fromData.value);
    if (formConfig.required) {
      alert.value = !valid;
    }
    return valid;
  } else {
    if (formConfig.required && fromData.value == "") {
      alert.value = true;
      return false;
    }
  }
};
const onFocus = () => {
  alert.value = false;
};

defineExpose({
  post,
});
</script>
<style scoped>
.Gridlayout {
  border-radius: 10px;
  padding: 0 5px;
}
.list {
  gap: 0;
}
.notFilledin {
  background: #ff0000 !important;
  background: fixed;
  color: white;
}
.formLabel {
  border-radius: 10px;
  padding: 3px 10px;
}
.component {
  height: auto;
}
</style>
