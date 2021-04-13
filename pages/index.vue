<template>
  <PageTemplate :page-heading="$prismic.asText(home.data.page_title)" :footer="footer">
    <div slot="jumbo" class="home">
      <div>
        <prismic-rich-text class="home__subtext" :field="home.data.page_subtext" />
        <prismic-image :field="home.data.avatar" loading="lazy" height="180" width="180" />
      </div>
    </div>
    <section id="about" class="container">
      <h2>{{ $prismic.asText(home.data.about_heading) }}</h2>
      <prismic-rich-text :field="home.data.about_text" />
    </section>
    <section id="contact" class="container">
      <h2>Contact me</h2>
      <ContactForm />
    </section>
  </PageTemplate>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

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
    const footer = await $prismic.api.getSingle('footer')

    if (home && footer) {
      return { home, footer }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss" scoped>
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
  }

  &__subtext {
    text-align: center;
  }
}

section {
  margin-top: 5rem;
  margin-bottom: 5rem;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
