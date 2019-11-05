<template>
  <ProjectLayout title="Gallery" bgcolor="rgb(23, 50, 43)" color="#fff">
    <Gallery></Gallery>
  </ProjectLayout>
</template>

<script>
import ProjectLayout from './ProjectLayout.vue';
import Gallery from './gallery/Gallery.vue'; 

export default {
  components: { ProjectLayout, Gallery }
}
</script>

<style scoped>
p { color: #fff; }
</style>

