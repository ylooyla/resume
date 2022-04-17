<template>
	<card title="工作经历" class="experience">
		<div class="experience-item"
			v-for="(item, idx) in list"
			:key="idx"
		>
			<div class="experience-title">
				<p>{{ item.title.date }}</p>
				<p>{{ item.title.company }}</p>
				<p>{{ item.title.job }}</p>
			</div>
			<div>
				<p v-for="(content, idx) in item.content" :key="idx" v-html="addTag(content)"></p>
			</div>
		</div>
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
.experience-title {
	display: flex;
    font-weight: 800;
    
	p {
		width: 100%;

		&:nth-child(3) {
			text-align: center;
		}

		&:nth-child(4) {
			text-align: right;
		}
	}
}
</style>