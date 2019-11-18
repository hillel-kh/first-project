<template>
  <div>
    <ChatHeader></ChatHeader>
    <ChatMessage
      v-for="message in messages"
      :message="message"
    ></ChatMessage>
    <ChatForm @createMessage="addMessage"></ChatForm>
    <ChatFooter></ChatFooter>
  </div>
</template>



<script>
import ChatHeader from "./ChatHeader.vue";
import ChatMessage from "./ChatMessage.vue";
import ChatForm from "./ChatForm.vue";
import ChatFooter from "./ChatFooter.vue";
export default {
  data: () => ({
    messages: [
      {
        user_name: "Melania",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias natus, et corrupti quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur iusto recusandae numquam, facilis blanditiis animi molestiae.",
        date: "06.09.2019, 21:20:21"
      },
      {
        user_name: "Antonio",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias natus, et corrupti quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur iusto recusandae numquam, facilis blanditiis animi molestiae.",
        date: "07.09.2019, 21:20:21"
      },
      {
        user_name: "Melania",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias natus, et corrupti quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur iusto recusandae numquam, facilis blanditiis animi molestiae.",
        date: "08.09.2019, 21:20:21"
      }
    ]
  }),
  components: { ChatHeader, ChatMessage, ChatFooter, ChatForm },
  methods: {
    addMessage(message) {
      this.messages.push(message);
    }
  }
};
</script>