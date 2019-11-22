<template>
  <section>
    <h2>Communication for training and not only :)</h2>
    <form @submit="submit">
      <label>
        Enter your username :
        <input v-model="userLogin" type="text" class="input-username" name="username" required pattern="[A-Za-z0-9]{3,15}"/>
      </label>
      <label>
        <input type="checkbox" class="checkbox" checked />remember me on this device
      </label>
      <input type="submit" value="let's talk!" class="btn"> 
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({ userLogin: '' }),

  methods: {
    submit(event) {
      event.preventDefault();
      document.location.href = '/chat/all_chats';
    },
  }
}
</script>

<style lang="sass" scoped>
@import '/styles/reset.sass'
@import '/styles/chat-style.sass'
section
  form
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    min-height: 200px
    width: 320px
    padding: 10px
    border: solid 2px #414040
    border-radius: 10px
    margin: 0 auto
    margin-bottom: 40px
    .input-username 
      background-color: #3f3f3f
      border: none
      border-radius: 5px
      color: #f8f8f8
    .checkbox
      margin-right: 10px
    .btn
      padding: 5px 10px
      border: none
      width: 120px
      height: 30px
      border-radius: 20px
      background-color: #053a77
      color: #bdb8b8
      cursor: pointer
</style>