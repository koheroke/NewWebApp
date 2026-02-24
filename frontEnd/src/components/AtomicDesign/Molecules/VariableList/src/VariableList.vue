<template>
  <div class="parent">
    <div v-for="tag in tagData" :key="tag">
      <div class="tags">{{ tag }}</div>
    </div>
    <el-icon
      :size="25"
      color="#409efc"
      @click="onButton"
      @mouseenter="isFilled = true"
      @mouseleave="isFilled = false"
    >
      <CirclePlus v-show="!isFilled" />
      <CirclePlusFilled v-show="isFilled" />
    </el-icon>
  </div>
</template>
<script lang="ts" setup>
import { CirclePlus, CirclePlusFilled } from "@element-plus/icons-vue";
import { ref } from "vue";
const isFilled = ref(false);
const props = defineProps<{
  title: string;
  click: () => void;
}>();

const tagData = defineModel();
const onButton = () => {
  props.click();
};
</script>
<style scoped>
.parent {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tags {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
