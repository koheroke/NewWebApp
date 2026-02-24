<template>
  <div class="parent recativeCenter">
    <div class="list">
      <div
        v-for="(item, index) in props.configList"
        :key="item.id"
        class="formItem radius"
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
        class="radius gradient postButton"
      ></Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type formItemType } from "@A/Molecules/FormItem/Interface";
import formItem from "@A/Molecules/FormItem/FormItem";
import Button from "@/components/AtomicDesign/Atoms/Button/Button";
import { ref, onBeforeUpdate } from "vue";
import { type RecruitmentCardType } from "@/components/Interfaces/web/recruitmentCard";
const props = defineProps<{
  configList: formItemType[];
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
  gap: 50px;
  width: 90%;
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
}
.label {
  margin: 10px;
  justify-content: left;
  font-size: 20px;
}
.radius {
  border-radius: 10px;
}
.parent {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.postButton {
  transition: scale 0.2s;
}
.postButton:hover {
  scale: 1.03;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
