<template>
  <div>
    <TwitterForm @createTweet="addTwitter"></TwitterForm>

    <p v-if="!tweets.length">Be the first, send a message!</p>

    <ol v-if="tweets.length"
        class="messages">
      <TwitterMessage v-for="tweet in tweets"
                      :tweet="tweet"></TwitterMessage>
    </ol>
  </div>
</template>

<script>
  import TwitterMessage from './TwitterMessage.vue';
  import TwitterForm from './TwitterForm.vue';

  export default {

    data: () => ({
      tweets: []
    }),

    components: {
      TwitterMessage,
      TwitterForm
    },

    methods: {
      addTwitter(tweet) {
        this.tweets.push(tweet);
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/settings";

  .messages {
    @extend %listreset;
    margin-top: 30px;
  }
</style>
