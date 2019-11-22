<template>
  <div class="message-wrapper">
    <div class="message" @mousedown="delMessage">
      <img src="/img/chat-img/melania.png" />
      <h4>{{message.user_name}}</h4>
      <p>{{message.message}}</p>
      <p class="date">{{message.date.toLocaleString()}}</p>
      <input type="button" class="btn del" value="delMessage" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["message", "date", "user_name"],
  methods: {
    delMessage() {
      document.querySelectorAll(".del").forEach(function(item) {
        item.addEventListener("click", function(evt) {
          evt.preventDefault();
          item.parentNode.remove();
        });
      })
    }
  }
};
</script>

<style lang="sass" scoped>
.message-wrapper
  display: flex
  flex-direction: column-reverse
  .message
    color: #f8f8f8
    position: relative
    padding: 20px 20px 20px 100px
    width: 90%
    position: relative
    img
      width: 50px
      height: 50px
      left: 20px
      top: 30px
      background: #323333 url(#) no-repeat 50% 50%
      border-radius: 35px
      position: absolute
    h4
      font-weight: bold
      font-size: 16px
      margin-bottom: 10px
    p
      margin-bottom: 10px
    .date
      color: #bdc3c7
    .btn
      width: 100px
      height: 30px
      background-color: #640a16
      padding: 5px 10px
      border-radius: 20px
      color: #bdb8b8
      position: absolute
      bottom: 20px
      right: 40px
      border: none
      cursor: pointer
    .btn:hover
      background-color: #f1230885
</style>