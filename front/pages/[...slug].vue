<template>
    <div>
        <component
            v-for="({ component, ...props }, i) in content"
            :key="i"
            :is="_getComponent(component)"
            :component="
                _getComponent(component) === 'NotFound' ? component : null
            "
            v-bind="props"
        />
    </div>
</template>

<script setup>
import { BASE_URL } from '~/assets/js/contants'

const route = useRoute()
const { data } = await useFetch(
    BASE_URL + (route.path === '/' ? '/index' : route.path)
)
const content = unref(data).story?.content

if (!content) {
    navigateTo('/not-found', { replace: true })
}
</script>

<script>
const existingComponents = ['SEO', 'CitiesBlock', 'PageBlocks']

export default {
    name: 'Page',

    data() {
        return {
            content: []
        }
    },

    methods: {
        _getComponent(name) {
            return existingComponents.includes(name) ? name : 'NotFound'
        }
    }
}
</script>
