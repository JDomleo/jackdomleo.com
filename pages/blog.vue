<template>
  <PageTemplate page-heading="Blog" :footer="footer">
  </PageTemplate>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  head () {
    return {
      title: 'Blog'
    };
  }
})
export default class Blog extends Vue {
  async asyncData({ $prismic, error }: any) {
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
