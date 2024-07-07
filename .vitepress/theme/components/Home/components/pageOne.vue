<template>
    <div class="container">
        <div class="content">
            <section>
                <img src="https://img.mtsws.cn/LightPicture/2023/08/8b794e021120837b.png" alt="" />
                <BtnDraw :hitokotoData="hitokotoData"></BtnDraw>
            </section>
            <TimeView :Holiday="propsList?.Holiday" :yearTips="propsList?.yearTips" :Weather="propsList?.Weather" ></TimeView>
        </div>
        <footer class="footer">底部信息</footer>
    </div>
</template>

<script setup lang="ts">
import BtnDraw from './BtnDraw.vue';
import TimeView from './TimeView.vue';
const propsList = defineProps<{
    Holiday: string,
    yearTips: string,
    Weather: string,
    hitokotoData: { text: string, from: string }
}>()


</script>

<style scoped lang="scss">
.container {
    flex: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: fadeInOut 1s forwards;

    @keyframes fadeInOut {
        0% {
            opacity: 0;
            transition: all 0.3s ease-in-out;
        }

        25% {
            opacity: 0.25;
            transition: all 0.3s ease-in-out;
        }

        50% {
            opacity: 0.50;
            transition: all 0.3s ease-in-out;
        }

        75% {
            opacity: 0.75;
            transition: all 0.3s ease-in-out;
        }

        100% {
            opacity: 1;
            transition: all 0.3s ease-in-out;
        }

    }

    .content {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        color: #fff;

        section {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                box-shadow: 0 0 10px #fff;
                transition: all 1s;
            }
        }


    }

    .footer {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        background-color: transparent;
    }
}
</style>
