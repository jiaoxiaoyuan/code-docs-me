<template>
  <div class="container">
    <FourContent></FourContent>
    <!-- <FooterView></FooterView> -->
  </div>
</template>

<script setup lang="ts">
// import FooterView from "./footer.vue";
import FourContent from "./pagFourContent.vue";
</script>

<style scoped lang="scss">
.container {
    flex: 1;
    height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
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
            opacity: 0.5;
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
        // align-items: center;
        // justify-content: center;
        font-size: 24px;
        font-weight: 700;
    }
}
</style>
