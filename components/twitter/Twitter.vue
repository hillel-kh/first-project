<template>
  <div>
    <TwitterForm @createTweet="addTwitter"></TwitterForm>

    <p v-if="!tweets">Wait for messages...</p>

    <p v-if="tweets && !tweets.length">Be the first, to send a message!</p>

    <ol v-if="tweets && tweets.length" class="messages">
      <TwitterMessage v-for="tweet in tweets" :tweet="tweet"></TwitterMessage>
    </ol>
  </div>
</template>

<script>
import TwitterMessage from './TwitterMessage.vue';
import TwitterForm from './TwitterForm.vue';
import storage from '../../modules/storage';

export default {

  data: () => ({
    tweets: null
  }),

  components: {
    TwitterMessage,
    TwitterForm
  },

  methods: {
    addTwitter(tweet) {
      this.tweets.unshift(tweet);
      storage.set('tweets', this.tweets);
    }
  },

  created() {
    storage.get('tweets')
      .then(loadedTweets => {
        this.tweets = loadedTweets || [];
      })
  }

}
</script>

<style scoped>
.messages {
  margin-top: 30px;
}

ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
