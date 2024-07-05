<script setup lang="ts">
import APlayer from "../utils/vue-aplayer/vue-aplayer";
import { nextTick, onBeforeUnmount, ref, onMounted, onUnmounted, computed } from "vue";
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';

// import Header from './components/Header.vue';
import Footer from './components/layout/Footer.vue';


const { Layout } = DefaultTheme;
const { page, theme, frontmatter } = useData();

// console.log('page',page)
// console.log('theme',theme)
// console.log('frontmatter',frontmatter)


const hasSidebar = computed(() => {
    return (
        frontmatter.value.aside !== false && frontmatter.value.layout !== 'home'
    )
});

// https://www.npmjs.com/package/@worstone/vue-aplayer
const aplayer = ref<any>(null);
const audio = ref<any[]>([]);

onMounted(() => {
    // 加载歌曲信息
    let audios = [
        {
            name: 'Miracle',
            artist: 'Miracle',
            url: 'http://img.mtsws.cn/LightPicture/2023/08/4ce8472acedcc3fb.mp3',
            cover: 'https://img.mtsws.cn/LightPicture/2023/08/8b794e021120837b.png',
        },
        {
            name: 'Miracle',
            artist: 'Miracle',
            url: 'http://img.mtsws.cn/LightPicture/2023/08/7f5fe3e3ce593244.mp3',
            cover: 'https://img.mtsws.cn/LightPicture/2023/08/8b794e021120837b.png',
        },
    ];
    // 添加到播放器列表
    //aplayer.value.addList(audios);
});

</script>

<template>
      <!-- <Header /> -->
       <Layout>
            <template #layout-bottom>
                <!-- <Footer v-if="!hasSidebar && (theme.footerConfig?.showFooter ?? true) && (frontmatter?.showFooter ?? true)" /> -->
                <Footer />
            </template>
        </Layout>

    <!-- <APlayer :audio="audio" ref="aplayer" lrcShow  autoplay=fales mode="fixed"  /> -->

</template>


<style scoped></style>
