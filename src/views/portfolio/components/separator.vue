<script lang="ts">
interface SeparatorProps {
  source: string
}

export default {
  name: 'SeparatorView',
  props: {
    source: {
      type: String,
      required: true
    }
  },
  computed: {
    style(props: SeparatorProps): string {
      return `background-image: url('${props.source}')`
    }
  }
}
</script>

<template>
  <div class="separator" :style="style"></div>
</template>

<style scoped lang="scss">
div {
  .separator {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    max-width: 2400px;
    margin: 0 auto;
    transform: skewY(-3deg);
    width: 100%;
    z-index: 2;
  }
}
</style>
