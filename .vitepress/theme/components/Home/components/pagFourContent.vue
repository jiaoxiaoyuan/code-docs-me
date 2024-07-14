<script setup lang="ts">
import { ref, onMounted, onServerPrefetch } from "vue";
// import { NAV_DATA } from "./data";
import MNavLinks from "../../MNavLinks.vue";
import { getNav } from "../../../../api";

const NAV_DATA = ref<any[]>();

interface WebsiteItem {
    id: number;
    websitetype_id: number;
    label: string;
    icon: string;
    title: string;
    descs: string;
    link: string;
    sort: number;
    websitetype: {
        type_name: string;
    };
}

interface ClassifiedWebsite {
    title: string;
    items: WebsiteItem[];
}

function classifyWebsites (websites: WebsiteItem[]): ClassifiedWebsite[] {
    const result: ClassifiedWebsite[] = [];
    const websiteTypes: { [key: number]: string } = {};

    // 收集所有的网站类型
    for (const website of websites) {
        const { websitetype_id, websitetype } = website;
        if (!websiteTypes[websitetype_id]) {
            websiteTypes[websitetype_id] = websitetype.type_name;
        }
    }

    // 按类型分类网站
    for (const typeId in websiteTypes) {
        const typeName = websiteTypes[+typeId];
        const items = websites.filter(website => website.websitetype_id === +typeId);
        result.push({ title: typeName, items });
    }

    return result;
}



const getData = async () => {
    let res = await getNav();
    if (res.status === 200) {
        NAV_DATA.value = classifyWebsites(res.data.data);

    }
};



onServerPrefetch(() => {
    getData();
})

onMounted(() => {
    getData();
});

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
