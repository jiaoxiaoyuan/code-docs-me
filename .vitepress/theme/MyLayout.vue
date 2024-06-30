<script setup lang="ts">

import { computed } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';

import Header from './components/Header.vue';
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

</script>

<template>
      <!-- <Header /> -->
       <Layout>
            <template #layout-bottom>
                <!-- <Footer v-if="!hasSidebar && (theme.footerConfig?.showFooter ?? true) && (frontmatter?.showFooter ?? true)" /> -->
                <Footer />
            </template>
        </Layout>
</template>


<style scoped></style>
