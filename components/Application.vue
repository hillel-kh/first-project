<template>
  <Router :routes="routes">
    <NotFoundPage></NotFoundPage>
  </Router>
</template>

<script>
import Router from './Router.vue';

import HomePage from './HomePage.vue';
import TwitterPage from './TwitterPage.vue';
import CounterPage from './CounterPage.vue';
import NotFoundPage from './NotFoundPage.vue';
import SortedTablePage from "./SortedTablePage";

export default {
  data: () => ({
    routes: {
      '/': HomePage,
      '/twitter': TwitterPage,
      '/counter': CounterPage,
      '/sortedTable': SortedTablePage
    }
  }),

  components: { Router, NotFoundPage }
}
</script>