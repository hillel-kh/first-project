<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">{{index}} {{pduct.title}} </h4>
            <p class="card-text">{{product.qt}} items for ${{product.price}}</p>
            <a href="#" class="btn btn-primary">View Details</a>
        </div>            
    </div>
</template>

<script>
export default {
    props: ["product","index"],

    data() {
        return{
            // product: {},
            // index: 1
        }
    }
}
</script>

<style scoped>
    div.card {
        width:500px;
        border: 1px solid tomato;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
</style>

