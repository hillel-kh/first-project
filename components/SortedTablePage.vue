<template>
    <ProjectLayout title="Table">
        <SortedTable></SortedTable>
    </ProjectLayout>
</template>

<script>
    import ProjectLayout from './ProjectLayout.vue';
    import SortedTable from "./sortedTable/SortedTable";

    export default {
        name: "SortedOrderPage",
        components: {ProjectLayout, SortedTable}
    }
</script>

<style scoped>

</style>