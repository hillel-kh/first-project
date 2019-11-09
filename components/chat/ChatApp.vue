<template>
  <div>
    <ChatHeader></ChatHeader>
    <ChatLogin></ChatLogin>
    <ChatFooter></ChatFooter>
  </div>
</template>

<script>
import ChatHeader from './ChatHeader.vue';
import ChatLogin from './ChatLogin.vue';
import ChatFooter from './ChatFooter.vue';
import '/styles/reset.sass';
import '/styles/style_for_chat.css';
export default {
  components: {ChatHeader, ChatLogin, ChatFooter}
}
</script>