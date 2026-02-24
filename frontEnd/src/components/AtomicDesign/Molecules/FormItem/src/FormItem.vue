<template>
  <div class="Gridlayout">
    <el-icon :size="20" color="#409efc">
      <Edit />
    </el-icon>
    <Label :label="formConfig.label" class="formConfigtitle"></Label>
    <Label
      :label="required"
      :class="['formLabel gradient', { notFilledin: alert }]"
    ></Label>
    <div class="list">
      <component
        :is="formConfig.component"
        v-model="fromData"
        v-bind="formConfig.props"
        @focus="onFocus"
        class="component"
      />
      <Label
        label="!記入が必要です"
        v-show="alert"
        class="caveat left-align-start"
      ></Label>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Label from "@A/Atoms/Label/Label";
import { ref } from "vue";
import { type formItemType } from "../Interface";
import { Edit } from "@element-plus/icons-vue";
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
  width: auto;
  gap: 10px;
  display: flex;
  align-items: center;
}
.list {
  gap: 0px !important;
  width: 100%;
}

.notFilledin {
  background: #ff0000 !important;
  background: fixed;
  color: white;
}
.caveat {
  margin-left: 20px !important;
  font-size: 10px;
}
.formLabel {
  border-radius: 10px;
  padding: 3px 10px;
}
.component {
  height: auto;
  width: auto;
}
.formConfigtitle {
  color: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
</style>
