import Vue from 'vue'
import 'reflect-metadata'

// Necessary for Nuxt auto scan components feature
[
  'form/TextInput'
].forEach((path) => {
  Vue.component(`${path.includes('form/') ? 'Form' : ''}${path.substring(path.indexOf('/') + 1)}`, require(`@/components/${path}.vue`).default)
})
