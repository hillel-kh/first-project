<template>
    <div class="wrapper">
        <h2>Quote of the Day</h2>
        <QuoteSlider :quotes="quotes"></QuoteSlider>
        <AllQuotes :quotes="quotes"></AllQuotes>
    </div>
</template>

<script>
import AllQuotes from './AllQuotes';
import QuoteSlider from './QuoteSlider';

export default {
    data: () => ({
        quotes: [
            {name: `Mahatma Gandhi`, text: `You must be the change you wish to see in the world.`},
            {name: `Theodore Roosevelt`, text: `Believe you can and you’re halfway there.`},
            {name: `Dalai Lama`, text: `Happiness is not something ready made. It comes from your own actions.` },
            {name: `Albert Einstein`, text: `A person who never made a mistake never tried anything new.`},
            {name: `Martin Luther King, Jr.`, text: `Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.`},
            {name: `James Cameron`, text: `If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.`},
        ],
    }),
    components: {
        AllQuotes,
        QuoteSlider,
    }
}
</script>

<style scoped>
.wrapper {
    border: 2px dashed #2D1E2F;
    border-radius: 15px;
    padding: 15px;
}
h2 {
    margin: 5px 0 20px 0;
}
</style>

