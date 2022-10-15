<template>
    <div class="not-found">
        <h2>Not found</h2>
        <p v-if="component">Component: <strong>{{ component }}</strong></p>
    </div>
</template>

<script>
export default {
    name: 'NotFound',

    props: {
        component: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
.not-found {
    border:  1px solid tomato;
    padding: 0.5rem;
}
</style>