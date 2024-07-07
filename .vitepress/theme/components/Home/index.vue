<template>
    <div class="app-container" :class="[typeNum === 1 ? 'app-container-activeClass' : '']">
        <div class="app-segmented">
            <ul>
                <div @click="increment(1)" class="icon fa fa-home" :class="[typeNum === 1 ? 'activeClass' : '']"></div>
                <div @click="increment(2)" class="icon fa fa-keyboard-o" :class="[typeNum === 2 ? 'activeClass' : '']"></div>
                <div @click="increment(3)" class="icon fa fa-coffee" :class="[typeNum === 3 ? 'activeClass' : '']"></div>
                <div @click="increment(4)" class="icon fa fa-dribbble" :class="[typeNum === 4 ? 'activeClass' : '']"></div>
            </ul>
        </div>
        <component :is="currentComponent"></component>
    </div>
</template>
<script setup lang="ts" >
import { ref, shallowRef } from 'vue'
import ComponentA from './components/pageOne.vue'
import ComponentB from './components/pageTwo.vue'
import ComponentC from './components/pagThree.vue'
import ComponentD from './components/pagFour.vue'


const currentComponent = shallowRef<ComponentType>(ComponentA);
const typeNum = ref(1)

type ComponentType = typeof ComponentA | typeof ComponentB | typeof ComponentC | typeof ComponentD;
// 定义组件映射表
const componentMap: Record<1 | 2 | 3 | 4, ComponentType> = {
    1: ComponentA,
    2: ComponentB,
    3: ComponentC,
    4: ComponentD,
};
const increment = (e: 1 | 2 | 3 | 4) => {
    typeNum.value = e;
    currentComponent.value = componentMap[e];
};


</script>
<style scoped lang="scss">
.app-container-activeClass {
    background-image: url("https://img.mtsws.cn/LightPicture/2024/06/9e0b24ca3f2e3675.jpg");
    background-size: cover;
    background-attachment: fixed;
}

.app-container {
    height: 100vh;
    background-color: #374046;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

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
            transition: all 0.3s ease-in-out
        }
    }
}
</style>

