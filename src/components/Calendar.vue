<template>
    <a-alert :message="`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`" />
    <a-calendar
        v-model:value="value"
        @panel-change="onPanelChange"
        @select="pickDate">
        <template #dateCellRender>
            <Draw></Draw>
        </template>
    </a-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import Draw from '../components/draw.vue'

const value = ref<Dayjs>()
const selectedValue = ref(dayjs())

const onPanelChange = (value: Dayjs, mode: string) => {
    console.log(value, mode)
}

const pickDate = (value: Dayjs) => {
    selectedValue.value = value
}

</script>
