<script lang="ts" setup>
import { RouterView } from "vue-router";
import Topbar from "@A/Organisms/Topbar/Topbar";
</script>
<template>
  <div class="page">
    <div class="pageTop">
      <Topbar></Topbar>
    </div>
    <div class="body">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
.pageTop {
  width: 100vw;
  padding-top: 10px;
  flex-shrink: 0;
}
.page {
  overflow: hidden;
}
.body {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    rgba(79, 172, 254, 0.1) 0%,
    rgba(0, 242, 254, 0.05) 100%
  );
}
</style>
