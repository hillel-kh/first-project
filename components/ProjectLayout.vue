<template>
  <div class="page" :style="{ background: bgcolor || '#fff', color: color || '#444' }">
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
.page {
  height: 100%;
  width: 100%;
  overflow: auto;

  main {
    margin: 60px auto;
    width: 400px;

    header {
      margin-bottom: 30px;
      
      h1 {
        margin: 0 0 10px;
      }

      a {
        font-size: 14px;
      }
    }
  }
}
</style>