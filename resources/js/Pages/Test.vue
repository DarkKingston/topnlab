<template>
    <Head :title="title"/>
    <h1>Page test: props(title)=>{{title}}</h1>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'
export default {
    props:{
        title: String
    },
    components:{
        Head
    }
}
</script>

<style scoped>

</style>
