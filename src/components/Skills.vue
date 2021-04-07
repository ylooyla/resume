<template>
	<card title="专业技能" class="skills">
		<div
			v-for="(skills, index) in skillList"
			:key="'skills' + index"
			class="skill"
		>
			<h2>{{ skills.title }}</h2>
			<div>
				<p
					v-for="(skill, index) in skills.children"
					:key="'skill' + index"
					v-html="skill"
				></p>
			</div>
		</div>
	</card>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import Card from './Card.vue'

interface SkillProp {
	title: string
	children: string[]
}

const Skills = [
	{
		title: '原生语言',
		children: [
			'熟悉 Html5 和 Css3 进行符合Web标准的语义化开发，像素级还原设计稿的能力；',
			'熟悉 Canvas / Svg / WebSocket 等Html5新特性的使用；',
			'熟悉 JavaScript / TypeScript 语言，掌握 ES6+ 语法，熟悉异步流程控制，熟悉 Promise 、 Async 等异步操作；',
		],
	},
	{
		title: '计算机基础',
		children: [
			'熟悉 AJAX 、 HTTP 协议，熟悉 LocalStorage / SessionStorage / Cookie 等数据存储技术；',
			'熟悉 Linux 操作系统，熟悉常见的 数据结构 和 算法；',
		],
	},
	{
		title: '第三方库',
		children: ['熟悉Bootstrap栅格系统，响应式布局和移动端开发；熟悉 ECharts / D3 数据可视化开发；',
		'熟悉 Element / AntDesign / Bootstrap 等UI框架完成业务组件，并进行一定程度的二次封装；'
		],
	},
	{
		title: '工程化',
		children: [
			'熟悉 WebPack / Parcel / Gulp 等打包工具，熟悉前端工程化构建流程；熟悉Webpack性能优化；',
			'熟悉 CommonJS 、 ES6 等模块化规范；熟悉 npm 、 yarn 等包管理器；熟悉 Less 、 Sass 等Css预处理、后处理工具；',
		],
	},
	{
		title: '框架',
		children: [
			'熟悉 Vue2 / Vue3 全家桶，熟悉组件化开发，熟悉 Vue-Router 路由管理和路由守卫，熟悉 Vuex 状态管理；',
		],
	},
	{
		title: '服务器',
		children: [
			'熟悉 Node.js ，熟悉Node的流、网络、文件、数据驱动和ORM；熟悉Express的基本使用；',
			'熟悉 Python 及常用模块的使用；熟悉 MySQL 、 ElasticSearch 等数据库；',
		],
	},
	{
		title: '测试与工具',
		children: [
			'了解 jest / mocha 前端单元测试、持续集成服务 Travis 相关知识；',
			'熟悉 Git 版本管理工具；熟悉前端性能优化，掌握基于缓存、加载相关的性能优化，了解前端安全；',
		],
	},
]

export default defineComponent({
	components: {
		Card,
	},
	setup() {
		const skillList = computed(() => {
			const tmp = []
			for (let skill of Skills) {
				tmp.push(addTag(skill))
			}
			return tmp
		})

		function addTag(skill: SkillProp) {
			let result: SkillProp = {
				title: skill.title,
				children: [],
			}
			const childrens = skill.children
			for (let i = 0; i < childrens.length; i++) {
				const strArr = childrens[i].split(' ')
				let line = ''
				strArr.forEach((ele) => {
					const strUpper = ele.toUpperCase()
					if (
						strUpper[0].charCodeAt(0) >= 65 &&
						strUpper[0].charCodeAt(0) <= 90
					) {
						line += '<span class="skill-tag"> ' + ele + ' </span>'
					} else {
						line += ele + ' '
					}
				})
				result.children.push(line)
			}

			return result
		}

		return {
			skillList,
		}
	},
})
</script>
<style lang="scss" scoped>
.skill {
	margin-bottom: 20px;
}
</style>