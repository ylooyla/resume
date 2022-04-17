<template>
<div class="container" :class="{ imgShow: imgShow}">
	<button class="click-button" @click="imgShow = !imgShow">{{ imgShow ? '显示头图': '隐藏头图' }}</button>
	<div class="wrap">
		<!-- 个人信息 -->
		<headers />
		<!-- 优势总结 -->
		<sums-up />
		<!-- 工作经历 -->
		<experience />
		<!-- 项目经历 -->
		<project />
		<!-- 专业技能 -->
		<skills />
		<!-- 教育经历 -->
		<education />
	</div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Headers from './components/Headers.vue'
import SumsUp from './components/SumsUp/index.vue'
import Experience from './components/Experience/index.vue'
import Project from './components/Project/index.vue'
import Skills from './components/Skills/index.vue'
import Education from './components/Education.vue'

export default defineComponent({
	name: 'App',
	components: {
		Headers,
		SumsUp,
		Experience,
		Project,
		Skills,
		Education
	},
	setup() {
		const imgShow = ref(false)

		return {
			imgShow
		}
	}
})
</script>

<style lang="scss">
@import '@/assets/reset.scss';
@import '@/assets/iconfont.scss';

.wrap {
	width: 900px;
	padding: 40px 0 0 40px;
	margin: 0 auto;
	background-color: #fff;
	box-shadow: 0 0 2px 0 #666;
}

.imgShow {
	
	img {
		display: none;
	}

	.wrap {
		box-shadow: none;	
	}

	.skill-tag {
		color: #333;
		font-weight: 800;
	}


	.project-item a  {
		color: #333;
	}
}


.click-button {
	position: fixed;
	opacity: 0;
	top: 70px;
	right: 70px;
	width: 100px;
	height: 40px;
    margin-top: 20px;
    margin-right: 20px;
	outline: none;
	background-color: #fff;
	border: 1px solid #ccc;
	cursor: pointer;
    color: #1989fa;
    &:hover {
		opacity: 1;
		background-color: #1989fa;
		color: #fff;
    }
}
</style>
