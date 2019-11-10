<template>
  <ProjectLayout title="Editor" bgcolor="#ced1d6" color="black">
    <Editor></Editor>
  </ProjectLayout>
</template>

<script>
import ProjectLayout from './ProjectLayout.vue';
import Editor from './editor/Editor.vue';

export default {
  components: { ProjectLayout, Editor }
}
</script>