<template>
  <div class="container ">
        <div class="content">
            第二页
        </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
    flex: 1;
    height: 100vh;
    color: #fff;
    background-color: #FF5722;
    display: flex;
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
        justify-self: center;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
    }
}
</style>
