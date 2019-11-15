<template>
	<div @click="click" class="router">
		<component v-if="page" :is="page" v-bind="props"></component>
		<slot v-else></slot>
	</div>
</template>

<script>
	import matchEventToTag from '../modules/match-event-to-tag';
	import extractLinkProps from '../modules/extract-link-props';

	export default {
		props: ['routes'],

		data: () => ({
			pathname: location.pathname,
			props: extractLinkProps(location.search)
		}),

		methods: {
			click(event) {
				const link = matchEventToTag(event, 'a');
				if (!link) return;
				if (link.origin !== location.origin) return;

				event.preventDefault();
				history.pushState(null, null, link.href.slice(link.origin.length));
				this.pathname = link.pathname;
				this.props = extractLinkProps(link.search)
			}
		},

		computed: {
			page() {
				return this.routes[this.pathname] || this.routes.default;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../assets/scss/settings";

	.router {
		@include size(100%);
	}
</style>
