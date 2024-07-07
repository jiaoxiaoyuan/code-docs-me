<script setup lang="ts">
import { NAV_DATA } from "./data";
import MNavLinks from "../../MNavLinks.vue";
</script>
<template>
  <div class="content">
    <div class="Classification">
      <MNavLinks v-for="{ title, items } in NAV_DATA" :title="title" :items="items" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
    flex: 1;
    display: flex;
    font-size: 24px;
    font-weight: 700;
    transition: all 1s;
    z-index: 100;

    .Classification {
        // height: calc(100vh - 50px);
        height: 100vh;
        flex: 1;
        padding: 30px 50px;
        overflow-y: auto;
        /* 以下为可选的滚动条样式 */
        scrollbar-width: thin;
        /* 设置滚动条和轨道的颜色 */
        scrollbar-color: #9ca3af #1f2937;

        /* Webkit 浏览器专用的滚动条样式 */
        &::-webkit-scrollbar {
            width: 1px;
            /* 滚动条宽度 */
        }

        &::-webkit-scrollbar-track {
            background-color: #9ca3af;
            /* 轨道背景颜色 */
        }

        &::-webkit-scrollbar-thumb {
            background-color: #9ca3af;
            /* 滑块颜色 */
            border-radius: 1px;
            /* 滑块圆角 */
        }
    }
}
</style>
