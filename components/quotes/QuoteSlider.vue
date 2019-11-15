<template>
  <div>
    <p class="quote-text">“{{ quotes[quoteCounter].text }}”</p>
    <span class="author">– {{quotes[quoteCounter].name }}</span>
    <div>
      <span class="number">{{ quoteCounter + 1 }} / {{ quotes.length }}</span>
      <div class="buttons-wrapper">
        <input type="button" value="next quote"  @click="prevQuote" class="btn">
        <input type="button" value="prev quote" @click="nextQuote" class="btn">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    quoteCounter: 0
  }),
  props: ['quotes'],
  methods: {
    stepQuote (step) {
      this.quoteCounter += step;
      if (this.quoteCounter >= this.quotes.length)
        this.quoteCounter = 0;
      if (this.quoteCounter < 0)
        this.quoteCounter = this.quotes.length - 1;
    },
    nextQuote () {this.stepQuote(1)},
    prevQuote () {this.stepQuote(-1)},
  }
}
</script>

<style lang="scss" scoped>
.buttons-wrapper {
  padding: 5px 0 5px 0;
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin: 0 auto;
}
.quotes__header {
  margin-top: 5px;
}
.author {
  color: #D1462F;
  font-style: italic;
  display: inline-block;
}
.number {
  text-align: center;
  font-weight: 500;
  display: block;
  margin: 15px 0;
}
.btn {
  padding: 8px 10px; 
  background-color: #393D3F;
  border-radius: 10px;
  border: none;
  outline: none;
  color: white;
  transition: background-color 0.2s linear;
  font-size: 16px;
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