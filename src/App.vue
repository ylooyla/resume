<template>
<div class="container" :class="{ imgShow: imgShow}">
	<button class="click-button" @click="imgShow = !imgShow">{{ imgShow ? '显示头图': '隐藏头图' }}</button>
	<div class="wrap">
		<headers />
		<skills />
		<project />
		<education />
		<experience />
		<introduce :style="{display: 'none'}"/>
	</div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Skills from './components/Skills.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import Project from './components/Project.vue'
import Introduce from './components/Introduce.vue'
import Headers from './components/Headers.vue'

export default defineComponent({
	name: 'App',
	components: {
		Skills,
		Education,
		Experience,
		Project,
		Introduce,
		Headers
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
