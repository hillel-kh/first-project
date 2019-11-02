<template>
  <Router :routes="routes">
    <NotFoundPage></NotFoundPage>
  </Router>
</template>

<script>
import Router from './Router.vue';

import HomePage from './HomePage.vue';
import TwitterPage from './TwitterPage.vue';
import NotFoundPage from './NotFoundPage.vue';

export default {
  data: () => ({
    routes: {
      '/': HomePage,
      '/twitter': TwitterPage
    }
  }),

  components: { Router, NotFoundPage }
}
</script>