<template>
	<card title="专业技能" class="skills">
		<div v-for="(skills, index) in skillList" :key="'skills' + index" class="skill">
			<h2>{{ skills.title }}</h2>
			<div>
				<p v-for="(skill, index) in skills.children" :key="'skill' + index" v-html="skill"></p>
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
			'能够使用 HTML5 和 CSS3 进行符合Web标准的语义化开发，具有像素级还原设计稿的能力',
			'熟悉 Canvas / Svg / WebSocket 等新特性的使用',
			'熟悉 JavaScript / TypeScript 语言，掌握 ES6+ 语法，持续关注 ECMAScript 标准',
			'熟悉 AJAX 相关知识，了解 HTTP 协议，能熟练运用 Promise 优化项目中的各种异步逻辑',
			'熟悉 LocalStorage / SessionStorage / Cookie 等数据存储技术'
		]
	},
	{
		title: '模块化',
		children: ['了解 CMD / AMD / UMD / ES6-Modules 等常见的模块化规范']
	},
	{
		title: '自动化构建工具',
		children: [
			'在项目中使用过 WebPack / Parcel / Gulp 等打包工具，熟悉前端工程化构建流程',
			'熟悉 Babel 的使用方法，能配合打包工具实现代码、资源的编译处理'
		]
	},
	{
		title: '前端JS框架',
		children: [
			'熟悉 Vue / React 相关技术栈，并了解一部分框架的底层原理，能在自己的代码中借鉴其思想和风格'
		]
	},
	{
		title: 'JS / CSS工具库',
		children: [
			'熟悉 jQuery / Lodash 等工具库的使用，能够运用其封装的API简化项目中的业务逻辑',
			'熟悉 Less / Sass / Stylus / PostCSS 等CSS预处理、后处理工具',
			'熟悉 styled-components 库的使用，在项目中实践过 CSS-IN-JS的开发模式和思想'
		]
	},
	{
		title: 'UI框架',
		children: [
			'熟练使用 Element / iView / AntDesign / Bootstrap 等UI框架完成业务组件，并能配合需求进行一定程度的二次封装'
		]
	},
	{
		title: '数据可视化',
		children: ['熟练使用 ECharts / D3 等库完成一些简单的数据可视化需求']
	},
	{
		title: '后台技术',
		children: [
			'熟悉 Node.js 常用模块，能用 Express / Koa 等框架搭建基础的Web服务',
			'熟悉 Python'
		]
	},
	{
		title: '其他',
		children: [
			'熟悉PC与移动端的开发与适配，了解微信小程序开发',
			'熟悉版本管理工具 Git，文档工具 apiDoc / gitbook 等的使用',
			'熟悉 Markdown 语法，能用其编写技术文档',
			'了解前端单元测试、持续集成服务 Travis 相关知识；能使用 easy-mock 等工具进行简单的接口数据模拟'
		]
	}
]

export default defineComponent({
	components: {
		Card
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
				children: []
			}
			const childrens = skill.children
			for (let i = 0; i < childrens.length; i++) {
				const strArr = childrens[i].split(' ')
				let line = ''
				strArr.forEach(ele => {
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
			skillList
		}
	}
})
</script>
<style lang="scss" scoped>
.skill {
	margin-bottom: 20px;
}
</style>