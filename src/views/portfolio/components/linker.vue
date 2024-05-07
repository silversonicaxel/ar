<script lang="ts">
export default {
  name: 'LinkerView',
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: false,
      default: '_blank'
    }
  }
}
</script>

<template>
  <div class="text content">
    <a v-bind:href="link" v-bind:target="target">
      {{ text }}
    </a>
  </div>
</template>
