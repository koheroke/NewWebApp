<template>
  <Button
    :title="name"
    class="radiobutton"
    :class="{ gradient: buttonBool }"
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
</script>
<style scoped>
.onButton {
  background-color: aqua !important;
}
.radiobutton {
  border-radius: 5px;
  padding: 10px;
  background-color: white;
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
}
</style>
