module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  plugins: ['eslint-plugin-jest'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:jest/all'
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': ['warn', {
      ignores: ['pre', 'textarea', 'nuxt-link']
    }],
    'jest/lowercase-name': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-called-with': 'off'
  }
}
