<template>
	<ProjectLayout title="Twitter" bgcolor="lightblue">
		<Twitter></Twitter>
	</ProjectLayout>
</template>

<script>
	import ProjectLayout from '../layouts/ProjectLayout.vue';
	import Twitter from '../twitter/Twitter.vue';

	export default {
		components: {ProjectLayout, Twitter}
	}
</script>