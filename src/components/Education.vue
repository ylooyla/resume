<template>
  <card title="教育经历" class="education">
    <div class="education-item">
      <div class="education-title">
        <p>四川文理学院（2013.09 - 2017.08）</p>
        <p>本科</p>
        <p>机电自动化</p>
      </div>
    </div>
  </card>
</template>
<script lang="ts">
import {defineComponent, computed} from 'vue'
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
.education-title {
  display: flex;

  p {
    width: 100%;
    text-align: center;
  }
  :nth-child(1) {
    text-align: left;
  }
}
</style>
