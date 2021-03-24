<template>
  <PageTemplate :page-heading="home.data.page_title[0].text">
    <div slot="jumbo" class="home">
      <div>
        <prismic-rich-text :field="home.data.page_subtext" />
        <prismic-image :field="home.data.avatar" loading="lazy" height="180" width="180" />
      </div>
    </div>
  </PageTemplate>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  head () {
    return {
      title: 'Home'
    };
  }
})
export default class Index extends Vue {
  private async asyncData({ $prismic, error }: any) {
    const home = await $prismic.api.getSingle('home')

    if (home) {
      return { home }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes blobby {
  0%, 100% {
    border-radius: 75% 75% 81% 71% / 75% 75% 81% 71%;
  }
  33% {
    border-radius: 43% 53% 49% 36% / 43% 53% 49% 36%;
  }
  66% {
    border-radius: 64% 51% 49% 62% / 64% 51% 49% 62%;
  }
}

.home {
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  img {
    border-radius: 75% 75% 81% 71% / 75% 75% 81% 71%;
    border: 2px solid #000;
    height: 11.25rem;
    width: 11.25rem;
    transition: ease-in-out ;

    &:hover {
      animation: blobby 3s infinite;
    }
  }
}
</style>
