<script lang="ts" setup>
const activities = [
    {
        content: 'Event start',
        timestamp: '2018-04-15',
    },
    {
        content: 'Approved',
        timestamp: '2018-04-13',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },

]
</script>

<template>
      <div class="content">
          <el-timeline class="timeline">
        <!-- 循环判断索引的奇偶区分开左右 -->
        <el-timeline-item v-for="(activity, index) in activities" :key="index"
            :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'" :timestamp="activity.timestamp" placement="top">
            <el-card>
                <h4>{{ activity.timestamp }}</h4>
                <p>{{ activity.content }}</p>
            </el-card>
        </el-timeline-item>
    </el-timeline>
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
}

/* `el-timeline`的容器`padding` */
.timeline {
    width: 100%;
    padding: 50px;
    height: 100vh;
    overflow-y: auto;
}

/* 右侧`el-timeline-item`的样式，将原始时间轴组件整体移动到右半侧 */
.timeline-right {
    left: 50%;
    width: 50%;
}

/* 左侧`el-timeline-item`的样式，同上，仅是为了方便下面的CSS样式修改 */
.timeline-left {
    left: 50%;
    width: 50%;
}

/* 针对左侧内容修改样式，注意这里使用的scss */
.timeline-left :deep(.el-timeline-item__wrapper) {
    right: 100%;
    padding: 0 19px 0 0;
    text-align: right;
}
</style>
