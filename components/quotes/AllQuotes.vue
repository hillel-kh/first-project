<template>
    <div>
        <div class="buttons-wrapper">
            <input type="button" value="show quotes" @click="showAll" v-if="!allQuotes" class="btn">
            <input type="button" value="hide quotes" @click="hideAll" v-else class="btn">
        </div>
        <ul v-if="allQuotes" class="allQuotes">
            <li class="item" v-for="quote of quotes" :key="quote.text">
                <p class="quote-text">“{{quote.text}}”</p>
                <small>{{quote.name}}</small>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        allQuotes: false,
    }),
    props: ['quotes'],
    methods: {
        showAll () {this.allQuotes = true},
        hideAll () {this.allQuotes = false}
    }
}
</script>

<style lang="scss" scoped>
.item {
    font-size: 18px;
    padding-bottom: 10px;

    small {
        color: #D1462F;
        font-style: italic;
    }
}
.buttons-wrapper {
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
}
.allQuotes {
    padding-left: 20px;
}
.btn {
    padding: 8px 10px; 
    background-color: #393D3F;
    border-radius: 10px;
    border: none;
    outline: none;
    color: white;
    transition: background-color 0.2s linear;
    font-size: 15px;
    font-weight: 500;
    
    &:hover {
        cursor: pointer;
        background-color: #4f5457;
    }
}
.quote-text {
    font-weight: 500;
}
</style>
