<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, onMounted, onUnmounted, computed } from "vue";
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';

// import Header from './components/Header.vue';
import Footer from './components/layout/Footer.vue';
import APlayer from './components/layout/APlayer.vue';


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


</script>

<template>
    <Layout>
        <template #layout-bottom>
            <Footer />
        </template>
    </Layout>

    <APlayer></APlayer>

</template>


<style scoped></style>
