<template>
  <div class="log">
    <ChatHeader ></ChatHeader>
    <ChatLoginComponent @login="onLogin"></ChatLoginComponent>
    <ChatFooter></ChatFooter>
  </div>
</template>



<script>
import ChatHeader from './ChatHeader.vue';
import ChatLoginComponent from './ChatLoginComponent.vue';
import ChatFooter from './ChatFooter.vue';
export default {
  data: () => ({ }),
  components: {ChatHeader, ChatLoginComponent, ChatFooter},
  methods: {
    onLogin (data) {
      alert(data.names);
      document.location.href = '/chat/all_chats';
    }
  }
}
</script>



<style lang="sass" scoped>
@import '/styles/reset.sass'
@import '/styles/chat-style.sass'
.log
  //padding-top: 250px
</style>
