<template>
  <div class="message-wrapper">
    <form class="add-message">
      <textarea placeholder="Type a message..." v-model="message"></textarea>
      <button class="clip" @click="addFileVisibility">
        <img src="/img/chat-img/clip.png" />
      </button>
      <input class="btn" type="submit" value="send message" @click="addMessage" />
    </form>

    <form class="add-file" action="#" method="post" enctype="multipart/form-data">
      <label>
        select media to upload:
        <input type="file" name="media" />
      </label>
      <input type="submit" value="Add" @click="addFile"/>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({ message: "" }),

  methods: {
    addMessage(event) {
      event.preventDefault();
      const newMessage = {
        message: this.message,
        date: new Date(),
        user_name: "Melania"
      };
      this.$emit("createMessage", newMessage);
      this.message = "";
    },

    addFileVisibility(event) {
      event.preventDefault();
      document.querySelector('.add-file').style.display = "block";
    },

    addFile(event) {
      event.preventDefault();
      document.querySelector('.add-file').style.display = "none";
    }
  }
};
</script>

<style lang="sass" scoped>
.message-wrapper
  border: solid 1px #414040
  border-radius: 10px
  margin-bottom: 40px
  padding: 20px
  position: relative
  .add-message
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
  .add-file
    position: absolute
    left: 20%
    top: 0
    border: 1px solid #fff
    border-radius: 20px
    padding: 50px
    display: none
    background: rgba(255, 255, 255, 0.5)
    label input
      margin: 0 10px
</style>