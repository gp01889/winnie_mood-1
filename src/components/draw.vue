<template>
    <canvas
        id="myCanvas"
        ref="canvas">
    </canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Painter } from '../repository/canvas'

// ============
//
// ref
//
//

const canvas = ref<HTMLCanvasElement>()

// ============
//
// Mounted
//
//

onMounted(() => {
    const canvasElement = canvas.value
    if (canvasElement) {
        const painter = new Painter(canvasElement)
        console.log(painter)
    }
})

</script>
<style scoped>
#myCanvas {
    border: 1px solid black;
}
</style>
