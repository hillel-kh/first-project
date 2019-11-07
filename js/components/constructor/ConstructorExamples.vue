<template>
	<div>
		<h2>ConstructorExamples</h2>
		<ul v-if="templates.length"
		    class="templates-list">
			<li v-for="template in templates">
				<div class="example">
					<a href="">preview</a>
				</div>
			</li>
		</ul>
		<div v-else>
			<p>Be the first, create a template!</p>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => ({
			templates: [1,2,3]
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

		.example {
			margin: 10px;
			padding: 10px;
			border: 1px solid #000;
		}
	}

</style>