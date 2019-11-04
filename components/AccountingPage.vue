<template>
  <ProjectLayoutW1200 title="Accounting" bgcolor="#ecd5ea">
    <Accounting></Accounting>
  </ProjectLayoutW1200>
</template>

<script>
import ProjectLayoutW1200 from './ProjectLayoutW1200.vue';
import Accounting from './accounting/Accounting.vue';

export default {
  components: { ProjectLayoutW1200, Accounting }
}
</script>