<template>
  <div class="app-container" :style="{ backgroundImage: `url(${Bgurl})` }">
    <div class="app-segmented">
      <ul>
            <div @click="increment(1)" class="icon fa fa-home" :class="[typeNum === 1 ? 'activeClass' : '']"></div>
            <div @click="increment(2)" class="icon fa fa-keyboard-o" :class="[typeNum === 2 ? 'activeClass' : '']"></div>
            <div @click="increment(3)" class="icon fa fa-coffee" :class="[typeNum === 3 ? 'activeClass' : '']"></div>
            <div @click="increment(4)" class="icon fa fa-dribbble" :class="[typeNum === 4 ? 'activeClass' : '']"></div>
      </ul>
    </div>
    <!-- <component :is="currentComponent"></component> -->
    <ComponentA v-show="typeNum === 1" :Holiday="Holiday" :yearTips="yearTips" :Weather="Weather" :hitokotoData="hitokotoData"></ComponentA>
    <ComponentB v-show="typeNum === 2"></ComponentB>
    <ComponentC v-show="typeNum === 3"></ComponentC>
    <ComponentD v-show="typeNum === 4"></ComponentD>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from "element-plus";
import { ref, shallowRef, onMounted, reactive, onServerPrefetch } from "vue";
import { getHoliday, getIp, getWeather, getHitokoto } from "../../../api";
import ComponentA from "./components/pageOne.vue";
import ComponentB from "./components/pageTwo.vue";
import ComponentC from "./components/pagThree.vue";
import ComponentD from "./components/pagFour.vue";

const currentComponent = shallowRef<ComponentType>(ComponentA);
const typeNum = ref<number>(1);
const Bgurl = ref<string>(
    "https://img.mtsws.cn/LightPicture/2024/07/5637808f678351aa.jpg"
);
type ComponentType =
    | typeof ComponentA
    | typeof ComponentB
    | typeof ComponentC
    | typeof ComponentD;
// 定义组件映射表
const componentMap: Record<1 | 2 | 3 | 4, ComponentType> = {
    1: ComponentA,
    2: ComponentB,
    3: ComponentC,
    4: ComponentD,
};
const currentBgurl = {
    1: "https://img.mtsws.cn/LightPicture/2024/07/5637808f678351aa.jpg",
    2: "https://img.mtsws.cn/LightPicture/2024/07/2568f6994ffa7eb1.jpg",
    3: "https://img.mtsws.cn/LightPicture/2024/07/257df8fba6fd3cc3.jpg",
    4: "https://img.mtsws.cn/LightPicture/2024/07/21ba78820a737c68.jpg",
};

const increment = (e: 1 | 2 | 3 | 4) => {
    typeNum.value = e;
    currentComponent.value = componentMap[e];
    Bgurl.value = currentBgurl[e];
};

let Holiday = ref<string>("");
let yearTips = ref<string>("");
let Weather = ref<string>("");

const getgetHolidayData = async () => {
    let cd = new Date();
    let day =
        zeroPadding(cd.getFullYear(), 4) +
        "" +
        zeroPadding(cd.getMonth() + 1, 2) +
        "" +
        zeroPadding(cd.getDate(), 2);
    let res = await getHoliday(day);
    if (res.code === 1) {
        let { data } = res;
        yearTips.value = data?.yearTips + data?.lunarCalendar;
        Holiday.value =
            "本年度的第" + data?.weekOfYear + "周," + "第" + data?.dayOfYear + "天";
    } else {
        ElMessage({
            message: "获取节假日信息失败",
            type: "error",
        });
    }
};

function zeroPadding (num: number, digit: number) {
    let zero = "";
    for (var i = 0; i < digit; i++) {
        zero += "0";
    }
    return (zero + num).slice(-digit);
}

const getWeatherData = async (city: string) => {
    let res = await getWeather(city);
    if (res.code === 1) {
        let { address, weather, temp, windDirection } = res.data;
        let data = address + "" + weather + "" + temp + windDirection + "风";
        Weather.value = data;
    }
};

let hitokotoData = reactive({
    text: "时光匆匆，岁月静好。",
    from: "無名",
});

const getIpWeatherData = async () => {
    let res = await getIp();
    if (res.code === 1) {
        setTimeout(() => {
            getWeatherData(res.data.city);
        }, 3000);
    }
};

const getHitokotoData = async () => {
    let res = await getHitokoto();
    hitokotoData.text = res?.hitokoto;
    hitokotoData.from = res?.from;
};

onServerPrefetch(async () => {
    await getHitokotoData();
    await getgetHolidayData();
    setTimeout(async () => {
        await getIpWeatherData();
    }, 2000);
})

onMounted(async () => {
    await getHitokotoData();
    await getgetHolidayData();
    setTimeout(async () => {
        await getIpWeatherData();
    }, 2000);
});


</script>
<style scoped lang="scss">
.app-container-activeClass {
    background-image: url("https://img.mtsws.cn/LightPicture/2024/07/5637808f678351aa.jpg");
}

.app-container {
    height: 100vh;
    background-color: #374046;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-attachment: fixed;
    background-color: rgba(0, 0, 0, 0.1) !important;
    background-blend-mode: multiply;

    .app-segmented {
        // height: 280px;
        height: 100vh;
        width: 100px;
        text-align: center;
        background-color: rgba(55, 64, 70, 0.2);

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        .icon {
            color: #fff;
            font-size: 24px;
            display: block;
            margin: 30px 0;
            cursor: pointer;

            &:hover {
                color: #f5f5f5;
                opacity: 0.6;
                transform: scale(1.2);
                transition: all 0.3s ease-in-out;
            }

            &:active {
                transform: scale(1.1);
                transition: all 0.3s ease-in-out;
            }

            &:focus {
                outline: none;
            }
        }

        .activeClass {
            transform: scale(1.5);
            color: #fff;
            transition: all 0.3s ease-in-out;
        }
    }
}
</style>
