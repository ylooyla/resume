<template>
	<div class="card">
		<span class="title">{{ title }}</span>
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		title: String
	},
	setup() {
		return {

		}
	}
})
</script>
<style lang="scss" scoped>
.card {
	position: relative;
	padding: 30px 0;
	border-top: 1px solid #0ff;

	.title {
		font-weight: 800;
		color: #fff;
		position: absolute;
		top: -20px;
		left: 0px;
		width: 130px;
		padding: 0 40px 0 20px;
		box-sizing: border-box;
		height: 40px;
		line-height: 40px;
		background-color: #0ff;

		&::after {
			position: absolute;
			top: 0;
			right: 0px;
			content: ' ';
			width: 0;
			height: 0;
			border: 20px solid #fff;
			border-left-color: transparent;
			border-top-color: transparent;
			border-bottom-color: transparent;
		}
	}
}
</style>