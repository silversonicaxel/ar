<script lang="ts">
import GradientView from './components/gradient.vue'

export default {
  name: 'AppView',
  components: {
    GradientView
  }
}
</script>

<template>
  <GradientView>
    <router-view />
  </GradientView>
</template>

<style lang="scss">
body {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  cursor: crosshair;
  font-family: 'Share Tech', Arial, sans-serif;
  font-size: 6rem;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  padding: 0;

  @media (prefers-color-scheme: dark) {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 767px) {
    font-size: 2rem;
  }
}

main {
  align-content: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  &::before,
  &::after {
    content: '';
    border-color: var(--primary-color);
    border-width: 0 0 0 1px;
    border-style: solid;
    display: block;
    position: fixed;
    z-index: 1;

    @media (prefers-color-scheme: dark) {
      border-color: var(--secondary-color);
    }
  }

  &::before {
    bottom: 5.3rem;
    right: 6rem;
    top: 4.7rem;

    @media (min-width: 768px) and (max-width: 1024px) {
      bottom: 2.7rem;
      right: 3rem;
      top: 2.3rem;
    }

    @media (max-width: 767px) {
      bottom: 2.1rem;
      right: 2rem;
      top: 1.9rem;
    }
  }

  &::after {
    bottom: 5rem;
    opacity: 0.5;
    right: 12rem;
    top: 5rem;

    @media (min-width: 768px) and (max-width: 1024px) {
      bottom: 2.5rem;
      right: 6rem;
      top: 2.5rem;
    }

    @media (max-width: 767px) {
      bottom: 2rem;
      right: 4rem;
      top: 2rem;
    }
  }

  h1 {
    font-size: 8rem;
    padding: {
      bottom: 5rem;
      top: 5rem;
    }

    transform: skewY(-3deg);

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 6rem;
      padding: {
        bottom: 3rem;
        top: 3rem;
      }
    }

    @media (max-width: 767px) {
      font-size: 4rem;
      padding: {
        bottom: 2rem;
        top: 2rem;
      }
    }
  }

  .content {
    margin: 0 auto;
    max-width: 1200px;
    padding: {
      left: 0.3rem;
      right: 0.3rem;
    }

    width: calc(100% - 0.6rem);
  }
}

a {
  background-color: var(--primary-color);
  color: var(--secondary-color);

  @media (prefers-color-scheme: dark) {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
}
</style>
