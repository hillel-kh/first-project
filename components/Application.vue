<template>
	<Router :routes="routes">
		<NotFoundPage></NotFoundPage>
	</Router>
</template>

<script>
	import Router from './Router.vue';

	import HomePage from './HomePage.vue';
	import TwitterPage from './TwitterPage.vue';
	import CounterPage from './CounterPage.vue';
	import TeamsPage from './TeamsPage.vue';
	import NotFoundPage from './NotFoundPage.vue';

	export default {
		data: () => ({
			routes: {
				'/': HomePage,
				'/twitter': TwitterPage,
				'/counter': CounterPage,
				'/teams': TeamsPage
			}
		}),

		components: {Router, NotFoundPage}
	}
</script>