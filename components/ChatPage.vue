<template>
<div>
  <ChatApp style="width: 800px; margin: 0 auto;"></ChatApp>
</div>
</template>

<script>
import ChatApp from './chat/ChatApp.vue';

export default {
  components: {
    ChatApp
  }
}
</script>

<style lang="sass" scoped>
div 
  background: #292929
  color: white
  height: 100vh
  font-size: 14px
  font-family: "PT Sans", sans-serif
</style>