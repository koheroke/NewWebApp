<template>
  <div class="page">
    <div class="pageTop"><Topbar></Topbar></div>
    <div class="pageBody">
      <RecruitmentList></RecruitmentList>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Topbar from "@/components/AtomicDesign/Organisms/Topbar/src/Topbar.vue";
import RecruitmentList from "@/components/AtomicDesign/Organisms/RecruitmentList/src/RecruitmentList.vue";
</script>
<style scoped>
.pageTop {
  width: 100vw;
  padding-top: 10px;
  flex-shrink: 0;
}
.pageBody {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  overflow-y: auto;
  background-color: rgba(231, 136, 64, 0.486);

  /* --- Firefox用 --- */
  scrollbar-width: none;
  /* --- IE, Old Edge用 --- */
  -ms-overflow-style: none;
}
.page {
  background-color: rgb(255, 255, 255);
  overflow-y: hidden;
}
</style>
