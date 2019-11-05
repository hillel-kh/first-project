<template>
  <ProjectLayout title="ProductPage" bgcolor="#193675" color="#fff">
    <ProductItem>
        <div>
  <my-header></my-header>
  <div class="container">    
      <products @viewDetails="viewDetails"></products>
      <product-details :product="selectedProduct"></product-details>
  </div>
</div>
    </ProductItem>
  </ProjectLayout>
</template>

<script>
import ProjectLayout from './ProjectLayout.vue';
import ProductItem from './ProductsList/ProductItem.vue';
import ProductsList from './ProductsList/ProductsList.vue';
import ProductDetails from './ProductsList/ProductDetails.vue';

export default {
  data(){
    return {
      selectedProduct: {}
    }
  },
  components: {
    ProjectLayout,
    'products': ProductsList,
    ProductDetails,
  },  
  methods:{
    viewDetails(product){
      this.selectedProduct = product;
    }
  }  
  
}
</script>
 
<style scoped>
p { color: #ffffff; }
.container{
    display:flex;
    align-items:flex-start;
  }
</style>