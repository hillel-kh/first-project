<template>
  <Router :routes="routes">
    <NotFoundPage></NotFoundPage>
  </Router>
</template>

<script>
  import Router from './Router.vue';

  import HomePage from './pages/HomePage.vue';
  import TwitterPage from './pages/TwitterPage.vue';
  import CounterPage from './pages/CounterPage.vue';
  import TeamsPage from './pages/TeamsPage.vue';
  import NotFoundPage from './pages/NotFoundPage.vue';
  import GalleryPage from './pages/GalleryPage.vue';
  import ConstructorExamples from './pages/ConstructorExamplesPage.vue';
  import ConstructorPreview from './pages/ConstructorPreviewPage.vue';
  import ConstructorPage from './pages/ConstructorPage'

  export default {
    data: () => ({
      routes: {
        '/': HomePage,
        '/twitter': TwitterPage,
        '/counter': CounterPage,
        '/teams': TeamsPage,
        '/gallery': GalleryPage,
        '/constructor/examples': ConstructorExamples,
        '/constructor/preview': ConstructorPreview,
        '/constructor/:id': ConstructorPage
      }
    }),

    components: { Router, NotFoundPage }
  }
</script>