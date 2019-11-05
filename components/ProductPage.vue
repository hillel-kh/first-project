<template>
  <ProjectLayout title="ProductPage" bgcolor="palevioletred" color="#fff">
    <ProductPage></ProductPage>
  </ProjectLayout>
</template>

<script>
import ProjectLayout from './ProjectLayout.vue';
import ProductItem from './ProductsList/ProductItem.vue';

export default {
  components: { ProjectLayout, ProductsList }
}
</script>
 
<style scoped>
p { color: #fff; }
</style>