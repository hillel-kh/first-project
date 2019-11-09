<template>
  <header class="header">
    <div class="logo">
      <a href="#"><img src="/img/chat-img/main-logo.png" width="60" height="60" alt="chat logo" /></a>
      <h2>Our imperfect Chat</h2>
    </div>
    <div class="log-out">
      <div class="user">
        <img src="/img/chat-img/avatar-unknown.png" width="50" height="50" alt="avatar" />
        <p class="username">Antonio</p>
      </div>
      <div class="exit">
        <button><img src="/img/chat-img/exit-icon.png" width="45" height="45" alt="exit" /></button>
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>
.header
  display: flex
  justify-content: space-between
  padding: 20px
  font-family: "PT Sans", sans-serif
  font-size: 14px
  margin-bottom: 80px
  .logo
    display: flex
    justify-content: space-between
    a
      text-decoration: none
      color: #fff
      font-weight: bold
    h2
      margin-left: 20px
      font-size: 1.5em
      height: 100%
      display: flex
      justify-content: center
      align-items: center
  .log-out
    .user
      display: flex
      justify-content: space-between
      border: solid 1px #414040
      padding: 10px
      img
        margin-right: 20px
      .username
        margin-right: 20px
        display: flex
        justify-content: center
        align-items: center
    display: flex
    justify-content: space-between
    .exit
      padding-top: 2px
      border: solid 1px #414040
      padding: 10px
      button
        background: transparent
        border: none
        cursor: pointer
        outline: none
</style>