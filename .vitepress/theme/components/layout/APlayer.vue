<script setup lang='ts'>
import { ref, onMounted, onServerPrefetch } from "vue";
import { defineClientComponent } from 'vitepress'
import { getMusic } from "../../../api/";

// https://www.npmjs.com/package/@worstone/vue-aplayer
const lrcShow = ref<boolean>(false);
const autoplay = ref<boolean>(false);
const aplayer = ref<any>(null);
const audio = ref<any[]>([]);

const APlayer = defineClientComponent(() => {
    return import('../../../utils/vue-aplayer/vue-aplayer.js')
})

const getData = async () => {
    let res = await getMusic();
    if (res.status === 200) {
        audio.value = res.data.data;
    }
};



onServerPrefetch(async () => {
    await getData();
})

onMounted(async () => {
    if (!audio.value) {
        await getData();
    }

});

</script>

<template>
    <APlayer :audio="audio" ref="aplayer" :lrcShow="lrcShow"  :autoplay="autoplay" mode="fixed"   />
</template>

<style scoped lang='scss'></style>
