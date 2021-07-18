<template>
	<card title="工作经历" class="experience">
		<div class="experience-item">
			<div class="experience-title">
				<p>2017.08 - 至今</p>
				<p>卓望数码技术有限公司</p>
				<p>运维开发工程师</p>
			</div>
		</div>
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
		return {}
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