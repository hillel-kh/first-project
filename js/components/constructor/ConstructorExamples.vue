<template>
	<div>
		<h2>ConstructorExamples</h2>
		<ul v-if="templates.length"
		    class="templates-list">
			<li v-for="template in templates"></li>
		</ul>
		<div v-else>
			<p>Be the first, create a template!</p>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			templates: [1]
		}),

		methods: {
			addTemplates(template) {
				this.templates.push(template);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../scss/settings";

	.templates-list {
		@extend %listreset;
	}

</style>