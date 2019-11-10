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
import TeamsPage from './TeamsPage.vue';
import NotFoundPage from './NotFoundPage.vue';
import ChatPage from './chat/ChatPage.vue';
import ChatAllChatsPage from './chat/ChatAllChatsPage.vue';

export default {
  data: () => ({
    routes: {
      '/': HomePage,
      '/twitter': TwitterPage,
      '/counter': CounterPage,
      '/teams': TeamsPage,
      '/chat': ChatPage,
      '/chat/all_chats': ChatAllChatsPage
    }
  }),

  components: { Router, NotFoundPage }
}
</script>