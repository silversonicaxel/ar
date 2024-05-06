<script lang="ts">
export default {
  name: 'ParagraphView',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="text content">{{ text }}</div>
</template>

<style scoped lang="scss">
div {
  .text {
    padding: {
      bottom: 10rem;
      top: 2.5rem;
    }

    transform: skewY(3deg);
    width: calc(100% - 0.6rem);

    @media (min-width: 768px) and (max-width: 1024px) {
      padding: {
        bottom: 5rem;
        top: 1.5rem;
      }
    }

    @media (max-width: 767px) {
      padding: {
        bottom: 3rem;
        top: 1rem;
      }
    }
  }
}
</style>
