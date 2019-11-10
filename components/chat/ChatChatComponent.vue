<template>
  <div>
    <div class="chat-wrapper">
      <ul>
        <li v-for="message in messages">
          <div class="col1">
            <img :src="message.picture">
          </div>
          <div class="col2">
            <h4>{{message.user_name}}</h4>
            <p>{{message.message}}</p>
            <p class="date">{{message.date}}</p>
            <input type="button" class="btn" value="delete">
          </div>
        </li>
      </ul>
    </div>
    <div class="message-wrapper">
      <form action="#" method="get">
        <textarea placeholder="Type a message..." name="comment" id="comment-field"></textarea>
        <button class="clip"><img src="/img/chat-img/clip.png" /></button>
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
  data: () => ({
    messages: [
      {
        picture: require("/img/chat-img/melania.png"),
        user_name: 'Melania',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias natus, et corrupti quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur iusto recusandae numquam, facilis blanditiis animi molestiae.',
        date: '06.09.2019'
      },
      {
        picture: require("/img/chat-img/avatar-unknown.png"),
        user_name: 'Antonio',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias natus, et corrupti quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur iusto recusandae numquam, facilis blanditiis animi molestiae.',
        date: '07.09.2019'
      },
      {
        picture: require("/img/chat-img/melania.png"),
        user_name: 'Melania',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias natus, et corrupti quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque consequuntur iusto recusandae numquam, facilis blanditiis animi molestiae.',
        date: '06.09.2019'
      }
    ]
  })
};
</script>



<style lang="sass" scoped>
@import '/styles/reset.sass'
@import '/styles/chat-style.sass'

.chat-wrapper
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