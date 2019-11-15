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
.message {
  margin-top: 14px;
  padding: 14px;
  box-shadow: 1px 1px 3px #ddd;
  border-radius: 5px;
  background: #fff;
  
  .date {
    color: #999;
  }

  .text {
    margin: 8px 0 0;
  }
}


</style>
