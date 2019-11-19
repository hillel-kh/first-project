<template>
  <div>
    <h2>ConstructorExamples</h2>
    <ul v-if="x.length"
        class="templates-list">
      <li v-for="template of x">
        <div class="example">
          <a :href=`/constructor/preview?id=${template.id}`>preview</a>
        </div>
      </li>
    </ul>
    <div v-else>
      <p>Be the first, create a template!</p>
    </div>
  </div>
</template>

<script>
  import store from '../../store/index.js'
  export default {
      data() {
          return {
              x: []
          }
      },
      methods: {
        addTemplates(template) {
          this.templates.push(template);
        }
      },
      mounted() {
        console.log(store.state.constructorTemplates);
        this.x = store.state.constructorTemplates;
      }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/settings";

  .templates-list {
    @extend %listreset;

    .example {
      margin: 10px;
      padding: 10px;
      border: 1px solid #000;
    }
  }
</style>