<script setup lang='ts'>
import { ref, onServerPrefetch, onMounted } from 'vue'
import { getTimeline } from '../../../../api';
import { timeCutStr, formatDate, timeSub } from 'func-package';

function convertTimestampToHMS (timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function calculateHours (startTimestamp: number, endTimestamp: number): number {
    // 将时间戳从秒转换为毫秒
    const startDate = new Date(startTimestamp * 1000);
    const endDate = new Date(endTimestamp * 1000);

    // 计算两个时间戳之间的毫秒数
    const millisecondsDifference = endDate.getTime() - startDate.getTime();

    // 将毫秒数转换为小时数
    const hoursDifference = millisecondsDifference / (1000 * 60 * 60);

    // 取整小时数
    const wholeHours = Math.floor(hoursDifference);

    return wholeHours;
}


interface DataItem {
    url: string;
    name: string;
}

function extractUrls (data: DataItem[]): string[] {
    return data.map(item => item.url);
}

type activities = {
    sleepTime: number //睡眠时间
    wakeUpTime: number // 醒来时间
    duration?: number // 时长
    stepCount: number // 步数
    releaseTime: number // 发布时间
    weather: string // 天气
    activity: string //活动
    state: string // 状态/心情
    peoples: string // 人物
    foods: string //食物
    photo: string //拍照
    position: string //位置
    quotations: string // 说说
}


const activities = ref<activities[]>([])

const getData = async () => {
    let res = await getTimeline();
    if (res.status === 200) {
        activities.value = res.data.data
    }
};


onServerPrefetch(async () => {
    await getData()
})



onMounted(async () => {
    await getData()
})


</script>

<template>
    <el-timeline class="timeline">
        <!-- 循环判断索引的奇偶区分开左右 -->

        <el-timeline-item v-for="(activity, index) in activities" :key="index"
            :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'" :timestamp="formatDate(activity?.releaseTime * 1000, 'YY年MM月DD日') + ' ' + timeCutStr(activity?.releaseTime * 1000)" placement="top">
            <el-card shadow="hover">
                <!-- 睡眠 -->
                <div class="card_item">
                    <div class="card_title">
                    <i class="fa fa-hotel"></i>
                        睡眠
                    </div>
                    <el-row style="width: 100%; text-align: left;">
                        <el-tag type="primary" size="large">入眠 {{ convertTimestampToHMS(activity?.sleepTime) }}</el-tag>
                        <el-tag type="primary" size="large">醒来 {{ convertTimestampToHMS(activity?.wakeUpTime) }}</el-tag>
                        <el-tag type="primary" size="large">时长{{ calculateHours(activity?.sleepTime, activity?.wakeUpTime) }}个小时</el-tag>
                    </el-row >
                </div>

                <!-- 天气 -->
                <div class="card_item" v-if="activity?.weather.length > 0">
                    <div class="card_title">
                    <i class="fa fa-rss"></i>
                        天气
                    </div>
                    <el-row style="width: 100%; text-align: left;">

                    <template  v-for="(item, is) in activity?.weather.split(',')" :key="is">
                         <el-tag size="large">{{ item }}</el-tag>
                    </template>

                    </el-row >
                </div>

                    <!-- 步数 -->
                <div class="card_item">
                    <div class="card_title">
                    <i class="fa fa-blind"></i>
                        步数
                    </div>
                    <el-row style="width: 100%; text-align: left;">
                        <el-tag size="large">{{ activity?.stepCount }}步</el-tag>
                    </el-row >
                </div>
                <!-- 活动 -->
                <div class="card_item" v-if="activity?.activity.length > 0">
                    <div class="card_title">
                    <i class="fa fa-font-awesome"></i>
                        重要事件
                    </div>
                    <el-row style="width: 100%; text-align: left;">
                     <template  v-for="(item, is) in activity?.activity.split(',')" :key="is">
                        <el-tag size="large">{{ item }}</el-tag>
                     </template>

                    </el-row >
                </div>

                <!-- 心情 -->
                <div class="card_item" v-if="activity?.state.length > 0">
                    <div class="card_title">
                    <i class="fa fa-thermometer"></i>
                        心情
                    </div>
                    <el-row style="width: 100%; text-align: left;">
                     <template  v-for="(item, is) in activity?.state.split(',')" :key="is">
                        <el-tag size="large">{{ item }}</el-tag>
                     </template>
                    </el-row >
                </div>
                <!-- 人物 -->
                <div class="card_item" v-if="activity?.peoples.length > 0">
                    <div class="card_title">
                    <i class="fa fa-users"></i>
                        人物
                    </div>
                    <el-row style="width: 100%; text-align: left;">
                     <template  v-for="(item, is) in activity?.peoples.split(',')" :key="is">
                        <el-tag size="large">{{ item }}</el-tag>
                     </template>

                    </el-row >
                </div>
                <!-- 食物 -->
                <div class="card_item" v-if="activity?.foods.length > 0">
                    <div class="card_title">
                    <i class="fa fa-users"></i>
                        食物
                    </div>
                    <el-row style="width: 100%; text-align: left;">
                     <template  v-for="(item, is) in activity?.foods.split(',')" :key="is">
                       <el-tag size="large">{{ item }}</el-tag>
                     </template>
                    </el-row >
                </div>
                <!-- 拍摄 -->
                <div class="card_item" v-if="activity?.photo.length > 0">
                    <div class="card_title">
                    <i class="fa fa-users"></i>
                        拍摄
                    </div>
                    <el-row style="width: 100%; text-align: left;">
                        <template  v-for="(item, is) in JSON.parse(activity?.photo)" :key="is">
                            <el-image
                                style="width: 110px; height: 110px; padding: 5px"
                                :src="item?.url"
                                :zoom-rate="1.2"
                                :max-scale="7"
                                :min-scale="0.2"
                                :initial-index="4"
                                :preview-src-list="extractUrls(JSON.parse(activity?.photo))"
                                fit="cover"
                            />
                        </template>
                    </el-row >
                </div>
                <!-- 说说 -->
                <div class="card_item" v-if="activity?.quotations.length > 0">
                    <div class="card_title">
                    <i class="fa fa-font-awesome"></i>
                        说说
                    </div>
                    <el-row style="width: 100%; text-align: left;">
                        <!-- <el-alert :title="activity?.quotations" type="success" closable="false" /> -->
                         <el-text class="mx-1">{{ activity?.quotations }}</el-text>
                    </el-row >
                </div>

                <!-- 位置 -->
                <div class="card_item" v-if="activity?.position.length > 0">
                    <div class="card_title">
                    <i class="fa fa-users"></i>
                        位置
                    </div>
                    <el-row style="width: 100%; text-align: left;">
                        <template  v-for="(item, is) in activity?.position.split(',')" :key="is">
                            <el-tag size="large">{{ item }}</el-tag>
                        </template>
                    </el-row >
                </div>
            </el-card>
        </el-timeline-item>
    </el-timeline>
</template>

<style scoped lang='scss'>
/* `el-timeline`的容器`padding` */
.timeline {
    width: 100%;
    padding: 50px;
    height: 90vh;
    overflow-y: auto;
    /* 以下为可选的滚动条样式 */
    scrollbar-width: thin;
    /* 设置滚动条和轨道的颜色 */
    scrollbar-color: #f5f5f5 #d2d5d9;

    /* Webkit 浏览器专用的滚动条样式 */
    &::-webkit-scrollbar {
        width: 0.5px;
        /* 滚动条宽度 */
    }

    &::-webkit-scrollbar-track {
        background-color: #eff1f4;
        /* 轨道背景颜色 */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #9ca3af;
        /* 滑块颜色 */
        border-radius: 0.5px;
        /* 滑块圆角 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #bdc0c4;
        /* 滑块悬停颜色 */
    }

    //
    // .el-timeline-item__wrapper {
    //     width: 50% !important;
    // }

    .card_item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;

        .card_title {
            // font-size: 16px;
            color: #333;
            font-size: 1.05rem;
            letter-spacing: 2px;
            margin-bottom: 5px;
        }
    }

    .el-timeline-item {
        width: 30% !important;
    }

    .el-tag {
        margin-right: 10px;
    }

    :deep(.el-timeline-item__timestamp) {
        color: #fff !important;
        font-size: 15px !important;
    }



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
