<template>
  <header class="header">
    <nav class="nav">
      <nuxt-link to="/" class="nav__logo" aria-label="Home">
        <svg-icon name="logo" />
      </nuxt-link>
      <div class="nav__actions">
        <ul class="nav__links">
          <li
            v-for="(link, index) in NavLinks"
            :key="index"
            :aria-setsize="NavLinks.length"
            :aria-posinset="index + 1"
          >
            <nuxt-link
              :to="link.url"
              :aria-current="isCurrent(link.url) ? 'page' : null"
            >
              {{ link.text }}
            </nuxt-link>
          </li>
        </ul>
        <button class="nav__theme" :aria-label="(theme === 'dark' ? 'Light' : 'Dark') + ' theme'" data-cooltipz-dir="bottom-right" @click="themeSwitcher">
          <svg-icon :name="theme === 'dark' ? 'sun' : 'moon'" />
        </button>
      </div>
    </nav>
    <div class="gradient" />
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Theme from '@/middleware/theme';

interface INavLink {
  text: string;
  url: string;
}

@Component
export default class Navbar extends Vue {
  private theme: string | null = '';
  private readonly NavLinks: INavLink[] = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Projects',
      url: '/projects'
    },
    {
      text: 'Blog',
      url: '/blog'
    }
  ];

  private mounted () {
    this.theme = this.getTheme();
  }

  private isCurrent (path: string): boolean {
    return this.$route.path === path;
  }

  private themeSwitcher (): void {
    const html = document.querySelector('html')!;
    if (this.getTheme() === 'dark') {
      const newTheme: string = 'light';
      html.classList.add(`theme--${newTheme}`);
      this.theme = newTheme;
      localStorage.setItem(Theme.localStorageThemeVar, newTheme);
    } else {
      const newTheme: string = 'dark';
      html.classList.remove('theme--light');
      this.theme = newTheme;
      localStorage.setItem(Theme.localStorageThemeVar, newTheme);
    }
  }

  private getTheme (): string | null {
    return localStorage.getItem(Theme.localStorageThemeVar);
  }
}
</script>

<style lang="scss">
:root {
  --nav-hover: var(--color-grey-dark);
  --header-box-shadow-opacity: 0.8;
  --header-background: linear-gradient(
      135deg,
      rgba(66, 66, 66, 0.46) 0%,
      rgba(66, 66, 66, 0.46) 12.5%,
      rgba(68, 68, 68, 0.46) 12.5%,
      rgba(68, 68, 68, 0.46) 25%,
      rgba(71, 71, 71, 0.46) 25%,
      rgba(71, 71, 71, 0.46) 37.5%,
      rgba(73, 73, 73, 0.46) 37.5%,
      rgba(73, 73, 73, 0.46) 50%,
      rgba(75, 75, 75, 0.46) 50%,
      rgba(75, 75, 75, 0.46) 62.5%,
      rgba(77, 77, 77, 0.46) 62.5%,
      rgba(77, 77, 77, 0.46) 75%,
      rgba(80, 80, 80, 0.46) 75%,
      rgba(80, 80, 80, 0.46) 87.5%,
      rgba(82, 82, 82, 0.46) 87.5%,
      rgba(82, 82, 82, 0.46) 100%
    ),
    linear-gradient(
      45deg,
      rgb(41, 41, 41) 0%,
      rgb(41, 41, 41) 12.5%,
      rgb(43, 43, 43) 12.5%,
      rgb(43, 43, 43) 25%,
      rgb(46, 46, 46) 25%,
      rgb(46, 46, 46) 37.5%,
      rgb(48, 48, 48) 37.5%,
      rgb(48, 48, 48) 50%,
      rgb(50, 50, 50) 50%,
      rgb(50, 50, 50) 62.5%,
      rgb(52, 52, 52) 62.5%,
      rgb(52, 52, 52) 75%,
      rgb(55, 55, 55) 75%,
      rgb(55, 55, 55) 87.5%,
      rgb(57, 57, 57) 87.5%,
      rgb(57, 57, 57) 100%
    );
}

.theme--light {
  --nav-hover: var(--color-grey-light);
  --header-box-shadow-opacity: 0.6;
  --header-background: linear-gradient(
        135deg,
        rgba(223, 223, 223, 0.47) 0%,
        rgba(223, 223, 223, 0.47) 14.286%,
        rgba(218, 218, 218, 0.47) 14.286%,
        rgba(218, 218, 218, 0.47) 28.572%,
        rgba(213, 213, 213, 0.47) 28.572%,
        rgba(213, 213, 213, 0.47) 42.858%,
        rgba(209, 209, 209, 0.47) 42.858%,
        rgba(209, 209, 209, 0.47) 57.144%,
        rgba(204, 204, 204, 0.47) 57.144%,
        rgba(204, 204, 204, 0.47) 71.43%,
        rgba(199, 199, 199, 0.47) 71.43%,
        rgba(199, 199, 199, 0.47) 85.716%,
        rgba(194, 194, 194, 0.47) 85.716%,
        rgba(194, 194, 194, 0.47) 100.002%
      ),
      linear-gradient(
        45deg,
        rgb(251, 251, 251) 0%,
        rgb(251, 251, 251) 14.286%,
        rgb(243, 243, 243) 14.286%,
        rgb(243, 243, 243) 28.572%,
        rgb(235, 235, 235) 28.572%,
        rgb(235, 235, 235) 42.858%,
        rgb(227, 227, 227) 42.858%,
        rgb(227, 227, 227) 57.144%,
        rgb(219, 219, 219) 57.144%,
        rgb(219, 219, 219) 71.43%,
        rgb(211, 211, 211) 71.43%,
        rgb(211, 211, 211) 85.716%,
        rgb(203, 203, 203) 85.716%,
        rgb(203, 203, 203) 100%
      );
}
</style>

<style lang="scss" scoped>
@keyframes Logo {
  0% {
    filter: blur(5px);
  }
  100% {
    filter: blur(0);
  }
}

.header {
  width: 100vw;
  position: sticky;
  top: 0;
  background: var(--header-background);
  background-attachment: fixed;
  background-repeat: no-repeat;
  box-shadow: 0 0.1875rem 0.625rem -0.1875rem rgba(0,0,0,var(--header-box-shadow-opacity));
  z-index: 10;

  .nav {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    justify-content: space-between;

    &__logo {
      height: 2.5rem;
      width: 2.5rem;
      transition: all 160ms ease;
      color: inherit;

      &:hover {
        transform: rotate(-25deg) scale(1.2);
      }

      svg {
        animation: Logo 3s ease;
      }
    }

    &__actions {
      display: flex;
      align-items: center;
    }

    &__links {
      display: inline-flex;
      align-items: stretch;
      padding-left: 0;
      list-style-type: none;
      margin: 0;
      height: 100%;
      font-size: 0.8rem;

      a {
        color: inherit;
        display: block;
        height: 100%;
        padding: 0.8rem 0.6rem;
        text-decoration: none;
        transition: background-color 0.3s ease;

        &:hover,
        &:focus,
        &.nuxt-link-exact-active {
          background-color: var(--nav-hover);
        }
      }
    }

    &__theme {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: var(--header-background);
      color: currentColor;
      border: none;
      margin-left: 0.8rem;
      transition: background-color 0.3s ease;
      cursor: pointer;
      padding: 0.5rem;

      svg {
        height: 1.5rem;
        width: 1.5rem;
      }

      &:hover,
      &:focus {
        background-color: var(--nav-hover);
      }
    }

    @media screen and (min-width: 30em) {
      padding: 0 2rem;

      .nav {
        &__logo {
          height: 3rem;
          width: 3rem;
        }

        &__links {
          font-size: 1.2rem;

          a {
            padding: 1.2rem 1.4rem;
          }
        }

        &__theme {
          padding: 0.9rem;

          svg {
            height: 1.8rem;
            width: 1.8rem;
          }
        }
      }
    }
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient {
  animation: gradient 20s ease infinite;
  background: linear-gradient(
    50deg,
    var(--color-orange),
    var(--color-orange),
    var(--color-blue),
    var(--color-blue)
  );
  background-size: 250%;
  width: 100vw;
  height: 4px;
  opacity: 0.7;
}
</style>
