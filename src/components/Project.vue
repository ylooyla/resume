<template>
	<card title="项目经历" class="project">
		<div class="project-item">
			<div class="project-title">
				<p>2020.08 - 2020.09</p>
				<p>Vue2的UI组件库</p>
				<p>个人开源项目</p>
			</div>
			<img src="http://pand.club/upload/BookerUI-Home.png" alt class="project-img" />
			<ul class="project-desc">
				<li>
					<h4>项目介绍</h4>
					<div>
						该项目是参照 Framework7、Ant Design、Element UI、iView 等 UI 库思路，做的一套基于 Vue 的简易 UI 组件库，目前已支持按钮、输入框、网格、布局等UI组件。Toast、Tabs、Popover、手风琴等目前正在开发中。
						每个组件均经历从需求分析到 Mocha 单元测试，并用 TravisCI 实现持续集成，最终以 VuePress 为基础制作官方文档，发布于 npmjs.org。
						完成该项目使我对 Vue 的常用特征更加熟悉，同时提升了自己对前端工程化流程以及单元测试重要性的深刻理解， 近一步了解开源文化。
					</div>
				</li>
				<li>
					<h4>技术栈：</h4>
					<div>Vue.js/ VuePress/ ES6/ Parcel/ Npm Scripts/ Mocha/ SCSS/ TravisCI</div>
				</li>
				<li>
					<h4>
						项目地址：
						<a href="https://bookerdrew.github.io/Booker-UI/">在线预览</a>
						<a href="https://github.com/BookerDrew/Booker-UI">项目源码</a>
					</h4>
				</li>
			</ul>
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

.project-desc {
	padding-right: 40px;
}

.project-img {
	height: 400px;
}
</style>