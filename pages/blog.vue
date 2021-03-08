<template>
  <PageTemplate page-heading="Blog">
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
export default class Blog extends Vue {}
</script>

<style lang="scss" scoped>

</style>
