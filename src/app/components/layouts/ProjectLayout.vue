<template>
  <div class="page"
       :style="{ background: bgcolor || '#fff', color: color || '#444' }">
    <main>
      <header>
        <h1>{{ title || 'Project without name' }}</h1>
        <a href="/">Return back</a>
      </header>
      <slot></slot>
    </main>
  </div>
</template>

<script>
  export default {
    props: ['title', 'bgcolor', 'color']
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/settings";

  .page {
    @include size(100%);
    overflow: auto;
  }

  main {
    width: 400px;
    margin: 60px auto;
  }

  header {
    margin-bottom: 30px;
  }

  h1 {
    margin: 0 0 10px;
  }

  a {
    font-size: 14px;
  }
</style>