<template>
    <div>
        <button v-on:click="prevImg">prev</button>
        <button v-on:click="nextImg">next</button> 
        <img :src="images[i]">
        
    </div>
</template>

<script>
export default {
  data: function () {
      return { // this.images[this.i].comments.push({text, author, date})
          i: 0,
          images: [
              { src: "http://placehold.it/100" },
              { src: "http://placehold.it/200" }
          ]
      }
  },
  methods: {
    prevImg: function (event) {
        event.preventDefault();
        this.i-- ;
      },
    nextImg: function (event) {
        event.preventDefault();
        this.i++ ;

        
      }
  } 
}
 
</script>