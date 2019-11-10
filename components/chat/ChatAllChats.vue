<template>
  <div>
    <ChatHeader></ChatHeader>
    <ChatAllChatsComponent></ChatAllChatsComponent>
    <ChatFooter></ChatFooter>
  </div>
</template>



<script>
import ChatHeader from './ChatHeader.vue';
import ChatAllChatsComponent from './ChatAllChatsComponent.vue';
import ChatFooter from './ChatFooter.vue';
export default {
  components: {ChatHeader, ChatAllChatsComponent, ChatFooter}
}
</script>



<style lang="sass" scoped>
@import '/styles/reset.sass'
@import '/styles/chat-style.sass'
</style>