<template>
  <CenteredLayout>
    <Editor></Editor>
  </CenteredLayout>
</template>

<script>
import ProjectLayout from './ProjectLayout.vue';
import CenteredLayout from './CenteredLayout.vue';
import Editor from './editor/Editor.vue';

export default {
  components: { ProjectLayout, Editor, CenteredLayout }
}
</script>
<style scoped>

</style>