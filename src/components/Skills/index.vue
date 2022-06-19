<template>
    <card title="专业技能" class="skills">
        <div
            v-for="(skills, index) in list"
            :key="'skills' + index"
            class="skill"
        >
            <span class="blod">{{ skills.title }}</span>
            <span v-html="addTag(skills.content)"></span>
        </div>
    </card>
</template>
<script lang="ts">
import {defineComponent, computed} from 'vue'
import Card from '../Card.vue'
import {addTag} from '@/utils/tools.ts'
import {list} from './list'

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
.skill {
    margin-bottom: 10px;
}
.blod {
    font-weight: 800;
}
</style>
