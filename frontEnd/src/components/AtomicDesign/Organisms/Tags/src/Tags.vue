<template>
  <div class="page">
    <div class="Gridlayout">
      <Search
        class="Search"
        configType="input"
        placeholder="タグを検索"
      ></Search>
    </div>
    <div class="tags">
      <div v-for="tag in tags" :key="tag">
        <Button
          :title="tag"
          class="defaultButton"
          @click="tagTrigger(tag)"
        ></Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "@A/Atoms/Button/Button.ts";
import testTags from "@/testmodule/tags";
import Search from "@A/Molecules/Search/src/Search.vue";
import { ref } from "vue";
const tags = ref(testTags);

const props = defineProps<{
  tagTrigger: (tag: string) => void;
}>();
</script>
<style scoped>
.title {
  width: 100%;
}
.Gridlayout {
  display: flex;
  justify-content: center;
}
.Search {
  width: 500px;
}
.defaultButton {
  border-radius: 10%;
}
.page {
  padding: 40px 10px;
  gap: 20px;
  align-items: center;
}
</style>
