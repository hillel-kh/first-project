<template>
  <ProjectLayout title="Slider" bgcolor="palevioletred" color="#fff">
    <Slider></Slider>
  </ProjectLayout>
</template>

<script>
import ProjectLayout from './ProjectLayout.vue';
import Slider from './diana/Slider.vue';


export default {
  data: () => ({
    projects: [
      { title: 'Twitter', author: 'Team', link: '/twitter' },
      { title: 'Counter', author: 'Stanislav', link: '/counter' },
      { title: 'Slider', author: 'Diana', link: '/slider' }

    ]
  }),
  components: { CenteredLayout }
}
</script>

<style scoped>

</style>