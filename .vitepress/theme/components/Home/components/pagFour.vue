<template>
  <div class="container">
        <div class="left"></div>
        <div class="content">
            第四页
        </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100vh;
    color: #fff;
    background-color: #374046;
    display: flex;
    align-items: center;
    justify-content: center;

    .left {
        width: 10%;
        height: 100%;
        background-color: #374046;
    }

    .content {
        flex: 1;
        justify-self: center;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
    }
}
</style>
