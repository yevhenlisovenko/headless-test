module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended'
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'vue/no-v-html': 0,
        'vue/prop-name-casing': 0,
        'no-console': 0,
        'nuxt/no-cjs-in-config': 0,
        'vue/no-mutating-props': 0
    }
}
