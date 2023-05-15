<script setup lang="ts">
import {computed, ref} from 'vue'
import InstallButton from "./components/InstallButton.vue";

const numberOfColorsRef = ref<number>(4)
const halfNumberOfColorsComputed = computed(() => numberOfColorsRef.value / 2)
const gridCols = computed(() => `grid-cols-` + halfNumberOfColorsComputed.value)
const gridRows = computed(() => `grid-rows-` + halfNumberOfColorsComputed.value)

function randomColor() { // min and max included
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = 0.3
    return `rgba(${r},${g},${b},${a})`
}

console.log(randomColor())

const simonTiles = Array(halfNumberOfColorsComputed.value).fill(Array(halfNumberOfColorsComputed.value))

function handleClick(event: any) {
    console.log(event.target.value)
}
</script>

<template>
    <div id="simon" class="w-screen h-screen flex justify-center items-center">
        <div class="p-10 w-1/2 h-full grid" :class="gridCols">
            <div v-for="subTiles in simonTiles " :key="simonTiles.indexOf(subTiles)"
                 class="grid border"
                 :class="gridRows">
                <button v-for="tile in subTiles" :key="subTiles.indexOf(tile)"
                        class="w-full h-full border" :style="'background-color: ' + randomColor()"
                        @click="handleClick">
                </button>
            </div>
        </div>
        <div class="p-20 w-1/2 h-full flex flex-col justify-center items-center">
            <InstallButton/>
        </div>
    </div>

</template>
