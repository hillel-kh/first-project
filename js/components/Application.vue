<template>
	<Router :routes="routes">
		<NotFoundPage></NotFoundPage>
	</Router>
</template>

<script>
	import Router from './Router.vue';

	import HomePage from './pages/HomePage.vue';
	import TwitterPage from './pages/TwitterPage.vue';
	import CounterPage from './pages/CounterPage.vue';
	import TeamsPage from './pages/TeamsPage.vue';
	import NotFoundPage from './pages/NotFoundPage.vue';
	import Constructor from './pages/ConstructorPage.vue';

	export default {
		data: () => ({
			routes: {
				'/': HomePage,
				'/twitter': TwitterPage,
				'/counter': CounterPage,
				'/teams': TeamsPage,
				'/constructor': Constructor
			}
		}),

		components: {Router, NotFoundPage}
	}
</script>