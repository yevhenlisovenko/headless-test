<template>
    <Head>
       <Title>{{ metaTitle }}</Title> 
       <Meta name="description" :content="metaDescription" />
    </Head>
</template>

<script>
export default {
    name: 'SEO',

    props: {
        metaTitle: {
            type: String,
            default: ''
        },

        metaDescription: {
            type: String,
            default: ''
        }
    }
}
</script>
