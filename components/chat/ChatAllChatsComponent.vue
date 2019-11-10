<template>
  <section>
    <h2>Select a Chat you would like to join from the list below.</h2>
    <ul class="chats-rooms">
      <li v-for="chat in chats">
        <img :src="chat.picture" alt />
        <a :href="chat.href">Chat with {{chat.name}}</a>
      </li>
    </ul>
  </section>
</template>



<script>
export default {
  data: () => ({
    chats: [
      {
        picture: require("/img/chat-img/melania.png"),
        href: "/chat/chat",
        name: "Melania"
      },
      {
        picture: require("/img/chat-img/melania.png"),
        href: "/chat/chat",
        name: "Kateryna"
      },
      {
        picture: require("/img/chat-img/avatar-unknown.png"),
        href: "/chat/chat",
        name: "Antonio"
      },
      {
        picture: require("/img/chat-img/avatar-unknown.png"),
        href: "/chat/chat",
        name: "Unknown Artist"
      },
      {
        picture: require("/img/chat-img/melania.png"),
        href: "/chat/chat",
        name: "Polina"
      },
      {
        picture: require("/img/chat-img/avatar-unknown.png"),
        href: "/chat/chat",
        name: "Stanislav"
      }
    ]
  })
};
</script>



<style lang="sass" scoped>
@import '/styles/reset.sass'
@import '/styles/chat-style.sass'
section
  ul
    width: 300px
    margin: 0 auto
    margin-bottom: 50px
    li
      display: flex
      justify-content: center
      align-items: center
      min-width: 200px
      border: solid 1px #414040
      padding: 5px
      img
        width: 30px
        height: 30px
        margin-right: 20px
        
</style>