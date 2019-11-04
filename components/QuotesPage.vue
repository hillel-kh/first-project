<template>
    <ProjectLayout title="Quotes" bgcolor="#FCF6B1" color="#2D1E2F">
        <Quotes></Quotes>
    </ProjectLayout>
</template>

<script>
import Quotes from './quotes/Quotes'
import ProjectLayout from './ProjectLayout.vue'

export default {
    components: {
        Quotes,
        ProjectLayout
    }     
}
</script>