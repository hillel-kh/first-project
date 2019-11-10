<template>
<div class="chat-wrap">
  <ChatLogin style="width: 800px; margin: 0 auto;"></ChatLogin>
</div>
</template>



<script>
import '/styles/reset.sass';
import '/styles/chat-style.sass';
import ChatLogin from './ChatLogin.vue';

export default {
  components: {
    ChatLogin
  }
}
</script>



<style lang='sass' scoped>
@import '/styles/reset.sass'
@import '/styles/chat-style.sass'
</style>
