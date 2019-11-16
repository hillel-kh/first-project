<template>
  <CenteredLayout>
    <div class="container">
      <h1>Welcome!</h1>
      <h2>See our projects:</h2>
      <a v-for="p in projects"
         :href="p.link">{{p.title}} &copy; {{p.author}}</a>
    </div>
  </CenteredLayout>
</template>

<script>
  import CenteredLayout from '../layouts/CenteredLayout.vue';

  export default {
    data: () => ({
      projects: [
        { title: 'Twitter', author: 'Team', link: '/twitter' },
        { title: 'Counter', author: 'Stanislav', link: '/counter' },
        { title: 'Constructor', author: 'T3', link: '/constructor/examples' }
      ]
    }),
    components: { CenteredLayout }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    overflow: auto;
    text-align: center;
  }

  a {
    padding: 4px;
    display: block;
  }
</style>