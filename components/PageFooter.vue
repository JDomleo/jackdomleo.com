<template>
  <footer class="footer">
    <ul>
      <li v-for="(item, index) in footer.data.social_links" :key="item.link" :aria-setsize="footer.data.social_links.length" :aria-posinset="index + 1">
        <a :href="$prismic.asLink(item.link)" rel="nofollow noopener" data-cooltipz-dir="top" :aria-label="$prismic.asText(item.text)">
          <svg-icon :name="$prismic.asText(item.text).toLowerCase().replace(/\s/g, '-')" />
        </a>
      </li>
    </ul>
    <p>
      &copy;<time :datetime="year">
        {{ year }}
      </time> Jack Domleo. All rights reserved.
    </p>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class PageFooter extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  private readonly footer!: any;

  private get year (): number {
    return new Date().getFullYear()
  }
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
}

ul {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 0;
  list-style-type: none;

  a {
    border-radius: 50%;
    background: var(--base-orange);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    padding: 0.5rem;
    color: inherit;
    transition: box-shadow 160ms ease;

    &:hover {
      box-shadow: none;
    }

    svg {
      color: var(--base-grey-darker);
      height: 2rem;
      width: 2rem;
    }
  }
}
</style>
