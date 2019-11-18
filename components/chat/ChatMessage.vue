<template>
  <div class="message-wrapper">
      <ul>
        <li>
          <div class="col1">
            <img src="/img/chat-img/melania.png">
          </div>
          <div class="col2">
            <h4>{{message.user_name}}</h4>
            <p>{{message.message}}</p>
            <p class="date">{{message.date.toLocaleString()}}</p>
            <input type="button" class="btn" value="delete">
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  props: ['message', 'date', 'user_name']
}
</script>

<style lang="sass" scoped>
.message-wrapper
  display: flex
  flex-direction: column-reverse
  ul li
    display: flex
    margin-bottom: 20px
    .col1 img
      width: 50px
      height: 50px
      margin-right: 20px
      background: #323333 url(#) no-repeat 50% 50%
      border-radius: 35px
      padding: 5px
    .col2
      color: #f8f8f8
      position: relative
      padding: 20px
      width: 90%
      h4
        font-weight: bold
        font-size: 16px
        margin-bottom: 10px
      p
        margin-bottom: 10px
      .date
        color: #bdc3c7
      .btn
        width: 80px
        height: 30px
        background-color: #640a16
        padding: 5px 10px
        border-radius: 20px
        color: #bdb8b8
        position: absolute
        bottom: 20px
        right: 20px
        border: none
        cursor: pointer
      .btn:hover
        background-color: #f1230885
</style>