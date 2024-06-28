<script>
import { Head } from '@inertiajs/inertia-vue3'
import Object from "../Shared/Object/Object";
export default {
    props:{
        title: String,
        id: Number,
        object: Object
    },
    components:{
        Head,
        Object
    },
}
</script>

<template>
    <Head :title="title"/>
    <div class="container-1200">
        <Object :object="object"></Object>
    </div>
</template>

<style scoped>

</style>
