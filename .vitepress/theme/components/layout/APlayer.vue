<script setup lang='ts'>
import { ref, onMounted } from "vue";
import { defineClientComponent } from 'vitepress'

// https://www.npmjs.com/package/@worstone/vue-aplayer
const aplayer = ref<any>(null);
const audio = ref<any[]>([
    {
        "title": "烟雨行舟（原唱：伦桑）",
        "author": "司南",
        "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1301884692&auth=898d1269a732530c578b63624fe8be0bdfc14205",
        "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951167056907210&auth=a4976ca0e04dc7a5592a706e1bd70c93acd1591f",
        "lrc": "http://api.i-meto.com/meting/api?server=netease&type=lrc&id=1301884692&auth=425c4730fe0caf12cf4c0eabacc3398097c8ba49"
    },
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


onMounted(() => {
    // 加载歌曲信息
    // let audios = [
    //     {
    //         "title": "烟雨行舟（原唱：伦桑）",
    //         "author": "司南",
    //         "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1301884692&auth=898d1269a732530c578b63624fe8be0bdfc14205",
    //         "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951167056907210&auth=a4976ca0e04dc7a5592a706e1bd70c93acd1591f",
    //         "lrc": "http://api.i-meto.com/meting/api?server=netease&type=lrc&id=1301884692&auth=425c4730fe0caf12cf4c0eabacc3398097c8ba49"
    //     },
    //     {
    //         "title": "Legends Never Die",
    //         "author": "Against the Current",
    //         "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=506196018&auth=c5c21102c12896557ecf3fd43a415c050fe757a6",
    //         "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163918904060&auth=ab3ada1788834c2c30fc14be2320219dbeaebc12",
    //         "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=506196018&auth=9038409d31ec7f40ea7888b77f0839051a2859a5"
    //     }
    // ];
    // 添加到播放器列表
    // aplayer.value.addList(audios);
});

</script>

<template>
    <APlayer :audio="audio" ref="aplayer" lrcShow  autoplay=fales mode="fixed"  />
</template>

<style scoped lang='scss'></style>
