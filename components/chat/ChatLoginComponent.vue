<template>
  <section>
    <h2>Communication for training and not only :)</h2>
    <form>
      <label>
        Enter your username :
        <input type="text" class="input-username" name="username" />
      </label>
      <label>
        <input type="checkbox" class="checkbox" checked />remember me on this device
      </label>
      <button type="submit"><a href="/chat/all_chats">let's talk!</a></button>
    </form>
  </section>
</template>



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
    button
      padding: 5px 10px
      border: none
      width: 120px
      height: 30px
      border-radius: 20px
      background-color: #053a77
      a
        color: #bdb8b8
</style>