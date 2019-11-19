<template>
  <div>
    <h2>ConstructorExamples</h2>
    <ul v-if="templates.length"
        class="templates-list">
      <li v-for="template in templates">
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
  export default {
    data: () => ({
      templates: [
        {
          id: 1,
          html: `<div style="width: 300px;height: 200px;background: #17a2b8;"></div><div style="width: 250px;height: 200px;background: #dc3545;position: relative;top: -50px;left: 30px;"></div>`
        },
        {
          id: 2,
          html: `<div style="width: 300px;height: 200px;background: gray;"></div><div style="width: 250px;height: 200px;background: yellow;position: relative;top: -50px;left: 30px;"></div>`
        },
      ]
    }),

    methods: {
      addTemplates(template) {
        this.templates.push(template);
      }
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