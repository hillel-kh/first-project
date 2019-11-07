<template>
	<form @submit.prevent="submit">
		<input v-model="message"
		       class="message-input"
		       type="text"
		       placeholder="Ready to tweet?"/>
		<span class="tip">Press [Enter] to submit the message</span>
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
	.message-input {
		border: 0;
		width: 100%;
		font-size: 14px;
		padding: 7px 14px;
		border-radius: 4px;
		box-sizing: border-box;
		box-shadow: 1px 1px 3px #ddd;
	}

	.tip {
		color: #666;
		font-size: 12px;
		display: block;
		text-align: right;
		padding-top: 4px;
	}

</style>










