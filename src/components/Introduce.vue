<template>
	<card title="个人评价" class="introduce">
		<p v-for="(introduce, index) in introduceList" :key="'introduce' + index">
            {{ index + 1 + '.' + introduce }}
            </p>
	</card>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import Card from './Card.vue'

export default defineComponent({
	components: {
		Card
	},
	setup() {
		const introduceList = [
			'爱好编程，对软件开发和设计工作有浓厚的兴趣，对软件行业充满信心和期待。',
			'工作认真负责，耐心细致，积极上进，能够吃苦耐劳，努力认真完成工作。',
			'具有良好的学习能力和适应能力以及分析问题与解决问题的能力。',
			'喜欢打球。能够接受强度的工作力度'
		]
		return {
			introduceList
		}
	}
})
</script>
<style lang="scss" scoped>
.project-title {
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