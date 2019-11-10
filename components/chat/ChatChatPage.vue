<template>
<div class="chat-wrap">
  <ChatChat style="width: 800px; margin: 0 auto;"></ChatChat>
</div>
</template>



<script>
import ChatChat from './ChatChat.vue';

export default {
  components: {
    ChatChat
  }
}
</script>



<style lang='sass' scoped>
@import '/styles/reset.sass'
@import '/styles/chat-style.sass'
</style>
