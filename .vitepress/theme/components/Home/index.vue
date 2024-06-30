<script setup lang="ts">

import BtnDraw from './components/BtnDraw.vue';
    import { nextTick, onBeforeUnmount, ref, onMounted, onUnmounted } from "vue";
    const date=ref<string>('')
    const time = ref<string>('')

    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var timerID = setInterval(updateTime, 1000);


    function updateTime() {
        var cd = new Date();
        time.value = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
        date.value = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
    };


    function zeroPadding(num:number, digit:number) {
        var zero = '';
        for(var i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    }





</script>

<template>
  <div class="container">

    <div class="clockTime">
        <p class="date">{{ date }}</p>
        <p class="time">{{ time }}</p>
        <p class="text">时光匆匆，岁月静好。</p>
    </div>

    <div class="content">
        <img
          src="https://img.mtsws.cn/LightPicture/2023/08/8b794e021120837b.png"
          alt=""
        />

        <BtnDraw></BtnDraw>
    </div>



  </div>
    <!-- <APlayer :audio="audio" ref="aplayer" lrcShow  autoplay=fales mode="fixed"  /> -->
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background-image: url("https://img.mtsws.cn/LightPicture/2024/06/9e0b24ca3f2e3675.jpg");
  background-size: cover;
  background-attachment: fixed;
  position: relative;

  .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Share Tech Mono', monospace;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      box-shadow: 0 0 10px #fff;
      transition: all 1s;
    }
    .homebuttons{
        margin-top: 20px;
    }

  }

    .clockTime{
        font-family: 'Share Tech Mono', monospace;
        text-align: center;
        position: absolute;
        right: 50px;
        top: 50px;
        // left: 50%;
        // top: 50%;
        // transform: translate(-50%, -50%);
        color: #daf6ff;
        p{
            margin: 0;
            padding: 0;
        }
        .time {
            letter-spacing: 0.05em;
            font-size: 50px;
            // padding: 5px 0;
        }
        .date {
            letter-spacing: 0.1em;
            font-size: 24px;
            padding-bottom: 30px;
        }
        .text {
            letter-spacing: 0.1em;
            font-size: 12px;
            padding-top: 30px;
            // padding: 20px 0 0;
        }
    }
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
}
</style>
