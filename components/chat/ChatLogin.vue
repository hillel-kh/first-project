<template>
  <section>
    <h2 class="auth-heading">Communication for training and not only :)</h2>
    <form>
      <label>
        Enter your username :
        <input type="text" class="input-username" name="username" />
      </label>
      <label>
        <input type="checkbox" class="remember-user" checked />remember me on this device
      </label>
      <input class="button" type="submit" value="let's talk!" />
    </form>
  </section>
</template>

<style lang="sass" scoped>
section
  display: flex
  flex-direction: column
  align-items: center
  h2
    display: block
    font-size: 1.5em
    font-weight: bold
    margin-bottom: 20px
  form
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    min-height: 200px
    padding: 10px
    border: solid 2px #414040
    border-radius: 10px
</style>