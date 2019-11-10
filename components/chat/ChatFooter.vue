<template>
  <footer>
    <div class="developer-span">
      CHAT BY
      <a href="https://kharkiv.ithillel.ua/">
        <img src="/img/chat-img/hillel-logo.jpg" width="60" height="25" alt="developer-logo" />
      </a>
    </div>
    <div> 
    <a href="/">Back to main page</a>
    </div>
  </footer>
</template>



<style lang="sass" scoped>
@import '/styles/reset.sass'
@import '/styles/chat-style.sass'
footer
  display: flex
  align-items: flex-end
  flex-direction: column
  .developer-span
    margin-bottom: 30px
  a
    color: #666
</style>