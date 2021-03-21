<template>
  <PageTemplate :page-heading="header.title">
    <div slot="jumbo" class="home">
      <div>
        <div v-html="$storyapi.richTextResolver.render(header.headline)"></div>
        <img :src="header.avatar.filename" :alt="header.avatar.alt" height="180" width="180" loading="lazy" />
      </div>
    </div>
  </PageTemplate>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import 'storyblok-js-client/dist/index';

@Component({
  head () {
    return {
      title: 'Home'
    };
  }
})
export default class Index extends Vue {
  private story!: Record<string, any>;

  private mounted (): void {
    // @ts-ignore
    this.$storybridge.on(['input', 'published', 'change'], (event: StoryblokEventPayload) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })

    console.log(this.story.content);
  }

  asyncData (context: any): void {
    return context.app.$storyapi.get('cdn/stories/home', {
      version: 'published'
    }).then((res: any) => {
      return res.data
    }).catch((res: any) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }

  // StoryBlok blocks

  private get header(): Record<string, any> {
    return this.story.content.body.find((item: Record<string, any>) => item.component === 'header');
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
