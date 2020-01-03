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
import GalleryPage from './GalleryPage.vue';
import TeamsPage from './TeamsPage.vue';
import NotFoundPage from './NotFoundPage.vue';
import EditorPage from './EditorPage.vue';
import ConverterPage from './Converter.vue';
import ToDoPage from './ToDoPage.vue';
export default {
  data: () => ({
    routes: {
      '/': HomePage,
      '/twitter': TwitterPage,
      '/counter': CounterPage,
      '/gallery': GalleryPage,
      '/teams': TeamsPage,
      '/editor': EditorPage,
      '/todo': ToDoPage,
      '/converter': ConverterPage
    }
  }),

  components: { Router, NotFoundPage }
}
</script>