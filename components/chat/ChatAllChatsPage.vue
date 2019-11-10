<template>
  <div class="chat-wrap">
    <ChatAllChats style="width: 800px; margin: 0 auto;"></ChatAllChats>
  </div>
</template>



<script>
import ChatAllChats from './ChatAllChats.vue';
export default {
  components: {ChatAllChats}
};
</script>



<style lang="sass" scoped>
@import '/styles/reset.sass'
@import '/styles/chat-style.sass'
</style>