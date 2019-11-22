<template>
  <div class="log">
    <ChatHeader ></ChatHeader>
    <ChatLoginComponent></ChatLoginComponent>
    <ChatFooter></ChatFooter>
  </div>
</template>



<script>
import ChatHeader from './ChatHeader.vue';
import ChatLoginComponent from './ChatLoginComponent.vue';
import ChatFooter from './ChatFooter.vue';
export default {
  components: {ChatHeader, ChatLoginComponent, ChatFooter},
}
</script>



<style lang="sass" scoped>
@import '/styles/reset.sass'
@import '/styles/chat-style.sass'
.log
  //padding-top: 250px
</style>
