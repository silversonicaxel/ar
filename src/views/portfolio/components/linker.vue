<template>
  <div class="text content">
    <a v-bind:href="link" v-bind:target="target">
      {{ text }}
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Linker',
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: false,
      default: '_blank',
    },
  },
}
</script>

<style lang="scss">
div {
  .text {
    padding: {
      bottom: 5rem;
      top: 2.5rem;
    }

    transform: skewY(3deg);
    width: calc(100% - 0.6rem);

    @media (min-width: 768px) and (max-width: 1024px) {
      padding: {
        bottom: 3rem;
        top: 1.5rem;
      }
    }

    @media (max-width: 767px) {
      padding: {
        bottom: 2rem;
        top: 1rem;
      }
    }
  }
}
</style>
