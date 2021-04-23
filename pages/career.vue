<template>
  <PageTemplate page-heading="Career" :footer="footer" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  head () {
    return {
      title: 'Career'
    }
  }
})
export default class Career extends Vue {
  async asyncData ({ $prismic, error }: any) {
    const footer = await $prismic.api.getSingle('footer')

    if (footer) {
      return { footer }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
