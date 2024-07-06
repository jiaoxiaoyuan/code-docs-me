<template>
    <div class="app-container">
        <div class="app-segmented">
            <div @click="increment(1)" class="icon fa fa-home"></div>
            <div @click="increment(2)" class="icon fa fa-keyboard-o"></div>
            <div @click="increment(3)" class="icon fa fa-coffee"></div>
            <div @click="increment(4)" class="icon fa fa-dribbble"></div>
        </div>

        <!-- {{ count }} -->
         <component :is="currentComponent"></component>
    </div>
</template>
<script setup lang="ts" >

import { ref } from 'vue'
import ComponentA from './components/pageOne.vue'
import ComponentB from './components/pageTwo.vue'
import ComponentC from './components/pagThree.vue'
import ComponentD from './components/pagFour.vue'

const currentComponent = ref(ComponentA);

const increment = (e: number) => {

    if (e === 1) {
        currentComponent.value = ComponentA
    } else if (e === 2) {
        currentComponent.value = ComponentB
    } else if (e === 3) {
        currentComponent.value = ComponentC
    } else if (e === 4) {
        currentComponent.value = ComponentD;
    }
};


</script>
<style scoped lang="scss">
.app-container {
    height: 100vh;
    background-color: #374046;

    .app-segmented {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        height: 280px;
        width: 10%;
        padding: 0;
        text-align: center;
        // background: black;

        .icon {
            color: #fff;
            font-size: 32px;
            display: block;
            margin: 30px 0;
        }
    }
}
</style>

