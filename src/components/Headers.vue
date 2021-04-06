<template>
	<div class="header">
		<h1>杜攀</h1>
		<div class="header-item">
			<i class="iconfont icon-avatar"><span>27 岁</span></i>
			<i class="iconfont icon-sex"><span>男</span></i>
			<i class="iconfont icon-education"><span>本科</span></i>
		</div>
		<div class="header-item">
			<i class="iconfont icon-job"><span>初级/中级前端开发</span></i>
			<i class="iconfont icon-phone"><span>15775691933</span></i>
			<i class="iconfont icon-mail"><span>2088867510@qq.com</span></i>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
	components: {
	},
	setup() {
		return {}
	}
})
</script>
<style lang="scss" scoped>
.header {
	margin-bottom: 40px;
	.header-item {
		display: flex;
		width: 600px;
		justify-content: space-between;
		margin-bottom: 10px;

		.iconfont {
			cursor: pointer;
			text-align: left;
			width: 100%;

			span {
				padding-left: 10px;
			}
		}
	}
}
</style>