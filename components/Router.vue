<template>
	<div @click="click" class="router">
		<component v-if="page" :is="page"></component>
		<slot v-else></slot>
	</div>
</template>

<script>
	import matchEventToTag from '../modules/match-event-to-tag';

	export default {
		props: ['routes'],

		data: () => ({pathname: location.pathname}),

		methods: {
			click(event) {
				const link = matchEventToTag(event, 'a');
				if (!link) return;
				if (link.origin !== location.origin) return;

				event.preventDefault();
				history.pushState(null, null, link.href.slice(link.origin.length));
				this.pathname = link.pathname;
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
	.router {
		width: 100%;
		height: 100%;
	}
</style>
