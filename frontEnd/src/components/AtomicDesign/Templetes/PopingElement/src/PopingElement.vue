<template>
  <div class="popingElementArea">
    <div class="clickArea page" @click="click" v-show="isPoping"></div>
    <div
      class="content-wrapper scroll-y"
      :class="{ downing: isDowning, poping: isPoping }"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
const props = defineProps<{
  trigger: boolean;
}>();
watch(
  () => props.trigger,
  () => {
    openAndclose();
  },
);
const isDowning = ref<boolean>();
const isPoping = ref<boolean>();

const openAndclose = () => {
  if (isPoping.value == null) {
    isDowning.value = props.trigger;
    isPoping.value = !props.trigger;
  }
  isPoping.value = !isPoping.value;
  isDowning.value = !isDowning.value;
};
const click = () => {
  if (isPoping.value == false) return;
  openAndclose();
};
</script>
<style scoped>
.page {
  padding-top: 20px;
  align-items: center;
  overflow-x: hidden;
}
.clickArea {
  position: absolute;
  background-color: transparent;
}

.content-wrapper {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: -30%;
  height: 30%;
  background-color: rgb(255, 255, 255) !important;
  resize: vertical;
  width: 100%;
  display: block;
  scrollbar-width: none;
  box-sizing: border-box;
}
.popingElementArea {
  box-sizing: border-box;
}
</style>
