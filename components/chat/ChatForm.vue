<template>
  <div class="message-wrapper">
    <form @submit="submit">
      <textarea placeholder="Type a message..." v-model="message"></textarea>
      <button class="clip">
        <img src="/img/chat-img/clip.png" />
      </button>
      <input class="btn" type="submit" value="send message" />
    </form>

    <!--<div class="message">
        <form
          class="media-form visually-hidden"
          action="#"
          method="post"
          enctype="multipart/form-data"
        >
          <p>select media to upload:</p>
          <input type="file" name="media" />
          <input type="submit" value="Загрузить" />
        </form>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data: () => ({ message: '' }),

  methods: {
    submit(event) {
      event.preventDefault();
      const newMessage = { message: this.message, date: new Date(), user_name: 'Melania' };
      this.$emit('createMessage', newMessage);
      this.message = '';
    }
  }
}
</script>

<style lang="sass" scoped>
.message-wrapper
  border: solid 1px #414040
  border-radius: 10px
  margin-bottom: 40px
  padding: 20px
  form
    display: flex
    align-items: center
    textarea
      width: 600px
      background: transparent
      border: none
      color: #fff
      resize: none
    .clip
      background-color: transparent
      width: 50px
      height: 30px
      margin-right: 10px
      border: none
      img
        width: 28px
        height: 28px
    .btn
      width: 120px
      height: 30px
      background-color: #053a77
      border: none
      border-radius: 20px
      color: #bdb8b8
      padding: 5px 10px
    .btn:hover
      background-color: #0071f0b3
      cursor: pointer
</style>