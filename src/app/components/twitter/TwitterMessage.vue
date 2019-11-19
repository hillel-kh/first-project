<template>
  <li class="message">
    <small class="date">Sent on: {{ tweet.date.toLocaleString() }}</small>
    <p class="text">{{ tweet.msg }}</p>
  </li>
</template>

<script>
  export default {
    props: ['tweet']
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/settings";

  .message {
    padding: 14px;
    margin-top: 14px;
    background: $white;
    box-shadow: 1px 1px 3px #ddd;
    border-radius: 5px;
  }

  .date {
    color: #999;
  }

  .text {
    margin: 8px 0 0;
  }
</style>
