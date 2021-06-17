<template>
	<card title="项目经历" class="project">
		<div class="project-item">
			<div class="project-title">
				<p>2021.01 - 2021.03</p>
				<p>Vue3、TS 开发的UI组件库 + 自制官网</p>
				<p>个人开源项目</p>
			</div>
			<img
				src="http://pand.club/upload/BookerUI-Next-Home.png"
				alt
				class="project-img"
			/>
			<ul class="project-desc">
				<li
					v-for="(projects, index) in projectList2"
					:key="'projects' + index"
				>
					<h4>{{ projects.title }}</h4>
					<div>
						<p
							v-for="(project, index) in projects.children"
							:key="'project' + index"
							v-html="project"
						></p>
					</div>
				</li>
			</ul>
		</div>


		<div class="project-item">
			<div class="project-title">
				<p>2020.11 - 2021.01</p>
				<p>Vue3 + TS 开发的在线文档专栏</p>
				<p>个人开源项目</p>
			</div>
			<img
				src="http://pand.club/upload/EasyBooker-Home.png"
				alt
				class="project-img"
			/>
			<ul class="project-desc">
				<li
					v-for="(projects, index) in projectList1"
					:key="'projects' + index"
				>
					<h4>{{ projects.title }}</h4>
					<div>
						<p
							v-for="(project, index) in projects.children"
							:key="'project' + index"
							v-html="project"
						></p>
					</div>
				</li>
			</ul>
		</div>

		<div class="project-item">
			<div class="project-title">
				<p>2020.10 - 2020.11</p>
				<p>Vue2 开发的UI组件库</p>
				<p>个人开源项目</p>
			</div>
			<img
				src="http://pand.club/upload/BookerUI-Home.png"
				alt
				class="project-img"
			/>
			<ul class="project-desc">
				<li
					v-for="(projects, index) in projectList"
					:key="'projects' + index"
				>
					<h4>{{ projects.title }}</h4>
					<div>
						<p
							v-for="(project, index) in projects.children"
							:key="'project' + index"
							v-html="project"
						></p>
					</div>
				</li>
			</ul>
		</div>
	</card>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import Card from './Card.vue'

interface ProjectProp {
	title: string
	children: string[]
}

const Projects = [
		{
		title: '项目背景',
		children: [
			'Booker-UI 是一个基于 Vue2 的高质量UI组件库，该项目参照了AntDesign、ElementUI、iView等UI库思路。',
		],
	},
	{
		title: '项目介绍',
		children: [
			'目前已开发完成 Icon 、 Button 、 ButtonGrop 、 Tabs 、 Input 、 Grid 、 Container 、 Toast 、 Popover 、 Collapse 等组件。',
			'每个组件均经历从需求分析到 Mocha 单元测试，并用 TravisCI 实现持续集成，最终以 VuePress 为基础制作官方文档，发布于 npmjs.org。',
			'该项目使我对 Vue 开发更加熟悉，提升了自己对前端工程化流程以及单元测试重要性的深刻理解， 近一步了解开源文化。',
		],
	},
	{
		title: '技术栈',
		children: ['Vue2 / VuePress / ES6 / Parcel / Mocha / SCSS / TravisCI'],
	},
	{
		title: '项目地址',
		children: [
			'<a href="https://bookerdrew.github.io/Booker-UI/">在线预览</a>',
			'<a href="https://github.com/BookerDrew/Booker-UI">项目源码</a>',
		],
	},
]

const Projects1 = [
	{
		title: '项目背景',
		children: [
			'EasyBooker 是基于 Vue3 + TypeScript + Vuex + Vue-Router 全家桶开发的前后端分离的多人文档专栏平台。',
		],
	},
	{
		title: '项目介绍',
		children: [
			'项目全部采用新版 CompositionAPI 编写，使用Vue3热门的技术栈 Ref 和 Reactive 、 watch 和 computed 、 Hooks自定义函数 、 Teleport 和 Suspense 等等。',
			'TypeScript 做类型约束，以组件开发为脉络，实现一系列由易到难的通用组件开发，复杂组件设计和实现。',
			'Vuex 整体状态数据结构的设计和实现，获取，结构，缓存等设计，user、columns、posts、编辑 等多个页面数据共享。',
			'JWT 实现权限验证， Router守卫 + meta 实现页面权限管理和路由拦截。'
		],
	},
	{
		title: '技术栈',
		children: ['Vue3 / Vuex / Vue-Router4 / TypeScript / ES6 / JWT / Node.js / Scss / Axios'],
	},
	{
		title: '项目地址',
		children: [
			'<a href="http://pand.club/easybooker/">在线预览</a>',
			'<a href="https://github.com/BookerDrew/EasyBooker">项目源码</a>',
		],
	},
]

const Projects2 = [
		{
		title: '项目背景',
		children: [
			'BookerUI-Next 是一个基于 Vue3 + TypeScript 的UI组件库，这是我在Vue3和TypeScript的项目过程中，根据业务组件的需求，抽象的一个通用UI组件库。',
		],
	},
	{
		title: '项目介绍',
		children: [
			'使用 TypeScript 做类型约束，实现一系列由易到难的通用组件开发，目前已开发完成 DropDown下拉框 、 Table表格 、 Loading加载中 、 Message消息提示 、 Modal对话框、 Input输入框 、 Form表单 、 Uploading上传 等组件。',
			'使用 Vue3 + Vue-Router4 制作了官网，参考 ElementUI-Plus 风格进行 Page设计 、和 Router设计 。',
		],
	},
	{
		title: '技术栈',
		children: ['Vue3 / Vue-Router4 / TypeScript / ES6 / Scss / Axios'],
	},
	{
		title: '项目地址',
		children: [
			'<a href="http://pand.club/bookerui-next">在线预览</a>',
			'<a href="https://github.com/BookerDrew/BookerUI-Next">项目源码</a>',
		],
	},
]


export default defineComponent({
	components: {
		Card,
	},
	setup() {
		const projectList = computed(() => {
			const tmp = []
			for (let prject of Projects) {
				tmp.push(addTag(prject))
			}
			return tmp
		})

		const projectList1 = computed(() => {
			const tmp = []
			for (let prject of Projects1) {
				tmp.push(addTag(prject))
			}
			return tmp
		})

		const projectList2 = computed(() => {
			const tmp = []
			for (let prject of Projects2) {
				tmp.push(addTag(prject))
			}
			return tmp
		})
		function addTag(skill: ProjectProp) {
			let result: ProjectProp = {
				title: skill.title,
				children: [],
			}
			const childrens = skill.children
			for (let i = 0; i < childrens.length; i++) {
				const strArr = childrens[i].split(' ')
				let line = ''
				strArr.forEach((ele) => {
					const strUpper = ele.toUpperCase()

					if (strUpper.startsWith('HREF')) {
						line += ele + ' '
					} else if (
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
			projectList,
			projectList1,
			projectList2
		}
	},
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