<template>
  <ProjectLayout title="Counter" bgcolor="palevioletred" color="#fff">
    <Counter></Counter>
  </ProjectLayout>
</template>

<script>
import ProjectLayout from './ProjectLayout.vue';
import Counter from './counter/Counter.vue';

export default {
  components: { ProjectLayout, Counter }
}
</script>

<style scoped>
p { color: #fff; }
</style>