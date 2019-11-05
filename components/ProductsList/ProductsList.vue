<template>
    <div>
        <ProductItem v-for="(product, i) in products" :key="product.id" 
        :product="product" :index="(i+1)"></ProductItem>       
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  data() {
      return {
          products: [
              {
                  id: 1,
                  title: 'Product #1',
                  price: 50,
                  qt: 1000
              },
              {
                  id: 2,
                  title: 'Product #2',
                  price: 100,
                  qt: 456
              },
              {
                  id: 3,
                  title: 'Product #3',
                  price: 30,
                  qt: 3000
              },
              {
                  id: 4,
                  title: 'Product #4',
                  price: 40,
                  qt: 4000
              }

          ]
      }
  }
}
 
</script>