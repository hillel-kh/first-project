<template>
  <div>
    <ChatHeader></ChatHeader>
    <ChatChatComponent></ChatChatComponent>
    <ChatFooter></ChatFooter>
  </div>
</template>



<script>
import ChatHeader from './ChatHeader.vue';
import ChatChatComponent from './ChatChatComponent.vue';
import ChatFooter from './ChatFooter.vue';
export default {
  components: {ChatHeader, ChatChatComponent, ChatFooter}
}
</script>



<style lang="sass" scoped>
@import '/styles/reset.sass'
@import '/styles/chat-style.sass'
</style>