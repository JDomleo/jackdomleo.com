<template>
  <div>
    <Navigation />
    <main>
      <section class="jumbo" :class="{'jumbo--home': isHome()}">
        <div>
          <h1 class="jumbo__heading">{{ pageHeading }}</h1>
          <slot name="jumbo" />
        </div>
        <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="wave__fill"></path>
          </svg>
        </div>
      </section>
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class PageTemplate extends Vue {
  @Prop({
    type: String,
    required: true
  })
  private readonly pageHeading!: string;

  private isHome(): boolean {
    console.log(this.$route.path);
    return this.$route.path === '/';
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.6rem;

  @media (min-width: 26em) {
    font-size: 2rem;
  }
}

.jumbo {
  background: var(--base-orange);
  background: linear-gradient(140deg, var(--alt-orange) 0%, var(--base-orange) 100%);
  display: grid;
  place-items: center;
  width: 100vw;
  height: 40vh;
  position: relative;
  padding: 1rem;
  
  @media (min-width: 26em) {
    padding-top: 3rem;
  }

  &--home {
    height: calc(100vh - 4rem);

    @media (min-width: 26em) {
      height: 100vh;
    }
  }

  &__heading {
    font-family: var(--font-cursive);
    text-align: center;
  }
}

.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);

    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 4.375rem;

      @media (min-width: 40em) {
        height: 8.6rem;
      }
  }

  &__fill {
    fill: var(--body-bg);
  }
}
</style>
