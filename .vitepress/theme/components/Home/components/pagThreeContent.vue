<script lang="ts" setup>
import { ref, onServerPrefetch, onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import ThreeTimeline from './ThreeTimeline.vue';

const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}



</script>

<template>
    <div class="content">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="日迹" name="first">
                <ThreeTimeline></ThreeTimeline>
            </el-tab-pane>
            <el-tab-pane label="摄影" name="second">摄影</el-tab-pane>
            <el-tab-pane label="随记" name="third">随机</el-tab-pane>
            <el-tab-pane label="想法" name="fourth">想法</el-tab-pane>
        </el-tabs>
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
    width: 100%;
    padding: 30px;
    overflow: hidden;

    .demo-tabs {
        width: 100%;
    }

    .el-tabs__content {
        padding: 32px;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
    }
}
</style>
