<template>
    <div>
        <h2>{{ headline }}</h2>

        <div v-for="{ slug, content } in items" :key="slug">
            <NuxtLink :to="'/' + childSlug + slug">
                {{ content.Title }}
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CitiesBlock',

    props: {
        headline: {
            type: String,
            default: ''
        },

        childSlug: {
            type: String,
            default: ''
        },

        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>
