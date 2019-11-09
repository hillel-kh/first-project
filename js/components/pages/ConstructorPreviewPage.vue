<template>
	<ProjectLayout title="Constructor">
		<ConstructorPreview></ConstructorPreview>
	</ProjectLayout>
</template>

<script>
	import ProjectLayout from '../layouts/ProjectLayout.vue';
	import ConstructorPreview from '../constructor/ConstructorPreview.vue';

	export default {
		components: {ProjectLayout, ConstructorPreview}
	}
</script>