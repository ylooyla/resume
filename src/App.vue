<template>
<div class="container">
	<div class="wrap">
		<headers />
		<experience />
		<project />
		<skills />
		<education />
		<introduce />
	</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
	box-shadow: 0 0 1px 0 #666;
}
</style>
