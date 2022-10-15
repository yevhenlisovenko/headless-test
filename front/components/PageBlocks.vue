<template>
    <div>
        <component
            v-for="({ component, ...props }, i) in items"
            :key="i"
            :is="_getComponent(component)"
            :component="_getComponent(component) === 'NotFound' ? component : null"
            v-bind="props"
        />
    </div>
</template>

<script>
const existingComponents = ["SEO", "CitiesBlock", "PageBlocks"];

export default {
    name: 'PageBlocks',

    props: {
        items: {
            type: Array,
            default: () => []
        }
    },

    methods: {
        _getComponent(name) {
            return existingComponents.includes(name) ? name : "NotFound";
        },
    },
}
</script>
