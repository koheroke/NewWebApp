<template>
  <Button
    :title="name"
    class="radiobutton"
    :class="{ onButton: buttonBool }"
  ></Button>
</template>
<script lang="ts" setup>
import Button from "@A/Atoms/Button/Button";
import { watch, onMounted } from "vue";

const props = defineProps<{
  name: string;
  id: string;
  buttonBool: boolean;
}>();
onMounted(() => {
  console.log(props.buttonBool);
});
watch(
  () => props.buttonBool,
  (newValue) => {
    console.log("孫コンポーネントの表示状態:", newValue);
  },
);
</script>
<style scoped>
.onButton {
  background-color: rgb(255, 255, 255) !important;
  transform: translateY(-5%);
}
.radiobutton {
  border-radius: 5px;
  padding: 5px 10px;
  background-color: rgb(236, 231, 231);
  height: 100%;
  width: auto;
  margin-left: 3px;
  box-sizing: border-box;
  font-weight: 900;
  color: rgba(29, 29, 29, 0.688);
  box-shadow: 0 5px 25px -2px rgba(79, 172, 254, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
}
</style>
