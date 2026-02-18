<template>
  <div class="parent">
    <div class="list">
      <Label :label="formLabel" class="label"></Label>
      <div
        v-for="(item, index) in props.configList"
        :key="item.id"
        class="formItem"
      >
        <formItem
          :ref="(el) => (itemRefs[index] = el)"
          v-bind="item"
          v-model="fromData[item.id]"
        ></formItem>
      </div>
      <Button
        title="投稿"
        @click="onPost()"
        class="defaultButton gradient"
      ></Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type formItemType } from "@A/Molecules/FormItem/Interface";
import formItem from "@A/Molecules/FormItem/FormItem";
import Button from "@/components/AtomicDesign/Atoms/Button/Button";
import { ref, onBeforeUpdate } from "vue";
import Label from "@/components/AtomicDesign/Atoms/Label/src/Label.vue";
import { type RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard";
const props = defineProps<{
  configList: formItemType[];
  formLabel: string;
  onEmitButton: () => void;
}>();
const fromData = defineModel<RecruitmentCardType>({ required: true });
const itemRefs = ref<any[]>([]);

onBeforeUpdate(() => {
  itemRefs.value = [];
});
const onPost = () => {
  const results = itemRefs.value.map((child) => child.post());
  const hasError = results.includes(false);
  if (!hasError) {
    props.onEmitButton();
  }
};
</script>
<style scoped>
.list {
  gap: 30px;
}
.form {
  padding: 0 30px;
  white-space: nowrap;
}
.defaultButton {
  color: black;
  padding: 10px 30px;
  margin: 0 30px;
  border-radius: 10px;
}
.formItem {
  background-color: rgb(244, 244, 244) !important;
  border-radius: 10px;
  padding: 10px;
}
.label {
  margin: 10px;
  justify-content: left;
  font-size: 20px;
}
</style>
