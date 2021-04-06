<template>
	<div class="card">
		<span class="title">技能技能</span>

		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
.card {
	position: relative;
	padding: 30px;
	box-shadow: 1px 1px 2px 1px #ffcc33, -1px -1px 2px 1px #573cc4;
	margin-bottom: 50px;

	.title {
		font-weight: 800;
		color: #fff;
		position: absolute;
		top: -20px;
		left: 10px;
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