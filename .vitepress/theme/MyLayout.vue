<script setup lang="ts">
import { computed } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';

// import Copyright from './components/layout/Copyright.vue';
import Footer from './components/layout/Footer.vue';


const { Layout } = DefaultTheme;
const { page, theme, frontmatter } = useData();

const hasSidebar = computed(() => {
    return (
        frontmatter.value.aside !== false && frontmatter.value.layout !== 'home'
    )
});

</script>

<template>
     <ClientOnly>
       <Layout>
            <template #layout-bottom>
                <Footer v-if="!hasSidebar && (theme.footerConfig?.showFooter ?? true) && (frontmatter?.showFooter ?? true)" />
            </template>
        </Layout>
     </ClientOnly>

</template>


<style scoped></style>