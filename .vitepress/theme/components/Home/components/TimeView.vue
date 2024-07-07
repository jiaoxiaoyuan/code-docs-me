
<script setup lang="ts">
import { ref, } from 'vue'

const date = ref<string>('')
const time = ref<string>('')
const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];



setInterval(updateTime, 1000);
function updateTime () {
    let cd = new Date();
    time.value = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    date.value = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};


function zeroPadding (num: number, digit: number) {
    let zero = '';
    for (var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

const propsList = defineProps<{
    Holiday: string,
    yearTips: string,
    Weather: string
}>()



</script>
<template>
    <div class="clockTime">
        <p class="date">{{ date }}</p>
        <p class="text">{{ propsList?.yearTips }}</p>
        <p class="Holiday">{{ propsList?.Holiday }}</p>
        <p class="time">{{ time }}</p>
        <p class="Weather">{{ propsList?.Weather }} </p>
    </div>
</template>

<style scoped lang="scss">
.clockTime {
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    position: absolute;
    right: 50px;
    top: 50px;
    transition: all 1s;
    color: #fff;

    p {
        margin: 0;
        padding: 0;
    }

    .time {
        letter-spacing: 0.05em;
        font-size: 50px;
        transition: all 1s;
    }

    .text {
        letter-spacing: 0.1em;
        font-size: 16px;
        transition: all 1s;
        // padding-bottom: 10px;
        // padding: 20px 0 0;
    }

    .date {
        letter-spacing: 0.1em;
        font-size: 24px;
        padding-bottom: 10px;
        transition: all 1s;
    }

    .Holiday {
        letter-spacing: 0.1em;
        font-size: 16px;
        transition: all 1s;
        padding-bottom: 20px;
    }

    .Weather {
        letter-spacing: 0.1em;
        font-size: 16px;
        padding-top: 20px;
        transition: all 1s;
    }

}
</style>
