
<script setup lang="ts">
import { ref } from 'vue'
const date = ref<string>('')
const time = ref<string>('')
var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

setInterval(updateTime, 1000);
function updateTime () {
    var cd = new Date();
    time.value = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    date.value = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};


function zeroPadding (num: number, digit: number) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

</script>
<template>
    <div class="clockTime">
        <p class="date">{{ date }}</p>
        <p class="time">{{ time }}</p>
        <p class="text">时光匆匆，岁月静好。</p>
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
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%, -50%);
    color: #daf6ff;

    p {
        margin: 0;
        padding: 0;
    }

    .time {
        letter-spacing: 0.05em;
        font-size: 50px;
        transition: all 1s;
        // padding: 5px 0;
    }

    .date {
        letter-spacing: 0.1em;
        font-size: 24px;
        padding-bottom: 30px;
        transition: all 1s;
    }

    .text {
        letter-spacing: 0.1em;
        font-size: 12px;
        padding-top: 30px;
        transition: all 1s;
        // padding: 20px 0 0;
    }
}
</style>
