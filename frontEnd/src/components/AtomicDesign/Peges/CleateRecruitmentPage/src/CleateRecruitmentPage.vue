<template>
  <div class="page">
    <TopicCreationfrom
      class="form scroll-y absoluteCenter"
      :addTag="addTag"
    ></TopicCreationfrom>
    <PopingElement :trigger="popingElementTrigger">
      <Tags></Tags>
    </PopingElement>
  </div>
</template>
<script lang="ts" setup>
import TopicCreationfrom from "@/components/AtomicDesign/Organisms/TopicCreationForm/TopicCreationForm";
import Tags from "@/components/AtomicDesign/Organisms/Tags/Tags";
import { ref } from "vue";
import { PopingElement } from "@/components/AtomicDesign/Templetes/PopingElement/PopingElement";
const popingElementTrigger = ref(false);
const addTag = () => {
  popingElementTrigger.value = !popingElementTrigger.value;
};
</script>
<style scoped>
.form {
  position: absolute;
  top: 45%;
  width: 90%;
  height: 80%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  box-sizing: border-box;
}
</style>
