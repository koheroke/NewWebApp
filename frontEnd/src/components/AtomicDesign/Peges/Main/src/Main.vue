<script lang="ts" setup>
import { RouterView } from "vue-router";
import Topbar from "@/components/AtomicDesign/Organisms/Topbar/Topbar";
</script>
<template>
  <div class="page">
    <div class="pageTop">
      <Topbar></Topbar>
    </div>
    <body class="body">
      <RouterView />
    </Body>
  </div>
</template>
<style scoped>
.pageTop {
  width: 100vw;
  padding-top: 10px;
  flex-shrink: 0;
}
.page{
  overflow: hidden;
}
.body{
   flex: 1;
   display: flex;
   flex-direction: column;
}
</style>