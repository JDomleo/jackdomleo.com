<template>
  <article class="markdown">
    <nuxt-link class="blog__back" to="/blog">
      <svg-icon name="arrow-left" />
      Back to blogs
    </nuxt-link>
    <h1>{{ page.title }}</h1>
    <ul class="blog__meta">
      <li>
        <time :datetime="articleDate(page.date).datetime">{{ articleDate(page.date).date }}</time>
      </li>
      <li><span>{{ page.readingTime }} {{ page.readingTime === 1 ? 'minute' : 'minutes' }} read</span></li>
    </ul>
    <ul v-if="page.hashtags" class="blog__hashtags">
      <li v-for="(tag, index) in page.hashtags" :key="tag" :aria-setsize="page.hashtags.length" :aria-posinset="index + 1">
        <i>#{{ tag }}</i>
      </li>
    </ul>
    <p v-if="page.devtoLink" class="blog__devto">
      <a :href="page.devtoLink" rel="nofollow noopener"><svg-icon name="dev" /><span class="sr-only">Open article in DEV.to</span></a>
      <span>
        You can also read this article <a :href="page.devtoLink" rel="nofollow noopener">here on DEV.to</a></span>
    </p>
    <ul class="social-share">
      <li role="presentation">
        <strong>Share</strong>:
      </li>
      <li v-for="(socialShare, index) in socialShares()" :key="index" :aria-setsize="socialShares().length" :aria-posinset="index + 1">
        <a :href="socialShare.url" rel="nofollow noopener" target="_blank" data-cooltipz-dir="bottom" :aria-label="'Share on ' + socialShare.platform">
          <svg-icon :name="socialShare.platform.toLowerCase()" />
        </a>
      </li>
    </ul>
    <p><strong>{{ page.description }}</strong></p>
    <p>
      <em>
        All my articles are first published and hosted on my <nuxt-link to="/blog">blog</nuxt-link><template v-if="page.devtoLink"> - but you can also find this article <a :href="page.devtoLink" rel="nofollow noopener">here on DEV.to</a></template>. You may also be interested in my tweets on my <a href="https://twitter.com/jackdomleo7" rel="nofollow noopener">Twitter profile</a> and my monthly <nuxt-link to="/newsletter">newsletter</nuxt-link>. 🔥
      </em>
    </p>
    <hr>
    <nuxt-content :document="page" />
    <script v-if="page.containsCodePen" async src="https://static.codepen.io/assets/embed/ei.js" />
    <script v-if="page.twitterEmbed" async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
  </article>
</template>

<script>
import { format } from 'date-fns';
import { Codepen } from '@/components';

export default {
  components: {
    // eslint-disable-next-line
    Codepen
  },
  async asyncData ({ $content, params }) {
    const slug = params.slug || 'index';
    let page = await $content('blog', { deep: true })
      .where({ slug })
      .only(['title', 'date', 'slug', 'description', 'readingTime', 'body', 'containsCodePen', 'hashtags', 'twitterEmbed', 'twitterVia', 'devtoLink'])
      .fetch();
    page = page[0];

    return {
      page
    };
  },
  methods: {
    articleDate (date) {
      const newDate = Date.parse(String(date));
      return {
        date: format(newDate, 'do MMMM yyyy'),
        datetime: format(newDate, 'yyyy-MM-dd')
      };
    },
    socialShares () {
      return [
        {
          platform: 'Twitter',
          url: `https://twitter.com/intent/tweet?text=${this.page.title}&via=jackdomleo7${this.page.twitterVia ? ', @' + this.page.twitterVia.join(', @') : ''}&url=https://jackdomleo.dev${this.$route.path}`
        },
        {
          platform: 'LinkedIn',
          url: `https://www.linkedin.com/shareArticle?mini=true&url=https://jackdomleo.dev${this.$route.path}&title=${this.page.title}&summary=${this.page.title}&source=blog.jackdomleo.dev${this.$route.path}`
        }
      ];
    }
  },
  head () {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}${this.$route.path}${this.$route.path.endsWith('/') ? '' : '/'}og.png`
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          property: 'og:image:alt',
          content: `Article cover: ${this.$route.title}`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: `${this.page.title} | Blog | Jack Domleo`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `${this.page.description}`
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: `${this.page.description}`
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'article:published_time',
          name: 'article:published_time',
          property: 'article:published_time',
          content: `${this.page.date}`
        },
        {
          hid: 'article:author',
          name: 'article:author',
          property: 'article:author',
          content: 'Jack Domleo'
        },
        {
          hid: 'article:tag',
          name: 'article:tag',
          property: 'article:tag',
          content: `${this.page.hashtags}`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.blog {
  &__back {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    margin-top: 1rem;

    svg {
      height: 1.8rem;
      width: 1.8rem;
    }
  }

  &__meta {
    padding-left: 0;
    display: flex;
    align-items: center;

    li {
      &:nth-child(1) {
        list-style-type: none;
        margin-right: 2rem;
        font-weight: 700;
      }
    }
  }

  &__devto {
    font-weight: var(--body-font-weight);
    font-size: 90%;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.8rem;
      height: 2rem;
      width: 2rem;
      color: var(--body-color);
    }

    a:nth-child(2) {
      margin-left: 0.2rem;
    }
  }

  &__hashtags {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style-type: none;
    margin-bottom: 0;
    margin: 1rem 0;
    padding-left: 0;

    li {
      display: inline-block;
    }
  }
}

.social-share {
  align-items: center;
  display: flex;
  gap: 1rem;
  list-style-type: none;
  margin-bottom: 0;
  margin: 1rem 0 3rem;
  padding-left: 0;

  li {
    display: inline-block;
  }
  a {
    display: block;
    color: inherit;
    transition: color 160ms ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
  svg {
    height: 1rem;
    width: 1rem;
  }
}
</style>
