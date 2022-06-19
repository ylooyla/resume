<template>
    <card title="个人作品" class="project">
        <div class="project-item" v-for="(project, idx) in list" :key="idx">
            <div class="project-title">
                <h3>{{ project.title.name }}</h3>
                <h3>{{ project.title.date }}</h3>
            </div>
            <ul>
                <li
                    class="project-desc"
                    v-for="(content, idx) in project.content"
                    :key="idx"
                >
                    <div class="flex">
                        <h4>{{ content.title }}</h4>
                        <div class="xxx">
                            <p
                                v-for="(item, idx) in content.children"
                                :key="idx"
                                v-html="addTag(item)"
                            ></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </card>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
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
.project-title {
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
    font-weight: 800;
}

.project-desc {
    padding-right: 40px;
}
ul {
    padding-left: 20px;
}
.flex {
    display: flex;
    justify-content: start;
    align-content: flex-start;
    h4 {
        margin: 0;
        width: 100px;
    }
    .xxx {
        flex: 1 1;
        p {
            margin: 0;
        }
    }
}
</style>
