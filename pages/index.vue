<template>
  <PageTemplate page-heading="Hey, I'm Jack Domleo!">
    <div slot="jumbo" class="home">
      <div>
        <p>A mid-level <strong>Frontend Developer</strong> from Nottingham, UK, working primarily with Vue.js, TypeScript, HTML and SCSS.</p>
        <img src="https://jackdomleo.dev/_nuxt/img/bio-image-jack-domleo.400e227.jpg" alt="Jack Domleo" height="180" width="180" loading="lazy" />
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
export default class Index extends Vue {}
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
    transition: ease-in-out ;

    &:hover {
      animation: blobby 3s infinite;
    }
  }
}
</style>
