<script setup lang="ts">
import { nextTick, onBeforeUnmount,ref, onMounted, onUnmounted } from 'vue';

</script>

<template>
  <div class="container" ref="boxRef">
    <div class="content">
        <img src="https://img.mtsws.cn/LightPicture/2023/08/8b794e021120837b.png" alt="" />
    </div>
     <!-- <el-button type="primary">Primary</el-button>
     <el-button type="success">Success</el-button> -->
  </div>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100vh;
    background-image: url('https://img.mtsws.cn/LightPicture/2024/06/9e0b24ca3f2e3675.jpg');
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    .content{
        img {
            float: left;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 10px #fff;
            transition: all 1s;
        }
    }
}
</style>
