<template>
    <!-- 优势总结 -->
    <card title="优势总结" class="sums-up">
        <p v-for="(item, idx) in list" :key="idx" v-html="addTag(item)">
        </p>
    </card>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import Card from '../Card.vue'
import { list } from './list'
import { addTag } from '@/utils/tools.ts'

export default defineComponent({
    components: {
        Card
    },
    setup() {
        return {
            list,
            addTag
        }
    }
})
</script>
<style lang="scss" scoped>
</style>
