<script setup lang='ts'>
import { ref, onMounted, onServerPrefetch } from "vue";
import { defineClientComponent } from 'vitepress'
import { getMusic } from "../../../api/";

// https://www.npmjs.com/package/@worstone/vue-aplayer
const lrcShow = ref<boolean>(false);
const autoplay = ref<boolean>(false);
const aplayer = ref<any>(null);
const audio = ref<any[]>([
    {
        "title": "Legends Never Die",
        "author": "Against the Current",
        "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=506196018&auth=c5c21102c12896557ecf3fd43a415c050fe757a6",
        "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163918904060&auth=ab3ada1788834c2c30fc14be2320219dbeaebc12",
        "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=506196018&auth=9038409d31ec7f40ea7888b77f0839051a2859a5"
    },
]);

const APlayer = defineClientComponent(() => {
    return import('../../../utils/vue-aplayer/vue-aplayer.js')
})

const getData = async () => {
    let res = await getMusic();
    if (res.status === 200) {
        audio.value = res.data.data;
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
    <APlayer :audio="audio" ref="aplayer" :lrcShow="lrcShow"  :autoplay="autoplay" mode="fixed"   />
</template>

<style scoped lang='scss'></style>
