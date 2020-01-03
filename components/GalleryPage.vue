<template>
  <CenteredLayout>
        <a href="/">Return back</a>
    <img v-if="id && images[id]" :src="images[id]" />
    <p v-else>Oops, no image here</p>
  </CenteredLayout>
</template>

<script>
import CenteredLayout from './CenteredLayout.vue';

export default {
  props: ['id'],
  data: () => ({
    images: [
      'https://via.placeholder.com/300/09f/fff/?text=Hello',
      'https://via.placeholder.com/300/09f/fff/?text=Welcome',
      'https://via.placeholder.com/300/09f/fff/?text=Bye'
    ]
  }),
  components: { CenteredLayout }
}
</script>

<style scoped>
</style>