<template>
	<div>
		<input type=button value=- @click="decrement"/>
		{{ counter }}
		<input type=button value=+ @click="increment"/>
	</div>
</template>

<script>
	export default {
		data: () => ({counter: 0}),
		methods: {
			increment() {
				this.counter++;
			},
			decrement() {
				this.counter--;
			}
		}
	}
</script>