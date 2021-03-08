<template>
  <PageTemplate page-heading="Projects">
  </PageTemplate>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  head () {
    return {
      title: 'Projects'
    };
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>

</style>
