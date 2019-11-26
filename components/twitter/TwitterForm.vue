<template>
  <form @submit.prevent="submit">
    <input class="message-input" type="text" v-model="message" placeholder="Ready to tweet?" />
    <span class="tip">Press [Enter] to submit the message</span>
  </form>
</template>

<script>
import Twiter from './Twitter.vue'
export default {
  data: () => ({ message: '' }),

  computed: {
    isValidMessage() {
      return this.message.trim().length;
    }
  },

  methods: {
    submit(event) {
      const newTweet = { msg: this.message, date: new Date() };
      this.$emit('createTweet', newTweet)
      this.message = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.message-input {
  border-radius: 4px;
  border: 0;
  box-shadow: 1px 1px 3px #ddd;
  box-sizing: border-box;
  font-size: 14px;
  padding: 7px 14px;
  width: 100%;
}

.tip {
  color: #666;
  font-size: 12px;
  display: block;
  text-align: right;
  padding-top: 4px;
}

</style>










