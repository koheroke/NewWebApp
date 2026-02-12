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
          @click="clickTag(tag)"
        ></Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "@/components/AtomicDesign/Atoms/Button/Button.ts";
import testTags from "@/testmodule/tags";
import { tagStore } from "@/components/Stores/appStore";
import Search from "@/components/AtomicDesign/Molecules/Search/src/Search.vue";
const tagstore = tagStore();
import { ref } from "vue";
const tags = ref(testTags);
const clickTag = (tag: string) => {
  tagstore.add(tag);
};
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
.tags {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px;
  gap: 15px;
  background-color: white;
  border-radius: 10px;
  padding: 20px 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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
