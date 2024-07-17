<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, onMounted, onUnmounted, computed } from "vue";
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';

// import Header from './components/Header.vue';
import Footer from './components/layout/Footer.vue';
import APlayer from './components/layout/APlayer.vue';


// import HomeIndex from "./components/Home/index.vue";
import HomeLayout from './components/Home/layout.vue';

const { Layout } = DefaultTheme;
const { page, theme, frontmatter } = useData();

// console.log('page',page)
// console.log('theme',theme)
// console.log('frontmatter', frontmatter.value)


const hasSidebar = computed(() => {
    return (
        frontmatter.value.aside !== false && frontmatter.value.layout !== 'home'
    )
});


</script>

<template>
    <Layout>
        <template #layout-bottom>
            <Footer />
        </template>
    </Layout>

    <HomeLayout v-if="frontmatter.index"></HomeLayout>

    <APlayer></APlayer>

</template>


<style scoped></style>
