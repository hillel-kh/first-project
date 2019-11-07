<template>
	<form @submit.prevent="submit">
		<input v-model="message"
		       class="message-input"
		       type="text"
		       placeholder="Ready to tweet?"/>
		<div class="tip">Press [Enter] to submit the message</div>
	</form>
</template>

<script>
	export default {
		data: () => ({message: ''}),

		computed: {
			isValidMessage() {
				return this.message.trim().length;
			}
		},

		methods: {
			submit(event) {
				const newTweet = {msg: this.message, date: new Date()};
				this.$emit('createTweet', newTweet)
				this.message = '';
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../scss/settings";

	.message-input {
		border: 0;
		width: 100%;
	}

	.tip {
		color: $gray-700;
		font-size: 12px;
		text-align: right;
		padding-top: 4px;
	}

</style>










