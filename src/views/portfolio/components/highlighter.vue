<script lang="ts">
export interface HighligtherList {
  [key: string]: string[]
}

export default {
  name: 'HighlighterView',
  props: {
    section: {
      type: String,
      required: true
    },
    highlightsList: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="text content">
    <h2>&#123;{{ section }}&#125;</h2>
    <span v-for="(highlight, i) in highlightsList" :key="i"> {{ highlight }}&nbsp; </span>
  </div>
</template>

<style scoped lang="scss">
$primary-color: #313942;
$secondary-color: #fafafa;

span {
  display: inline-block;

  &:hover {
    $background-color-lighter: lighten($primary-color, 40%);
    $background-color-darker: darken($primary-color, 20%);

    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    background: -webkit-linear-gradient($background-color-lighter, $background-color-darker);
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

@media (prefers-color-scheme: dark) {
  $background-color-lighter: lighten($secondary-color, 20%);
  $background-color-darker: darken($secondary-color, 40%);

  span {
    &:hover {
      background: -webkit-linear-gradient($background-color-lighter, $background-color-darker);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
