<template>
  <ProjectLayout title="Constructor">
    <ConstructorExamples></ConstructorExamples>
  </ProjectLayout>
</template>

<script>
  import ProjectLayout from '../layouts/ProjectLayout.vue';
  import ConstructorExamples from '../constructor/ConstructorExamples.vue';

  export default {
    components: { ProjectLayout, ConstructorExamples }
  }
</script>