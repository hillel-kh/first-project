<template>
  <div>
    <header>
      <h2>ConstructorPreview</h2>
      <nav>
        <a href="/constructor">back to ConstructorExamples</a>
        <button type="button">Edit</button>
      </nav>
    </header>
    <main>
      <div ref="constructorView"
           class="constructor-view"></div>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        test: {
          html: `<div style="width: 350px;height: 200px;background: #17a2b8;"></div><div style="width: 250px;height: 200px;background: #dc3545;position: relative;top: -50px;left: 30px;"></div>`
        }
      }
    },
    mounted() {
      this.$refs.constructorView.innerHTML = this.test.html
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/settings";

  .constructor-view {
    padding: 10px;
    border: 1px solid $black;
  }
</style>