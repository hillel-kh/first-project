<template>
  <CenteredLayout>
    <div class="container">
      <h1>Welcome!</h1>
      <h2>See our projects:</h2>
      <a v-for="p in projects" :href="p.link">{{p.title}} &copy; {{p.author}}</a>
    </div>
  </CenteredLayout>
</template>

<script>
import CenteredLayout from './CenteredLayout.vue';

export default {
  data: () => ({
    projects: [
      { title: 'Hub', author: 'Stanislav', link: '/' },
      { title: 'Twitter', author: 'Team', link: '/twitter' }
    ]
  }),
  components: { CenteredLayout }
}
</script>

<style scoped>
.container {
  overflow: auto;
  text-align: center;
  width: 100%;
}

a {
  display: block;
  padding: 4px;
}
</style>