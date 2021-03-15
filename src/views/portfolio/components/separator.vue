<template>
  <div class="separator" :style="style"></div>
</template>

<script lang="ts">
export default {
  name: 'Separator',
  props: {
    source: {
      type: String,
      required: true,
    },
  },
  computed: {
    style(): string {
      return `background-image: url('${this.source}')`
    },
  },
}
</script>

<style lang="scss">
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
  }
}
</style>
